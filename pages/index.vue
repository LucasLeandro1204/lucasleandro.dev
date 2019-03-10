<template>
  <div class="font-sans text-black">
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
        '#': 'PROJECTS',
        '#': 'GET IN TOUCH',
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
