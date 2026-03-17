<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next';

import type { Project } from '@/content/site';

defineProps<{
  project: Project;
  offset?: boolean;
}>();
</script>

<template>
  <article
    :class="[
      'group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-panel transition duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.06] sm:p-8',
      offset ? 'lg:translate-y-10' : '',
    ]"
  >
    <div class="absolute inset-px rounded-[1.9rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0))] opacity-0 transition duration-300 group-hover:opacity-100" />

    <div class="relative flex h-full flex-col gap-6">
      <div class="overflow-hidden rounded-[1.5rem] border border-white/10 p-6 sm:p-8" :style="{ background: project.gradient }">
        <p class="font-display text-4xl font-semibold tracking-[0.2em] text-white/90 sm:text-5xl">
          {{ project.mark }}
        </p>
      </div>

      <div class="space-y-4">
        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="text-xs uppercase tracking-[0.28em] text-white/[0.45]">
              Selected project
            </p>
            <h3 class="mt-3 text-2xl font-semibold text-white">
              {{ project.title }}
            </h3>
            <p class="mt-2 text-xs uppercase tracking-[0.24em] text-white/[0.42]">
              {{ project.period }}
            </p>
          </div>

          <a
            v-if="project.link"
            :href="project.link"
            :aria-label="`Visit ${project.title}`"
            target="_blank"
            rel="noreferrer"
            class="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-white/20 hover:bg-white/10"
            :style="{ color: project.accent }"
          >
            <ArrowUpRight class="size-5" />
          </a>
        </div>

        <div class="h-px w-20" :style="{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }" />

        <p class="text-sm leading-7 text-slate-300">
          {{ project.description }}
        </p>
      </div>

      <div class="mt-auto flex flex-wrap gap-2 pt-2">
        <span
          v-for="item in project.stack"
          :key="item"
          class="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/[0.75]"
        >
          {{ item }}
        </span>
      </div>
    </div>
  </article>
</template>
