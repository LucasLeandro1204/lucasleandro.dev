<template>
  <article class="bg-white mx-auto max-w-lg rounded shadow-lg px-6 pt-6 pb-8 sm:px-10 sm:pt-10 sm:pb-14">
    <Title class="mb-10" title="Who am I, what I do" background="ABOUT" />

    <p class="text-sm sm:text-base leading-loose sm:leading-normal">My name Is Lucas Leandro, I'm a Full Stack Developer from Florianópolis, Santa Catarina - Brazil.</p>
    <p class="text-sm sm:text-base leading-loose sm:leading-normal mb-4 text-pink">I solve problems that others don't.</p>
    <p class="text-sm sm:text-base leading-loose sm:leading-normal mb-4">At Front-end I work with <span class="text-pink">Vue</span> and <span class="text-pink">React</span>, I do make use of css preprocessors like <span class="text-pink">SCSS</span>. For static websites I use <span class="text-pink">Nuxt</span>.</p>
    <p class="text-sm sm:text-base leading-loose sm:leading-normal">My Back-end stack is primarily PHP (<span class="text-pink">Laravel</span>, Codeigniter perhaps), but I also work with <span class="text-pink">Node</span> (<span class="text-pink">Express</span>, Koa, Adonis). I do have experience with relational databases (<span class="text-pink">MySQL</span>) and NoSQL (<span class="text-pink">MongoDB</span>). I write <span class="text-pink">tests</span> for every project, they help me preventing bugs, and keeping the application stable as it grows.</p>
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
