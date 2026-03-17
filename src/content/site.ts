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
  eyebrow: string;
  title: string;
  description: string;
  badge: string;
}

export interface SnapshotContent {
  title: string;
  items: string[];
}

export interface Stat {
  label: string;
  value: string;
}

export interface Highlight {
  title: string;
  description: string;
  stack: string[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  stack: string[];
}

export interface Project {
  title: string;
  period: string;
  description: string;
  stack: string[];
  mark: string;
  accent: string;
  gradient: string;
  link?: string;
}

export interface ContactContent {
  title: string;
  description: string;
}

export const siteMeta = {
  name: 'Lucas Leandro',
  title: 'Senior Software Engineer',
  location: 'Florianópolis, Brazil',
  email: 'lucasleandro1204@gmail.com',
  description:
    'Senior Software Engineer from Florianópolis, Brazil, focused on frontend architecture, Vue.js, TypeScript, design systems, and AI-enabled SaaS products.',
};

export const hero = {
  eyebrow: 'Senior Software Engineer',
  title: 'Frontend architecture, design systems, and AI-enabled product work.',
  description:
    'Senior Software Engineer with 9+ years of experience building SaaS products, design systems, and client-facing platforms across Vue.js, TypeScript, Node.js, PHP, and cloud tooling.',
  badge: 'Vue.js, TypeScript, AI-enabled products',
} satisfies HeroContent;

export const snapshot = {
  title: 'Product-minded engineering across interface architecture, application logic, and delivery systems.',
  items: [
    "Top 10 contributor among 265+ authors on Teamwork's Lightspeed frontend.",
    'Led delivery of a Vue-based design system with 50+ production components and Storybook documentation.',
    'Architected a 9-package AI sales platform serving 15+ brands with 20+ integrations.',
  ],
} satisfies SnapshotContent;

export const contact = {
  title: 'Need a senior engineer who can move from product UI to platform architecture without losing delivery quality?',
  description:
    'Reach out if you need help with Vue and TypeScript product work, design systems, reporting or calendar-heavy workflows, or AI-enabled platform delivery.',
} satisfies ContactContent;

export const mailtoHref = `mailto:${siteMeta.email}?subject=From Website: Hello Lucas`;

export const navLinks = [
  {
    label: 'Highlights',
    href: '#highlights',
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

export const stats = [
  {
    label: 'Experience',
    value: '9+ years',
  },
  {
    label: 'Design systems',
    value: '50+ components',
  },
  {
    label: 'AI platform rollout',
    value: '15+ brands',
  },
] satisfies Stat[];

export const highlights = [
  {
    title: 'Large-product frontend ownership',
    description:
      'At Teamwork I work inside a large Vue 3 SaaS codebase, owning reporting builders, scheduled exports, data-heavy UI, calendar flows, and performance-focused product improvements.',
    stack: ['Vue 3', 'TypeScript', 'Reporting', 'Calendar'],
  },
  {
    title: 'Design systems built for production',
    description:
      'I led delivery of Simer, a Vue-based design system with 50+ production components, Storybook documentation, and interface patterns shaped by analytics-heavy client products.',
    stack: ['Vue', 'Storybook', 'Design Systems', 'Analytics UI'],
  },
  {
    title: 'AI-enabled multi-tenant platforms',
    description:
      'I architected a confidential sales platform across nine TypeScript packages, supporting OpenAI and Groq orchestration, messaging workflows, infrastructure automation, and 15+ brand namespaces.',
    stack: ['TypeScript', 'OpenAI', 'Groq', 'Terraform'],
  },
] satisfies Highlight[];

export const experience = [
  {
    company: 'Teamwork',
    role: 'Senior Software Engineer',
    period: 'Nov 2020 - Present',
    description: 'Modernizing and extending a large SaaS product across reporting, calendar, and performance-sensitive workflows.',
    highlights: [
      'Helped evolve the core product toward Vue 3 with stronger architecture, maintainability, and usability.',
      'Owned reporting capabilities across 12 report types, including advanced filters, builders, scheduled reports, and exports.',
      'Built calendar event flows, task views, popovers, and Google Calendar-related integrations.',
    ],
    stack: ['Vue 3', 'TypeScript', 'Performance', 'Product Engineering'],
  },
  {
    company: 'Flow | Estudio Digital',
    role: 'Software Team Lead',
    period: 'Oct 2019 - Nov 2020',
    description: 'Led software delivery across multiple client engagements, setting standards, guiding architecture, and shipping production systems.',
    highlights: [
      'Directed technical delivery from planning through deployment across a multi-project client portfolio.',
      'Delivered products using PHP, WordPress, Node.js, Vue, React, Next.js, and Sass.',
      'Served as lead developer for Simer, including its component system and Storybook documentation.',
    ],
    stack: ['Leadership', 'Vue', 'React', 'Node.js'],
  },
  {
    company: 'Freelance',
    role: 'Software Development Contractor',
    period: 'Jun 2018 - Oct 2019',
    description: 'Built platforms and web interfaces for distributed teams while tightening delivery, CI/CD, and collaboration workflows.',
    highlights: [
      'Shipped product work for Convertpack, OMD, Innbox, SmartTaylor, Tutormundi, Mensageiro MVP, and Site Illa.',
      'Turned designs and business requirements into production-ready web apps and interfaces.',
      'Worked across PHP, Node.js, MongoDB, PostgreSQL, MySQL, Vue, React, Nuxt, Next.js, and Linux.',
    ],
    stack: ['Nuxt', 'Next.js', 'PHP', 'Node.js'],
  },
  {
    company: 'BulldeskCRM',
    role: 'Software Developer',
    period: 'Aug 2016 - Jun 2018',
    description: 'Built and maintained CRM product features across the frontend, application layer, and delivery tooling.',
    highlights: [
      'Developed product features using Laravel, Vue.js, Sass, Pug, and Webpack.',
      'Worked on frontend interfaces, server-side logic, debugging workflows, and build automation.',
    ],
    stack: ['Laravel', 'Vue', 'Sass', 'Webpack'],
  },
] satisfies ExperienceEntry[];

export const projects = [
  {
    title: 'Confidential AI Sales Platform',
    period: '2024 - 2025',
    description:
      'Architected a 9-package TypeScript monorepo for AI-assisted sales operations spanning business logic, APIs, backoffice, chat, reporting, database, E2E testing, and infrastructure provisioning.',
    stack: ['TypeScript', 'OpenAI', 'Groq', 'Terraform', 'AWS'],
    mark: 'AI',
    accent: '#e94560',
    gradient: 'linear-gradient(135deg, rgba(233, 69, 96, 0.18), rgba(26, 7, 15, 0.92))',
  },
  {
    title: 'Teamwork Reporting and Calendar',
    period: '2020 - Present',
    description:
      'Owned reporting builders, scheduled exports, data-heavy interfaces, and major calendar workflows inside Teamwork’s Lightspeed frontend while contributing to broader product modernization.',
    stack: ['Vue 3', 'TypeScript', 'Reporting', 'Calendar'],
    mark: 'TW',
    accent: '#256eff',
    gradient: 'linear-gradient(135deg, rgba(37, 110, 255, 0.18), rgba(7, 19, 48, 0.92))',
    link: 'https://www.teamwork.com',
  },
  {
    title: 'Simer Design System',
    period: '2019 - 2020',
    description:
      'Led delivery of a Vue-based design system with 50+ production components, Storybook documentation, and UI foundations built to support analytics-oriented product work.',
    stack: ['Vue', 'Storybook', 'Design Systems', 'Sass'],
    mark: 'SM',
    accent: '#38c172',
    gradient: 'linear-gradient(135deg, rgba(56, 193, 114, 0.18), rgba(6, 29, 22, 0.94))',
  },
  {
    title: 'vue-content-loading',
    period: '2017 - Present',
    description:
      'Created and maintained an open-source Vue loading-state library while contributing to related Vue and TypeScript community tooling.',
    stack: ['Vue', 'TypeScript', 'Open Source'],
    mark: 'OSS',
    accent: '#f59e0b',
    gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.18), rgba(38, 22, 5, 0.94))',
    link: 'https://github.com/lucasleandro1204',
  },
] satisfies Project[];
