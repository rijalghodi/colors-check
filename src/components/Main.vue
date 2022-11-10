<template>
  <main
    class="text-center min-w-full flex flex-row flex-wrap justify-center gap-14 pt-10 md:pt-20 md:relative md:h-screen md:top-7"
  >
    <ArticleVue />
    <aside class="first-line:shrink sm:w-2/3 md:grow md:w-1/3 md:max-w-[400px]">
      <NewPallete
        @apply-color-theme="applyColorTheme"
        @add-pallete="addPallete"
      />
      <PalletesVue @delete-pallete="deletePallete" :palletes="palletes" />
    </aside>
  </main>
</template>

<script>
import ArticleVue from "./Article.vue";
import NewPallete from "./NewPallete.vue";
import PalletesVue from "./Palletes.vue";

export default {
  name: "MainVue",
  components: {
    ArticleVue,
    NewPallete,
    PalletesVue,
  },
  methods: {
    applyColorTheme(newColorTheme) {
      this.$emit("apply-color-theme", newColorTheme);
    },

    deletePallete(id) {
      if (confirm("Are you sure?")) {
        this.palletes = this.palletes.filter((pallete) => pallete.id !== id);
      }
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
          id: "#ffffff#335555#ff6347",
          primary: "#ffffff",
          neutral: "#335555",
          accent: "#FF6347",
        },
        {
          id: "#ffffff#222222#42db8c",
          primary: "#ffffff",
          neutral: "#222222",
          accent: "#42db8c",
        },
        {
          id: "#ffdd55#522888#f5bb06",
          primary: "#ffdd55",
          neutral: "#522888",
          accent: "#f5bb06",
        },
      ],
      defaultColors: {
        primary: "#FFF",
        neutral: "#355",
        accent: "#FF6347",
      },
    };
  },
};
</script>
