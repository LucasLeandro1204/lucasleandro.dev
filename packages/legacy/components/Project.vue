<template>
  <section
    class="flex flex-col rounded shadow-lg"
    :class="reverse ? 'md:flex-row-reverse': 'md:flex-row'"
  >
    <div
      :class="[
        background,
        reverse ? 'rounded-r' : 'rounded-l',
      ]"
      class="md:w-1/2 p-14 flex items-center justify-center relative"
    >
      <img v-if="typeof logo === 'string'" class="max-w-48" :src="logo" :alt="title">

      <Component :is="logo" v-else class="w-full h-28 sm:h-32 max-w-48" />
    </div>

    <div
      :class="reverse ? 'rounded-l' : 'rounded-r'"
      class="md:w-1/2 p-6 md:p-14 bg-secondary-darker flex flex-col"
    >
      <h3 class="text-3xl text-white mb-2" v-text="title" />
      <p class="text-white opacity-75 mb-10 md:mb-20" v-text="description" />

      <div class="flex justify-between flex-col sm:flex-row sm:items-end text-sm">
        <p class="text-white mb-2 opacity-75 sm:mb-0" v-text="stack.join(', ')" />

        <a
          :href="link"
          target="_blank"
          class="flex text-primary items-center"
        >
          Go to project
          <ChevronRight class="h-4 ml-1" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import ChevronRight from '~/assets/icon/chevron-right.svg';

export default {
  components: {
    ChevronRight,
  },

  props: {
    reverse: {
      type: Boolean,
      required: true,
    },

    logo: {
      type: [
        String, Object,
      ],
      required: true,
    },

    link: {
      type: String,
      required: true,
    },

    color: {
      type: String,
      required: true,
    },

    background: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    stack: {
      type: Array,
      required: true,
    },
  },
};
</script>
