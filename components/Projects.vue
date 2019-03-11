<template>
  <article class="max-w-lg mx-auto">
    <Title
      title="My Work"
      background="PROJECTS"
      />

    <Project
      class="mt-20"
      v-bind="project"
      :key="project.title"
      :reverse="index % 2 === 1"
      v-for="(project, index) in projects"
      />
  </article>
</template>

<script>
  import Title from './Title';
  import Project from './Project';
  import Innbox from '~/assets/projects/innbox.svg';
  import Convertpack from '~/assets/projects/convertpack.svg';

  export default {
    components: {
      Title,
      Project,
    },

    computed: {
      projects: () => ([
        {
          logo: Convertpack,
          color: 'text-blue',
          title: 'Convertpack',
          link: 'https://convertpack.io',
          background: 'bg-gradient-blue',
          description: 'A package of tools to boost your sales',
          stack: [
            'Laravel', 'Vue',
          ],
        },
        {
          logo: Innbox,
          title: 'Innbox',
          color: 'text-green',
          background: 'bg-gradient-green',
          link: 'https://innboxhostels.com.br',
          description: 'Hotel & Hostel website',
          stack: [
            'Nuxt',
          ],
        },
      ]),
    },
  };
</script>
