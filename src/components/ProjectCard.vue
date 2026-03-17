<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next';

import type { Project } from '@/content/site';

defineProps<{
  project: Project;
}>();
</script>

<template>
  <article class="group rounded-[1.6rem] border border-ink-950/8 bg-white p-4 shadow-card transition duration-300 hover:-translate-y-1 hover:border-ink-950/12">
    <div
      class="rounded-[1.3rem] border border-ink-950/8 p-3"
      :style="{ background: project.surface }"
    >
      <div class="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-ink-800/58">
        <span class="inline-flex items-center gap-2">
          <span
            class="size-2 rounded-full"
            :style="{ backgroundColor: project.accent }"
          />
          {{ project.kind }}
        </span>

        <span>{{ project.period }}</span>
      </div>

      <div class="mt-3 overflow-hidden rounded-[1rem] border border-white/70 bg-white/82 shadow-[0_18px_36px_rgba(23,22,20,0.06)]">
        <img
          :src="project.preview"
          :alt="`${project.title} preview`"
          class="aspect-[16/10] w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
        />
      </div>
    </div>

    <div class="mt-4 flex items-start justify-between gap-4">
      <div class="min-w-0">
        <h3 class="text-xl font-semibold text-ink-950">
          {{ project.title }}
        </h3>

        <p class="mt-3 text-sm leading-7 text-ink-900/76">
          {{ project.description }}
        </p>
      </div>

      <a
        v-if="project.link"
        :href="project.link"
        :aria-label="`Visit ${project.title}`"
        target="_blank"
        rel="noreferrer"
        class="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-ink-950/10 bg-paper-50 text-ink-950 transition hover:border-ink-950/16 hover:bg-white"
      >
        <ArrowUpRight class="size-4" />
      </a>
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <span
        v-for="item in project.stack"
        :key="item"
        class="rounded-full border border-ink-950/8 bg-paper-50 px-3 py-1.5 text-[11px] font-medium text-ink-900/72"
      >
        {{ item }}
      </span>
    </div>
  </article>
</template>
