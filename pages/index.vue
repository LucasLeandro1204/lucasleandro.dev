<template>
  <div class="font-sans bg-black min-h-screen pb-8">
    <nav class="text-right p-8">
      <ul class="list-reset">
        <li>
          <a class="no-underline text-white px-4 py-2 rounded bg-grey-darkest" href="mailto:lucasleandro1204@gmail.com?subject=Hello Lucas">
            Get in touch
          </a>
        </li>
      </ul>
    </nav>

    <header class="w-64 text-white text-center mx-auto mb-16">
      <img class="w-32 mb-2" src="/image/me.png">

      <h1 class="text-lg mb-1">I'm Lucas Leandro</h1>
      <p class="text-3xl mb-8">I solve problems</p>

      <nav>
        <ul class="list-reset text-sm flex justify-center">
          <li :key="label" v-for="([label, href]) in links">
            <a class="no-underline text-white bg-grey-darkest py-1 px-2 rounded mx-2" :href="href" v-text="label"></a>
          </li>
        </ul>
      </nav>
    </header>

    <main class="w-64 mx-auto">
      <section class="flex flex-col">
        <h1 class="text-sm text-center mb-4 font-normal text-white">Projects I worked on / did</h1>

        <article
          :key="title"
          v-for="([title, description, href, background]) in projects"
          :style="{ backgroundImage: `url('${background}')` }" class="w-full rounded hover:-mt-2 hover:mb-10 mb-8 transition bg-center bg-cover w-64 h-24">
          <a
            :href="href"
            target="_blank"
            class="flex flex-col transition hover:shadow-lg text-white no-underline p-2 justify-end text-xl w-full h-full bg-black-gradient">
            {{ title }}

            <span class="text-sm text-grey-light" v-text="description"></span>
          </a>
        </article>
      </section>
    </main>
  </div>
</template>

<script>
  export default {
    computed: {
      links () {
        return [
          [
            'GitHub', 'https://github.com/LucasLeandro1204',
          ],
          [
            'Linkedin', 'https://www.linkedin.com/in/lucasleandro1204',
          ],
          [
            'Email', 'mailto:lucasleandro1204@gmail.com?subject=Hello Lucas',
          ],
        ];
      },

      projects () {
        return [
          [
            'Convertpack', 'A package of tools to boost your sales.', 'https://convertpack.io', '/image/convertpack.jpg',
          ],
          [
            'Innbox', 'Hotel & Hostel website', 'https://innboxhostels.com.br/', '/image/innbox.jpg',
          ],
          [
            'Bulldesk', 'Marketing Automation with CRM', 'https://bulldesk.com.br/', '/image/bulldesk.jpg',
          ],
          [
            'RDSMS', 'SMS delivery', 'https://rdsms.com.br/', '/image/rdsms.jpg',
          ],
          [
            'Bitscope', 'Big Data solution', 'https://bitscope.com.br/', '/image/bitscope.jpg',
          ],
        ];
      },
    },
  };
</script>

<style>
  .bg-black-gradient {
    background: linear-gradient(180deg, rgba(34, 41, 47, 0) 0%, rgba(34, 41, 47, .7) 50%, #22292f 100%)
  }

  .transition {
    transition: 150ms;
  }
</style>
