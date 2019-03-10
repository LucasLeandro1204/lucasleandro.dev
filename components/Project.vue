<template>
  <section
    class="flex rounded shadow-lg"
    :class="{ 'flex-row-reverse': reverse }"
    >
    <div
      :class="background"
      class="w-1/2 p-14 flex items-center justify-center relative rounded-l"
      >
      <Component class="w-full h-32" :is="logo" />
    </div>

    <div class="w-1/2 p-14 bg-white rounded-r flex flex-col">
      <h3 class="text-3xl mb-2" v-text="title"></h3>
      <p class="text-grey-darker mb-20" v-text="description"></p>

      <div class="flex justify-between items-end">
        <p class="text-grey-darkest" v-text="stack.join(', ')"></p>

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
