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
      <Component class="w-full h-28 sm:h-32" :is="logo" />
    </div>

    <div
      :class="reverse ? 'rounded-l' : 'rounded-r'"
      class="md:w-1/2 p-6 md:p-14 bg-white flex flex-col"
      >

      <h3 class="text-3xl mb-2" v-text="title"></h3>
      <p class="text-grey-darker mb-10 md:mb-20" v-text="description"></p>

      <div class="flex justify-between flex-col sm:flex-row sm:items-end">
        <p class="text-grey-darkest mb-2 sm:mb-0" v-text="stack.join(', ')"></p>

        <a
          :href="link"
          target="_blank"
          :class="color"
          class="flex items-center"
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
        type: Object,
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
