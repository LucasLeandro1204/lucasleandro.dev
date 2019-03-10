<template>
  <div class="relative text-center">
    <span
      v-text="background"
      :class="light ? 'text-white' : 'text-grey-lighter'"
      class="text-12xl select-none font-extrabold"
      >
    </span>

    <div class="absolute pin-t pin-l items-center justify-center flex w-full h-full">
      <span class="border-t border-pink w-20 mr-4"></span>
      <h2 v-text="title"></h2>
      <span class="border-t border-pink w-20 ml-4"></span>
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

      light: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
  };
</script>
