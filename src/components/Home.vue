<template>
  <main class="flex h-screen w-screen">
    <section class="h-screen text-white left flex items-center justify-center absolute w-1/2 hide">
      <h1 class="text-20xl">Lucas <span class="block">Leandro</span></h1>
    </section>
    <section class="w-screen py-16 px-4 flex flex-col md:w-1/2 md:ml-auto md:px-16">
      <img class="rounded-full w-24 mx-auto md:mx-0" src="~img/me.jpg">
      <p class="mt-8 leading-loose text-xl font-light" :key="index" v-for="(line, index) in lines" v-text="line"></p>
    </section>
  </main>
</template>

<script>
  export default {
    computed: {
      lines () {
        return [
          'Olá, tudo bem? Meu nome é Lucas, tenho 18 anos e sou de Florianópolis, Santa Catarina.',
          'Vejo no desenvolvimento uma forma de mudar o mundo um app por vez.',
          'Trabalho com desenvolvimento web e mobile. Laravel, Node, Vue, React, React Native, Nativescript, entre outras tecnologias.',
        ];
      },
    },
  };
</script>

<style scoped>
  p {
    text-indent: 1rem;
  }

  .left {
    background: linear-gradient(147.52deg, #00C2FF 0%, #BF00CF 100%);
  }
</style>
