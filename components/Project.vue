<template>
  <section
    class="flex rounded shadow-lg h-56"
    >
    <div
      :class="background"
      class="w-1/2 py-16 px-24 rounded-l"
      >

      <Component class="w-full h-full" :is="logo" />
    </div>

    <div class="w-1/2 p-12 bg-white rounded-r flex flex-col">
      <div>
        <h3 class="text-3xl mb-2" v-text="title"></h3>
        <p class="text-grey-darker" v-text="description"></p>
      </div>

      <div class="mt-auto flex justify-between items-end">
        <p class="text-grey-darkest" v-text="stack.join(', ')"></p>

        <a
          :href="link"
          target="_blank"
          >
          Go to project <ChevronRight class="h-4" />
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
      logo: {
        type: Object,
        required: true,
      },

      link: {
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
