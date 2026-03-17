<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next';

import type { Project } from '@/content/site';

defineProps<{
  project: Project;
}>();
</script>

<template>
  <article class="group h-full rounded-[1.9rem] border border-ink-950/10 bg-white/[0.88] p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:border-ink-950/[0.16] sm:p-6">
    <div
      class="rounded-[1.65rem] border border-white/[0.6] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:p-5"
      :style="{ background: project.gradient }"
    >
      <div class="flex items-start justify-between gap-4">
        <div>
          <p class="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-800/[0.62]">
            {{ project.kind }}
          </p>

          <div class="mt-4 flex items-center gap-4">
            <div class="flex h-14 w-14 items-center justify-center rounded-[1.1rem] border border-white/[0.6] bg-white/[0.72] text-sm font-semibold text-ink-950">
              {{ project.mark }}
            </div>

            <div>
              <p class="text-xs uppercase tracking-[0.24em] text-ink-800/[0.6]">
                {{ project.period }}
              </p>
              <h3 class="mt-2 text-2xl font-semibold text-ink-950">
                {{ project.title }}
              </h3>
            </div>
          </div>
        </div>

        <a
          v-if="project.link"
          :href="project.link"
          :aria-label="`Visit ${project.title}`"
          target="_blank"
          rel="noreferrer"
          class="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-ink-950/10 bg-white/[0.76] text-ink-950 transition hover:border-ink-950/[0.16] hover:bg-white"
          :style="{ color: project.accent }"
        >
          <ArrowUpRight class="size-5" />
        </a>
      </div>

      <div class="mt-6 grid gap-3 sm:grid-cols-3">
        <div
          v-for="outcome in project.outcomes"
          :key="outcome"
          class="rounded-[1.15rem] border border-white/[0.6] bg-white/[0.72] p-3"
        >
          <p class="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-800/[0.54]">
            Signal
          </p>
          <p class="mt-3 text-sm font-semibold leading-6 text-ink-950">
            {{ outcome }}
          </p>
        </div>
      </div>
    </div>

    <p class="mt-6 text-base leading-8 text-ink-900/[0.78]">
      {{ project.description }}
    </p>

    <div class="mt-6 flex flex-wrap gap-2">
      <span
        v-for="item in project.stack"
        :key="item"
        class="rounded-full border border-ink-950/10 bg-paper-100 px-3 py-1.5 text-xs font-medium text-ink-900/[0.74]"
      >
        {{ item }}
      </span>
    </div>
  </article>
</template>
