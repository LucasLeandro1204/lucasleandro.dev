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
  badge: string;
  title: string;
  description: string;
  note: string;
  sideTitle: string;
  sideDescription: string;
}

export interface ProfileFact {
  label: string;
  value: string;
}

export interface Stat {
  label: string;
  value: string;
  detail: string;
}

export interface AboutCard {
  title: string;
  description: string;
}

export interface AboutContent {
  title: string;
  paragraphs: string[];
  cards: AboutCard[];
}

export interface Highlight {
  title: string;
  description: string;
  points: string[];
  stack: string[];
}

export interface ExperienceEntry {
  kind: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  stack: string[];
}

export interface Project {
  kind: string;
  title: string;
  period: string;
  description: string;
  outcomes: string[];
  stack: string[];
  mark: string;
  accent: string;
  gradient: string;
  link?: string;
}

export interface ToolGroup {
  title: string;
  note: string;
  items: string[];
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
    'Senior software engineer for complex product interfaces, frontend architecture, design systems, and AI-enabled SaaS platforms.',
};

export const hero = {
  eyebrow: 'Senior Software Engineer',
  badge: 'Frontend architecture / design systems / AI platforms',
  title: 'I build product interfaces that keep their shape as complexity grows.',
  description:
    'Over 9+ years I have moved between SaaS product teams, studio leadership, freelance delivery, and AI-enabled platforms. The work changes, but the pattern stays the same: state-heavy interfaces, strong frontend architecture, and product decisions that need to survive real delivery pressure.',
  note: 'English + Portuguese',
  sideTitle: 'Product-minded frontend ownership',
  sideDescription:
    'My strongest lane is the overlap between frontend architecture, design systems, and high-stakes product surfaces such as reporting, scheduling, exports, builders, calendar flows, and multi-tenant backoffice tools.',
} satisfies HeroContent;

export const profileFacts = [
  {
    label: 'Now',
    value: 'Senior engineer at Teamwork, owning reporting and calendar-heavy product areas inside a large Vue 3 SaaS codebase.',
  },
  {
    label: 'Best at',
    value: 'Taking on the parts of a product that are hardest to keep clear: stateful UI, reusable foundations, and workflow-heavy interfaces.',
  },
  {
    label: 'Range',
    value: 'Vue.js, TypeScript, Node.js, PHP, AI integrations, infrastructure-minded delivery, and the systems around the UI.',
  },
  {
    label: 'Fit',
    value: 'Senior or staff-level product engineering roles where product clarity and maintainability matter as much as shipping speed.',
  },
] satisfies ProfileFact[];

export const about = {
  title:
    'The through-line in my career is not a single framework. It is taking messy product surfaces and making them coherent for both users and the team shipping them.',
  paragraphs: [
    "At Teamwork I have spent the last several years inside a large SaaS product, with ownership across reporting, calendar, filters, scheduling, exports, and other complexity-dense areas where correctness, usability, and maintainability all matter at once.",
    'Before that, I led software delivery at FLOW across multiple client products and design-system work, then built a broad freelance base across platforms, interfaces, deployment workflows, and end-to-end product delivery. That mix left me comfortable moving from UI detail to architecture decisions without losing the product thread.',
  ],
  cards: [
    {
      title: 'Recent themes',
      description:
        'Reporting builders, scheduled delivery, design systems, reusable product patterns, calendar UX, and AI-enabled backoffice platforms.',
    },
    {
      title: 'What teams get',
      description:
        'Hands-on execution, clear technical direction, and systems that stay maintainable after launch instead of collapsing into one-off solutions.',
    },
  ],
} satisfies AboutContent;

export const contact = {
  title: 'If you need a senior engineer who can turn product complexity into shippable interface systems, let’s talk.',
  description:
    'I fit best where frontend architecture, design systems, and direct product delivery all matter. Email me, reach out on LinkedIn, or download the concise CV for a fast overview.',
} satisfies ContactContent;

export const mailtoHref = `mailto:${siteMeta.email}?subject=From lucasleandro.dev`;
export const resumeShortHref = '/lucas-leandro-resume-short.docx';
export const resumeFullHref = '/lucas-leandro-resume-full.docx';

export const navLinks = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Career',
    href: '#career',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Stack',
    href: '#stack',
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
    detail: 'From Bulldesk to Teamwork, across product, studio, and independent delivery contexts.',
  },
  {
    label: 'Teamwork footprint',
    value: 'Top 10',
    detail: 'Contributor among 265+ authors on the Lightspeed frontend.',
  },
  {
    label: 'Design system',
    value: '50+ components',
    detail: 'Simer component library with Storybook documentation and analytics-heavy UI.',
  },
  {
    label: 'AI platform',
    value: '15+ brands',
    detail: 'Multi-tenant sales operations with OpenAI, Groq, and 20+ integrations.',
  },
] satisfies Stat[];

export const highlights = [
  {
    title: 'Complex product UI',
    description:
      'I gravitate toward the parts of a product that accumulate the most edge cases and state, then shape them into something usable and durable.',
    points: [
      'Reporting, filters, builders, scheduled delivery, exports, and calendar flows.',
      'User experience decisions that need strong structure, not just polished visuals.',
    ],
    stack: ['Reporting', 'Workflow UI', 'Scheduling', 'Calendar'],
  },
  {
    title: 'Architecture with product taste',
    description:
      'The goal is not abstraction for its own sake. I build reusable foundations that help teams move faster without flattening the product.',
    points: [
      'Vue 3 modernization, reusable patterns, component systems, and performance work.',
      'Design-system discipline that stays connected to actual product constraints.',
    ],
    stack: ['Vue 3', 'TypeScript', 'Design Systems', 'Performance'],
  },
  {
    title: 'Range beyond the browser',
    description:
      'Frontend is the center of gravity, but I can move outward when the product needs it: APIs, integrations, infrastructure, and AI orchestration.',
    points: [
      'Node.js, Laravel, databases, CI/CD, Terraform, and AWS-backed delivery.',
      'OpenAI and Groq workflows tied into messaging, ops tooling, and product logic.',
    ],
    stack: ['Node.js', 'OpenAI', 'Integrations', 'Terraform'],
  },
] satisfies Highlight[];

export const experience = [
  {
    kind: 'Product company',
    company: 'Teamwork',
    role: 'Senior Software Engineer',
    period: 'Nov 2020 - Present',
    description:
      "Core product engineer on Teamwork's Lightspeed frontend, with sustained ownership across reporting, calendar, and frontend modernization work.",
    highlights: [
      'Owned reporting experiences across 12 report types, from advanced filters and builder flows to scheduled delivery, exports, and dense UI states.',
      'Built major calendar functionality including event management flows, task views, popovers, and Google Calendar-related workflows.',
      'Shipped reusable patterns and performance-focused improvements that helped a large Vue 3 product stay maintainable as complexity increased.',
    ],
    stack: ['Vue 3', 'TypeScript', 'Reporting', 'Calendar'],
  },
  {
    kind: 'Studio leadership',
    company: 'FLOW | Estúdio Digital',
    role: 'Software Team Lead',
    period: 'Oct 2019 - Nov 2020',
    description:
      'Led software delivery across multiple client products, setting standards while staying hands-on with architecture, implementation, and release work.',
    highlights: [
      'Guided project delivery from planning through deployment for ICTS, Simer, Social Bank, and Algar.',
      'Worked across PHP, WordPress, Node.js, Vue, React, Next.js, and Sass depending on the product and client context.',
      'Served as lead developer for Simer, including the component library, design-system patterns, and Storybook documentation.',
    ],
    stack: ['Leadership', 'Vue', 'React', 'Node.js'],
  },
  {
    kind: 'Independent delivery',
    company: 'Freelance',
    role: 'Software Development Contractor',
    period: 'Jun 2018 - Oct 2019',
    description:
      'Built production platforms and web interfaces for startups and agencies, translating evolving requirements into maintainable software and better delivery flow.',
    highlights: [
      'Delivered product work for Convertpack, OMD, Innbox, SmartTaylor, Tutormundi, Mensageiro MVP, and Site Illa.',
      'Improved deployment and CI/CD workflows while collaborating across distributed teams and shifting client priorities.',
      'Worked across PHP, Node.js, MongoDB, PostgreSQL, MySQL, Vue, React, Nuxt, Next.js, and Linux.',
    ],
    stack: ['Nuxt', 'Next.js', 'PHP', 'Node.js'],
  },
  {
    kind: 'Product foundation',
    company: 'BulldeskCRM',
    role: 'Software Developer',
    period: 'Aug 2016 - Jun 2018',
    description:
      'Built product features in a growing CRM and developed the engineering fundamentals that still shape how I approach product delivery.',
    highlights: [
      'Built and maintained product features using Laravel, Vue.js, Sass, Pug, and Webpack.',
      'Worked across frontend interfaces, server-side logic, testing, debugging, and build automation.',
    ],
    stack: ['Laravel', 'Vue', 'Sass', 'Webpack'],
  },
] satisfies ExperienceEntry[];

export const projects = [
  {
    kind: 'Selected platform',
    title: 'Confidential AI Sales Platform',
    period: '2024 - 2025',
    description:
      'Architected a 9-package TypeScript platform for AI-assisted sales operations across chat, APIs, backoffice tooling, reporting, messaging, database layers, end-to-end testing, and infrastructure.',
    outcomes: [
      '15+ brand namespaces in production',
      '20+ integrations across messaging, payments, and ops tooling',
      'OpenAI and Groq orchestration backed by Terraform and AWS',
    ],
    stack: ['TypeScript', 'OpenAI', 'Groq', 'Terraform', 'AWS'],
    mark: 'AI',
    accent: '#c56d54',
    gradient: 'linear-gradient(145deg, rgba(197, 109, 84, 0.28), rgba(255, 244, 237, 0.96))',
  },
  {
    kind: 'Product ownership',
    title: 'Teamwork Reporting and Calendar',
    period: '2020 - Present',
    description:
      "Delivered some of the most complexity-dense product areas inside Teamwork's frontend, spanning builders, scheduled reporting, data-heavy states, and calendar workflows.",
    outcomes: [
      'Reporting across 12 report types',
      'Advanced filters, scheduled delivery, and exports',
      'Calendar flows plus Google Calendar integration work',
    ],
    stack: ['Vue 3', 'TypeScript', 'Reporting', 'Calendar'],
    mark: 'TW',
    accent: '#5a6cd8',
    gradient: 'linear-gradient(145deg, rgba(90, 108, 216, 0.25), rgba(242, 244, 255, 0.96))',
    link: 'https://www.teamwork.com',
  },
  {
    kind: 'Design system',
    title: 'Simer Component Library',
    period: '2019 - 2020',
    description:
      'Led delivery of a production Vue design system that supported analytics-oriented product work with consistent components, documentation, and UI foundations.',
    outcomes: [
      '50+ production-ready components',
      'Storybook documentation for faster team adoption',
      'Primary contributor behind 51.5 percent of repository commits',
    ],
    stack: ['Vue', 'Storybook', 'Design Systems', 'Sass'],
    mark: 'DS',
    accent: '#5f7c73',
    gradient: 'linear-gradient(145deg, rgba(95, 124, 115, 0.24), rgba(241, 248, 245, 0.96))',
  },
  {
    kind: 'Open source',
    title: 'Vue Content Loading',
    period: '2017 - Present',
    description:
      'Creator of vue-content-loading and contributor to other Vue and TypeScript tooling, keeping a public thread of frontend craft beyond client and product work.',
    outcomes: [
      'Long-running public project since 2017',
      'Creator of vue-content-loading',
      'Part of a broader pattern of shipping polished frontend tooling',
    ],
    stack: ['Vue', 'TypeScript', 'Open Source'],
    mark: 'OSS',
    accent: '#b88b35',
    gradient: 'linear-gradient(145deg, rgba(184, 139, 53, 0.24), rgba(255, 249, 235, 0.96))',
    link: 'https://github.com/lucasleandro1204',
  },
] satisfies Project[];

export const toolGroups = [
  {
    title: 'Product frontend',
    note: 'Frameworks and UI delivery',
    items: ['Vue.js 2/3', 'TypeScript', 'Nuxt.js', 'React', 'Next.js', 'Tailwind CSS', 'Sass / SCSS'],
  },
  {
    title: 'Design systems',
    note: 'Reusable product foundations',
    items: ['Storybook', 'Component architecture', 'Performance work', 'Accessibility', 'Schema-driven UI', 'Product patterns'],
  },
  {
    title: 'Platform and backend',
    note: 'The systems behind the interface',
    items: ['Node.js', 'Koa', 'Express', 'Laravel', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'AI and delivery',
    note: 'Infrastructure, integrations, and ops',
    items: ['OpenAI', 'Groq', 'Terraform', 'AWS', 'Docker', 'GitHub Actions', 'Twilio', 'SendGrid', 'Mailgun'],
  },
] satisfies ToolGroup[];
