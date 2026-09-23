export const projects = [
  {
    id: "christian-ecommerce-store",
    title: "Christian E-Commerce Store",
    client: "Faith & Grace Books & Gifts",
    statusType: "Client Project", // "Client Project" | "Demo Showcase" | "Concept"
    category: "E-Commerce",
    industry: "Christian Retail & Wholesale",
    shortDescription: "A full-featured modern e-commerce storefront with WhatsApp instant ordering, multi-category inventory, and an admin management dashboard.",
    featured: true,
    thumbnailUrl: "/images/projects/christian-store/cover.webp",
    heroImage: "/images/projects/christian-store/cover.webp",
    services: [
      "UI/UX Design",
      "E-Commerce Architecture",
      "Full-Stack MERN Development",
      "Admin Dashboard & Inventory",
      "WhatsApp Direct Ordering",
      "Mobile-First Responsive Design"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST API"],
    overview: "Built to empower a faith-based retail and wholesale distributor with a seamless online catalog, fast product exploration, and a hybrid ordering workflow that combines standard cart checkout with direct WhatsApp customer ordering.",
    challenge: "The client operated primarily through offline walk-ins and phone calls. Customers struggled to browse seasonal inventory, wholesale variants, and available stock levels. They needed an accessible digital store that catered to both tech-savvy shoppers and traditional customers who prefer placing orders via WhatsApp.",
    solution: "We engineered a mobile-first web storefront backed by Node.js and MongoDB. We integrated a dual-action checkout mechanism: users can either checkout with a formal cart or tap 'Order via WhatsApp' with pre-filled product SKU and sizing details. A clean admin dashboard allows the store team to update prices, manage banner announcements, and track stock.",
    features: [
      "Dynamic catalog with multi-attribute filtering (category, language, price)",
      "Instant WhatsApp inquiry and direct checkout button with cart payload",
      "Role-protected admin management panel for real-time inventory updates",
      "Responsive image lazy loading and sub-second page transitions",
      "SEO-friendly product routing and social sharing Open Graph metadata"
    ],
    screenshots: [
      {
        title: "Storefront & Catalog Browsing",
        caption: "Clean product showcase with filtering and high-resolution book & gift previews.",
        mockupType: "browser"
      },
      {
        title: "Mobile WhatsApp Checkout Flow",
        caption: "Single-tap instant WhatsApp ordering formatted with item name, quantity, and customer notes.",
        mockupType: "mobile"
      },
      {
        title: "Admin Management & Stock Portal",
        caption: "Intuitive portal for non-technical staff to add products, adjust banners, and monitor orders.",
        mockupType: "dashboard"
      }
    ],
    metrics: [
      { label: "Design Approach", value: "Mobile First" },
      { label: "Checkout Options", value: "Cart + WhatsApp" },
      { label: "Admin Capability", value: "Real-time Stock" },
      { label: "Page Load", value: "< 1.2s" }
    ],
    outcomeNote: "The system successfully modernized the business's ordering pipeline, making their full catalog accessible across mobile devices and streamlining repetitive inventory inquiries."
  },
  {
    id: "mern-ecommerce-platform",
    title: "MERN E-Commerce Platform",
    client: "Apex Goods & Apparel",
    statusType: "Demo Showcase",
    category: "Web Apps",
    industry: "E-Commerce & Retail",
    shortDescription: "End-to-end full-stack digital commerce platform featuring secure JWT authentication, cart state persistence, order tracking, and sales analytics.",
    featured: true,
    thumbnailUrl: "/images/projects/ecommerce/cover.webp",
    heroImage: "/images/projects/ecommerce/cover.webp",
    services: [
      "Full-Stack Web Development",
      "JWT Authentication & RBAC",
      "Product & Inventory Management",
      "Shopping Cart & Order Engine",
      "Admin Analytics Dashboard",
      "Payment Gateway Integration Architecture"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit", "Tailwind CSS"],
    overview: "An enterprise-grade modular MERN architecture designed to demonstrate scalable e-commerce infrastructure, state management, role-based authorization, and real-time order lifecycle tracking.",
    challenge: "Modern e-commerce requires resilient backend architecture that gracefully handles concurrency, inventory locks during checkout, and seamless state synchronization between user sessions.",
    solution: "Implemented a normalized MongoDB schema with indexed search, Express middleware validation, secure HTTP-only cookie authentication, and an administrative panel displaying real-time revenue curves and product velocity.",
    features: [
      "User authentication with JWT, refresh tokens, and password reset flows",
      "Comprehensive product management: categories, stock alerts, image uploads",
      "Persistent cart state across browser sessions with live discount calculations",
      "Customer order history timeline with statuses (Pending, Shipped, Delivered)",
      "Admin telemetry showing top-selling SKUs, monthly volume, and stock notifications"
    ],
    screenshots: [
      {
        title: "Modern Minimalist Shopfront",
        caption: "Curated product grids with quick-view modal and dynamic variant selectors.",
        mockupType: "browser"
      },
      {
        title: "Customer Order Tracking",
        caption: "Step-by-step visual order status timeline for customers.",
        mockupType: "browser"
      },
      {
        title: "Sales & Product Analytics",
        caption: "Admin overview of daily transactions, active orders, and low-inventory warnings.",
        mockupType: "dashboard"
      }
    ],
    metrics: [
      { label: "Architecture", value: "MERN Stack" },
      { label: "Security", value: "JWT + RBAC" },
      { label: "State Sync", value: "Redux Store" },
      { label: "Database", value: "MongoDB Cluster" }
    ],
    outcomeNote: "Demonstrates production-ready full-stack software development practices with clean separation of concerns and scalable API endpoints."
  },
  {
    id: "gym-management-website",
    title: "Gym Management & Business Website",
    client: "Pulse Elite Fitness Club",
    statusType: "Client Project",
    category: "Websites",
    industry: "Fitness & Wellness",
    shortDescription: "High-energy commercial gym website with membership tier booking, trainer schedules, local SEO optimization, and Google Business setup.",
    featured: true,
    thumbnailUrl: "/images/projects/gym/cover.webp",
    heroImage: "/images/projects/gym/cover.webp",
    services: [
      "Brand Identity & UI Design",
      "Business Website Development",
      "Membership Management Portal",
      "Local SEO & Google Business Profile",
      "Social Media Content Integration",
      "Speed & Core Web Vitals"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Google Maps API"],
    overview: "A comprehensive digital front for a premium fitness club, combining high-converting membership discovery pages, trainer profiles, class scheduling, and local search optimization to attract nearby gym-goers.",
    challenge: "The club was struggling with walk-in inquiries for class times and trainer rates, and their previous website had zero local map presence, causing them to lose prospective members to competing gyms nearby.",
    solution: "We designed a bold, high-contrast dark aesthetic website with an interactive weekly class schedule, transparent tier breakdown, instant membership lead capture, and full Google Business Profile verification with localized SEO keywords.",
    features: [
      "Interactive weekly timetable filterable by workout style (HIIT, Strength, Yoga)",
      "Membership pricing calculator and lead capture connected to WhatsApp",
      "Trainer bio pages with certified credentials and direct booking triggers",
      "Google Maps integration, review generation prompts, and local schema markup",
      "Optimized mobile layout for gym-goers checking schedules on their phones"
    ],
    screenshots: [
      {
        title: "High-Energy Hero & Membership Showcase",
        caption: "Striking visuals highlighting facility amenities and dynamic pricing tiers.",
        mockupType: "browser"
      },
      {
        title: "Mobile Interactive Class Schedule",
        caption: "Filterable day-by-day timetable designed for quick phone access.",
        mockupType: "mobile"
      },
      {
        title: "Google Local Search Card Mockup",
        caption: "Optimized Google Business Profile setup for local map pack visibility.",
        mockupType: "browser"
      }
    ],
    metrics: [
      { label: "Local Visibility", value: "Google Profile Set" },
      { label: "Schedule Access", value: "Mobile Optimized" },
      { label: "Inquiry Speed", value: "Direct WhatsApp" },
      { label: "UI Style", value: "Bold Fitness Dark" }
    ],
    outcomeNote: "Streamlined member inquiries and class timetable lookups, providing members with a modern digital hub."
  },
  {
    id: "social-media-content-suite",
    title: "Brand Content & Social Media Suite",
    client: "Multi-Brand Creative Campaign",
    statusType: "Demo Showcase",
    category: "Content",
    industry: "Retail, Food & Lifestyle",
    shortDescription: "Curated collection of high-impact 9:16 Instagram Reels, carousel master templates, commercial video cuts, and promotional ad creatives.",
    featured: false,
    thumbnailUrl: "/images/projects/social/cover.webp",
    heroImage: "/images/projects/social/cover.webp",
    services: [
      "Short-Form Video Production (9:16 Reels)",
      "Motion Graphics & Dynamic Subtitles",
      "Social Media Feed Aesthetic Curation",
      "Promotional Ad Creatives",
      "Content Calendar Planning"
    ],
    technologies: ["Adobe Premiere Pro", "After Effects", "Figma", "Photoshop", "CapCut Pro"],
    overview: "A showcase of our content production capability, demonstrating how our team crafts visual hooks, fast-paced commercial editing, and branded carousel graphics that hold attention on Instagram and Facebook.",
    challenge: "Businesses often struggle with creating consistent, professional-grade visual content that looks modern and matches the visual polish of leading global brands.",
    solution: "We produce turnkey creative packages: from storyboards and hook ideation to color grading, sound design, animated kinetic typography, and multi-format graphics optimized for algorithmic distribution.",
    features: [
      "High-retention 9:16 vertical video templates with motion graphics",
      "Multi-slide educational and product showcase carousel assets",
      "Branded color palettes, typography guidelines, and story highlight sets",
      "Meta ads ready creatives tested for conversion and click-through clarity"
    ],
    screenshots: [
      {
        title: "Reels & Short-Form Content Grid",
        caption: "Dynamic 9:16 video covers designed for high click-through rates.",
        mockupType: "mobile"
      },
      {
        title: "Instagram Feed & Carousel System",
        caption: "Harmonious feed design system reinforcing brand authority.",
        mockupType: "mobile"
      }
    ],
    metrics: [
      { label: "Video Aspect", value: "9:16 Vertical" },
      { label: "Resolution", value: "4K / 60 FPS" },
      { label: "Formats", value: "Reels / Ads / Decks" },
      { label: "Workflow", value: "Calendar-Driven" }
    ],
    outcomeNote: "Demonstrates comprehensive creative capability covering ideation, video production, graphic design, and platform packaging."
  },
  {
    id: "admin-dashboard-suite",
    title: "Operations & Analytics Admin Portal",
    client: "LogiTrack Solutions",
    statusType: "Concept",
    category: "Web Apps",
    industry: "Business Operations & SaaS",
    shortDescription: "Custom administrative web application with live KPI telemetry, staff permission tiers, customer directory, and automated report exports.",
    featured: false,
    thumbnailUrl: "/images/projects/admin/cover.webp",
    heroImage: "/images/projects/admin/cover.webp",
    services: [
      "Custom Web App Development",
      "Data Visualization & Charts",
      "Role-Based Access Control",
      "CSV/PDF Report Generator",
      "Cloud Database Architecture"
    ],
    technologies: ["React", "Tailwind CSS", "Lucide React", "Node.js", "Express", "Chart.js"],
    overview: "A scalable operations dashboard concept designed for businesses needing centralized control over transactions, customer records, team permissions, and real-time metrics.",
    challenge: "Growing businesses frequently outgrow spreadsheets and require a secure, custom-tailored internal tool that matches their specific operational workflows.",
    solution: "Constructed an intuitive web application interface with responsive data tables, instant keyword filtering, visual status badges, and interactive telemetry charts.",
    features: [
      "Interactive data grids with column sorting, filtering, and pagination",
      "Real-time operational charts (Revenue, Order status distribution, User growth)",
      "Multi-tier team permissions (Admin, Manager, Support agent)",
      "Automated PDF and Excel invoice/report generation"
    ],
    screenshots: [
      {
        title: "Command Center Telemetry View",
        caption: "High-density metrics overview with intuitive dark mode hierarchy.",
        mockupType: "dashboard"
      },
      {
        title: "Customer Directory & Permissions",
        caption: "Granular user management and role assignment interfaces.",
        mockupType: "dashboard"
      }
    ],
    metrics: [
      { label: "UI Architecture", value: "Modular React" },
      { label: "Theme", value: "Pro Dark UI" },
      { label: "Data Flow", value: "Optimistic State" },
      { label: "Security", value: "Granular RBAC" }
    ],
    outcomeNote: "Demonstrates advanced dashboard design, state handling, and data visualization best practices."
  }
];
