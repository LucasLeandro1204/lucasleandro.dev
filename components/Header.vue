<template>
  <header id="home" class="pt-20 sm:pt-28">
    <nav
      :class="fixed ? 'py-4' : 'py-8'"
      class="transition w-full fixed z-20 pin-t pin-l bg-white px-8">

      <div class="max-w-lg mx-auto flex justify-between">
        <img
          alt="Avatar"
          src="/me.png"
          class="transition w-8 h-8"
          :class="fixed ? 'sm:w-8 sm:h-8' : 'sm:w-12 sm:h-12'"
          >

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
      <h1 class="text-6xl mb-6">Lucas Leandro</h1>

      <div class="flex items-center">
        <a
          href="mailto:lucasleandro1204@gmail.com?subject=From Website: Hello Lucas"
          class="text-pink border border-pink rounded font-bold text-sm px-4 sm:px-6 py-3 hover:text-white hover:bg-pink"
          >
          GET IN TOUCH
        </a>

        <nav class="ml-8">
          <ul class="flex list-reset">
            <li
              class="mr-3"
              :key="anchor"
              v-for="(icon, anchor) in social"
              >

              <a
                :href="anchor"
                target="_blank"
                class="w-4 block text-black hover:text-pink"
                >
                <Component class="fill-current" :is="icon" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
  import IconMail from '~/assets/icon/mail.svg';
  import IconGitHub from '~/assets/icon/github.svg';
  import IconTwitter from '~/assets/icon/twitter.svg';

  export default {
    mounted () {
      const listener = () => {
        this.fixed = window.scrollY > 0;
      };

      window.addEventListener('scroll', listener, false);

      this.$once('hook:beforeDestroy', () => {
        window.removeEventListener('scroll', listener, false);
      });
    },

    data: () => ({
      fixed: true,
    }),

    computed: {
      links: () => ({
        '#home': 'HOME',
        '#projects': 'PROJECTS',
        'mailto:lucasleandro1204@gmail.com?subject=From Website: Hello Lucas': 'GET IN TOUCH',
      }),

      social: () => ({
        'https://twitter.com/lucasleandro412': IconMail,
        'https://github.com/lucasleandro1204': IconGitHub,
        'mailto:lucasleandro1204@gmail.com?subject=From Website: Hello Lucas': IconTwitter,
      }),
    },
  };
</script>

<style scoped>
  .transition {
    transition: 300ms;
  }
</style>
