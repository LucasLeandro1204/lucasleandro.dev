<template>
  <transition name="fade">
    <main class="flex h-screen w-screen">
      <section class="absolute pin-l pin-t h-full w-1/2 left flex items-center justify-center">
        <h1 class="text-white text-35xl relative z-20 w-1/2">Lucas Leandro</h1>
        <svg class="absolute w-full h-full pin z-10">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%"  gradientTransform="rotate(45)">>
              <stop offset="0%" style="stop-color:#00C2FF;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#BF00CF;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="90%" height="100%" fill="url(#grad1)" />
          <rect width="100%" height="100%" fill="url(#grad1)" />
        </svg>
      </section>
      <section class="ml-auto w-1/2">
        <slot name="right" />
      </section>
    </main>
  </transition>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style lang="postcss">
  .fade-enter-active,
  .fade-leave-active {
    transition: 4s;
  }
  .fade-enter-active .left,
  .fade-leave-active .left{
    transition: 4s;
  }

  .fade-enter, .fade-leave-to  /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  }

  .fade-leave-to .left {
    width: 100% !important;
  }
</style>
