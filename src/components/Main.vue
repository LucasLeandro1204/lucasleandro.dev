<template>
  <transition name="fade">
    <main class="flex w-screen">
      <section class="absolute left">
        <slot name="left" />
      </section>
      <section class="w-1/2">
        <slot name="right" />
      </section>
    </main>
  </transition>
</template>

<style lang="postcss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
    opacity: 0;
  }

  .left {
    left: -50vw;
  }
</style>
