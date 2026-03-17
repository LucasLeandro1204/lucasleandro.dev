<script setup lang="ts">
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-vue-next';

import ProjectCard from '@/components/ProjectCard.vue';
import {
  about,
  contact,
  experience,
  hero,
  highlights,
  mailtoHref,
  navLinks,
  profileFacts,
  projects,
  resumeFullHref,
  resumeShortHref,
  siteMeta,
  socialLinks,
  stats,
  toolGroups,
} from '@/content/site';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
} as const;

const year = new Date().getFullYear();
const linkedinHref = socialLinks.find((link) => link.icon === 'linkedin')?.href ?? '#';
</script>

<template>
  <div class="relative min-h-screen overflow-x-hidden bg-paper-200 text-ink-950">
    <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute left-[-12rem] top-[-8rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(197,109,84,0.18),transparent_66%)] blur-3xl" />
      <div class="absolute right-[-10rem] top-[8rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(95,124,115,0.16),transparent_68%)] blur-3xl" />
      <div class="absolute bottom-[-12rem] left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(90,108,216,0.12),transparent_70%)] blur-3xl" />
      <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(18,21,25,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(18,21,25,0.045)_1px,transparent_1px)] bg-[size:76px_76px] opacity-45 [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
    </div>

    <main id="top" class="mx-auto w-full max-w-7xl px-4 pb-14 pt-6 sm:px-6 lg:px-8">
      <div class="rounded-[2.8rem] border border-ink-950/10 bg-white/[0.72] p-3 shadow-frame backdrop-blur-xl sm:p-4">
        <header class="sticky top-4 z-50 rounded-[2rem] border border-ink-950/10 bg-white/[0.84] px-4 py-3 shadow-[0_18px_42px_rgba(18,21,25,0.08)] backdrop-blur-xl sm:px-6">
          <div class="flex flex-wrap items-center gap-4">
            <a href="#top" class="flex items-center gap-4">
              <div class="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-[1rem] border border-ink-950/10 bg-paper-50 shadow-[0_10px_24px_rgba(18,21,25,0.08)]">
                <div class="absolute inset-y-0 left-0 w-2.5 bg-[#e7c26a]/75" />
                <div class="absolute inset-y-0 left-2.5 w-2.5 bg-[#6e9687]/[0.58]" />
                <div class="absolute inset-y-0 right-2.5 w-2.5 bg-[#5a6cd8]/[0.42]" />
                <span class="relative font-mono text-xs font-semibold tracking-[0.28em] text-ink-950">LL</span>
              </div>

              <div class="min-w-0">
                <p class="truncate text-sm font-semibold text-ink-950">
                  {{ siteMeta.name }}
                </p>
                <p class="truncate text-xs uppercase tracking-[0.26em] text-ink-800/[0.72]">
                  {{ siteMeta.title }}
                </p>
              </div>
            </a>

            <div class="hidden min-w-0 flex-1 items-center gap-4 lg:flex">
              <div class="min-w-0 flex-1 rounded-full border border-ink-950/10 bg-paper-50/[0.9] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.28em] text-ink-800/[0.72]">
                lucasleandro.dev / portfolio
              </div>

              <nav class="flex items-center gap-6 text-sm text-ink-900/[0.76]">
                <a
                  v-for="link in navLinks"
                  :key="link.href"
                  :href="link.href"
                  class="transition hover:text-ink-950"
                >
                  {{ link.label }}
                </a>
              </nav>
            </div>

            <a
              :href="mailtoHref"
              class="ml-auto inline-flex items-center gap-2 rounded-full bg-ink-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-ink-900"
            >
              Start a conversation
              <ArrowRight class="size-4" />
            </a>
          </div>

          <nav class="mt-3 flex gap-2 overflow-x-auto pb-1 lg:hidden">
            <a
              v-for="link in navLinks"
              :key="`mobile-${link.href}`"
              :href="link.href"
              class="whitespace-nowrap rounded-full border border-ink-950/10 bg-paper-50/[0.9] px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-ink-900/[0.72]"
            >
              {{ link.label }}
            </a>
          </nav>
        </header>

        <section class="mt-4 overflow-hidden rounded-[2.45rem] bg-ink-950 px-6 pb-6 pt-6 text-white sm:px-8 sm:pb-8 lg:px-10 lg:pb-10">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <span class="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/[0.72]">
              <span class="h-2.5 w-2.5 rounded-full bg-signal" />
              {{ hero.eyebrow }}
            </span>

            <span class="font-mono text-[11px] uppercase tracking-[0.28em] text-white/[0.54]">
              {{ hero.badge }}
            </span>
          </div>

          <div class="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_21rem] lg:items-start">
            <div class="animate-rise" style="animation-delay: 120ms">
              <h1 class="max-w-4xl font-display text-5xl leading-[0.92] text-white sm:text-6xl lg:text-[5rem]">
                {{ hero.title }}
              </h1>

              <p class="mt-6 max-w-3xl text-lg leading-8 text-white/[0.74]">
                {{ hero.description }}
              </p>

              <div class="mt-7 flex flex-wrap gap-3 text-sm">
                <span class="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.06] px-4 py-2 text-white/[0.74]">
                  <MapPin class="size-4 text-[#e7c26a]" />
                  {{ siteMeta.location }}
                </span>

                <span class="inline-flex items-center rounded-full border border-white/[0.12] bg-white/[0.06] px-4 py-2 text-white/[0.68]">
                  {{ hero.note }}
                </span>
              </div>

              <div class="mt-10 flex flex-wrap gap-3">
                <a
                  href="#work"
                  class="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink-950 transition hover:bg-paper-50"
                >
                  Selected work
                  <ArrowRight class="size-4" />
                </a>

                <a
                  :href="mailtoHref"
                  class="inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Email Lucas
                  <Mail class="size-4" />
                </a>

                <a
                  :href="resumeShortHref"
                  download
                  class="inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Download CV
                  <Download class="size-4" />
                </a>
              </div>

              <div class="mt-10 flex flex-wrap gap-3">
                <a
                  v-for="link in socialLinks"
                  :key="link.label"
                  :href="link.href"
                  :target="link.icon === 'mail' ? undefined : '_blank'"
                  :rel="link.icon === 'mail' ? undefined : 'noreferrer'"
                  class="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.06] px-3.5 py-2 text-sm font-medium text-white/[0.72] transition hover:bg-white/10 hover:text-white"
                >
                  <component :is="socialIcons[link.icon]" class="size-4" />
                  {{ link.label }}
                </a>
              </div>
            </div>

            <aside class="space-y-4">
              <article class="rounded-[1.85rem] border border-white/[0.12] bg-white/[0.06] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-6">
                <div class="flex items-center gap-4">
                  <img
                    src="/me.jpg"
                    alt="Portrait of Lucas Leandro"
                    class="h-[4.5rem] w-[4.5rem] rounded-[1.3rem] border border-white/[0.12] object-cover shadow-[0_18px_36px_rgba(0,0,0,0.22)]"
                  />

                  <div>
                    <p class="text-lg font-semibold text-white">
                      {{ siteMeta.name }}
                    </p>
                    <p class="mt-1 text-sm leading-6 text-white/[0.64]">
                      Frontend architecture, design systems, and product engineering for SaaS.
                    </p>
                  </div>
                </div>

                <dl class="mt-6 space-y-4">
                  <div
                    v-for="fact in profileFacts"
                    :key="fact.label"
                    class="border-t border-white/10 pt-4 first:border-t-0 first:pt-0"
                  >
                    <dt class="font-mono text-[11px] uppercase tracking-[0.3em] text-white/[0.42]">
                      {{ fact.label }}
                    </dt>
                    <dd class="mt-2 text-sm leading-7 text-white/[0.72]">
                      {{ fact.value }}
                    </dd>
                  </div>
                </dl>
              </article>

              <article class="rounded-[1.85rem] border border-white/10 bg-[linear-gradient(145deg,rgba(243,233,217,0.98),rgba(255,248,239,0.96))] p-5 text-ink-950 shadow-card sm:p-6">
                <p class="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-800/[0.64]">
                  Current focus
                </p>
                <h2 class="mt-3 font-display text-3xl leading-tight text-ink-950">
                  {{ hero.sideTitle }}
                </h2>
                <p class="mt-4 text-sm leading-7 text-ink-900/[0.78]">
                  {{ hero.sideDescription }}
                </p>
              </article>
            </aside>
          </div>

          <div class="mt-10 grid gap-px overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
            <article
              v-for="stat in stats"
              :key="stat.label"
              class="bg-white/[0.04] p-5 sm:p-6"
            >
              <p class="font-display text-3xl text-white sm:text-[2.35rem]">
                {{ stat.value }}
              </p>
              <p class="mt-4 text-xs uppercase tracking-[0.28em] text-white/[0.48]">
                {{ stat.label }}
              </p>
              <p class="mt-3 text-sm leading-6 text-white/[0.68]">
                {{ stat.detail }}
              </p>
            </article>
          </div>
        </section>

        <section id="about" class="mt-6 rounded-[2.25rem] border border-ink-950/10 bg-paper-50/[0.92] p-6 shadow-card sm:p-8 lg:p-10">
          <div class="grid gap-8 lg:grid-cols-[11rem_minmax(0,1fr)] xl:grid-cols-[11rem_minmax(0,1fr)_17rem]">
            <div class="space-y-4">
              <p class="font-mono text-[11px] uppercase tracking-[0.32em] text-ink-800/[0.68]">
                About
              </p>
              <div class="h-px w-16 bg-[linear-gradient(90deg,rgba(197,109,84,0.7),rgba(197,109,84,0))]" />
            </div>

            <div class="space-y-5">
              <h2 class="max-w-4xl font-display text-4xl leading-[1.02] text-ink-950 sm:text-5xl">
                {{ about.title }}
              </h2>

              <p
                v-for="paragraph in about.paragraphs"
                :key="paragraph"
                class="max-w-3xl text-base leading-8 text-ink-900/[0.78]"
              >
                {{ paragraph }}
              </p>
            </div>

            <div class="grid gap-4">
              <article
                v-for="card in about.cards"
                :key="card.title"
                class="rounded-[1.5rem] border border-ink-950/10 bg-white/[0.78] p-5"
              >
                <p class="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-800/[0.62]">
                  {{ card.title }}
                </p>
                <p class="mt-3 text-sm leading-7 text-ink-900/[0.78]">
                  {{ card.description }}
                </p>
              </article>
            </div>
          </div>

          <div class="mt-10 grid gap-4 lg:grid-cols-3">
            <article
              v-for="(item, index) in highlights"
              :key="item.title"
              class="rounded-[1.75rem] border border-ink-950/10 bg-white/[0.82] p-6 transition duration-300 hover:-translate-y-1 hover:border-ink-950/[0.16]"
            >
              <p class="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-800/[0.6]">
                0{{ index + 1 }}
              </p>

              <h3 class="mt-4 text-2xl font-semibold text-ink-950">
                {{ item.title }}
              </h3>

              <p class="mt-4 text-sm leading-7 text-ink-900/[0.78]">
                {{ item.description }}
              </p>

              <ul class="mt-5 space-y-3 text-sm leading-7 text-ink-900/[0.74]">
                <li
                  v-for="point in item.points"
                  :key="point"
                  class="flex gap-3"
                >
                  <span class="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{{ point }}</span>
                </li>
              </ul>

              <div class="mt-6 flex flex-wrap gap-2">
                <span
                  v-for="entry in item.stack"
                  :key="entry"
                  class="rounded-full border border-ink-950/10 bg-paper-100 px-3 py-1.5 text-xs font-medium text-ink-900/[0.74]"
                >
                  {{ entry }}
                </span>
              </div>
            </article>
          </div>
        </section>

        <section id="career" class="mt-6 rounded-[2.25rem] border border-ink-950/10 bg-white/[0.82] p-6 shadow-card sm:p-8 lg:p-10">
          <div class="grid gap-8 lg:grid-cols-[11rem_minmax(0,1fr)]">
            <div class="space-y-4">
              <p class="font-mono text-[11px] uppercase tracking-[0.32em] text-ink-800/[0.68]">
                Career
              </p>
              <div class="h-px w-16 bg-[linear-gradient(90deg,rgba(90,108,216,0.7),rgba(90,108,216,0))]" />
            </div>

            <div class="relative space-y-6">
              <div class="absolute bottom-0 left-1.5 top-0 w-px bg-ink-950/10" />

              <article
                v-for="item in experience"
                :key="`${item.company}-${item.period}`"
                class="relative pl-10"
              >
                <span class="absolute left-0 top-8 h-3 w-3 rounded-full bg-accent ring-8 ring-white/[0.82]" />

                <div class="rounded-[1.8rem] border border-ink-950/10 bg-paper-50/[0.82] p-6 shadow-[0_18px_44px_rgba(18,21,25,0.06)] sm:p-7">
                  <div class="flex flex-wrap items-start justify-between gap-4">
                    <div class="max-w-3xl">
                      <p class="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
                        {{ item.kind }}
                      </p>
                      <h3 class="mt-3 text-2xl font-semibold text-ink-950">
                        {{ item.role }}
                      </h3>
                      <p class="mt-1 text-base text-ink-900/[0.72]">
                        {{ item.company }}
                      </p>
                    </div>

                    <p class="rounded-full border border-ink-950/10 bg-white/[0.86] px-4 py-2 text-sm font-medium text-ink-900/[0.72]">
                      {{ item.period }}
                    </p>
                  </div>

                  <p class="mt-5 max-w-3xl text-base leading-8 text-ink-900/[0.78]">
                    {{ item.description }}
                  </p>

                  <ul class="mt-6 space-y-3 text-sm leading-7 text-ink-900/[0.76]">
                    <li
                      v-for="point in item.highlights"
                      :key="point"
                      class="flex gap-3"
                    >
                      <span class="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{{ point }}</span>
                    </li>
                  </ul>

                  <div class="mt-6 flex flex-wrap gap-2">
                    <span
                      v-for="entry in item.stack"
                      :key="entry"
                      class="rounded-full border border-ink-950/10 bg-white px-3 py-1.5 text-xs font-medium text-ink-900/[0.74]"
                    >
                      {{ entry }}
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="work" class="mt-6 rounded-[2.25rem] border border-ink-950/10 bg-paper-50/[0.92] p-6 shadow-card sm:p-8 lg:p-10">
          <div class="grid gap-8 lg:grid-cols-[11rem_minmax(0,1fr)_16rem] lg:items-end">
            <div class="space-y-4">
              <p class="font-mono text-[11px] uppercase tracking-[0.32em] text-ink-800/[0.68]">
                Work
              </p>
              <div class="h-px w-16 bg-[linear-gradient(90deg,rgba(95,124,115,0.72),rgba(95,124,115,0))]" />
            </div>

            <div>
              <h2 class="max-w-4xl font-display text-4xl leading-[1.02] text-ink-950 sm:text-5xl">
                Representative work across SaaS product engineering, design systems, and AI-enabled platforms.
              </h2>
              <p class="mt-5 max-w-3xl text-base leading-8 text-ink-900/[0.78]">
                These are different kinds of work, but they all point to the same thing: a bias for complex product surfaces, durable frontend foundations, and shipping details that hold together under load.
              </p>
            </div>

            <p class="max-w-sm text-sm leading-7 text-ink-900/[0.72]">
              The selection mixes private product work, public open source, and systems built inside teams where long-term maintainability mattered as much as launch speed.
            </p>
          </div>

          <div class="mt-8 grid gap-6 xl:grid-cols-2">
            <ProjectCard
              v-for="project in projects"
              :key="project.title"
              :project="project"
            />
          </div>
        </section>

        <section id="stack" class="mt-6 rounded-[2.25rem] border border-ink-950/10 bg-white/[0.82] p-6 shadow-card sm:p-8 lg:p-10">
          <div class="grid gap-8 lg:grid-cols-[11rem_minmax(0,1fr)]">
            <div class="space-y-4">
              <p class="font-mono text-[11px] uppercase tracking-[0.32em] text-ink-800/[0.68]">
                Stack
              </p>
              <div class="h-px w-16 bg-[linear-gradient(90deg,rgba(184,139,53,0.72),rgba(184,139,53,0))]" />
            </div>

            <div class="space-y-8">
              <div class="max-w-4xl">
                <h2 class="font-display text-4xl leading-[1.04] text-ink-950 sm:text-5xl">
                  The stack is broad, but the center of gravity is always product engineering.
                </h2>
                <p class="mt-5 text-base leading-8 text-ink-900/[0.78]">
                  I usually work closest to the frontend, but the projects that shaped me also demanded backend fluency, infrastructure awareness, and integration work that connects product ideas to real operations.
                </p>
              </div>

              <div class="grid gap-4 lg:grid-cols-2">
                <article
                  v-for="group in toolGroups"
                  :key="group.title"
                  class="rounded-[1.75rem] border border-ink-950/10 bg-paper-50/[0.88] p-5"
                >
                  <p class="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-800/[0.62]">
                    {{ group.note }}
                  </p>
                  <h3 class="mt-3 text-2xl font-semibold text-ink-950">
                    {{ group.title }}
                  </h3>

                  <div class="mt-5 flex flex-wrap gap-2.5">
                    <span
                      v-for="item in group.items"
                      :key="item"
                      class="rounded-full border border-ink-950/10 bg-white px-3 py-1.5 text-xs font-medium text-ink-900/[0.74]"
                    >
                      {{ item }}
                    </span>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" class="mt-6 overflow-hidden rounded-[2.25rem] border border-ink-950/10 bg-ink-950 p-6 text-white shadow-card sm:p-8 lg:p-10">
          <div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-end">
            <div>
              <p class="font-mono text-[11px] uppercase tracking-[0.32em] text-white/[0.52]">
                Contact
              </p>
              <h2 class="mt-5 max-w-3xl font-display text-4xl leading-[1.02] text-white sm:text-5xl">
                {{ contact.title }}
              </h2>
              <p class="mt-5 max-w-3xl text-base leading-8 text-white/[0.72]">
                {{ contact.description }}
              </p>
              <p class="mt-5 text-sm leading-7 text-white/[0.56]">
                Need the longer version? Download the
                <a
                  :href="resumeFullHref"
                  download
                  class="font-semibold text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
                >
                  detailed CV
                </a>
                .
              </p>
            </div>

            <div class="rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-5">
              <p class="font-mono text-[11px] uppercase tracking-[0.3em] text-white/[0.48]">
                Best for
              </p>
              <p class="mt-3 text-sm leading-7 text-white/[0.72]">
                Senior or staff-level product engineering roles, design-system ownership, workflow-heavy SaaS, reporting products, and AI-enabled operational tools.
              </p>
            </div>
          </div>

          <div class="mt-8 grid gap-px overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
            <a
              :href="mailtoHref"
              class="group bg-white/[0.04] p-5 transition hover:bg-white/[0.08]"
            >
              <p class="font-mono text-[11px] uppercase tracking-[0.3em] text-white/[0.48]">
                Email
              </p>
              <p class="mt-3 text-lg font-semibold text-white">
                {{ siteMeta.email }}
              </p>
              <p class="mt-3 inline-flex items-center gap-2 text-sm text-white/[0.64] transition group-hover:text-white">
                Send a note
                <ArrowRight class="size-4" />
              </p>
            </a>

            <a
              :href="linkedinHref"
              target="_blank"
              rel="noreferrer"
              class="group bg-white/[0.04] p-5 transition hover:bg-white/[0.08]"
            >
              <p class="font-mono text-[11px] uppercase tracking-[0.3em] text-white/[0.48]">
                LinkedIn
              </p>
              <p class="mt-3 text-lg font-semibold text-white">
                lucasleandro1204
              </p>
              <p class="mt-3 inline-flex items-center gap-2 text-sm text-white/[0.64] transition group-hover:text-white">
                Open profile
                <ArrowRight class="size-4" />
              </p>
            </a>

            <a
              href="https://github.com/lucasleandro1204"
              target="_blank"
              rel="noreferrer"
              class="group bg-white/[0.04] p-5 transition hover:bg-white/[0.08]"
            >
              <p class="font-mono text-[11px] uppercase tracking-[0.3em] text-white/[0.48]">
                GitHub
              </p>
              <p class="mt-3 text-lg font-semibold text-white">
                lucasleandro1204
              </p>
              <p class="mt-3 inline-flex items-center gap-2 text-sm text-white/[0.64] transition group-hover:text-white">
                Browse work
                <ArrowRight class="size-4" />
              </p>
            </a>

            <a
              :href="resumeShortHref"
              download
              class="group bg-white/[0.04] p-5 transition hover:bg-white/[0.08]"
            >
              <p class="font-mono text-[11px] uppercase tracking-[0.3em] text-white/[0.48]">
                Resume
              </p>
              <p class="mt-3 text-lg font-semibold text-white">
                Short CV
              </p>
              <p class="mt-3 inline-flex items-center gap-2 text-sm text-white/[0.64] transition group-hover:text-white">
                Download file
                <ArrowRight class="size-4" />
              </p>
            </a>
          </div>
        </section>
      </div>
    </main>

    <footer class="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 pb-8 text-sm text-ink-800/[0.72] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
      <p>&copy; {{ year }} {{ siteMeta.name }}.</p>
      <p>{{ siteMeta.location }}</p>
    </footer>
  </div>
</template>
