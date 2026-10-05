import { Injectable } from '@angular/core';

export interface LeadershipMilestone {
  year: string;
  role: string;
  organization: string;
  description: string;
}

export interface DirectorProject {
  title: string;
  category: string;
  year: string;
  location: string;
  image: string;
  description: string;
}

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  title: string;
  category: 'senior' | 'main';
  image: string;
  portrait?: string;
  credentials: string;
  experience: string;
  quote: string;
  bio: string;
  fullBio: string[];
  specialties: string[];
  achievements: string[];
  leadershipJourney: LeadershipMilestone[];
  portfolio: DirectorProject[];
  linkedin: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private members: TeamMember[] = [
    {
      id: 'director',
      slug: 'vikramaditya-singhania',
      name: 'Vikramaditya R. Singhania',
      role: 'Founder & Executive Chairman',
      title: 'Founder & Executive Chairman | Principal Architect',
      category: 'senior',
      credentials: 'M.Arch (Harvard GSD), FAIA, RIBA Hon.',
      experience: '32+ Years Architectural Design',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
      portrait: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
      quote: 'Architecture is not merely the creation of structure; it is the physical manifestation of human aspiration, sculpted in steel, marble, and light.',
      bio: 'Visionary architect Vikramaditya R. Singhania founded RAMYUG with a singular mandate: to sculpt spaces that inspire awe while defining the pinnacle of structural craftsmanship.',
      fullBio: [
        'Having graduated with highest honors from the Harvard Graduate School of Design, Vikramaditya’s career spans over three decades of transformative architectural landmarks across Europe, North America, the Middle East, and Asia.',
        'Under his visionary stewardship, RAMYUG has garnered over 32 premier international design accolades, pioneered seismic-integrated stone masonry, and forged lasting collaborations with royal households and cultural trusts globally.',
        'His design ethos hinges on the belief that a structure should outlast generations not just physically, but emotionally—maintaining an enduring dialogue with the landscape and the sky.'
      ],
      specialties: ['Masterplanning & Palatial Estates', 'Civic Monument Design', 'Structural Marble Engineering', 'Sustainable Heritage Restorations'],
      achievements: [
        'Recipient of the International Golden Compass for Lifetime Architectural Mastery (2022)',
        'Elected Fellow of the American Institute of Architects (FAIA)',
        'Lead Architect for the Royal Crown Pavilion, Aura Skyline Towers & Elysian Estate',
        'Guest Lecturer in Classical Proportions at ETH Zürich and Cambridge Architecture Tripos'
      ],
      leadershipJourney: [
        {
          year: '2008 – Present',
          role: 'Founder & Executive Chairman',
          organization: 'RAMYUG Architectural Atelier',
          description: 'Directs global design vision, signature palatial commissions, and structural innovations across international offices.'
        },
        {
          year: '2000 – 2008',
          role: 'Senior Partner & Design Director',
          organization: 'Foster & Sterling International (London / Zurich)',
          description: 'Spearheaded iconic high-rise towers and luxury alpine private estates throughout Western Europe.'
        },
        {
          year: '1994 – 2000',
          role: 'Principal Associate',
          organization: 'Atelier Singhania & Partners',
          description: 'Pioneered early structural glazing techniques and conservation of historical civic architecture.'
        }
      ],
      portfolio: [
        {
          title: 'The Royal Crown Pavilion',
          category: 'Cultural & Civic',
          year: '2023',
          location: 'Monaco',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
          description: 'A monolithic white marble and bronze cantilevered waterfront pavilion designed for royal state receptions.'
        },
        {
          title: 'Aura Skyline Towers',
          category: 'Commercial Landmark',
          year: '2022',
          location: 'Dubai, UAE',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
          description: 'A 74-storey kinetic titanium-clad twin skyscraper featuring solar thermal integration and private sky gardens.'
        },
        {
          title: 'Elysian Estate & Vineyard',
          category: 'Private Residence',
          year: '2021',
          location: 'Lake Como, Italy',
          image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
          description: 'An expansive lakeside sanctuary crafted with reclaimed Roman travertine and triple-glazed acoustic terraces.'
        }
      ],
      linkedin: 'https://linkedin.com',
      email: 'chairmanship@ramyug-atelier.com'
    },
    {
      id: 's1',
      slug: 'evelyn-sterling',
      name: 'Dr. Evelyn Sterling',
      role: 'Chief Design Officer & Partner',
      title: 'Chief Design Officer & Partner | Lead Facade Architect',
      category: 'senior',
      credentials: 'Ph.D. Architecture (ETH Zürich), B.Arch (AA London)',
      experience: '22 Years Architectural Mastery',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      portrait: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      quote: 'A modern facade must converse with the sunlight and sky, balancing monumental scale with featherlight transparency.',
      bio: 'Evelyn leads RAMYUG\'s conceptual design laboratory, blending classic Hellenic proportions with contemporary sustainable glass structures.',
      fullBio: [
        'Dr. Evelyn Sterling joined RAMYUG in 2012 to establish the Atelier\'s Advanced Parametric & Environmental Modeling Studio. Her doctorate at ETH Zürich focused on self-shading structural envelopes and thermodynamic airflow optimization.',
        'Her projects have redefined modern skyline luxury, earning widespread acclaim for marrying intricate geometric rhythms with sustainable energy autonomy.'
      ],
      specialties: ['Parametric Design', 'Ultra-Luxury Mansions', 'Sustainable Glass Facades', 'Biophilic Envelopes'],
      achievements: [
        'Winner of the European Architectural Excellence Award (2021)',
        'Keynote Speaker at the World Architecture Festival (WAF)',
        'Author of "Thermodynamic Form & Proportional Beauty" (2019)'
      ],
      leadershipJourney: [
        {
          year: '2016 – Present',
          role: 'Chief Design Officer & Partner',
          organization: 'RAMYUG Architectural Atelier',
          description: 'Leads master concept design, facade engineering, and aesthetic governance for landmark commissions.'
        },
        {
          year: '2010 – 2016',
          role: 'Design Director',
          organization: 'Studio Sterling Zürich',
          description: 'Designed private residential chalets and cultural pavilions across Switzerland and France.'
        }
      ],
      portfolio: [
        {
          title: 'Lumina Horizon Penthouse',
          category: 'Residential',
          year: '2023',
          location: 'London, UK',
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
          description: 'Curved frameless structural glass panels overlooking Hyde Park with automated thermal regulation.'
        },
        {
          title: 'Solstice Cultural Center',
          category: 'Cultural',
          year: '2021',
          location: 'Geneva, Switzerland',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
          description: 'A sun-responsive concert hall wrapped in golden perforated titanium brise-soleil panels.'
        }
      ],
      linkedin: 'https://linkedin.com',
      email: 'e.sterling@ramyug-atelier.com'
    },
    {
      id: 's2',
      slug: 'marcus-vance',
      name: 'Marcus Vance',
      role: 'Head of Structural Engineering',
      title: 'Head of Structural Engineering | Director of Technical Integrity',
      category: 'senior',
      credentials: 'M.S. Civil Eng (Imperial College London), CEng, FIStructE',
      experience: '25 Years Structural Mastery',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
      portrait: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
      quote: 'True elegance in structural engineering is making the impossible appear effortless and weightless against gravitational forces.',
      bio: 'Marcus oversees structural integrity for supertall towers and seismic-resistant luxury foundations across high-seismic global zones.',
      fullBio: [
        'Marcus Vance has engineered some of the world\'s most ambitious cantilevers, suspended glass ballrooms, and hyper-slender residential towers. With a masters from Imperial College London, his career balances mathematical precision with bold structural expression.',
        'At RAMYUG, he ensures every daring architectural vision is backed by impenetrable structural physics, employing carbon-fiber reinforced concrete and advanced seismic damping mechanisms.'
      ],
      specialties: ['Supertall Structural Analysis', 'Seismic Resilience', 'Titanium Frame Mechanics', 'High-Load Cantilevers'],
      achievements: [
        'Fellow of the Institution of Structural Engineers (FIStructE)',
        'Lead Structural Designer for three CTBUH Award of Excellence Supertall Towers',
        'Patent holder for multi-axis tuned mass damper systems in ultra-luxury towers'
      ],
      leadershipJourney: [
        {
          year: '2014 – Present',
          role: 'Head of Structural Engineering',
          organization: 'RAMYUG Architectural Atelier',
          description: 'Directs all structural engineering, wind tunnel simulations, and deep-foundation verification globally.'
        },
        {
          year: '2004 – 2014',
          role: 'Senior Structural Associate',
          organization: 'Arup Global Engineering',
          description: 'Specialized in long-span airport roofs and 400m+ residential spires in Southeast Asia and London.'
        }
      ],
      portfolio: [
        {
          title: 'Zephyr Imperial Spire',
          category: 'Supertall Tower',
          year: '2023',
          location: 'Singapore',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
          description: 'A 380m aerodynamic tower utilizing an external diamond diagrid structure to resist high-velocity tropical typhoons.'
        },
        {
          title: 'Celestial Glass Atrium',
          category: 'Engineering Marvel',
          year: '2022',
          location: 'Tokyo, Japan',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
          description: 'A 9-story free-standing seismically isolated glass cube anchored by pre-stressed titanium cables.'
        }
      ],
      linkedin: 'https://linkedin.com',
      email: 'm.vance@ramyug-atelier.com'
    },
    {
      id: 's3',
      slug: 'aria-montgomery',
      name: 'Aria Montgomery',
      role: 'Principal Interior Architect',
      title: 'Principal Interior Architect | Director of FF&E and Mineral Curation',
      category: 'senior',
      credentials: 'B.Arch (Royal College of Art, London)',
      experience: '18 Years Luxury Mastery',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
      portrait: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
      quote: 'Interior architecture is an intimate sensory journey where rare textures, ambient light, and acoustic harmony embrace the soul.',
      bio: 'Specializing in rare marble curation, bespoke hand-stitched leather panels, and custom brass lighting fixtures for private palace suites.',
      fullBio: [
        'Aria Montgomery orchestrates the sensory dimension of RAMYUG’s architectural spaces. Trained at the Royal College of Art, her bespoke commissions bring together European artisanal gilding, hand-carved Calacatta Borghini marbles, and state-of-the-art acoustic damping fabrics.',
        'Her bespoke residential suites are celebrated for their serene warmth, discreet technology integration, and timeless material palette.'
      ],
      specialties: ['Palatial Interiors', 'Rare Mineral Curation', 'Custom Illumination Design', 'Acoustic Equilibrium'],
      achievements: [
        'Best Interior Architecture – International Property Awards (2020, 2023)',
        'Collaborator with premier Italian and French haute craft ateliers',
        'Creator of the signature RAMYUG Bespoke Lighting Collection'
      ],
      leadershipJourney: [
        {
          year: '2015 – Present',
          role: 'Principal Interior Architect',
          organization: 'RAMYUG Architectural Atelier',
          description: 'Directs bespoke residential and hospitality interior architecture, FF&E curation, and mineral quarry selections.'
        },
        {
          year: '2008 – 2015',
          role: 'Senior Interior Designer',
          organization: 'Studio Montgomery Milano',
          description: 'Delivered private yacht and penthouse interiors for discerning international collectors.'
        }
      ],
      portfolio: [
        {
          title: 'Grand Onyx Ballroom Suite',
          category: 'Interior Architecture',
          year: '2023',
          location: 'Paris, France',
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
          description: 'Backlit Honey Onyx slabs framed in satin bronze and French oak parquet for a private historical residence.'
        },
        {
          title: 'Villa Bella Cassa',
          category: 'Palatial Villa',
          year: '2022',
          location: 'Capri, Italy',
          image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
          description: 'Hand-chiselled volcanic stone basins, bleached walnut cabinetry, and custom alabaster pendants.'
        }
      ],
      linkedin: 'https://linkedin.com',
      email: 'a.montgomery@ramyug-atelier.com'
    },
    {
      id: 'm1',
      slug: 'rajeshwar-dev',
      name: 'Rajeshwar Dev',
      role: 'Senior Associate Architect',
      title: 'Senior Associate Architect | Project Delivery Lead',
      category: 'main',
      credentials: 'M.Arch (IIT Roorkee)',
      experience: '14 Years Field Mastery',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
      portrait: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
      quote: 'Flawless execution on site is the bridge between brilliant blueprints and enduring architectural monuments.',
      bio: 'Rajeshwar orchestrates site execution and precision craftsmanship for RAMYUG\'s flagship commercial developments.',
      fullBio: [
        'Rajeshwar Dev brings 14 years of rigorous construction oversight, BIM Level 3 modeling, and contractor coordination to RAMYUG.',
        'He ensures that even the most intricate custom joint details and stone cantilever tolerances are executed to sub-millimeter precision on site.'
      ],
      specialties: ['Site Execution', 'Precision Craftsmanship', 'BIM Level 3', 'Contractor Coordination'],
      achievements: [
        'Delivered 12 consecutive high-rise projects with zero defect tolerance on handover',
        'Certified BIM Master Professional (BuildingSMART)'
      ],
      leadershipJourney: [
        {
          year: '2018 – Present',
          role: 'Senior Associate Architect',
          organization: 'RAMYUG Architectural Atelier',
          description: 'Oversees site execution, digital fabrication workflows, and quality governance for regional hubs.'
        }
      ],
      portfolio: [
        {
          title: 'Zenith Commercial Hub',
          category: 'Commercial Architecture',
          year: '2023',
          location: 'Mumbai, India',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
          description: 'A 28-storey LEED Platinum commercial headquarters featuring a 6-storey suspended atrium.'
        }
      ],
      linkedin: 'https://linkedin.com',
      email: 'r.dev@ramyug-atelier.com'
    },
    {
      id: 'm2',
      slug: 'sophia-laurent',
      name: 'Sophia Laurent',
      role: 'Lead Heritage Preservationist',
      title: 'Lead Heritage Preservationist | Architectural Conservator',
      category: 'main',
      credentials: 'M.Sc Conservation (Sorbonne University)',
      experience: '12 Years Heritage Mastery',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=800&q=80',
      portrait: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=800&q=80',
      quote: 'Preserving a historic monument is a sacred pledge to honor the hands of master artisans who carved it centuries ago.',
      bio: 'Sophia restores century-old monuments using original lime-mortar techniques combined with modern hidden structural reinforcement.',
      fullBio: [
        'Sophia Laurent graduated from the Sorbonne with a specialization in Medieval and Renaissance stone restoration. She has advised UNESCO conservation committees and led restoration works on classical European estates.',
        'At RAMYUG, she oversees heritage integration, enabling classical facades to house state-of-the-art climate-controlled modern living spaces.'
      ],
      specialties: ['Heritage Conservation', 'Stone Carving Restoration', 'Historical Masonry', 'Lime Mortar Technology'],
      achievements: [
        'Advisor to the European Heritage Safeguard Trust',
        'Lead Conservator for the 18th Century Chateau de Lumiere restoration'
      ],
      leadershipJourney: [
        {
          year: '2019 – Present',
          role: 'Lead Heritage Preservationist',
          organization: 'RAMYUG Architectural Atelier',
          description: 'Leads historic building fabric diagnostics, archival research, and non-destructive structural reinforcement.'
        }
      ],
      portfolio: [
        {
          title: 'Château de Lumière Restoration',
          category: 'Heritage Restoration',
          year: '2022',
          location: 'Loire Valley, France',
          image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
          description: 'A meticulous 4-year restoration of 18th-century tuffeau stone facades and vaulted wine cellars.'
        }
      ],
      linkedin: 'https://linkedin.com',
      email: 's.laurent@ramyug-atelier.com'
    },
    {
      id: 'm3',
      slug: 'tariq-al-mansoor',
      name: 'Tariq Al-Mansoor',
      role: 'Senior Project Director - Middle East',
      title: 'Senior Project Director | Middle East Regional Atelier Head',
      category: 'main',
      credentials: 'B.Sc Eng (American University of Sharjah)',
      experience: '16 Years Regional Mastery',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
      portrait: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
      quote: 'Desert architecture must harmonize with fierce sunlight while crafting serene sanctuaries of shaded water and cool stone.',
      bio: 'Tariq manages multi-billion dollar estate developments in Dubai and Riyadh, delivering on time with flawless luxury standards.',
      fullBio: [
        'Tariq has 16 years of executive leadership in Gulf region mega-projects. He combines deep knowledge of regional environmental extremes with unmatched logistics management for private royal palaces and civic centers.'
      ],
      specialties: ['Desert Architecture', 'Estate Masterplanning', 'VIP Client Desk', 'Thermal Mass Optimization'],
      achievements: [
        'Project Director for the Desert Rose Royal Compound',
        'Recognized with the Middle East Construction Excellence Trophy (2022)'
      ],
      leadershipJourney: [
        {
          year: '2017 – Present',
          role: 'Senior Project Director - Middle East',
          organization: 'RAMYUG Architectural Atelier',
          description: 'Heads client engagements, authority approvals, and project delivery across UAE and Saudi Arabia.'
        }
      ],
      portfolio: [
        {
          title: 'Desert Rose Royal Compound',
          category: 'Royal Palace',
          year: '2023',
          location: 'Abu Dhabi, UAE',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
          description: 'A 45,000 sq ft private palace compound cooled with geometric water courtyards and mashrabiya stone lattices.'
        }
      ],
      linkedin: 'https://linkedin.com',
      email: 't.almansoor@ramyug-atelier.com'
    },
    {
      id: 'm4',
      slug: 'elena-rostova',
      name: 'Elena Rostova',
      role: 'Environmental & Landscape Principal',
      title: 'Environmental & Landscape Principal | Director of Biophilic Integration',
      category: 'main',
      credentials: 'M.L.A (University of Copenhagen)',
      experience: '11 Years Landscape Mastery',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
      portrait: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
      quote: 'Nature should not merely surround architecture; it must flow through its corridors, courtyards, and vertical terraces.',
      bio: 'Elena designs zen water features, botanical glass houses, and infinity terrace gardens that integrate seamlessly with estate architecture.',
      fullBio: [
        'Elena Rostova is an acclaimed landscape architect whose work blurs the boundary between indoor living spaces and the natural world.',
        'Her biophilic designs integrate indigenous micro-climates, reflective aquatic pools, and vertical hanging gardens.'
      ],
      specialties: ['Estate Botanical Gardens', 'Water Feature Engineering', 'Biophilic Design', 'Rooftop Ecosystems'],
      achievements: [
        'Gold Medal – Nordic Landscape Design Biennale (2021)',
        'Featured in Architectural Digest for "Living Terraces of the 21st Century"'
      ],
      leadershipJourney: [
        {
          year: '2020 – Present',
          role: 'Environmental & Landscape Principal',
          organization: 'RAMYUG Architectural Atelier',
          description: 'Directs all master landscape plans, courtyard ecology, and private botanical garden curation.'
        }
      ],
      portfolio: [
        {
          title: 'Alpine Biophilic Sanctuary',
          category: 'Landscape Architecture',
          year: '2023',
          location: 'St. Moritz, Switzerland',
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
          description: 'Tiered heated infinity ponds and native pine gardens integrated into a mountainside luxury estate.'
        }
      ],
      linkedin: 'https://linkedin.com',
      email: 'e.rostova@ramyug-atelier.com'
    }
  ];

  getAllMembers(): TeamMember[] {
    return this.members;
  }

  getDirector(): TeamMember {
    return this.members[0];
  }

  getMemberByIdOrSlug(identifier: string): TeamMember | undefined {
    if (!identifier) return this.getDirector();
    const clean = identifier.toLowerCase().trim();
    return this.members.find(m => m.id.toLowerCase() === clean || m.slug.toLowerCase() === clean);
  }
}
