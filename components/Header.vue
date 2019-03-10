<template>
  <header class="pt-28">
    <nav class="w-full absolute pin-t pin-l p-8 bg-white">
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
      <h1 class="text-6xl mb-6">Lucas Leandro</h1>

      <div class="flex items-center">
        <a
          href="mailto:lucasleandro1204@gmail.com?subject=From Website: Hello Lucas"
          class="text-pink border border-pink rounded font-bold text-sm px-6 py-3 hover:text-white hover:bg-pink"
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
    // components: {
    //   IconMail,
    //   IconGitHub,
    //   IconTwitter,
    // },

    computed: {
      links: () => ({
        '#': 'HOME',
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
