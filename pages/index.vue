<template>
  <div class="font-sans text-black wrapper">
    <AppHeader
      :fixed="fixed"
      :links="links"
      />
  </div>
</template>

<script>
  import AppHeader from '~/components/Header';

  export default {
    components: {
      AppHeader,
    },

    data: () => ({
      fixed: false,
    }),

    computed: {
      links: () => ({
        '#': 'HOME',
        '#projects': 'PROJECTS',
        'https://lucasleandro1204.netlify.com/mailto:lucasleandro1204@gmail.com?subject=From Website: Hello Lucas': 'GET IN TOUCH',
      }),
    },
  };
</script>

<style scoped>
  .wrapper {
    min-height: 100vh;
    background: linear-gradient(180deg, #FFFFFF 0%, #F2F2F2 100%);
  }
</style>
