<template>
  <div :id="background.toLowerCase()" class="relative text-center">
    <span
      class="text-6xl text-secondary-dark md:text-12xl select-none leading-none font-extrabold"
      v-text="background"
    />

    <div class="absolute pin-t pin-l items-center justify-center flex w-full h-full">
      <span class="border-t border-primary w-12 mr-2 md:w-20 md:mr-4" />
      <h2 style="white-space: nowrap" class="text-base text-white md:text-2xl" v-text="title" />
      <span class="border-t border-primary w-12 mr-2 md:w-20 md:ml-4" />
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
