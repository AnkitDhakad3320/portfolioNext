// ------------------------------ Navigation ------------------------------

export const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

// ------------------------------ Experience ------------------------------

export const EXPERIENCE = [
  {
    period: "2023 – Present",
    title: "Full‑Stack Developer @ TechHelper Technologies",
    bullets: [
      "Built scalable MERN SaaS platform (10k MAU)",
      "Led migration to micro‑services (NestJS + Docker)",
      "Mentored 3 junior devs & improved onboarding docs by 40%",
    ],
  },
  {
    period: "2021 – 2023",
    title: "Frontend Engineer Intern @ StartupX",
    bullets: [
      "Shipped pixel‑perfect React UI in 4 weeks",
      "Implemented CI/CD with GitHub Actions, cutting deployments to <3 min",
      "Collaborated with design to establish component library",
    ],
  },
];

// ------------------------------ Projects ------------------------------

export const PROJECTS = [
  {
    name: "TaskForge AI",
    description: "AI‑assisted Kanban that predicts blockers before they happen.",
    tech: ["Next.js", "PostgreSQL", "Supabase", "OpenAI API"],
    repo: "https://github.com/ankitdhakad/taskforge",
    live: "https://taskforge.ai",
  },
  {
    name: "FitTrack",
    description: "Cross‑platform fitness tracker with realtime WebSockets sync.",
    tech: ["React Native", "Expo", "Socket.io"],
    repo: "https://github.com/ankitdhakad/fittrack",
    live: "https://fittrack.app",
  },
  {
    name: "BlogCraft CMS",
    description: "Headless CMS built with Prisma & tRPC – 100% Typescript.",
    tech: ["Next.js", "Prisma", "tRPC", "Tailwind"],
    repo: "https://github.com/ankitdhakad/blogcraft",
    live: "https://blogcraft.dev",
  },
];

// ------------------------------ Testimonials ------------------------------

export const TESTIMONIALS = [
  {
    author: "Arvind Tiwari",
    role: "Product Manager, Imfi",
    quote:
      "Ankit is the rare engineer who not only writes beautiful code but also understands product. Our velocity doubled after he joined.",
  },
  {
    author: "Rahul Suriyawanshi",
    role: "CTO, QR Staff",
    quote:
      "Delivered critical features ahead of schedule and always brought fresh ideas to the table. Highly recommend!",
  },
];
