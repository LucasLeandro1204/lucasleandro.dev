<template>
  <main class="flex h-screen w-screen overflow-y-scroll">
    <section class="h-screen text-white hidden left items-center justify-center w-1/2 md:flex">
      <h1 class="text-20xl xl:text-35xl font-black">Lucas <span class="block">Leandro</span></h1>
    </section>
    <section class="w-screen py-16 px-4 flex flex-col md:w-1/2 md:ml-auto md:px-16">
      <img class="rounded-full w-24 mx-auto md:mx-0" src="~img/me.jpg">
      <p class="mt-8 leading-loose text-xl font-light max-w-md" :key="index" v-for="(line, index) in lines" v-html="line"></p>
      <ul class="list-reset mt-8">
        <li class="mb-2 text-lg" :key="index" v-for="(link, index) in links">
          > <a class="text-black" :href="link.to" v-text="link.title"></a>
        </li>
      </ul>
      <p class="mt-8 font-light text-lg ml-auto md:mt-auto">Sempre tentando ser melhor, e não o melhor</p>
    </section>
  </main>
</template>

<script>
  export default {
    computed: {
      links () {
        return [
          {
            to: 'https://github.com/LucasLeandro1204',
            title: 'GitHub',
          },
          {
            to: 'https://www.linkedin.com/in/lucasleandro1204/',
            title: 'LinkedIn',
          },
          {
            to: 'mailto:lucasleandro1204@gmail.com',
            title: 'E-mail',
          },
        ];
      },

      lines () {
        return [
          'Eu tenho 18 anos e sou de Florianópolis, Santa Catarina.',
          'Vejo no desenvolvimento uma forma de mudar o mundo um app por vez.',
          'Trabalho com desenvolvimento web e mobile. Laravel, Node, Vue, React, React Native, Nativescript, entre outras tecnologias.',
          'Tem alguma dúvida ou problema sem solução? Vamos conversar, é só me mandar um <a href="mailto:lucasleandro1204@gmail.com">e-mail</a>.'
        ];
      },
    },
  };
</script>

<style scoped>
  .left {
    background: linear-gradient(147.52deg, #00C2FF 0%, #BF00CF 100%);
  }
</style>
