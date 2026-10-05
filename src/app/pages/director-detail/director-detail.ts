import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TeamService, TeamMember } from '../../services/team.service';

@Component({
  selector: 'app-director-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './director-detail.html'
})
export class DirectorDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private teamService = inject(TeamService);

  member = signal<TeamMember | null>(null);
  otherMembers = signal<TeamMember[]>([]);

  defaultFallbackImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80';

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id') || params.get('slug') || 'director';
      this.loadMember(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  loadMember(id: string) {
    const found = this.teamService.getMemberByIdOrSlug(id);
    if (found) {
      this.member.set(found);
      const others = this.teamService.getAllMembers().filter(m => m.id !== found.id);
      this.otherMembers.set(others.slice(0, 3));
    } else {
      // Default to Executive Chairman
      const fallback = this.teamService.getDirector();
      this.member.set(fallback);
      const others = this.teamService.getAllMembers().filter(m => m.id !== fallback.id);
      this.otherMembers.set(others.slice(0, 3));
    }
  }

  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    if (target && target.src !== this.defaultFallbackImage) {
      target.src = this.defaultFallbackImage;
    }
  }

  navigateBack() {
    this.router.navigate(['/team']);
  }
}
