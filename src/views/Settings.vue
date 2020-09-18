<template>
  <main>
    <div class="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div
          class="px-4 mx-auto mt-10 max-w-screen-xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
        >
          <div class="py-10 sm:text-center lg:text-left">
            <h2
              class="pb-10 text-2xl font-extrabold tracking-tight leading-10 text-primary-900 sm:text-3xl sm:leading-none md:text-4xl"
            >
              Colors
            </h2>
            <table>
              <tr>
                <td class="p-3">primary:</td>
                <td ref="primaryPickr"><div></div></td>
              </tr>
              <tr>
                <td class="p-3">secondary:</td>
                <td ref="secondaryPickr"><div></div></td>
              </tr>
            </table>
          </div>

          <div class="sm:text-center lg:text-left">
            <h2
              class="text-4xl font-extrabold tracking-tight leading-10 text-primary-900 sm:text-5xl sm:leading-none md:text-6xl"
            >
              This settings demo is using
              <br class="xl:hidden" />
              <a
                target="_blank"
                class="underline text-secondary-600 hover:text-secondary-500"
                href="https://tailwindcss.com"
                >Tailwind CSS</a
              >
            </h2>
            <p
              class="mt-3 text-base text-primary-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            >
              All the code present here is part of a free sample from
              <a
                href="https://tailwindui.com"
                class="underline text-secondary-600 hover:text-secondary-500"
                >Tailwind UI</a
              >
              but, you don't need it. If you want to add
              <b>Tailwind UI </b>&#32; check the instructions on
              <a
                class="underline text-secondary-600 hover:text-secondary-500"
                href="https://github.com/posva/vite-tailwind-starter/tree/master#vite--tailwind-css-starter"
                ><code>README</code></a
              >. It only takes two steps to add it 🙂.
            </p>
            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div class="shadow rounded-md">
                <a
                  href="https://github.com/posva/vite-tailwind-starter"
                  class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent bg-secondary-600 leading-6 rounded-md hover:bg-secondary-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  class="flex items-center justify-center w-full px-8 py-3 text-base font-medium border border-transparent text-secondary-700 bg-secondary-100 leading-6 rounded-md hover:text-secondary-600 hover:bg-secondary-50 focus:outline-none focus:shadow-outline focus:border-secondary-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { useColors } from "../App.vue";
import Pickr from "@simonwep/pickr";
import "@simonwep/pickr/dist/themes/nano.min.css";

const pickrOptions = {
  theme: "nano",
  swatches: [
    "rgba(244, 67, 54, 1)",
    "rgba(233, 30, 99, 1)",
    "rgba(156, 39, 176, 1)",
    "rgba(103, 58, 183, 1)",
    "rgba(63, 81, 181, 1)",
    "rgba(33, 150, 243, 1)",
    "rgba(3, 169, 244, 1)",
    "rgba(0, 188, 212, 1)",
    "rgba(0, 150, 136, 1)",
    "rgba(76, 175, 80, 1)",
    "rgba(139, 195, 74, 1)",
    "rgba(205, 220, 57, 1)",
    "rgba(255, 235, 59, 1)",
    "rgba(255, 193, 7, 1)",
  ],

  components: {
    // Main components
    preview: true,
    opacity: true,
    hue: true,

    // Input / output Options
    interaction: {
      hex: true,
      rgba: true,
      hsla: true,
      hsva: true,
      cmyk: true,
      input: true,
      clear: true,
      save: true,
    },
  },
};

export default defineComponent({
  setup() {
    const secondaryPickr = ref();
    const primaryPickr = ref();
    const colors = useColors();

    onMounted(() => {
      // primary
      Pickr.create({
        el: primaryPickr.value.firstChild,
        container: primaryPickr.value,
        default: colors.primary,
        ...pickrOptions,
      }).on("change", (color) => {
        colors.primary = color.toRGBA().toString();
      });

      // secondary
      Pickr.create({
        el: secondaryPickr.value.firstChild,
        container: secondaryPickr.value,
        default: colors.secondary,
        ...pickrOptions,
      }).on("change", (color) => {
        colors.secondary = color.toRGBA().toString();
      });
    });

    return { secondaryPickr, primaryPickr };
  },
});
</script>
