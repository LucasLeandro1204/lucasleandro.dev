<script setup lang="ts">
defineProps<{
  eyebrow: string;
  title: string;
  description?: string;
}>();
</script>

<template>
  <div class="max-w-3xl">
    <p class="text-xs font-semibold uppercase tracking-[0.35em] text-ink-800/68">
      {{ eyebrow }}
    </p>

    <h2 class="mt-5 max-w-3xl font-display text-4xl leading-[1.04] text-ink-950 sm:text-5xl lg:text-[3.25rem]">
      {{ title }}
    </h2>

    <p v-if="description" class="mt-5 max-w-2xl text-base leading-8 text-ink-900/78">
      {{ description }}
    </p>
  </div>
</template>
