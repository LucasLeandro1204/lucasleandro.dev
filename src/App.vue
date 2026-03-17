<script setup lang="ts">
import { ArrowRight, Github, Linkedin, Mail, MapPin, Twitter } from 'lucide-vue-next';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

import ProjectCard from '@/components/ProjectCard.vue';
import SectionHeading from '@/components/SectionHeading.vue';
import { capabilities, mailtoHref, navLinks, projects, siteMeta, socialLinks, stats } from '@/content/site';

const socialIcons = {
  github: Github,
  twitter: Twitter,
  linkedin: Linkedin,
  mail: Mail,
} as const;

const isScrolled = ref(false);
const year = computed(() => new Date().getFullYear());

const handleScroll = () => {
  isScrolled.value = window.scrollY > 12;
};

onMounted(() => {
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="relative overflow-x-hidden">
    <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute left-1/2 top-[-8rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(233,69,96,0.26),transparent_66%)] blur-3xl" />
      <div class="absolute right-[-6rem] top-[18rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(37,110,255,0.18),transparent_72%)] blur-3xl" />
      <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_top,black,transparent_82%)]" />
    </div>

    <header class="fixed inset-x-0 top-0 z-50 px-4 sm:px-6 lg:px-8">
      <div
        :class="[
          'mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border px-4 py-3 transition duration-300 sm:px-6',
          isScrolled
            ? 'border-white/[0.12] bg-ink-950/[0.85] shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl'
            : 'border-white/[0.08] bg-white/[0.05] backdrop-blur-md',
        ]"
      >
        <a href="#top" class="flex items-center gap-3">
          <img
            alt="Lucas Leandro"
            src="/me.jpg"
            class="size-11 rounded-full border border-white/10 object-cover shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
          />

          <div class="hidden sm:block">
            <p class="text-sm font-semibold text-white">
              {{ siteMeta.name }}
            </p>
            <p class="text-xs uppercase tracking-[0.25em] text-white/[0.45]">
              {{ siteMeta.title }}
            </p>
          </div>
        </a>

        <nav class="hidden items-center gap-8 text-sm text-white/[0.7] md:flex">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="transition hover:text-white"
          >
            {{ link.label }}
          </a>
        </nav>

        <a
          :href="mailtoHref"
          class="inline-flex items-center gap-2 rounded-full border border-accent/[0.35] bg-accent/10 px-4 py-2 text-sm font-medium text-white transition hover:border-accent/[0.6] hover:bg-accent/[0.18]"
        >
          Contact
          <ArrowRight class="size-4" />
        </a>
      </div>
    </header>

    <main id="top" class="mx-auto flex w-full max-w-6xl flex-col gap-28 px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:gap-36 lg:px-8">
      <section class="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,28rem)] lg:items-center">
        <div>
          <p class="text-sm font-medium uppercase tracking-[0.35em] text-accent/80">
            Full-stack developer
          </p>

          <h1 class="mt-6 max-w-4xl font-display text-5xl leading-none text-white sm:text-6xl lg:text-7xl">
            Lucas Leandro.
            <span class="mt-4 block font-sans text-xl font-medium leading-9 text-slate-300 sm:text-2xl sm:leading-10">
              Sharp interfaces, dependable backends, and static-first delivery for products that need to feel fast and human.
            </span>
          </h1>

          <div class="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/[0.65]">
            <span class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2">
              <MapPin class="size-4 text-accent" />
              {{ siteMeta.location }}
            </span>

            <span class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2">
              I solve problems.
            </span>
          </div>

          <p class="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I work across Vue and React on the front end, Laravel and Node.js on the back end, and the supporting systems needed to keep products stable as they grow.
          </p>

          <div class="mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              class="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink-950 transition hover:bg-slate-200"
            >
              View selected work
              <ArrowRight class="size-4" />
            </a>

            <a
              :href="mailtoHref"
              class="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.08]"
            >
              Start a conversation
              <Mail class="size-4" />
            </a>
          </div>

          <div class="mt-12 grid gap-4 sm:grid-cols-3">
            <article
              v-for="stat in stats"
              :key="stat.label"
              class="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-panel"
            >
              <p class="text-xs uppercase tracking-[0.28em] text-white/[0.45]">
                {{ stat.label }}
              </p>
              <p class="mt-3 text-lg font-semibold text-white">
                {{ stat.value }}
              </p>
            </article>
          </div>
        </div>

        <aside class="relative">
          <div class="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle,rgba(233,69,96,0.14),transparent_68%)] blur-2xl" />

          <article class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-panel backdrop-blur sm:p-8">
            <div class="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)]" />

            <img
              src="/me.jpg"
              alt="Portrait of Lucas Leandro"
              class="h-24 w-24 rounded-3xl border border-white/10 object-cover shadow-[0_18px_50px_rgba(0,0,0,0.32)]"
            />

            <p class="mt-6 text-xs font-medium uppercase tracking-[0.3em] text-white/[0.5]">
              Snapshot
            </p>

            <h2 class="mt-4 max-w-sm text-3xl font-semibold leading-tight text-white">
              Product-minded engineering across the interface, application, and delivery layers.
            </h2>

            <ul class="mt-6 space-y-4 text-sm leading-7 text-slate-300">
              <li>Front-end work centered on Vue, React, and CSS systems that feel intentional.</li>
              <li>Back-end experience spanning Laravel, Node.js, Express, Koa, and Adonis.</li>
              <li>Database and testing discipline aimed at stability instead of heroics after release.</li>
            </ul>

            <div class="mt-8 flex flex-wrap gap-3">
              <a
                v-for="link in socialLinks"
                :key="link.label"
                :href="link.href"
                :aria-label="link.label"
                target="_blank"
                rel="noreferrer"
                class="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white/[0.8] transition hover:border-white/20 hover:bg-white/[0.1] hover:text-white"
              >
                <component :is="socialIcons[link.icon]" class="size-[1.125rem]" />
              </a>
            </div>
          </article>
        </aside>
      </section>

      <section id="capabilities" class="space-y-12">
        <SectionHeading
          eyebrow="Capabilities"
          title="From landing pages to product workflows, the work spans the whole stack."
          description="The original site talked about frontend, backend, databases, and testing separately. The rebuild keeps that structure, but presents it in a cleaner, more current way."
        />

        <div class="grid gap-5 lg:grid-cols-3">
          <article
            v-for="capability in capabilities"
            :key="capability.title"
            class="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-panel transition duration-300 hover:border-white/[0.18] hover:bg-white/[0.06] sm:p-7"
          >
            <p class="text-xs font-medium uppercase tracking-[0.28em] text-accent/[0.75]">
              Focus
            </p>

            <h3 class="mt-4 text-2xl font-semibold text-white">
              {{ capability.title }}
            </h3>

            <p class="mt-4 text-sm leading-7 text-slate-300">
              {{ capability.description }}
            </p>

            <div class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="item in capability.stack"
                :key="item"
                class="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-white/[0.7]"
              >
                {{ item }}
              </span>
            </div>
          </article>
        </div>
      </section>

      <section id="work" class="space-y-12">
        <SectionHeading
          eyebrow="Selected Work"
          title="A compact portfolio, rebuilt with a stronger visual system and the same core project story."
          description="The original site only surfaced a few highlights. This version keeps that curated feel, adds more structure, and gives each project room to breathe."
        />

        <div class="grid gap-6 lg:grid-cols-2">
          <ProjectCard
            v-for="(project, index) in projects"
            :key="project.title"
            :project="project"
            :offset="index % 2 === 1"
          />
        </div>
      </section>

      <section id="contact" class="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-8 shadow-panel sm:p-10">
        <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div class="max-w-3xl">
            <p class="text-xs font-medium uppercase tracking-[0.35em] text-white/[0.5]">
              Contact
            </p>

            <h2 class="mt-5 font-display text-4xl leading-tight text-white sm:text-5xl">
              Need a developer who can move from visual polish to application architecture without dropping quality?
            </h2>

            <p class="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Reach out and tell me what needs to ship. I work best on products that care about performance, clarity, and maintainable delivery.
            </p>
          </div>

          <a
            :href="mailtoHref"
            class="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#ff5876]"
          >
            lucasleandro1204@gmail.com
            <ArrowRight class="size-4" />
          </a>
        </div>
      </section>
    </main>

    <footer class="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 pb-8 text-sm text-white/[0.45] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
      <p>&copy; {{ year }} {{ siteMeta.name }}. Built with Vue, Vite SSG, Tailwind CSS v4, and TypeScript.</p>
      <p>{{ siteMeta.location }}</p>
    </footer>
  </div>
</template>
