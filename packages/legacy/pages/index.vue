<template>
  <div class="font-sans text-black min-h-screen px-8 pb-16">
    <AppHeader
      class="mt-4 mb-12 sm:mb-24"
    />

    <!-- <About class="mb-32" /> -->

    <Projects />
  </div>
</template>

<script>
// import About from '~/components/About';
import AppHeader from '~/components/Header';
import Projects from '~/components/Projects';

export default {
  components: {
    // About,
    Projects,
    AppHeader,
  },
};
</script>
