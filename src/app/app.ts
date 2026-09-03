import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

export interface Project {
  title: string;
  tech: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  details: string[];
  showDetails?: boolean;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('skillsSection') skillsSection!: ElementRef;
  @ViewChild('projectsSection') projectsSection!: ElementRef;
  @ViewChild('contactSection') contactSection!: ElementRef;
  @ViewChild('footerSection') footerSection!: ElementRef;

  isDarkMode: boolean = true;
  isMenuOpen: boolean = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // Target element khud agar .pop-animated hai ya uske andar children hain
            const target = entry.target as HTMLElement;
            const animatedElements = target.classList.contains('pop-animated')
              ? [target]
              : Array.from(target.querySelectorAll('.pop-animated'));
            
            if (entry.isIntersecting) {
              animatedElements.forEach((el) => el.classList.add('is-visible'));
            } else {
              animatedElements.forEach((el) => el.classList.remove('is-visible'));
            }
          });
        },
        { threshold: 0.1 }
      );

      // Observing all elements
      if (this.aboutSection) observer.observe(this.aboutSection.nativeElement);
      if (this.skillsSection) observer.observe(this.skillsSection.nativeElement);
      if (this.projectsSection) observer.observe(this.projectsSection.nativeElement);
      if (this.contactSection) observer.observe(this.contactSection.nativeElement);
      if (this.footerSection) observer.observe(this.footerSection.nativeElement);
    }, 100);
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
  }
  
  scrollToSection(sectionId: string): void {
    this.isMenuOpen = false;

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleDetails(project: Project): void {
    project.showDetails = !project.showDetails;
  }

  // Social Links
  githubUrl = 'https://github.com/iamak72';
  linkedinUrl = 'https://linkedin.com/in/';

  // Dynamic Projects 
  projects: Project[] = [
    {
      title: 'WATCH HUB - E-Commerce App',
      tech: 'Flutter & Firebase',
      description: 'Premium mobile shopping app featuring secure login, browsing, wishlists, and Admin Panel.',
      image: 'https://placehold.co/600x350/161e2e/38bdf8?text=Watch+Hub+App',
      github: 'https://github.com/iamak72/watch-hub-app.git',
      demo: 'https://github.com/iamak72/watch-hub-app/releases/download/v1.0.4/app-release.apk',
      details: [
        'Secure User Authentication via Firebase Auth (Email/Password & Google Sign-In)',
        'State Management optimized using Provider pattern for reactive UI updates',
        'Real-time Firestore Database sync for Cart items, Wishlist, and order status',
        'Dedicated Admin Dashboard for inventory tracking, adding products, and managing stock',
        'Integrated Stripe Payment Gateway for smooth and secure online checkout',
        'Push notifications configured via Firebase Cloud Messaging (FCM) for order updates'
      ],
      showDetails: false
    },
    {
      title: 'EGREETINGS Platform',
      tech: '.NET Framework',
      description: 'Dynamic web platform for sending customized online greeting cards to multiple recipients.',
      image: 'https://placehold.co/600x350/161e2e/38bdf8?text=eGreetings+Net',
      github: 'https://github.com/iamak72',
      demo: '#',
      details: [
        'Built with ASP.NET MVC architecture implementing Repository Pattern in C#',
        'Relational Database designed in SQL Server with optimized stored procedures',
        'Automated bulk email delivery system using System.Net.Mail & SMTP integration',
        'Rich text editor & custom canvas integration for card text personalization',
        'Role-Based Access Control (RBAC) separating Admin, Premium, and Free user features',
        'Feedback and ratings module for customizable greeting card templates'
      ],
      showDetails: false
    },
    {
      title: 'COVID Vaccination System',
      tech: 'PHP & MySQL',
      description: 'Role-based portal (Hospital, User, Admin) for scheduling vaccinations and report generation.',
      image: 'https://placehold.co/600x350/161e2e/38bdf8?text=Vaccination+Portal',
      github: 'https://github.com/iamak72',
      demo: '#',
      details: [
        'Multi-level authorization for System Admin, Hospital Staff, and Citizens',
        'Automated appointment scheduling module preventing slot overbooking',
        'Dynamic PDF Certificate generation on vaccination completion using TCPDF library',
        'Real-time vaccine inventory management and hospital stock tracking',
        'MySQL relational database with normalized tables and relational integrity constraints',
        'Interactive analytics dashboard displaying total vaccinations and pending requests'
      ],
      showDetails: false
    },
    {
      title: 'SafeCarz Limited',
      tech: 'HTML / CSS / JS',
      description: 'Responsive car insurance website front-end with modern layout aesthetics.',
      image: 'https://placehold.co/600x350/161e2e/38bdf8?text=SafeCarz+Insurance',
      github: 'https://github.com/iamak72',
      demo: '#',
      details: [
        'Fully mobile-first responsive layout created using Flexbox and CSS Grid',
        'Interactive JavaScript Car Insurance Quote Calculator with dynamic rate estimation',
        'Custom client-side form validation using regular expressions (Regex)',
        'Modern micro-interactions, smooth scroll behaviors, and CSS keyframe animations',
        'Cross-browser tested for consistent rendering on Chrome, Firefox, Edge, and Safari',
        'SEO-optimized Semantic HTML5 markup for enhanced accessibility standards'
      ],
      showDetails: false
    }
  ];
}