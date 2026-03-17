<script setup lang="ts">
import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-vue-next';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

import ProjectCard from '@/components/ProjectCard.vue';
import SectionHeading from '@/components/SectionHeading.vue';
import {
  contact,
  experience,
  hero,
  highlights,
  mailtoHref,
  navLinks,
  projects,
  siteMeta,
  snapshot,
  socialLinks,
  stats,
} from '@/content/site';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
} as const;

const isScrolled = ref(false);
const year = computed(() => new Date().getFullYear());
const linkedinHref = socialLinks.find((link) => link.icon === 'linkedin')?.href ?? '#';

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
  <div class="relative min-h-screen overflow-x-hidden bg-paper-50 text-ink-950">
    <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute left-[-8rem] top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(197,109,84,0.22),transparent_68%)] blur-3xl" />
      <div class="absolute right-[-8rem] top-[12rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(95,124,115,0.18),transparent_70%)] blur-3xl" />
      <div class="absolute left-1/2 top-[32rem] h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(90,108,216,0.12),transparent_72%)] blur-3xl" />
      <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(29,36,51,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(29,36,51,0.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
    </div>

    <header class="fixed inset-x-0 top-0 z-50 px-4 sm:px-6 lg:px-8">
      <div
        :class="[
          'mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition duration-300 sm:px-6',
          isScrolled
            ? 'border-ink-950/10 bg-paper-50/85 shadow-[0_24px_70px_rgba(29,36,51,0.12)] backdrop-blur-xl'
            : 'border-transparent bg-white/60 backdrop-blur-md',
        ]"
      >
        <a href="#top" class="flex items-center gap-3">
          <img
            alt="Lucas Leandro"
            src="/me.jpg"
            class="size-11 rounded-full border border-ink-950/10 object-cover shadow-[0_14px_32px_rgba(29,36,51,0.14)]"
          />

          <div class="hidden sm:block">
            <p class="text-sm font-semibold text-ink-950">
              {{ siteMeta.name }}
            </p>
            <p class="text-xs uppercase tracking-[0.26em] text-ink-800/70">
              {{ siteMeta.title }}
            </p>
          </div>
        </a>

        <nav class="hidden items-center gap-8 text-sm text-ink-900/72 md:flex">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="transition hover:text-ink-950"
          >
            {{ link.label }}
          </a>
        </nav>

        <a
          :href="mailtoHref"
          class="inline-flex items-center gap-2 rounded-full bg-ink-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-ink-900"
        >
          Email Lucas
          <ArrowRight class="size-4" />
        </a>
      </div>
    </header>

    <main id="top" class="mx-auto flex w-full max-w-7xl flex-col gap-24 px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:gap-32 lg:px-8">
      <section class="grid gap-8 lg:grid-cols-[minmax(0,1.12fr)_24rem] lg:items-start">
        <div class="rounded-[2.25rem] border border-ink-950/10 bg-white/78 p-8 shadow-panel backdrop-blur-xl sm:p-10 lg:p-12">
          <p class="text-xs font-semibold uppercase tracking-[0.34em] text-accent">
            {{ hero.eyebrow }}
          </p>

          <h1 class="mt-6 max-w-4xl font-display text-5xl leading-[0.94] text-ink-950 sm:text-6xl lg:text-[5.2rem]">
            {{ siteMeta.name }}
            <span class="mt-5 block max-w-3xl font-sans text-xl font-medium leading-9 text-ink-900/78 sm:text-2xl sm:leading-10">
              {{ hero.title }}
            </span>
          </h1>

          <p class="mt-8 max-w-3xl text-base leading-8 text-ink-900/78 sm:text-lg">
            {{ hero.description }}
          </p>

          <div class="mt-8 flex flex-wrap items-center gap-3 text-sm">
            <span class="inline-flex items-center gap-2 rounded-full border border-ink-950/10 bg-paper-100 px-4 py-2 text-ink-900/78">
              <MapPin class="size-4 text-accent" />
              {{ siteMeta.location }}
            </span>

            <!-- <span class="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent/[0.08] px-4 py-2 text-ink-900/78">
              {{ hero.badge }}
            </span> -->
          </div>

          <div class="mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              class="inline-flex items-center gap-2 rounded-full bg-ink-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink-900"
            >
              View selected work
              <ArrowRight class="size-4" />
            </a>

            <a
              :href="mailtoHref"
              class="inline-flex items-center gap-2 rounded-full border border-ink-950/12 bg-white px-5 py-3 text-sm font-semibold text-ink-950 transition hover:border-ink-950/20 hover:bg-paper-100"
            >
              Discuss a role
              <Mail class="size-4" />
            </a>
          </div>
        </div>

        <aside class="space-y-4">
          <article class="rounded-[2rem] border border-ink-950/10 bg-white/82 p-6 shadow-panel backdrop-blur sm:p-7">
            <div class="flex items-center gap-4">
              <img
                src="/me.jpg"
                alt="Portrait of Lucas Leandro"
                class="h-20 w-20 rounded-[1.5rem] border border-ink-950/10 object-cover shadow-[0_16px_36px_rgba(29,36,51,0.12)]"
              />

              <div>
                <p class="text-lg font-semibold text-ink-950">
                  {{ siteMeta.name }}
                </p>
                <p class="mt-1 text-sm leading-6 text-ink-900/72">
                  Frontend architecture, design systems, and product engineering for SaaS.
                </p>
              </div>
            </div>

            <p class="mt-7 text-xs font-semibold uppercase tracking-[0.3em] text-ink-800/68">
              Why teams hire me
            </p>

            <h2 class="mt-4 text-3xl font-display leading-tight text-ink-950">
              {{ snapshot.title }}
            </h2>

            <ul class="mt-6 space-y-4">
              <li
                v-for="(item, index) in snapshot.items"
                :key="item"
                class="flex gap-4"
              >
                <span class="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/[0.10] text-xs font-semibold text-accent">
                  {{ String(index + 1).padStart(2, '0') }}
                </span>
                <span class="text-sm leading-7 text-ink-900/78">{{ item }}</span>
              </li>
            </ul>

            <div class="mt-8 flex flex-wrap gap-3">
              <a
                v-for="link in socialLinks"
                :key="link.label"
                :href="link.href"
                :target="link.icon === 'mail' ? undefined : '_blank'"
                :rel="link.icon === 'mail' ? undefined : 'noreferrer'"
                class="inline-flex items-center gap-2 rounded-full border border-ink-950/10 bg-paper-50 px-3.5 py-2 text-sm font-medium text-ink-900/78 transition hover:border-ink-950/18 hover:bg-white hover:text-ink-950"
              >
                <component :is="socialIcons[link.icon]" class="size-4" />
                {{ link.label }}
              </a>
            </div>
          </article>

          <article class="rounded-[1.75rem] border border-accent/15 bg-[linear-gradient(135deg,rgba(197,109,84,0.14),rgba(255,255,255,0.92))] p-5 shadow-[0_18px_36px_rgba(29,36,51,0.08)]">
            <p class="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Role fit
            </p>
            <p class="mt-3 text-sm leading-7 text-ink-900/78">
              Strong fit for senior or staff-level roles in SaaS, platform UI, design systems, reporting-heavy products, workflow tooling, and AI-assisted experiences.
            </p>
          </article>
        </aside>
      </section>

      <section id="highlights" class="space-y-12">
        <SectionHeading
          eyebrow="Strengths"
          title="Where I create the most leverage."
          description="The common thread is complex product software that needs both UI judgment and engineering discipline."
        />

        <div class="grid gap-5 lg:grid-cols-3">
          <article
            v-for="(highlight, index) in highlights"
            :key="highlight.title"
            class="rounded-[1.9rem] border border-ink-950/10 bg-white/78 p-6 shadow-panel transition duration-300 hover:-translate-y-1 hover:border-ink-950/18 sm:p-7"
          >
            <div class="flex items-center justify-between gap-4">
              <p class="text-xs font-semibold uppercase tracking-[0.26em] text-ink-800/62">
                0{{ index + 1 }}
              </p>
              <div class="h-px flex-1 bg-[linear-gradient(90deg,rgba(197,109,84,0.4),rgba(29,36,51,0))]" />
            </div>

            <h3 class="mt-5 text-2xl font-semibold text-ink-950">
              {{ highlight.title }}
            </h3>

            <p class="mt-4 text-sm leading-7 text-ink-900/78">
              {{ highlight.description }}
            </p>

            <div class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="item in highlight.stack"
                :key="item"
                class="rounded-full border border-ink-950/10 bg-paper-100 px-3 py-1.5 text-xs font-medium text-ink-900/76"
              >
                {{ item }}
              </span>
            </div>
          </article>
        </div>
      </section>

      <section id="experience" class="space-y-12">
        <SectionHeading
          eyebrow="Experience"
          title="A track record across product companies, client delivery, and technical leadership."
          description="The through-line is ownership: from shipping features to shaping the systems behind them."
        />

        <div class="space-y-5">
          <article
            v-for="item in experience"
            :key="`${item.company}-${item.period}`"
            class="rounded-[2rem] border border-ink-950/10 bg-white/78 p-6 shadow-panel sm:p-8"
          >
            <div class="grid gap-6 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-8">
              <div class="space-y-3">
                <p class="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                  {{ item.company }}
                </p>
                <h3 class="text-2xl font-semibold text-ink-950">
                  {{ item.role }}
                </h3>
                <p class="text-sm leading-7 text-ink-800/72">
                  {{ item.period }}
                </p>
              </div>

              <div class="space-y-6">
                <p class="text-base leading-8 text-ink-900/78">
                  {{ item.description }}
                </p>

                <ul class="space-y-3 text-sm leading-7 text-ink-900/78">
                  <li
                    v-for="point in item.highlights"
                    :key="point"
                    class="flex gap-3"
                  >
                    <span class="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{{ point }}</span>
                  </li>
                </ul>

                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="entry in item.stack"
                    :key="entry"
                    class="rounded-full border border-ink-950/10 bg-paper-100 px-3 py-1.5 text-xs font-medium text-ink-900/76"
                  >
                    {{ entry }}
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="work" class="space-y-12">
        <SectionHeading
          eyebrow="Selected Work"
          title="Representative work across SaaS product engineering, design systems, and AI-enabled platforms."
          description="These projects show range, but also consistency in the type of problems I solve best."
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

      <section
        id="contact"
        class="relative overflow-hidden rounded-[2.25rem] border border-ink-950/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(236,228,216,0.92))] p-8 shadow-panel sm:p-10 lg:p-12"
      >
        <div class="pointer-events-none absolute right-[-4rem] top-[-4rem] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(95,124,115,0.18),transparent_72%)] blur-2xl" />

        <div class="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div class="max-w-3xl">
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-ink-800/68">
              Contact
            </p>

            <h2 class="mt-5 max-w-2xl font-display text-4xl leading-tight text-ink-950 sm:text-5xl">
              {{ contact.title }}
            </h2>

            <p class="mt-5 max-w-2xl text-base leading-8 text-ink-900/78">
              {{ contact.description }}
            </p>

            <div class="mt-6 flex flex-wrap gap-3">
              <a
                v-for="link in socialLinks"
                :key="link.label"
                :href="link.href"
                :target="link.icon === 'mail' ? undefined : '_blank'"
                :rel="link.icon === 'mail' ? undefined : 'noreferrer'"
                class="inline-flex items-center gap-2 rounded-full border border-ink-950/10 bg-white/70 px-3.5 py-2 text-sm font-medium text-ink-900/78 transition hover:border-ink-950/18 hover:bg-white hover:text-ink-950"
              >
                <component :is="socialIcons[link.icon]" class="size-4" />
                {{ link.label }}
              </a>
            </div>
          </div>

          <div class="flex flex-wrap gap-3">
            <a
              :href="mailtoHref"
              class="inline-flex items-center justify-center gap-2 rounded-full bg-ink-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-ink-900"
            >
              lucasleandro1204@gmail.com
              <ArrowRight class="size-4" />
            </a>

            <a
              :href="linkedinHref"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center justify-center gap-2 rounded-full border border-ink-950/12 bg-white/80 px-6 py-3.5 text-sm font-semibold text-ink-950 transition hover:border-ink-950/18 hover:bg-white"
            >
              LinkedIn
              <ArrowRight class="size-4" />
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 pb-8 text-sm text-ink-800/72 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
      <p>&copy; {{ year }} {{ siteMeta.name }}.</p>
      <p>{{ siteMeta.location }}</p>
    </footer>
  </div>
</template>
