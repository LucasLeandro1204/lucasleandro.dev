<template>
  <article class="max-w-lg mx-auto">
    <Title
      light
      title="My Work"
      background="PROJECTS"
      />
  </article>
</template>

<script>
  import Title from './Title';
  import Innbox from '~/assets/projects/innbox.svg';
  import Convertpack from '~/assets/projects/convertpack.svg';

  export default {
    components: {
      Title,
    },

    computed: {
      projects: () => ([
        {
          logo: Convertpack,
          title: 'Convertpack',
          background: 'bg-gradient-blue',
          description: 'A package of tools to boost your sales',
          stack: [
            'Laravel', 'Vue',
          ],
        },
        {
          logo: Innbox,
          title: 'Innbox',
          background: 'bg-gradient-green',
          description: 'Hotel & Hostel website',
          stack: [
            'Nuxt',
          ],
        },
      ]),
    },
  };
</script>
