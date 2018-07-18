<template>
  <main class="flex h-screen w-screen">
    <!-- <section class="absolute pin-l pin-t h-full w-1/2 left flex items-center justify-center">
      <h1 class="text-white text-35xl relative z-20 w-1/2" v-text="title"></h1>
    </section> -->
    <section class="w-screen py-16 px-4">
      <slot name="right" />
    </section>
  </main>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
    },
  };
</script>
