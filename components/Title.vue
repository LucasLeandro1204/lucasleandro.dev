<template>
  <div :id="background.toLowerCase()" class="relative text-center">
    <span
      v-text="background"
      class="text-6xl text-secondary-dark md:text-12xl select-none leading-none font-extrabold"
      >
    </span>

    <div class="absolute pin-t pin-l items-center justify-center flex w-full h-full">
      <span class="border-t border-primary w-12 mr-2 md:w-20 md:mr-4"></span>
      <h2 style="white-space: nowrap" class="text-base text-white md:text-2xl" v-text="title"></h2>
      <span class="border-t border-primary w-12 mr-2 md:w-20 md:ml-4"></span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },

      background: {
        type: String,
        required: true,
      },
    },
  };
</script>
