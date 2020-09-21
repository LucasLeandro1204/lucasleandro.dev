<template>
  <article class="mx-auto w-full text-white max-w-xl rounded shadow-md px-6 pt-6 pb-8 sm:px-16 sm:pt-12 sm:pb-16">
    <Title class="mb-10 sm:mb-16" title="Who am I, what I do" background="ABOUT" />

    <p class="text-sm sm:text-base leading-loose sm:leading-normal">My name Is Lucas Leandro, I'm a Full Stack Developer from Florianópolis, Santa Catarina - Brazil.</p>
    <p class="text-sm sm:text-base leading-loose sm:leading-normal mb-4 text-primary">I solve problems.</p>
    <p class="text-sm sm:text-base leading-loose sm:leading-normal mb-4">At Front-end I work with <span class="text-primary">Vue</span> and <span class="text-primary">React</span>, I do make use of css preprocessors like <span class="text-primary">SCSS</span>. For static websites I use <span class="text-primary">Nuxt</span>.</p>
    <p class="text-sm sm:text-base leading-loose sm:leading-normal">My Back-end stack is primarily PHP (<span class="text-primary">Laravel</span>, Codeigniter perhaps), but I also work with <span class="text-primary">Node</span> (<span class="text-primary">Express</span>, Koa, Adonis). I do have experience with relational databases (<span class="text-primary">MySQL</span>) and NoSQL (<span class="text-primary">MongoDB</span>). I write <span class="text-primary">tests</span> for every project, they help me preventing bugs, and keeping the application stable as it grows.</p>
  </article>
</template>

<script>
  import Title from './Title';

  export default {
    components: {
      Title,
    },
  };
</script>
