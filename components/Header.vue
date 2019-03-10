<template>
  <header>
    <nav class="w-full fixed pin-t pin-l py-8 bg-white">
      <div class="max-w-lg mx-auto flex justify-between">
        <img class="w-12 h-12" src="/me.png" alt="Avatar">

        <ul class="list-reset flex text-sm items-center">
          <li
            :key="anchor"
            class="ml-6 font-thin"
            v-for="(label, anchor) in links"
            >
            <a class="text-grey-dark hover:text-pink" :href="anchor" v-text="label"></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    props: {
      fixed: {
        type: Boolean,
        required: false,
        default: false,
      },

      links: {
        type: Object,
        required: true,
      },
    },
  };
</script>
