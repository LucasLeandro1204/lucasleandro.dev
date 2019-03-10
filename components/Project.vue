<template>
  <section>

  </section>
</template>

<script>
  export default {
    props: {
      logo: {
        type: Object,
        required: true,
      },

      background: {
        type: String,
        required: true,
      },

      title: {
        type: String,
        required: true,
      },

      description: {
        type: String,
        required: true,
      },

      stack: {
        type: Array,
        required: true,
      },
    },
  };
</script>
