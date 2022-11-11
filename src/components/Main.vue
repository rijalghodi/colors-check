<template>
  <main
    class="min-w-full min-h-screen flex flex-row flex-wrap justify-center gap-14 pt-10 lg:pt-20 lg:h-screen"
  >
    <ArticleVue />
    <aside class="first-line:shrink sm:w-2/3 md:grow md:w-1/3 md:max-w-[400px]">
      <NewPallete
        @apply-color-theme="applyColorTheme"
        @add-pallete="addPallete"
        :defaultColorTheme="colorTheme"
      />
      <PalletesVue
        @apply-pallete="applyPallete"
        @delete-pallete="deletePallete"
        :palletes="palletes"
      />
    </aside>
  </main>
</template>

<script>
import ArticleVue from "./Article.vue";
import NewPallete from "./NewPallete.vue";
import PalletesVue from "./Palletes.vue";

export default {
  name: "MainVue",
  props: {
    colorTheme: Object,
  },
  components: {
    ArticleVue,
    NewPallete,
    PalletesVue,
  },
  methods: {
    applyColorTheme(newColorTheme) {
      this.$emit("apply-color-theme", newColorTheme);

      const activePallet = this.palletes.find((pallete) => pallete.applied);
      // console.log(prevPallet);
      if (activePallet) {
        activePallet.applied = false;
      }
    },

    applyPallete(id) {
      const palletes = this.palletes;
      // Remove the previous color theme, if there is
      const prevPallet = palletes.find((pallete) => pallete.applied);
      // console.log(prevPallet);
      if (prevPallet) {
        prevPallet.applied = false;
      }

      // Set pallete as color theme
      const pallete = palletes.find((pallete) => pallete.id === id);
      pallete.applied = true;

      const newColorTheme = {
        primary: pallete.primary,
        neutral: pallete.neutral,
        accent: pallete.accent,
      };
      this.$emit("apply-pallete", newColorTheme);
      // this.$root.$emit("update-input-color", newColorTheme);
    },

    deletePallete(id) {
      this.palletes = this.palletes.filter((pallete) => pallete.id !== id);
    },

    addPallete(newPallete) {
      if (this.palletes.find((pallete) => pallete.id === newPallete.id)) {
        alert(
          "Your new pallete has been added before. Check the color palletes box."
        );
        return;
      }
      this.palletes.unshift(newPallete);
    },
  },
  data() {
    return {
      palletes: [
        {
          id: "#ffffff#05192d#7fdd40",
          applied: false,
          primary: "#ffffff",
          neutral: "#05192d",
          accent: "#7fdd40",
        },
        {
          id: "#ffffff#222222#42db8c",
          applied: false,
          primary: "#ffffff",
          neutral: "#222222",
          accent: "#42db8c",
        },
        {
          id: "#ffffff#522888#f5bb06",
          applied: false,
          primary: "#ffffff",
          neutral: "#522888",
          accent: "#f5bb06",
        },
        {
          id: "#ffffff#335555#ff6347",
          applied: false,
          primary: "#041425",
          neutral: "#e7efed",
          accent: "#6b07ed",
        },
      ],
    };
  },
};
</script>
