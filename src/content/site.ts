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
    'Senior software engineer focused on complex SaaS interfaces, frontend architecture, design systems, and AI-enabled product platforms.',
};

export const hero = {
  eyebrow: 'Senior Software Engineer',
  title: 'I build the complex parts of product software.',
  description:
    'Over 9+ years I have shipped reporting, workflow-heavy UI, design systems, and AI-enabled platforms for SaaS teams. My strongest work sits where product clarity, frontend architecture, and reliable delivery all have to hold together.',
  badge: 'Best fit: senior or staff-level product engineering',
} satisfies HeroContent;

export const snapshot = {
  title: 'Teams usually bring me in when a product surface is getting harder to scale.',
  items: [
    'Large, stateful interfaces such as reporting, builders, scheduling, exports, and calendar workflows.',
    'Frontend foundations that need stronger architecture, reusable patterns, and a design system that can survive real product pressure.',
    'AI-enabled products that still need clean UX, integration discipline, and end-to-end engineering ownership.',
  ],
} satisfies SnapshotContent;

export const contact = {
  title: 'Hiring for a senior or staff-level engineer who can own product complexity?',
  description:
    'I do my best work with SaaS teams that value product judgment, strong frontend architecture, and direct hands-on delivery. If that is the role, send me an email or reach out on LinkedIn.',
} satisfies ContactContent;

export const mailtoHref = `mailto:${siteMeta.email}?subject=From Website: Hello Lucas`;

export const navLinks = [
  {
    label: 'Strengths',
    href: '#highlights',
  },
  {
    label: 'Experience',
    href: '#experience',
  },
  {
    label: 'Selected Work',
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
    label: 'Teamwork footprint',
    value: 'Top 10 / 265+',
  },
  {
    label: 'Design system',
    value: '50+ components',
  },
  {
    label: 'AI platform',
    value: '15+ brands',
  },
] satisfies Stat[];

export const highlights = [
  {
    title: 'Complex product UI',
    description:
      'I am comfortable owning the interfaces other teams avoid: report builders, scheduling flows, exports, calendar UX, and other state-heavy product surfaces where clarity and correctness both matter.',
    stack: ['Reporting', 'Scheduling', 'Calendar', 'Data-heavy UI'],
  },
  {
    title: 'Frontend architecture that lasts',
    description:
      'I design reusable patterns, component foundations, and delivery conventions that help a product keep moving without turning the codebase into friction for the team.',
    stack: ['Vue 3', 'TypeScript', 'Design Systems', 'Performance'],
  },
  {
    title: 'Product range beyond the frontend',
    description:
      'Frontend is the core strength, but I also work comfortably across APIs, integrations, infrastructure, and AI workflows when the product needs end-to-end engineering ownership.',
    stack: ['Node.js', 'OpenAI', 'Integrations', 'Terraform'],
  },
] satisfies Highlight[];

export const experience = [
  {
    company: 'Teamwork',
    role: 'Senior Software Engineer',
    period: 'Nov 2020 - Present',
    description:
      "Senior engineer on Teamwork's core product, with ownership across reporting, calendar, and frontend modernization inside a large Vue 3 codebase.",
    highlights: [
      'Delivered reporting workflows across 12 report types, including advanced filters, builder UX, scheduled delivery, exports, and data-heavy states.',
      'Shipped calendar features covering event creation, task views, popovers, and Google Calendar-related workflows.',
      'Improved maintainability and product speed through reusable patterns, stronger architecture, and performance-focused frontend decisions.',
    ],
    stack: ['Vue 3', 'TypeScript', 'Performance', 'Product Engineering'],
  },
  {
    company: 'Flow | Estudio Digital',
    role: 'Software Team Lead',
    period: 'Oct 2019 - Nov 2020',
    description:
      'Led a software team across client products, balancing technical direction with hands-on delivery across architecture, implementation, and release work.',
    highlights: [
      'Set technical standards and guided delivery from planning through deployment across multiple parallel engagements.',
      'Worked across PHP, WordPress, Node.js, Vue, React, Next.js, and Sass depending on the product and client context.',
      'Served as lead developer for Simer, including the component library, design system patterns, and Storybook documentation.',
    ],
    stack: ['Leadership', 'Vue', 'React', 'Node.js'],
  },
  {
    company: 'Freelance',
    role: 'Software Development Contractor',
    period: 'Jun 2018 - Oct 2019',
    description:
      'Shipped end-to-end product work for startups and agencies, turning requirements, designs, and evolving business needs into maintainable web applications.',
    highlights: [
      'Delivered product work for Convertpack, OMD, Innbox, SmartTaylor, RD SMS, and Site Illa.',
      'Handled both implementation and delivery improvements, including deployment flow, CI/CD, and collaboration with distributed teams.',
      'Worked across PHP, Node.js, MongoDB, PostgreSQL, MySQL, Vue, React, Nuxt, Next.js, and Linux.',
    ],
    stack: ['Nuxt', 'Next.js', 'PHP', 'Node.js'],
  },
  {
    company: 'BulldeskCRM',
    role: 'Software Developer',
    period: 'Aug 2016 - Jun 2018',
    description:
      'Built product features in a growing CRM and developed the engineering fundamentals that still shape how I approach product delivery.',
    highlights: [
      'Built and maintained product features using Laravel, Vue.js, Sass, Pug, and Webpack.',
      'Worked across frontend interfaces, server-side logic, debugging workflows, and build automation.',
    ],
    stack: ['Laravel', 'Vue', 'Sass', 'Webpack'],
  },
] satisfies ExperienceEntry[];

export const projects = [
  {
    title: 'Confidential AI Sales Platform',
    period: '2024 - 2025',
    description:
      'Architected a multi-tenant TypeScript platform for AI-assisted sales operations spanning chat, APIs, backoffice tooling, reporting, automated messaging, database layers, E2E coverage, and infrastructure.',
    stack: ['TypeScript', 'OpenAI', 'Groq', 'Terraform', 'AWS'],
    mark: 'AI',
    accent: '#c56d54',
    gradient: 'linear-gradient(135deg, rgba(197, 109, 84, 0.24), rgba(255, 244, 237, 0.94))',
  },
  {
    title: 'Teamwork ',
    period: '2020 - Present',
    description:
      "Delivered some of the most complexity-dense product areas inside Teamwork's Lightspeed frontend, including reporting builders, scheduled delivery, data-heavy states, and calendar workflows.",
    stack: ['Vue 3', 'TypeScript', 'Reporting', 'Calendar'],
    mark: 'TW',
    accent: '#5a6cd8',
    gradient: 'linear-gradient(135deg, rgba(90, 108, 216, 0.22), rgba(242, 244, 255, 0.96))',
    link: 'https://www.teamwork.com',
  },
  {
    title: 'Simer Design System',
    period: '2019 - 2020',
    description:
      'Led delivery of a production design system with 50+ components, Storybook documentation, and UI foundations shaped to support analytics-heavy product work.',
    stack: ['Vue', 'Storybook', 'Design Systems', 'Sass'],
    mark: 'DS',
    accent: '#5f7c73',
    gradient: 'linear-gradient(135deg, rgba(95, 124, 115, 0.22), rgba(241, 248, 245, 0.96))',
  },
  {
    title: 'vue-content-loading',
    period: '2017 - Present',
    description:
      'Built and maintained an open-source Vue loading-state library as part of a broader pattern of shipping polished frontend tooling, not only internal product code.',
    stack: ['Vue', 'TypeScript', 'Open Source'],
    mark: 'OSS',
    accent: '#c79734',
    gradient: 'linear-gradient(135deg, rgba(199, 151, 52, 0.22), rgba(255, 249, 235, 0.96))',
    link: 'https://github.com/lucasleandro1204',
  },
] satisfies Project[];
