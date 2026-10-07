export const projects = [
  {
    title: "TaskBoard Pro (Smart Team Task Board)",
    year: "2026",
    description:
      "Enterprise MERN Stack Team Task & Workflow Management platform with role-based access control, Kanban board, Socket.io real-time engine, and aggregation analytics.",
    longDescription:
      "Engineered a full-stack MERN task management application featuring granular role-based authorization (Admin, Manager, Employee), Kanban sprint board with strict workflow transitions, Socket.io real-time room broadcasting, MongoDB $facet aggregation analytics, immutable activity audit logging, and custom date-time pickers. Fully containerized with Docker and live deployed on Vercel and Render.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Tailwind CSS",
      "Vite",
      "Docker",
    ],
    metrics: [
      "📋 Role-Based Access Control (Admin/Manager/Employee)",
      "⚡ Real-Time Socket.io Workspace Synchronization",
      "📊 MongoDB $Facet Executive Intelligence Analytics",
      "🛡️ Active Task Limit and Review and Approval System",
    ],
    features: [
      "Strict state transition machine (Todo → In Progress → Review → Done)",
      "Employee max 8 active task capacity protection with handover notes",
      "Manager review approval loop with issue revision feedback prompts",
      "Immutable activity audit log tracking every workspace, sprint, and task mutation",
      "Soft-delete user cascading unassignment preserving historic snapshot",
      "Persistent dark/light mode with custom date and time picker dialogs",
    ],
    role: "Full Stack Developer",
    problemSolved:
      "Eliminating workflow skipping in team task boards, enforcing active workload limits for employees, and delivering real-time multi-role project tracking.",
    status: "Live",
    category: "Task & Workflow Management",
    image: "/Projects/TaskBoardPro.png",
    liveUrl: "https://task-board-pro-beta.vercel.app/",
    githubUrl: "https://github.com/raoofCLT/Task-Board-Pro",
    featured: true,
    type: "crm",
  },
  {
    title: "Accredit HSE Platform",
    year: "2026",
    description:
      "High-performance bilingual safety training and compliance portal for a premier HSE consulting agency in Abu Dhabi.",
    longDescription:
      "Designed and developed a premium, bilingual B2B web platform for Accredit Management Consultancy (a member of the Tatweer Group) to streamline corporate safety course bookings. Built with a React SPA frontend and a Node.js/Express API, the system features state-driven English/Arabic translation capabilities, dynamic B2B brochure downloads, and interactive admin dashboards managing courses, testimonials, and safety inspection galleries in real-time.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "Express",
      "Node.js",
      "MongoDB",
      "Cloudinary",
    ],
    metrics: [
      "🛡️ 10+ Years Active in Abu Dhabi",
      "👨🎓 2,000+ Safety Professionals Trained",
      "📈 98% First-Time Pass Rate",
      "📋 15+ Accredited Safety Programs",
    ],
    features: [
      "Dynamic B2B course intake scheduler with integrated WhatsApp booking flow",
      "Bilingual localized interface (English/Arabic) powered by state-driven language store",
      "Full-featured secure admin dashboard for real-time management of courses, testimonials, and gallery media",
      "Custom brochure generation and validation pipeline using secure input fields",
      "SEO-optimized local business scheme markup ranking for third-party inspections in UAE",
    ],
    role: "Full Stack Developer",
    problemSolved:
      "Digitizing an established offline safety institute, reducing B2B lead generation friction through dynamic brochures, and establishing strong search visibility for local HSE inspections in Musaffah, Abu Dhabi.",
    status: "Live",
    category: "Corporate HSE Portal",
    image: "/Projects/Accredit.png",
    liveUrl: "https://accredit.world/",
    featured: true,
    type: "website",
  },
  {
    title: "Agaram Auto Repairs",
    year: "2024",
    description:
      "High-performance web platform and booking solution for a premier automotive service center in Abu Dhabi.",
    longDescription:
      "Designed and developed a premium, responsive web platform for a leading multi-brand automotive workshop using TanStack Start (React) and TypeScript. Implemented a custom design system, an interactive brand profile viewer for 25+ manufacturers, a dynamic 12-discipline service catalog, a search-optimized car care blog, and a streamlined WhatsApp booking integration to optimize customer acquisition.",
    tech: [
      "React",
      "TypeScript",
      "TanStack Start",
      "Tailwind CSS",
      "Framer Motion",
    ],
    metrics: [
      "🚗 8,000+ Vehicles Serviced",
      "⭐ 4.4 Google Star Rating",
      "📈 3,000+ Happy Customers",
    ],
    features: [
      "Dynamic 12-discipline automotive service catalog",
      "Interactive vehicle brand profiling for 25+ marques",
      "Automated WhatsApp booking flow & check-in triggers",
      "Fluid, premium dark-mode interface with Framer Motion micro-animations",
      "SEO-optimized local business scheme markup and semantic structure",
    ],
    role: "Full Stack Developer",
    problemSolved:
      "Transitioning a traditional offline workshop into a digital brand, reducing customer booking friction, and ranking for local automotive searches in Abu Dhabi.",
    // status: "Live",
    category: "Automotive Service Platform",
    image: "/Projects/Agaram.png",
    // liveUrl: "https://agaramautorepairs.ae/",
    featured: true,
    type: "website",
  },
  {
    title: "ALBEDO Educator Platform",
    year: "2024",
    description:
      "Frontend for a large-scale education platform used by 20,000+ users.",
    longDescription:
      "Designed and developed the entire frontend using React, Tailwind CSS, and Redux. Built 9 dashboards to manage users, batches, payments, and notifications. Delivered a responsive and performant UI.",
    tech: ["React", "Python", "Tailwind CSS", "Redux"],
    metrics: [
      "👥 20,000+ Active Users",
      "📊 9 Key Operations Dashboards",
      "⚡ Reduced Page Load",
    ],
    features: [
      "User and batch management dashboards",
      "Real-time notifications and updates",
      "Modern, responsive interface",
      "Scalable frontend architecture",
    ],
    status: "Live",
    category: "EdTech & LMS Platform",
    image: "/Projects/Albedo Educator.png",
    liveUrl:
      "https://drive.google.com/file/d/12tRN41egz4bOiK0l6GvEOSQ9v2CxidUw/view?usp=sharing",
    videoUrl:
      "https://drive.google.com/file/d/12tRN41egz4bOiK0l6GvEOSQ9v2CxidUw/view?usp=sharing",
    featured: false,
    type: "lms",
  },
  {
    title: "Evoka Communications",
    year: "2025",
    description:
      "Creative agency platform for managing clients, projects, and production teams.",
    longDescription:
      "Developed a production management platform for a creative agency to manage clients, projects, and internal teams. The system supports task assignment across roles like HR, creative leads, copywriters, and coordinators, with work-hour tracking and approval workflows.",
    tech: ["React", "TypeScript", "Python", "Django", "PostgreSQL"],
    metrics: [
      "👥 Multi-role Team Workflows",
      "📂 Client & Project Management",
      "⏱️ Work-hour Tracking & Approvals",
    ],
    features: [
      "Client onboarding and project creation",
      "Task distribution to production staff and creatives",
      "Review and approval workflows for deliverables",
      "Work-hour calculation and progress tracking",
    ],
    status: "Live",
    category: "Agency Management & CRM",
    image: "/Projects/Evoka Communications.png",
    liveUrl:
      "https://drive.google.com/file/d/1MVyzal7hgZ0xQmfXP_ZENpmXbILhGz9J/view?usp=sharing",
    videoUrl:
      "https://drive.google.com/file/d/1MVyzal7hgZ0xQmfXP_ZENpmXbILhGz9J/view?usp=sharing",
    featured: false,
    type: "crm",
  },
  {
    title: "Calc (Data Analytics Platform)",
    year: "2025",
    description:
      "Data analytics platform for education data export and visualization.",
    longDescription:
      "Developed a platform to analyze educational data with interactive dashboards. Supported export, printing, and reporting features to empower data-driven decisions.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Redux", "Python"],
    metrics: [
      "📈 Visualize Data",
      "📄 Export Reports",
      "⚡ Real-time Dashboard",
    ],
    features: [
      "Comprehensive data visualization dashboards",
      "Export and print reporting tools",
      "User-friendly and interactive UI",
    ],
    status: "Live",
    category: "Data Analytics & Reporting",
    image: "/Projects/Calc.png",
    liveUrl: "https://calc.albedoedu.com/",
    featured: false,
    type: "lms",
  },
  {
    title: "Evoka School of Advertising Platform",
    year: "2025",
    description:
      "Kerala’s first advertising school platform managing students and projects.",
    longDescription:
      "Built the frontend and integrated APIs for student management, payments, attendance, and assignments. Supported live project-based learning with portfolio management.",
    tech: ["React", "TypeScript", "Tailwind CSS", "API Integrations", "Python"],
    metrics: [
      "🎓 13000+ Users",
      "💳 Payments management",
      "📚 Assignments management",
    ],
    features: [
      "Student records and attendance management",
      "Payment processing and tracking",
      "Assignment and portfolio system",
      "Seamless API integrations",
    ],
    status: "Live",
    category: "EdTech & Student Portal",
    image: "/Projects/Evoka.png",
    liveUrl:
      "https://drive.google.com/file/d/1bPkaW2UhEYiNYbMrYQAhEYF2OzHcTadA/view?usp=sharing",
    videoUrl:
      "https://drive.google.com/file/d/1bPkaW2UhEYiNYbMrYQAhEYF2OzHcTadA/view?usp=sharing",
    featured: false,
    type: "lms",
  },
  {
    title: "ZEEQUE+",
    year: "2024",
    description:
      "All-in-one platform for high-end personal branding and digital identity management.",
    longDescription:
      "Designed and developed a comprehensive digital identity and personal branding web application. Features interactive profile showcases, real-time client engagement, custom portfolio theming, and responsive workflows designed for creative professionals.",
    tech: ["React", "Tailwind CSS", "Socket.io", "TypeScript", "Node.js"],
    metrics: [
      "🌐 Digital Identity Management",
      "⚡ Real-Time Profile Showcase",
      "📱 Responsive Web Application",
      "🎨 Custom Portfolio Theming",
    ],
    features: [
      "Comprehensive personal branding and profile builder",
      "Real-time interactive features with Socket.io",
      "High-performance responsive UI with Tailwind CSS",
      "Video walkthrough and screen demonstration",
    ],
    role: "Frontend Developer",
    problemSolved:
      "Empowering creators and professionals to establish an elevated digital identity and personal brand with real-time portfolio management.",
    status: "Completed",
    category: "Personal Branding & Identity",
    image: "/Projects/ZeequePlus.png",
    liveUrl:
      "https://drive.google.com/file/d/1LUNFeI6jLjb1pf7-UoxHzzNEaqKFumUI/view?usp=sharing",
    videoUrl:
      "https://drive.google.com/file/d/1LUNFeI6jLjb1pf7-UoxHzzNEaqKFumUI/view?usp=sharing",
    featured: true,
    type: "social",
  },
  {
    title: "Yara E-commerce Platform",
    year: "2024",
    description: "Online dress retail with user auth and payment integration.",
    longDescription:
      "Developed a scalable e-commerce app with React, Node.js, and Express. Features user authentication, shopping cart, payment gateway integration, and admin controls.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    metrics: [
      "💳 Payment Transactions",
      "🛠️ Admin Controlled Products",
      "🔐 User Authentication",
    ],
    features: [
      "User login and authentication",
      "Shopping cart and checkout workflow",
      "Payment gateway integration",
      "Admin dashboard and controls",
      "Responsive design",
    ],
    status: "Completed",
    category: "E-Commerce & Retail",
    image: "/Projects/Yara E-commerce.png",
    githubUrl: "https://github.com/raoofCLT/Yara-e-commerce-app",
    featured: false,
    type: "ecommerce",
  },
  {
    title: "StartupHub",
    year: "2024",
    description:
      "Community platform for startup profiles and investor connections.",
    longDescription:
      "Created a Next.js and TypeScript platform where users showcase startups and connect with investors. Features GitHub auth, real-time updates, and CMS content management.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN",
      "Sanity",
      "MongoDB",
    ],
    metrics: [
      "🧑‍💼 Verified Startup Profiles",
      "📈 Monthly Active Investors",
      "⚡ Real-time Data Synchronization",
    ],
    features: [
      "GitHub authentication with NextAuth.js",
      "Startup profile creation and discovery",
      "Search, filtering, and dynamic content",
      "Real-time updates",
    ],
    status: "Completed",
    category: "Startup Community & Network",
    image: "/Projects/StartupHub.png",
    githubUrl: "https://github.com/raoofCLT/Startup-Hub",
    featured: false,
    type: "social",
  },
  {
    title: "Libraria – E-Library Platform",
    year: "2024",
    description: "Digital library with book lending and secure admin features.",
    longDescription:
      "Built an e-library with React, Chakra UI, and Node.js backend. Features book borrowing with due dates, JWT authentication, and admin panel for managing books and users.",
    tech: ["React", "Chakra UI", "Recoil", "Node.js", "Express", "JWT"],
    metrics: [
      "🚀 Admin Managed Books",
      "📅 Borrowing System",
      "🔔 Due Date Alerts",
    ],
    features: [
      "15-day borrowing system with alerts",
      "Admin management panel",
      "JWT-based secure authentication",
      "Due date tracking and notifications",
    ],
    status: "Completed",
    category: "Digital Library System",
    image: "/Projects/Libraria.png",
    githubUrl: "https://github.com/raoofCLT/Libraria-Client",
    featured: false,
    type: "lms",
  },
  {
    title: "Chatzo Social Messaging",
    year: "2024",
    description: "Real-time social app for messaging and commenting.",
    longDescription:
      "Built a secure social platform with React, Node.js, and Socket.io. Features real-time chat, posts, likes, comments, and JWT authentication to foster community engagement.",
    tech: ["React", "Node.js", "Socket.io", "JWT"],
    metrics: [
      "💬 Active Chat Rooms",
      "🔐 User Authentication",
      "👥 Community Members",
    ],
    features: [
      "Real-time chatting and posts",
      "Likes and comments on posts",
      "Secure authentication with JWT",
    ],
    status: "Completed",
    category: "Social Messaging & Real-Time Chat",
    image: "/Projects/Chatzo.png",
    githubUrl: "https://github.com/raoofCLT/Chatzo",
    featured: false,
    type: "social",
  },
];

export interface ExperienceItem {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  logo: string;
  badge?: string;
  website?: string;
  websiteLabel?: string;
  description: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: "Full-Stack Developer",
    company: "Accredit Management Consultancy",
    type: "Full-time",
    period: "Jan 2026 - Present",
    location: "Abu Dhabi, UAE",
    logo: "/AccreditLogo.jpg",
    badge: "Active",
    website: "https://accredit.world/",
    websiteLabel: "accredit.world",
    description: [
      "Architected and developed the company's internal ERP system (Accredit OS) for training registration, candidate follow-up, financial calculations, automated certificate generation, invoice and receipt creation, and executive reports.",
      "Designed, developed, and deployed the official corporate website (accredit.world) with modern responsive UI/UX and SEO optimization.",
      "Managed PostgreSQL and Supabase databases to automate operations and eliminate manual administrative tasks.",
      "Supported digital office administration, documentation, and record verification.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "CODO AI Innovations",
    type: "Full-time",
    period: "Dec 2024 - May 2026",
    location: "Kerala, India",
    logo: "CodoLogo_lcvhyp",
    website: "https://www.codoai.in/",
    websiteLabel: "codoai.in",
    description: [
      "Built and maintained responsive web interfaces using React and Tailwind CSS.",
      "Ensured compatibility across browsers and devices for a consistent user experience.",
      "Collaborated with UI/UX and backend teams to integrate features and APIs smoothly.",
      "Debugged and resolved issues across the frontend, improving application stability and load performance.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Freelance & Independent Contracts",
    type: "Freelance",
    period: "Nov 2023 - Present",
    location: "Remote",
    logo: "FreelanceLogo_lfjnjq",
    description: [
      "Delivered end-to-end full-stack web applications and custom software solutions for international clients from concept to deployment.",
      "Built responsive frontend interfaces with React/Next.js and secure RESTful backend APIs with Node.js, Express, MongoDB, and PostgreSQL.",
      "Communicated directly with clients to gather requirements, iterate on feedback, and deploy production builds.",
    ],
  },
];

export const skillCategories = {
  Frontend: [
    "React",
    "React Native",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Redux",
  ],
  Backend: ["Node.js", "Express", "GraphQL", "REST APIs", "JWT", "Socket.io"],
  "Database & Cloud": [
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Firebase",
    "AWS",
    "Vercel",
  ],
  "Tools & Platforms": [
    "VS Code",
    "Postman",
    "Figma",
    "Git",
    "Vercel",
    "CI/CD",
  ],
};

export const categoryColors = {
  Frontend: "from-blue-400 to-cyan-400",
  Backend: "from-green-400 to-emerald-400",
  "Database & Cloud": "from-purple-400 to-pink-400",
  "Tools & Platforms": "from-yellow-400 to-orange-400",
};
