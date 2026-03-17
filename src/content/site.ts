import bulldeskLogo from '../../assets/projects/bulldesk.png';
import convertpackLogo from '../../assets/projects/convertpack.svg';
import innboxLogo from '../../assets/projects/innbox.svg';
import userwayLogo from '../../assets/projects/userway.svg';

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'twitter' | 'linkedin' | 'mail';
}

export interface Stat {
  label: string;
  value: string;
}

export interface Capability {
  title: string;
  description: string;
  stack: string[];
}

export interface Project {
  title: string;
  link: string;
  description: string;
  stack: string[];
  logo: string;
  accent: string;
  gradient: string;
}

export const siteMeta = {
  name: 'Lucas Leandro',
  title: 'Full-stack developer',
  location: 'Florianópolis, Santa Catarina, Brazil',
  email: 'lucasleandro1204@gmail.com',
  description:
    "Lucas Leandro is a full-stack developer from Florianópolis, Brazil, building polished frontends, reliable backends, and static-first experiences.",
};

export const mailtoHref = `mailto:${siteMeta.email}?subject=From Website: Hello Lucas`;

export const navLinks = [
  {
    label: 'Capabilities',
    href: '#capabilities',
  },
  {
    label: 'Projects',
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
    label: 'Twitter',
    href: 'https://twitter.com/lucasleandro412',
    icon: 'twitter',
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
    label: 'Frontend',
    value: 'Vue + React',
  },
  {
    label: 'Backend',
    value: 'Laravel + Node',
  },
  {
    label: 'Quality',
    value: 'Tests by default',
  },
] satisfies Stat[];

export const capabilities = [
  {
    title: 'Interfaces that feel crisp',
    description:
      'I build responsive frontends with Vue and React, using modern CSS systems without letting the UI turn into a generic component dump.',
    stack: ['Vue', 'React', 'SCSS', 'Tailwind'],
  },
  {
    title: 'Backends that stay dependable',
    description:
      'My backend work is grounded in Laravel and Node.js, with enough flexibility to move between Express, Koa, Adonis, and the data layer each product needs.',
    stack: ['Laravel', 'Node.js', 'Express', 'Koa', 'Adonis'],
  },
  {
    title: 'Delivery with fewer surprises',
    description:
      'I use relational and NoSQL databases where they fit, and I write tests because stable software is the fastest way to keep shipping.',
    stack: ['MySQL', 'MongoDB', 'Testing'],
  },
] satisfies Capability[];

export const projects = [
  {
    title: 'Userway',
    link: 'https://userway.io',
    description: 'User onboarding software with a product surface that had to feel direct, fast, and easy to adopt.',
    stack: ['Nuxt', 'Laravel', 'Vue'],
    logo: userwayLogo,
    accent: '#256EFF',
    gradient: 'linear-gradient(135deg, rgba(37, 110, 255, 0.18), rgba(7, 19, 48, 0.92))',
  },
  {
    title: 'Innbox',
    link: 'https://innboxhostels.com.br',
    description: 'Hotel and hostel website designed around storytelling, booking intent, and static-first performance.',
    stack: ['Nuxt'],
    logo: innboxLogo,
    accent: '#38C172',
    gradient: 'linear-gradient(135deg, rgba(56, 193, 114, 0.16), rgba(6, 29, 22, 0.94))',
  },
  {
    title: 'Convertpack',
    link: 'https://convertpack.io',
    description: 'A conversion-focused product suite where the interface had to support both experimentation and day-to-day sales work.',
    stack: ['Nuxt', 'Laravel', 'Vue'],
    logo: convertpackLogo,
    accent: '#3490DC',
    gradient: 'linear-gradient(135deg, rgba(52, 144, 220, 0.16), rgba(5, 20, 34, 0.94))',
  },
  {
    title: 'Bulldesk',
    link: 'https://bulldesk.com.br',
    description: 'Marketing automation and CRM product work with a focus on maintainable delivery across the frontend and application layer.',
    stack: ['Laravel', 'Vue'],
    logo: bulldeskLogo,
    accent: '#38C172',
    gradient: 'linear-gradient(135deg, rgba(233, 69, 96, 0.16), rgba(20, 7, 17, 0.94))',
  },
] satisfies Project[];
