<template>
  <header class="pt-28">
    <nav class="w-full fixed pin-t pin-l p-8 bg-white">
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

    <div class="max-w-lg mx-auto">
      <h1 class="text-6xl mb-8">Lucas Leandro</h1>

      <div class="flex justify-between">
        <a
          class="text-pink border border-pink rounded font-bold text-sm px-6 py-3 hover:text-white hover:bg-pink"
          href="mailto:lucasleandro1204@gmail.com?subject=From Website: Hello Lucas"
          >
          GET IN TOUCH
        </a>
      </div>
    </div>
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
