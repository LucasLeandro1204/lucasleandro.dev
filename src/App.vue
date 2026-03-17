<script setup lang="ts">
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-vue-next';

import ProjectCard from '@/components/ProjectCard.vue';
import {
  about,
  contact,
  contextRibbon,
  experience,
  hero,
  mailtoHref,
  metrics,
  navLinks,
  projects,
  resumeShortHref,
  sideNotes,
  siteMeta,
  socialLinks,
  stackGroups,
} from '@/content/site';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
} as const;

const year = new Date().getFullYear();
</script>

<template>
  <div class="relative min-h-screen overflow-x-hidden bg-paper-200 text-ink-950">
    <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(247,241,231,0.038)_1px,transparent_1px),linear-gradient(to_bottom,rgba(247,241,231,0.038)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35 [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      <div class="absolute left-[-10rem] top-[-8rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(242,157,121,0.16),transparent_68%)] blur-3xl" />
      <div class="absolute right-[-8rem] top-[10rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(139,200,170,0.14),transparent_68%)] blur-3xl" />
    </div>

    <main class="mx-auto w-full max-w-[1240px] px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
      <div class="rounded-[2.5rem] border border-ink-950/10 bg-paper-50/88 shadow-shell backdrop-blur-sm">
        <header class="sticky top-3 z-40 rounded-[2.2rem] border-b border-ink-950/10 bg-paper-50/92 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8">
          <div class="flex items-center gap-4">
            <a
              href="#top"
              class="flex min-w-0 items-center gap-4"
            >
              <div class="grid h-11 w-11 place-items-center rounded-full border border-ink-950/10 bg-paper-100 text-[11px] font-semibold tracking-[0.28em] text-ink-950">
                LL
              </div>

              <div class="min-w-0">
                <p class="truncate text-sm font-semibold text-ink-950">
                  {{ siteMeta.name }}
                </p>
                <p class="truncate font-mono text-[10px] uppercase tracking-[0.3em] text-ink-800/74">
                  {{ siteMeta.title }}
                </p>
              </div>
            </a>

            <nav class="ml-auto hidden items-center gap-6 text-sm text-ink-900/84 md:flex">
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
              class="hidden rounded-full bg-ink-950 px-4 py-2.5 text-sm font-semibold text-paper-200 transition hover:bg-ink-900 md:inline-flex"
            >
              Email
            </a>
          </div>

          <nav class="mt-4 flex gap-2 overflow-x-auto pb-1 md:hidden">
            <a
              v-for="link in navLinks"
              :key="`mobile-${link.href}`"
              :href="link.href"
              class="whitespace-nowrap rounded-full border border-ink-950/10 bg-paper-100 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-900/84"
            >
              {{ link.label }}
            </a>
          </nav>
        </header>

        <div class="px-5 pb-8 pt-8 sm:px-8 lg:px-12 lg:pb-10 lg:pt-12">
          <section
            id="top"
            class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-14"
          >
            <div class="animate-rise">
              <span class="inline-flex items-center gap-2 rounded-full border border-ink-950/10 bg-paper-100 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.3em] text-ink-800/78">
                <span class="size-2 rounded-full bg-signal" />
                {{ hero.status }}
              </span>

              <h1 class="mt-6 max-w-4xl text-[2.85rem] font-semibold leading-[0.94] tracking-[-0.05em] text-ink-950 sm:text-6xl lg:text-[4.8rem]">
                {{ hero.title }}
              </h1>

              <p class="mt-6 max-w-3xl text-lg leading-8 text-ink-900/90">
                {{ hero.description }}
              </p>

              <div class="mt-5 flex flex-wrap items-center gap-3 text-sm text-ink-800/82">
                <span class="inline-flex items-center gap-2 rounded-full border border-ink-950/10 bg-paper-100 px-3 py-2">
                  <MapPin class="size-4 text-accent" />
                  {{ siteMeta.location }}
                </span>
                <span>{{ hero.availability }}</span>
              </div>

              <div class="mt-8 flex flex-wrap gap-3">
                <a
                  href="#work"
                  class="inline-flex items-center gap-2 rounded-full bg-ink-950 px-5 py-3 text-sm font-semibold text-paper-200 transition hover:bg-ink-900"
                >
                  Selected work
                  <ArrowRight class="size-4" />
                </a>

                <a
                  :href="mailtoHref"
                  class="inline-flex items-center gap-2 rounded-full border border-ink-950/10 bg-paper-100 px-5 py-3 text-sm font-semibold text-ink-950 transition hover:bg-paper-50"
                >
                  Email Lucas
                  <Mail class="size-4" />
                </a>
              </div>
            </div>

            <aside
              class="animate-rise rounded-[1.8rem] border border-ink-950/10 bg-[linear-gradient(180deg,rgba(30,36,44,0.94),rgba(21,25,31,0.98))] p-5 shadow-card sm:p-6"
              style="animation-delay: 120ms"
            >
              <div class="flex items-center gap-4">
                <img
                  src="/me.jpg"
                  alt="Portrait of Lucas Leandro"
                  class="h-[4.5rem] w-[4.5rem] rounded-[1.25rem] border border-ink-950/10 object-cover"
                />

                <div class="min-w-0">
                  <p class="text-lg font-semibold text-ink-950">
                    {{ siteMeta.name }}
                  </p>
                  <p class="mt-1 text-sm leading-6 text-ink-900/82">
                    {{ siteMeta.title }}
                  </p>
                </div>
              </div>

              <dl class="mt-6 space-y-4">
                <div
                  v-for="note in sideNotes"
                  :key="note.label"
                  class="border-t border-ink-950/10 pt-4 first:border-t-0 first:pt-0"
                >
                  <dt class="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-800/68">
                    {{ note.label }}
                  </dt>
                  <dd class="mt-2 text-sm leading-7 text-ink-900/86">
                    {{ note.value }}
                  </dd>
                </div>
              </dl>
            </aside>
          </section>

          <section class="mt-14 border-y border-ink-950/10 py-5">
            <div class="grid gap-4 md:grid-cols-[9rem_minmax(0,1fr)] md:items-center">
              <p class="font-mono text-[10px] uppercase tracking-[0.32em] text-ink-800/72">
                Recent contexts
              </p>

              <div class="flex flex-wrap gap-2.5">
                <span
                  v-for="item in contextRibbon"
                  :key="item"
                  class="rounded-full border border-ink-950/10 bg-paper-100 px-3 py-2 text-[11px] font-medium text-ink-900/84"
                >
                  {{ item }}
                </span>
              </div>
            </div>
          </section>

          <section
            id="about"
            class="mt-14 grid gap-8 lg:grid-cols-[9rem_minmax(0,1fr)]"
          >
            <p class="font-mono text-[10px] uppercase tracking-[0.32em] text-ink-800/72">
              Profile
            </p>

            <div class="grid gap-8 xl:grid-cols-[minmax(0,1fr)_18rem] xl:items-start">
              <div>
                <h2 class="max-w-4xl font-display text-4xl leading-[1.03] text-ink-950 sm:text-5xl">
                  {{ about.title }}
                </h2>

                <p
                  v-for="paragraph in about.paragraphs"
                  :key="paragraph"
                  class="mt-5 max-w-3xl text-base leading-8 text-ink-900/86"
                >
                  {{ paragraph }}
                </p>
              </div>

              <div class="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
                <article
                  v-for="metric in metrics"
                  :key="metric.label"
                  class="rounded-[1.45rem] border border-ink-950/10 bg-paper-100/88 p-4"
                >
                  <p class="font-display text-4xl leading-none text-ink-950">
                    {{ metric.value }}
                  </p>
                  <p class="mt-3 text-sm font-semibold text-ink-950">
                    {{ metric.label }}
                  </p>
                  <p class="mt-2 text-sm leading-6 text-ink-900/82">
                    {{ metric.detail }}
                  </p>
                </article>
              </div>
            </div>
          </section>

          <div class="mt-16 grid gap-16 xl:grid-cols-[minmax(0,1.02fr)_0.98fr] xl:gap-12">
            <section
              id="experience"
              class="grid gap-8 lg:grid-cols-[9rem_minmax(0,1fr)]"
            >
              <p class="font-mono text-[10px] uppercase tracking-[0.32em] text-ink-800/72">
                Experience
              </p>

              <div>
                <p class="max-w-2xl text-base leading-8 text-ink-900/86">
                  Selected roles that show the same pattern across different contexts: make the product clearer, make the frontend sturdier, and ship without losing the system.
                </p>

                <div class="relative mt-8 space-y-8">
                  <div class="absolute bottom-0 left-1.5 top-2 hidden w-px bg-ink-950/12 sm:block" />

                  <article
                    v-for="item in experience"
                    :key="`${item.company}-${item.period}`"
                    class="relative sm:pl-8"
                  >
                    <span class="absolute left-0 top-7 hidden size-3 rounded-full bg-accent ring-8 ring-paper-50 sm:block" />

                    <div class="rounded-[1.6rem] border border-ink-950/10 bg-paper-100/88 p-5 shadow-card sm:p-6">
                      <div class="flex flex-wrap items-start justify-between gap-4">
                        <div class="max-w-3xl">
                          <p class="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                            {{ item.period }}
                          </p>
                          <h3 class="mt-2 text-2xl font-semibold text-ink-950">
                            {{ item.role }}
                          </h3>
                          <p class="mt-1 text-sm text-ink-900/82">
                            {{ item.company }}
                          </p>
                        </div>
                      </div>

                      <p class="mt-4 text-sm leading-7 text-ink-900/86">
                        {{ item.summary }}
                      </p>

                      <ul class="mt-5 space-y-3">
                        <li
                          v-for="point in item.highlights"
                          :key="point"
                          class="flex gap-3 text-sm leading-7 text-ink-900/84"
                        >
                          <span class="mt-3 size-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{{ point }}</span>
                        </li>
                      </ul>

                      <div class="mt-5 flex flex-wrap gap-2">
                        <span
                          v-for="entry in item.stack"
                          :key="entry"
                          class="rounded-full border border-ink-950/10 bg-paper-50 px-3 py-1.5 text-[11px] font-medium text-ink-900/84"
                        >
                          {{ entry }}
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </section>

            <div class="space-y-16">
              <section id="work">
                <p class="font-mono text-[10px] uppercase tracking-[0.32em] text-ink-800/72">
                  Work
                </p>

                <h2 class="mt-4 font-display text-4xl leading-[1.03] text-ink-950 sm:text-[2.9rem]">
                  Selected work
                </h2>

                <p class="mt-4 max-w-2xl text-base leading-8 text-ink-900/86">
                  A tighter selection of product work across SaaS ownership, AI-backed operations, and design-system delivery.
                </p>

                <div class="mt-8 grid gap-5">
                  <ProjectCard
                    v-for="project in projects"
                    :key="project.title"
                    :project="project"
                  />
                </div>
              </section>

              <section class="border-t border-ink-950/10 pt-10">
                <p class="font-mono text-[10px] uppercase tracking-[0.32em] text-ink-800/72">
                  Stack
                </p>

                <div class="mt-5 grid gap-4 sm:grid-cols-2">
                  <article
                    v-for="group in stackGroups"
                    :key="group.title"
                    class="rounded-[1.55rem] border border-ink-950/10 bg-paper-100/88 p-5"
                  >
                    <h3 class="text-lg font-semibold text-ink-950">
                      {{ group.title }}
                    </h3>

                    <div class="mt-4 flex flex-wrap gap-2">
                      <span
                        v-for="item in group.items"
                        :key="item"
                        class="rounded-full border border-ink-950/10 bg-paper-50 px-3 py-1.5 text-[11px] font-medium text-ink-900/84"
                      >
                        {{ item }}
                      </span>
                    </div>
                  </article>
                </div>
              </section>
            </div>
          </div>

          <section
            id="contact"
            class="mt-16 border-t border-ink-950/10 pt-10"
          >
            <div class="grid gap-8 lg:grid-cols-[9rem_minmax(0,1fr)_15rem]">
              <p class="font-mono text-[10px] uppercase tracking-[0.32em] text-ink-800/72">
                Contact
              </p>

              <div>
                <h2 class="max-w-3xl font-display text-4xl leading-[1.03] text-ink-950 sm:text-5xl">
                  {{ contact.title }}
                </h2>

                <p class="mt-5 max-w-2xl text-base leading-8 text-ink-900/86">
                  {{ contact.description }}
                </p>

                <a
                  :href="mailtoHref"
                  class="mt-8 inline-flex break-all items-center gap-3 text-2xl font-semibold tracking-[-0.03em] text-ink-950 transition hover:text-accent sm:break-normal sm:text-3xl"
                >
                  {{ siteMeta.email }}
                  <ArrowRight class="size-5" />
                </a>
              </div>

              <div class="space-y-3">
                <a
                  v-for="link in socialLinks"
                  :key="link.label"
                  :href="link.href"
                  :target="link.icon === 'mail' ? undefined : '_blank'"
                  :rel="link.icon === 'mail' ? undefined : 'noreferrer'"
                  class="flex items-center justify-between rounded-full border border-ink-950/10 bg-paper-100 px-4 py-3 text-sm font-medium text-ink-900/86 transition hover:bg-paper-50 hover:text-ink-950"
                >
                  <span class="inline-flex items-center gap-2">
                    <component :is="socialIcons[link.icon]" class="size-4" />
                    {{ link.label }}
                  </span>
                  <ArrowRight class="size-4" />
                </a>

                <a
                  :href="resumeShortHref"
                  download
                  class="flex items-center justify-between rounded-full border border-ink-950/10 bg-ink-950 px-4 py-3 text-sm font-medium text-paper-200 transition hover:bg-ink-900"
                >
                  <span class="inline-flex items-center gap-2">
                    <Download class="size-4" />
                    Short resume
                  </span>
                  <ArrowRight class="size-4" />
                </a>
              </div>
            </div>
          </section>

          <footer class="mt-12 flex flex-col gap-3 border-t border-ink-950/10 pt-5 text-sm text-ink-800/76 sm:flex-row sm:items-center sm:justify-between">
            <p>Focused on durable product interfaces for SaaS.</p>
            <p>Copyright {{ year }} {{ siteMeta.name }}</p>
          </footer>
        </div>
      </div>
    </main>
  </div>
</template>
