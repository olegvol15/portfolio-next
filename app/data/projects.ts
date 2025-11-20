export type ProjectLink = {
  label: string
  url: string
  type: "github" | "demo" | "other"
}

export type Project = {
  slug: string
  title: string
  description: string
  stack: string[]
  status: "idea" | "in-progress" | "done"
  content: string
  year: string
  role: string
  type: "personal" | "course" | "freelance"
  highlights: string[]
  links?: ProjectLink[]
}

export const projects: Project[] = [
  {
    slug: "drip-locker",
    title: "Drip Locker",
    description: "E-commerce web app for sneakers and streetwear.",
    stack: ["Laravel", "React", "MySQL", "REST API"],
    status: "in-progress",
    content:
      "Drip Locker is an e-commerce web app focused on sneakers and streetwear. The goal of the project is to simulate a real online store with product management, inventory, cart and order flow.\n\nOn the backend I use Laravel for routing, models, migrations and API endpoints. On the frontend I use React and modern UI components to build a clean shopping experience.\n\nThis project is also a playground where I experiment with authentication, admin dashboards and product detail layouts.",
    year: "2024–2025",
    role: "Fullstack developer",
    type: "course",
    highlights: [
      "Built a REST API in Laravel for products and orders",
      "Implemented admin dashboard for managing products and stock",
      "Experimented with modern product detail and cart UX"
    ],
    links: [
      {
        label: "GitHub repository",
        url: "https://github.com/your-username/drip-locker",
        type: "github"
      }
    ]
  },
  {
    slug: "dev-lab-portfolio",
    title: "Dev Lab Portfolio",
    description: "This portfolio built with Next.js and TypeScript.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "in-progress",
    content:
      "Dev Lab Portfolio is my personal space where I learn Next.js, TypeScript and modern frontend patterns.\n\nThe idea is to have a single-page portfolio with sections for hero, skills and projects, plus detailed case study pages for each project.\n\nI treat this project as a lab: I iterate on design, refactor code, and add new sections as my skills grow.",
    year: "2025",
    role: "Frontend developer",
    type: "personal",
    highlights: [
      "Used App Router in Next.js with TypeScript",
      "Designed a consistent UI system with Tailwind",
      "Built dynamic project detail pages driven by data"
    ],
    links: [
      {
        label: "GitHub repository",
        url: "https://github.com/your-username/dev-lab-portfolio",
        type: "github"
      }
    ]
  },
  {
    slug: "js-utilities",
    title: "JS Practice Projects",
    description: "Small JavaScript utilities and learning experiments.",
    stack: ["JavaScript", "Git"],
    status: "idea",
    content:
      "A collection of small JavaScript utilities and mini apps that I use to practice problem solving.\n\nEach mini project focuses on one specific concept: array methods, async code, DOM manipulation and more.\n\nThe goal is to build a solid foundation in JavaScript by shipping many small pieces instead of one big app.",
    year: "2024–2025",
    role: "Frontend developer",
    type: "personal",
    highlights: [
      "Practiced core JavaScript concepts through mini projects",
      "Used Git to track progress and iterations",
      "Focused on clean, readable code over complex setups"
    ],
    links: [
      {
        label: "GitHub repository",
        url: "https://github.com/your-username/js-utilities",
        type: "github"
      }
    ]
  }
]

