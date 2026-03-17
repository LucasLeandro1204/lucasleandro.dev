<script setup lang="ts">
defineProps<{
  eyebrow: string;
  title: string;
  description?: string;
}>();
</script>

<template>
  <div class="max-w-3xl">
    <p class="text-xs font-medium uppercase tracking-[0.35em] text-white/[0.55]">
      {{ eyebrow }}
    </p>

    <h2 class="mt-5 max-w-2xl font-display text-4xl leading-tight text-white sm:text-5xl">
      {{ title }}
    </h2>

    <p v-if="description" class="mt-5 max-w-2xl text-base leading-8 text-slate-300">
      {{ description }}
    </p>
  </div>
</template>
