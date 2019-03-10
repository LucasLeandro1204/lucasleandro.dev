<template>
  <header>
    <nav>
      <ul>
        <li :key="label" v-for="(label, anchor) in links">
          <a :href="anchor" v-text="label"></a>
        </li>
      </ul>
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
