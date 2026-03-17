import aiPlatformPreview from '@/assets/previews/ai-platform.svg';
import designSystemPreview from '@/assets/previews/design-system.svg';
import teamworkPreview from '@/assets/previews/teamwork-reporting.svg';

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'mail';
}

export interface HeroContent {
  status: string;
  title: string;
  description: string;
  availability: string;
}

export interface SideNote {
  label: string;
  value: string;
}

export interface Metric {
  value: string;
  label: string;
  detail: string;
}

export interface AboutContent {
  title: string;
  paragraphs: string[];
}

export interface ExperienceEntry {
  period: string;
  role: string;
  company: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface Project {
  kind: string;
  title: string;
  period: string;
  description: string;
  stack: string[];
  preview: string;
  accent: string;
  surface: string;
  link?: string;
}

export interface StackGroup {
  title: string;
  items: string[];
}

export interface ContactContent {
  title: string;
  description: string;
}

export const siteMeta = {
  name: 'Lucas Leandro',
  title: 'Senior Software Engineer',
  location: 'Florianopolis, Brazil',
  email: 'lucasleandro1204@gmail.com',
  description:
    'Senior software engineer focused on frontend architecture, design systems, reporting workflows, and AI-enabled SaaS products.',
};

export const hero = {
  status: 'Open to senior frontend and product engineering roles',
  title: 'I build calm, durable interfaces for products that keep getting more complex.',
  description:
    'My work sits where frontend architecture, design systems, and workflow-heavy SaaS overlap. The goal is not to add more surface area. It is to make ambitious product UI stay clear under real delivery pressure.',
  availability: 'Based in Brazil, working in English and Portuguese.',
} satisfies HeroContent;

export const sideNotes = [
  {
    label: 'Current lane',
    value: 'Reporting, scheduling, calendar flows, system-heavy UI, and product foundations that need to scale.',
  },
  {
    label: 'Best fit',
    value: 'Senior roles where product clarity, frontend quality, and hands-on delivery all matter at the same time.',
  },
  {
    label: 'Working style',
    value: 'Design-aware, implementation-heavy, and comfortable owning the parts of a product that usually get messy first.',
  },
] satisfies SideNote[];

export const contextRibbon = ['Teamwork', 'FLOW', 'Independent delivery', 'Open source'];

export const about = {
  title: 'The through-line in my work is taking dense product surfaces and making them feel structured, legible, and maintainable.',
  paragraphs: [
    'At Teamwork I own reporting, scheduling, calendar, and other workflow-heavy areas inside a large Vue 3 SaaS product. That means balancing correctness, usability, edge cases, and delivery speed without letting the interface collapse under its own complexity.',
    'Before that I led software delivery in a studio environment and shipped products independently across agencies and startups. That range made me comfortable moving from UI details to architecture decisions, design systems, integrations, and the delivery mechanics around the product itself.',
  ],
} satisfies AboutContent;

export const metrics = [
  {
    value: '9+',
    label: 'Years building product UI',
    detail: 'Across SaaS teams, studio leadership, and independent delivery.',
  },
  {
    value: '12',
    label: 'Report types owned',
    detail: 'Builders, filters, scheduled delivery, exports, and related UX.',
  },
  {
    value: '15+',
    label: 'Brands on AI platform',
    detail: 'Multi-tenant ops tied to OpenAI, Groq, Terraform, and AWS.',
  },
] satisfies Metric[];

export const experience = [
  {
    period: '2020 - Present',
    role: 'Senior Software Engineer',
    company: 'Teamwork',
    summary:
      "Core product engineer on Teamwork's Lightspeed frontend, with sustained ownership across reporting, scheduling, calendar, and modernization work.",
    highlights: [
      'Owned reporting UX across advanced filters, builder flows, scheduled delivery, and exports.',
      'Shipped reusable patterns and performance-minded improvements inside a large Vue 3 codebase.',
    ],
    stack: ['Vue 3', 'TypeScript', 'Reporting', 'Calendar'],
  },
  {
    period: '2019 - 2020',
    role: 'Software Team Lead',
    company: 'FLOW | Estudio Digital',
    summary:
      'Led delivery across client products while staying hands-on with architecture, implementation, and release quality.',
    highlights: [
      'Set technical direction across multiple products and delivery streams.',
      'Led Simer design-system work with production components and Storybook documentation.',
    ],
    stack: ['Leadership', 'Vue', 'React', 'Storybook'],
  },
  {
    period: '2018 - 2019',
    role: 'Software Development Contractor',
    company: 'Independent',
    summary:
      'Delivered production platforms for startups and agencies, working end-to-end across interfaces, APIs, deployment workflows, and shifting client constraints.',
    highlights: [
      'Built products across Vue, React, Nuxt, Next.js, PHP, Node.js, and databases.',
      'Improved CI/CD and release flow while translating evolving requirements into maintainable software.',
    ],
    stack: ['Nuxt', 'Next.js', 'PHP', 'Node.js'],
  },
] satisfies ExperienceEntry[];

export const projects = [
  {
    kind: 'Product ownership',
    title: 'Teamwork reporting and calendar',
    period: '2020 - Present',
    description:
      'Complex reporting, exports, scheduling, and calendar-heavy UX inside a large SaaS product.',
    stack: ['Vue 3', 'TypeScript', 'Reporting', 'Calendar'],
    preview: teamworkPreview,
    accent: '#6074d9',
    surface: 'linear-gradient(145deg, rgba(96, 116, 217, 0.18), rgba(244, 246, 255, 0.98))',
    link: 'https://www.teamwork.com',
  },
  {
    kind: 'AI platform',
    title: 'Confidential sales operations platform',
    period: '2024 - 2025',
    description:
      'Multi-tenant AI-assisted sales operations across chat, APIs, backoffice tools, reporting, and infrastructure.',
    stack: ['TypeScript', 'OpenAI', 'Groq', 'Terraform'],
    preview: aiPlatformPreview,
    accent: '#c06d4d',
    surface: 'linear-gradient(145deg, rgba(192, 109, 77, 0.18), rgba(255, 246, 242, 0.98))',
  },
  {
    kind: 'Design system',
    title: 'Simer component library',
    period: '2019 - 2020',
    description:
      'Production Vue design system with reusable components, documentation, and UI foundations for analytics-heavy product work.',
    stack: ['Vue', 'Storybook', 'Design Systems', 'Sass'],
    preview: designSystemPreview,
    accent: '#64806f',
    surface: 'linear-gradient(145deg, rgba(100, 128, 111, 0.18), rgba(244, 249, 246, 0.98))',
  },
] satisfies Project[];

export const stackGroups = [
  {
    title: 'Core stack',
    items: ['Vue 3', 'TypeScript', 'Design systems', 'Workflow UI', 'Reporting UX', 'Calendar UX'],
  },
  {
    title: 'Broader delivery',
    items: ['Node.js', 'PostgreSQL', 'Redis', 'OpenAI', 'Terraform', 'AWS'],
  },
] satisfies StackGroup[];

export const contact = {
  title: 'If you need senior frontend ownership with product judgment, I am interested in roles where interface clarity and system quality both matter.',
  description:
    'Email is the fastest path. LinkedIn and GitHub are below if you want more context first, and the short resume is available for a fast overview.',
} satisfies ContactContent;

export const mailtoHref = `mailto:${siteMeta.email}?subject=From lucasleandro.dev`;
export const resumeShortHref = '/lucas-leandro-resume-short.docx';

export const navLinks = [
  {
    label: 'Profile',
    href: '#about',
  },
  {
    label: 'Experience',
    href: '#experience',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
] satisfies NavLink[];

export const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/lucasleandro1204',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/lucasleandro1204/',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    href: mailtoHref,
    icon: 'mail',
  },
] satisfies SocialLink[];
