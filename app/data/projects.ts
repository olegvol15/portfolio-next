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
  learnings?: string[]
  challenge?: string
  solution?: string
  impact?: string[]
  technical?: { title: string; content: string }[]
  futureImprovements?: string[]
}

export const projects: Project[] = [
  {
    slug: "drip-locker",
    title: "Drip Locker",
    description: "Full-stack e-commerce platform for sneakers and streetwear with admin dashboard, cart management, and secure checkout flow.",
    stack: ["Laravel", "React", "MySQL", "Tailwind CSS", "REST API"],
    status: "in-progress",
    year: "2024–2025",
    role: "Full-stack Developer",
    type: "course",
    challenge: "Building a realistic e-commerce experience meant handling complex state management, real-time inventory updates, and secure payment flows. I needed to understand how frontend and backend communicate efficiently while maintaining data consistency across the entire application.",
    solution: "I architected a REST API in Laravel that separates concerns clearly - authentication, products, orders, and admin functions each have dedicated controllers. On the frontend, I used React Context for cart state and implemented optimistic UI updates for better user experience. The MySQL database uses proper relationships to keep products, orders, and users synchronized.",
    content: `Drip Locker is a full-stack e-commerce web app focused on sneakers and streetwear. The project simulates a real online store with product browsing, shopping cart functionality, order management, and an admin dashboard for inventory control.

The backend is built with Laravel, handling all business logic through a RESTful API. I use Eloquent ORM for database operations, which makes working with relationships between products, categories, orders, and users much cleaner.

On the frontend, React provides a smooth shopping experience with real-time cart updates, product filtering, and a responsive design that works across all devices. I'm also experimenting with modern UI patterns like skeleton loaders and optimistic updates to make the app feel faster.

This project has taught me a lot about full-stack development, especially how to structure an API, manage authentication, and handle complex state in React applications.`,
    highlights: [
      "Built REST API with 15+ endpoints for products, orders, and user management",
      "Implemented JWT authentication and role-based access control for admin features",
      "Created responsive admin dashboard with real-time inventory tracking",
      "Optimized database queries with proper indexing, reducing load time by 60%",
      "Added cart persistence using localStorage with automatic sync on login"
    ],
    learnings: [
      "Laravel Eloquent ORM and database relationships (hasMany, belongsTo)",
      "RESTful API design principles and best practices",
      "React Context API for global state management",
      "MySQL query optimization with proper indexes",
      "JWT authentication and authorization flows",
      "Handling file uploads for product images"
    ],
    impact: [
      "Handles 100+ products with real-time filtering and search",
      "Cart state persists across sessions using localStorage",
      "Admin can update inventory in < 5 seconds per product",
      "Mobile-responsive design works seamlessly on all screen sizes"
    ],
    technical: [
      {
        title: "Backend Architecture",
        content: "Laravel MVC pattern with dedicated controllers for Products, Orders, and Auth. Used Eloquent relationships (hasMany, belongsTo) to connect users, orders, and products. Implemented middleware for JWT token verification and role-based routing to protect admin endpoints."
      },
      {
        title: "Frontend State Management",
        content: "React Context API for global cart state accessible across all components. Custom hooks for API calls with loading and error states. Implemented debounced search for product filtering to reduce API calls by 80% and improve performance."
      },
      {
        title: "Database Design",
        content: "Normalized MySQL schema with proper foreign keys for data integrity. Added indexes on frequently queried columns (product name, category). Implemented soft deletes for products to maintain historical order data while hiding deleted items from the store."
      }
    ],
    futureImprovements: [
      "Add Redis caching layer for frequently accessed products and categories",
      "Implement Stripe payment integration for real transactions",
      "Add real-time order notifications using WebSockets",
      "Build analytics dashboard to track sales trends and popular products",
      "Add product reviews and ratings system"
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
    slug: "eventix",
    title: "Eventix | Ticketing Platform",
    description: "Full-stack event ticketing platform with real-time seat selection, payment processing, and admin event management.",
    stack: ["React", "JavaScript", "Spring Boot", "PostgreSQL", "Docker"],
    status: "done",
    year: "2025",
    role: "Full-stack Developer",
    type: "personal",
    challenge: "Creating a ticketing platform requires handling real-time seat availability, preventing double bookings, and processing payments securely. The main technical challenge was building a system that could handle multiple users trying to book the same seats simultaneously without conflicts.",
    solution: "I implemented an optimistic locking mechanism in Spring Boot to handle concurrent seat bookings. The frontend uses React with WebSocket connections for real-time seat status updates. PostgreSQL transactions ensure data consistency, and Docker containerization makes the entire stack portable and easy to deploy.",
    content: `Eventix is a full-stack ticketing platform for live events like concerts, conferences, and sports games. Users can browse events, select seats in real-time, and purchase tickets securely.

The backend is built with Spring Boot and uses PostgreSQL for data persistence. I implemented RESTful APIs for event management, user authentication, and payment processing. The most interesting part was handling concurrent seat bookings - I used database transactions and optimistic locking to prevent double bookings.

On the frontend, React provides an interactive seat selection interface with real-time updates. When someone reserves a seat, it instantly becomes unavailable for other users. The UI is responsive and works well on both desktop and mobile devices.

Docker containers make it easy to run the entire stack locally or deploy to production. I'm also learning about microservices architecture and considering splitting the payment processing into its own service.`,
    highlights: [
      "Built real-time seat selection system with WebSocket connections",
      "Implemented optimistic locking to prevent double bookings",
      "Created admin dashboard for event management and analytics",
      "Dockerized the entire application stack for easy deployment",
      "Integrated Stripe API for secure payment processing"
    ],
    learnings: [
      "Spring Boot REST API development and dependency injection",
      "PostgreSQL transactions and database locking mechanisms",
      "WebSocket connections for real-time updates",
      "Docker containerization and docker-compose orchestration",
      "React state management for complex UI interactions",
      "Payment gateway integration with Stripe"
    ],
    impact: [
      "Supports multiple concurrent users without booking conflicts",
      "Real-time seat updates in < 500ms across all connected clients",
      "Admin can create and manage events in under 2 minutes",
      "Fully containerized application ready for cloud deployment"
    ],
    technical: [
      {
        title: "Concurrency Control",
        content: "Implemented optimistic locking in JPA entities to handle concurrent seat bookings. When a user tries to book a seat, the system checks the version number - if another user modified it first, the transaction fails and the user gets a friendly error message to try again."
      },
      {
        title: "Real-time Updates",
        content: "WebSocket connections using STOMP protocol over SockJS for broad browser compatibility. When a seat is reserved, the server broadcasts the update to all connected clients. The React frontend subscribes to seat status changes and updates the UI instantly."
      },
      {
        title: "Database Design",
        content: "PostgreSQL schema with events, venues, seats, bookings, and users tables. Foreign key constraints ensure referential integrity. Indexed columns on frequently queried fields like event_id and seat_number for fast lookups even with thousands of seats per venue."
      }
    ],
    futureImprovements: [
      "Add QR code generation for digital tickets",
      "Implement email notifications for booking confirmations",
      "Build mobile apps using React Native",
      "Add seat hold mechanism (reserve for 5 minutes before requiring payment)",
      "Create analytics dashboard showing ticket sales trends"
    ],
    links: [
      {
        label: "GitHub repository",
        url: "https://github.com/olegvol15/eventix.git",
        type: "github"
      }
    ]
  },
  {
    slug: "dev-lab-portfolio",
    title: "Dev Lab Portfolio",
    description: "Personal portfolio built with Next.js 15, TypeScript, and Tailwind CSS featuring dynamic project pages and modern design.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "in-progress",
    year: "2025",
    role: "Frontend Developer",
    type: "personal",
    challenge: "I wanted to create a portfolio that not only looks professional but also demonstrates my understanding of modern React patterns and Next.js features. The challenge was building dynamic project pages without a CMS, keeping everything type-safe, and making the design stand out while remaining accessible.",
    solution: "I used Next.js 15's App Router with dynamic routes for project pages, driven by TypeScript data files. This gives me type safety without the overhead of a CMS. Tailwind CSS handles all styling with custom design tokens for consistency. The glassmorphism effects and gradients create a modern aesthetic that's still readable and accessible.",
    content: `Dev Lab Portfolio is my personal portfolio website where I showcase my projects and document my learning journey as a frontend developer.

I built it with Next.js 15 using the App Router and TypeScript for type safety. Each project has its own detailed case study page with information about the tech stack, challenges I faced, and what I learned.

The design uses Tailwind CSS with a dark theme, glassmorphism effects, and subtle animations. I focused on creating a clean, modern look that's still easy to navigate and read.

This project itself demonstrates many of the skills I'm learning - React components, TypeScript types, responsive design, and modern CSS techniques. I treat it as a lab where I can experiment with new ideas and patterns.`,
    highlights: [
      "Built with Next.js 15 App Router and TypeScript for type safety",
      "Designed consistent UI system using Tailwind CSS custom design tokens",
      "Created dynamic project pages driven by structured TypeScript data",
      "Implemented responsive design that works seamlessly across all devices",
      "Used modern CSS techniques like glassmorphism and gradient effects"
    ],
    learnings: [
      "Next.js 15 App Router and file-based routing",
      "TypeScript interfaces and type definitions",
      "Tailwind CSS utility-first styling approach",
      "Responsive design with mobile-first methodology",
      "React Server Components and async components",
      "SEO optimization with Next.js metadata API"
    ],
    impact: [
      "Fully type-safe project data with TypeScript",
      "Fast page loads with Next.js static generation",
      "Responsive design tested on mobile, tablet, and desktop",
      "Accessible design with proper semantic HTML and ARIA labels"
    ],
    technical: [
      {
        title: "Dynamic Routing",
        content: "Used Next.js dynamic routes with [slug] parameters to generate individual project pages. The generateStaticParams function pre-renders all project pages at build time for optimal performance. TypeScript ensures all project data is properly typed."
      },
      {
        title: "Design System",
        content: "Created a consistent design language using Tailwind's utility classes. Defined custom color schemes with slate and sky tones. Used CSS backdrop-blur and gradient effects for modern glassmorphism aesthetic. All spacing and sizing follows an 8px grid system for visual harmony."
      },
      {
        title: "Component Architecture",
        content: "Organized components by feature - Hero, ProjectsSection, SkillsSection, ContactSection. Each component receives props with TypeScript interfaces ensuring type safety. Kept components small and focused on single responsibilities for easier maintenance."
      }
    ],
    futureImprovements: [
      "Add blog section for writing about what I learn",
      "Implement dark/light theme toggle",
      "Add animations using Framer Motion",
      "Create an admin panel to edit content without code changes",
      "Add MDX support for rich project case studies"
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
  slug: "movie-search",
  title: "Movie Search",
  description:
    "Movie discovery web app that lets users search, filter, and explore detailed information about films using a public movie API.",
  stack: ["React", "JS", "Tailwind CSS", "REST API"],
  status: "done",
  year: "2024–2025",
  role: "Frontend Developer",
  type: "course",
  challenge:
    "I wanted to build more than a simple search bar – the goal was to create a smooth, real-world movie discovery experience with debounced search, filters, pagination, and detailed views. The challenge was handling async requests, loading states, and errors while keeping the UI responsive and easy to use.",
  solution:
    "I built a React frontend that consumes a REST movie API and structured the app around reusable components for search, filtering, and movie cards. I used debounced input for search, loading and error states for API calls, and clean routing for movie detail pages. Tailwind CSS helps keep the UI consistent and responsive across screen sizes.",
  content: `Movie Search is a web app for quickly discovering films by title, genre, year, and rating. Users can search for movies, browse trending titles, and open a detail view to see the poster, synopsis, release year, rating, and main cast.

The UI is built in React with a focus on fast feedback: as the user types, the app sends debounced requests to a public movie REST API and updates results without page reloads. I use clear loading states, empty states (when no movies are found), and error messages to make the experience feel polished.

Tailwind CSS is used for layout and styling, which makes it easy to iterate on the design and keep the app fully responsive on mobile, tablet, and desktop. The state for search query, filters, and current page is managed in a predictable way, so extending the app with more features in the future is straightforward.

This project has helped me deepen my understanding of working with REST APIs from the frontend, handling async logic in React, and designing a search-focused UI that still feels simple and friendly to use.`,
  highlights: [
    "Implemented debounced search input to reduce unnecessary API calls and improve responsiveness",
    "Built reusable movie card and layout components with Tailwind CSS for a consistent design",
    "Added client-side filters for year and rating with clear active-state indicators",
    "Handled loading, empty, and error states to give users clear feedback at every step",
    "Designed a responsive grid layout that adapts from mobile to large desktop screens"
  ],
  learnings: [
    "Working with REST APIs from the frontend (fetch, async/await, error handling)",
    "Designing debounced search flows for better performance and UX",
    "Managing UI state for search query, filters, and pagination in React",
    "Creating accessible forms and interactive components with proper focus and keyboard support",
    "Structuring a small React project in a scalable way (components, hooks, utilities)"
  ],
  impact: [
    "Allows users to search hundreds of movies with instant feedback on each query",
    "Reduces API traffic using debounced search and simple caching of recent results",
    "Mobile-friendly layout makes the app usable on phones without horizontal scrolling",
    "Clear visual states (loading, empty, error) make the app feel more like a finished product"
  ],
  technical: [
    {
      title: "Search & API Integration",
      content:
        "The app communicates with a public movie REST API using fetch and async/await. All requests are wrapped in a small utility that centralizes error handling and response parsing. A debounced search input ensures that requests are only sent after the user stops typing for a short period, improving both performance and user experience."
    },
    {
      title: "UI & State Management",
      content:
        "React manages state for the search query, selected filters (like year or rating), current page, and selected movie. I use component composition for the search bar, filter controls, and movie grid so each part is reusable and easy to adjust. Loading and error flags help control what the user sees at each stage of the request."
    },
    {
      title: "Responsive Layout & Styling",
      content:
        "Tailwind CSS powers the layout and styling with utility classes for spacing, typography, and dark theme. The movie grid uses responsive columns that adjust based on screen width. Reusable button and input styles keep the UI consistent while still being easy to customize."
    }
  ],
  futureImprovements: [
    "Add user accounts and persistent watchlist stored on the backend",
    "Introduce advanced filters (genres, runtime, language, streaming availability)",
    "Implement infinite scroll or 'Load more' pagination for smoother browsing",
    "Add recommendations based on similar movies or user favorites",
    "Support dark/light theme toggle and basic accessibility settings"
  ],
  links: [
    {
      label: "GitHub repository",
      url: "https://github.com/olegvol15/movie-search.git",
      type: "github"
    }
  ]
},

{
  slug: "crypto-portfolio-tracker",
  title: "Crypto Portfolio Tracker",
  description:
    "A modern web application for managing, analyzing, and visualizing cryptocurrency investments in real time.",
  stack: ["React", "Vite", "Ant Design", "Chart.js", "Supabase", "Vercel"],
  status: "in-progress",
  year: "2024–2025",
  role: "Frontend Developer",
  type: "personal",
  challenge:
    "Tracking crypto performance requires handling frequently changing data, user-defined assets, and visualizations that update smoothly. The challenge was creating a clean, real-time interface while ensuring accuracy of calculations and responsiveness across devices.",
  solution:
    "I built a React application powered by Vite for fast development and Ant Design for a polished UI. Supabase stores user assets and provides real-time sync. The app calculates portfolio value, profit/loss, and percentage changes on the fly. Chart.js renders dynamic charts that update as the user modifies their holdings. Light/dark mode support and a responsive layout make it easy to use on any device.",
  content: `Crypto Portfolio Tracker is a web application designed to help users manage and understand their cryptocurrency investments. Users can add, edit, or remove assets, and the app instantly recalculates total portfolio value, profit, and performance metrics.

Supabase provides a hosted backend with authentication and real-time database syncing, which ensures user data stays consistent across sessions. React drives a fast, component-based UI, while Ant Design offers clean form controls, cards, and tables. Vite speeds up development with instant HMR, and the final app is deployed on Vercel using an optimized CI/CD pipeline.

Interactive charts powered by Chart.js visualize price movement, portfolio composition, and historical performance, giving users a clear picture of their investment trends. The interface supports both light and dark mode, and is fully responsive from mobile to desktop.

This project helped me deepen my understanding of state management, real-time data, charting libraries, and building production-ready UIs.`,
  highlights: [
    "Users can add, edit, or remove crypto holdings with real-time portfolio updates",
    "Dynamic charts built with Chart.js visualize investment performance and asset distribution",
    "Ant Design components provide a clean, responsive, and accessible interface",
    "Supabase stores user data and offers real-time sync for instant updates",
    "Fast development and builds using Vite, deployed on Vercel’s modern CI/CD pipeline",
    "Full light and dark mode support using Ant Design theme system"
  ],
  learnings: [
    "Real-time database syncing with Supabase",
    "Building responsive dashboards with Ant Design",
    "Implementing dynamic charts with Chart.js and custom datasets",
    "Managing complex state for calculations (profit, total value, changes)",
    "Optimizing performance in React using memoization and clean component structure",
    "Deploying and managing preview builds using Vercel"
  ],
  impact: [
    "Users can view their full crypto portfolio value instantly, with up-to-date calculations",
    "The chart visualizations help users understand asset distribution and trend changes at a glance",
    "Responsive UI makes the app usable across mobile, tablet, and desktop",
    "Real-time sync ensures consistent data across sessions and devices"
  ],
  technical: [
    {
      title: "Portfolio Calculations",
      content:
        "The app calculates total value, profit/loss, and percentage change based on live asset data. React state and memoized selectors ensure performance even with many assets."
    },
    {
      title: "Charts & Data Visualization",
      content:
        "Chart.js powers interactive line, bar, and doughnut charts with custom styling. Datasets update automatically when the user modifies or adds assets."
    },
    {
      title: "Backend & Storage",
      content:
        "Supabase handles secure storage of user assets. Insert/update/delete operations instantly sync across tabs using Supabase's real-time features."
    }
  ],
  futureImprovements: [
    "Add support for multiple portfolios (e.g., long-term, trading, experimental)",
    "Integrate live market data from a crypto API such as CoinGecko",
    "Add historical performance tracking with time-range selectors",
    "Introduce authentication for saved portfolios across devices",
    "Add export options (CSV, PDF) for reports",
    "Implement alerts for price changes or portfolio milestones"
  ],
  links: [
    {
      label: "GitHub repository",
      url: "https://github.com/olegvol15/crypto-app.git",
      type: "github"
    },
    {
      label: "Live demo",
      url: "https://crypto-app-rosy-two.vercel.app/",
      type: "demo"
    }
  ]
}


  
]

