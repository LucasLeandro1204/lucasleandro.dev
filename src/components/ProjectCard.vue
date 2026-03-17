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
      'group relative h-full overflow-hidden rounded-[2rem] border border-ink-950/10 bg-white/78 p-6 shadow-panel transition duration-300 hover:-translate-y-1 hover:border-ink-950/18 sm:p-8',
      offset ? 'lg:translate-y-8' : '',
    ]"
  >
    <div class="absolute inset-x-0 top-0 h-32 opacity-70" :style="{ background: project.gradient }" />

    <div class="relative flex h-full flex-col gap-6">
      <div class="flex items-start justify-between gap-4">
        <div class="flex items-center gap-4">
          <div
            class="flex h-16 w-16 items-center justify-center rounded-[1.35rem] border border-white/50 text-lg font-semibold text-ink-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]"
            :style="{ background: project.gradient }"
          >
            {{ project.mark }}
          </div>

          <div>
            <p class="text-xs uppercase tracking-[0.28em] text-ink-800/62">
              Selected project
            </p>
            <h3 class="mt-2 text-2xl font-semibold text-ink-950">
              {{ project.title }}
            </h3>
            <p class="mt-2 text-xs uppercase tracking-[0.24em] text-ink-800/60">
              {{ project.period }}
            </p>
          </div>
        </div>

        <a
          v-if="project.link"
          :href="project.link"
          :aria-label="`Visit ${project.title}`"
          target="_blank"
          rel="noreferrer"
          class="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-ink-950/10 bg-white/70 text-ink-950 transition hover:border-ink-950/18 hover:bg-white"
          :style="{ color: project.accent }"
        >
          <ArrowUpRight class="size-5" />
        </a>
      </div>

      <div class="h-px w-20" :style="{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }" />

      <p class="text-sm leading-7 text-ink-900/78">
        {{ project.description }}
      </p>

      <div class="mt-auto flex flex-wrap gap-2 pt-2">
        <span
          v-for="item in project.stack"
          :key="item"
          class="rounded-full border border-ink-950/10 bg-paper-100 px-3 py-1.5 text-xs font-medium text-ink-900/76"
        >
          {{ item }}
        </span>
      </div>
    </div>
  </article>
</template>
