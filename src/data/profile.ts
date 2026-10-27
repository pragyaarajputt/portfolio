// Every fact here comes from Pragya's resume (resume/Pragya_Rajput_Resume.pdf and its
// tailored variants), her GitHub profile and the PostDrip / PlanetPulse READMEs.
// Keep it that way: no metric or claim without a source.

export const profile = {
  name: "Pragya Rajput",
  role: "Full-stack developer",
  location: "New Delhi, India",
  email: "pragyarajhello@gmail.com",
  github: "https://github.com/pragyaarajputt",
  linkedin: "https://www.linkedin.com/in/pragya-rajput31",
  resume: "/Pragya_Rajput_Resume.pdf",
  siteUrl: "https://pragyarajput.vercel.app",
};

export type Job = {
  company: string;
  role: string;
  type: string;
  start: string;
  end: string;
  summary: string;
  points: string[];
  stack: string[];
};

export const experience: Job[] = [
  {
    company: "CETIZION Verifica",
    role: "Jr. Software Developer",
    type: "Full-time",
    start: "May 2025",
    end: "Present",
    summary:
      "I own internal products end to end, from the data model and API to the screens people use every day.",
    points: [
      "Built PlanetPulse Minutes, an AI meeting-minutes service: a Python/FastAPI backend and a Next.js 16 web app with Microsoft and Google sign-in and calendar sync, Dockerized, auto-deployed on push and held to an 80% test-coverage gate.",
      "Automated payslip generation straight from the database, cutting manual HR effort by 80% and reducing payroll errors.",
      "Built workflow automation that generates proposals as PDFs and emails them, shortening proposal turnaround.",
      "Replaced manual data entry with digital questionnaires and Chart.js reporting dashboards on REST APIs.",
      "Improved performance of production React, Node.js and MongoDB applications by 30%.",
    ],
    stack: ["React", "Next.js", "Node.js", "MongoDB", "Python", "FastAPI", "Docker"],
  },
  {
    company: "Tejo Tech Group",
    role: "Web Developer Intern",
    type: "Internship",
    start: "Jan 2025",
    end: "Mar 2025",
    summary: "Frontend work on Flaresens, a fire detection platform.",
    points: [
      "Designed and built a responsive React interface for the Flaresens fire detection platform.",
      "Improved page load time by 20% through frontend performance work.",
      "Built reusable React components and consistent cross-device layouts with Tailwind CSS.",
    ],
    stack: ["React", "Tailwind CSS", "HTML", "CSS"],
  },
];

export type Project = {
  id: string;
  name: string;
  tagline: string;
  context: string;
  status: "Live" | "In production" | "Delivered";
  problem: string;
  contribution: string;
  features: string[];
  decisions: string[];
  stack: string[];
  live?: string;
  code?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    id: "postdrip",
    name: "PostDrip",
    tagline: "Write a post once, with AI help, and publish or schedule it to every connected account.",
    context: "Personal project, built solo",
    status: "Live",
    problem:
      "Small teams juggle several social accounts and rewrite the same post for each one. PostDrip puts accounts, drafts, a calendar and AI writing help in one workspace.",
    contribution:
      "Designed and built the whole product: database schema, Express API, background publishing worker, Next.js app and the Vercel and Neon deployment.",
    features: [
      "Connect Instagram accounts and Facebook Pages; publish now or on a schedule, including carousels and Reels",
      "AI captions in five tones, hashtag suggestions, rewrites and a workspace brand voice",
      "Content calendar, analytics with top posts and CSV export, workspace roles and invites",
    ],
    decisions: [
      "A Postgres-backed job queue (rows claimed with FOR UPDATE SKIP LOCKED) instead of adding Redis",
      "Rotating refresh tokens in an httpOnly cookie with reuse detection, argon2id passwords and login lockout",
      "Platform tokens encrypted with AES-256-GCM; one adapter per social platform behind a shared interface",
    ],
    stack: ["Next.js 16", "React 19", "Tailwind 4", "Express 5", "Prisma 7", "PostgreSQL", "Claude / Gemini", "Cloudinary"],
    live: "https://ai-social-platform-nine.vercel.app",
    code: "https://github.com/pragyaarajputt/ai-social-platform",
  },
  {
    id: "planetpulse",
    name: "PlanetPulse Minutes",
    tagline: "Minutes of meeting, written and emailed automatically when a call ends.",
    context: "CETIZION Verifica",
    status: "In production",
    problem:
      "Teams lost decisions and action items from Hindi and English calls because nobody had time to write minutes.",
    contribution:
      "Built it end to end: the Python/FastAPI service, the Next.js web app and the deployment.",
    features: [
      "A bot joins Google Meet, Zoom and Teams calls and transcribes Hindi and English with real speaker names",
      "An LLM turns the transcript into structured minutes: summary, decisions and action items",
      "Minutes are emailed only to approved domains; the web app shows each meeting's notes",
    ],
    decisions: [
      "HMAC-verified webhooks that answer at once and do the work in the background, ignoring duplicates",
      "LLM output validated against a typed schema, with one retry before failing",
      "About $0.30 per two-hour meeting by routing speech-to-text and the LLM through OpenRouter",
    ],
    stack: ["Python", "FastAPI", "Pydantic", "Next.js 16", "OpenRouter", "S3-compatible storage", "Docker", "pytest"],
    note: "Company project. The code is private.",
  },
  {
    id: "sbo",
    name: "Safety Behavioral Observation app",
    tagline: "A mobile app for reporting safety observations on manufacturing sites.",
    context: "Mobile app",
    status: "Delivered",
    problem: "Site safety observations were collected on paper, so managers saw problems late.",
    contribution: "Built the React Native app and its Node.js API.",
    features: [
      "Real-time observation reports with photo upload and location mapping",
      "Area Manager dashboards for monitoring and reporting",
    ],
    decisions: [],
    stack: ["React Native (Expo)", "Node.js", "MongoDB"],
    note: "Code is private.",
  },
  {
    id: "payslip",
    name: "Payslip automation",
    tagline: "Payslips generated directly from the payroll database.",
    context: "CETIZION Verifica",
    status: "Delivered",
    problem: "HR built payslips by hand every month, which was slow and error-prone.",
    contribution: "Built the system on the MERN stack, including role-based access and REST APIs.",
    features: ["Cut manual HR effort by 80% and payroll errors by 90%", "Role-based access control for HR and staff"],
    decisions: [],
    stack: ["MongoDB", "Express", "React", "Node.js"],
    note: "Company project. The code is private.",
  },
  {
    id: "sales",
    name: "Sales proposal automation",
    tagline: "Proposals generated as PDFs and emailed in one step.",
    context: "CETIZION Verifica",
    status: "Delivered",
    problem: "Each sales proposal was assembled and sent by hand.",
    contribution: "Built proposal generation and email delivery.",
    features: ["Dynamic PDF proposals, reducing manual effort by 70%", "Automatic email delivery with Nodemailer"],
    decisions: [],
    stack: ["MERN", "jsPDF", "Nodemailer"],
    note: "Company project. The code is private.",
  },
];

export type Category = "frontend" | "backend" | "data" | "ai" | "tools";
export type Level = "daily" | "shipped" | "familiar" | "learning";

export type Skill = {
  id: string;
  name: string;
  category: Category;
  level: Level;
  note: string;
};

export const categories: { id: Category; name: string }[] = [
  { id: "frontend", name: "Frontend and mobile" },
  { id: "backend", name: "Backend and APIs" },
  { id: "data", name: "Databases and storage" },
  { id: "ai", name: "Python, AI and LLMs" },
  { id: "tools", name: "Tools and delivery" },
];

export const levels: Record<Level, string> = {
  daily: "Use every day",
  shipped: "Shipped to production",
  familiar: "Worked with",
  learning: "Learning now",
};

export const skills: Skill[] = [
  { id: "react", name: "React", category: "frontend", level: "daily", note: "Every web UI I've shipped, from Flaresens to PostDrip." },
  { id: "next", name: "Next.js", category: "frontend", level: "daily", note: "App Router apps for PostDrip and PlanetPulse Minutes." },
  { id: "ts", name: "TypeScript", category: "frontend", level: "daily", note: "Front to back in PostDrip: Next.js, Express and Prisma." },
  { id: "tailwind", name: "Tailwind CSS", category: "frontend", level: "daily", note: "Responsive layouts and reusable component systems." },
  { id: "rn", name: "React Native", category: "frontend", level: "shipped", note: "The Expo app for safety observations on site." },

  { id: "node", name: "Node.js", category: "backend", level: "daily", note: "APIs behind most CETIZION modules and PostDrip." },
  { id: "express", name: "Express", category: "backend", level: "daily", note: "Express 5 API for PostDrip with zod validation and rate limits." },
  { id: "rest", name: "REST and webhooks", category: "backend", level: "daily", note: "REST APIs at work; HMAC-verified webhooks in PlanetPulse." },
  { id: "auth", name: "OAuth and JWT", category: "backend", level: "shipped", note: "OAuth account connections, rotating refresh tokens, RBAC." },
  { id: "jobs", name: "Job queues", category: "backend", level: "shipped", note: "PostDrip's Postgres-backed publishing queue and worker." },

  { id: "postgres", name: "PostgreSQL", category: "data", level: "daily", note: "PostDrip's database, hosted on Neon in production." },
  { id: "prisma", name: "Prisma", category: "data", level: "daily", note: "Prisma 7 schema and committed SQL migrations." },
  { id: "mongo", name: "MongoDB", category: "data", level: "daily", note: "The data layer of the MERN apps at CETIZION." },
  { id: "mysql", name: "MySQL", category: "data", level: "familiar", note: "Relational SQL alongside PostgreSQL." },
  { id: "s3", name: "Object storage", category: "data", level: "shipped", note: "S3-compatible transcript storage and Cloudinary media." },

  { id: "python", name: "Python", category: "ai", level: "shipped", note: "About a year of professional Python on PlanetPulse." },
  { id: "fastapi", name: "FastAPI", category: "ai", level: "shipped", note: "Typed request and response models with Pydantic." },
  { id: "llm", name: "LLM APIs", category: "ai", level: "shipped", note: "Claude, Gemini and OpenRouter in production features." },
  { id: "schema", name: "Structured output", category: "ai", level: "shipped", note: "Schema-validated JSON from models, with retries." },
  { id: "rag", name: "RAG", category: "ai", level: "learning", note: "Retrieval, embeddings and vector search: what I'm studying next." },

  { id: "docker", name: "Docker", category: "tools", level: "shipped", note: "Containerized services with auto-deploy on push." },
  { id: "vercel", name: "Vercel", category: "tools", level: "shipped", note: "Where PostDrip runs, with Neon Postgres." },
  { id: "testing", name: "Vitest and pytest", category: "tools", level: "shipped", note: "API integration tests and an 80% coverage gate." },
  { id: "git", name: "Git and GitHub", category: "tools", level: "daily", note: "Day-to-day version control and code review." },
  { id: "aws", name: "AWS", category: "tools", level: "familiar", note: "Cloud services; my deploys so far run on Vercel and Docker." },
];

export const education = [
  {
    school: "Manav Rachna University",
    degree: "B.Tech in Computer Science and Engineering",
    years: "2021 – 2025",
    detail: "Led a team of more than six developers on university projects.",
  },
  {
    school: "Kamal Public Senior Secondary School",
    degree: "Class XII (76.4%) and Class X (80%)",
    years: "2018 – 2021",
    detail: "",
  },
];
