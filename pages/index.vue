<template>
  <div class="font-sans text-black wrapper px-8">
    <AppHeader class="mt-4 mb-16" />

    <About />

    <Projects />
  </div>
</template>

<script>
  import About from '~/components/About';
  import AppHeader from '~/components/Header';
  import Projects from '~/components/Projects';

  export default {
    components: {
      About,
      Projects,
      AppHeader,
    },
  };
</script>

<style scoped>
  .wrapper {
    min-height: 100vh;
    background: linear-gradient(180deg, #FFFFFF 0%, #F2F2F2 100%);
  }
</style>
