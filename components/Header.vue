<template>
  <header id="home" class="pt-28 sm:pt-32">
    <nav
      :class="fixed ? 'py-4 shadow-lg' : 'py-8'"
      class="transition-lg w-full fixed z-20 pin-t pin-l bg-secondary-darker px-8">

      <div class="max-w-xl mx-auto flex justify-between">
        <img
          alt="Avatar"
          src="/me.jpg"
          class="transition rounded-full w-8 h-8"
          :class="fixed ? 'sm:w-8 sm:h-8' : 'sm:w-12 sm:h-12'"
          >

        <ul class="list-reset flex text-sm items-center">
          <li
            :key="anchor"
            class="ml-6 font-thin"
            v-for="(label, anchor) in links"
            >
            <a class="text-white hover:text-primary transition" :href="anchor" v-text="label"></a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="max-w-xl mx-auto">
      <h1 class="text-6xl text-white mb-6">Lucas Leandro</h1>

      <div class="flex items-center">
        <a
          href="mailto:lucasleandro1204@gmail.com?subject=From Website: Hello Lucas"
          class="text-primary border border-primary rounded font-bold text-sm px-4 sm:px-6 py-3 transition hover:text-white hover:bg-primary"
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
                class="w-4 block text-white transition hover:text-primary"
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
  import IconLinkedin from '~/assets/icon/linkedin.svg';

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
      fixed: false,
    }),

    computed: {
      links: () => ({
        '#home': 'HOME',
        '#projects': 'PROJECTS',
        'mailto:lucasleandro1204@gmail.com?subject=From Website: Hello Lucas': 'GET IN TOUCH',
      }),

      social: () => ({
        'https://github.com/lucasleandro1204': IconGitHub,
        'https://twitter.com/lucasleandro412': IconTwitter,
        'https://www.linkedin.com/in/lucasleandro1204/': IconLinkedin,
        'mailto:lucasleandro1204@gmail.com?subject=From Website: Hello Lucas': IconMail,
      }),
    },
  };
</script>
