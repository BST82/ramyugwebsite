import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { TeamService, TeamMember } from '../../services/team.service';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './team.html'
})
export class TeamComponent {
  private teamService = inject(TeamService);
  private router = inject(Router);

  activeCategory = signal<'senior' | 'main'>('senior');
  selectedMember = signal<TeamMember | null>(null);

  director = this.teamService.getDirector();
  teamMembers = this.teamService.getAllMembers();

  defaultFallbackImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80';

  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    if (target && target.src !== this.defaultFallbackImage) {
      target.src = this.defaultFallbackImage;
    }
  }

  get filteredTeam(): TeamMember[] {
    return this.teamMembers.filter(m => m.category === this.activeCategory() && m.id !== 'director');
  }

  get seniorCount(): number {
    return this.teamMembers.filter(m => m.category === 'senior').length;
  }

  get mainCount(): number {
    return this.teamMembers.filter(m => m.category === 'main').length;
  }

  setCategory(cat: 'senior' | 'main') {
    this.activeCategory.set(cat);
  }

  openModal(member: TeamMember) {
    if (member && member.id) {
      this.router.navigate(['/team', member.id]);
    }
  }

  closeModal() {
    this.selectedMember.set(null);
  }
}
