<template>
  <transition name="fade">
    <main>
      <section>
        <slot name="left" />
      </section>
      <section>
        <slot name="right" />
      </section>
    </main>
  </transition>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}
</style>
