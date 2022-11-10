<template>
  <div class="app">
    <HeaderBar />
    <MainVue @apply-color-theme="applyColorTheme" />
  </div>
</template>

<script>
import HeaderBar from "./components/Header.vue";
import MainVue from "./components/Main.vue";
let isLightColor = require("./util/isLightColor.js");

export default {
  name: "App",
  components: {
    HeaderBar,
    MainVue,
  },
  data() {
    return {
      colorTheme: {
        primary: "#FFFFFF",
        neutral: "#113434",
        accent: "#FF7559",
      },
      defaultColorTheme: {
        primary: "#FFF",
        neutral: "#355",
        accent: "#FF6347",
      },
    };
  },
  computed: {
    accentComplement() {
      if (isLightColor(this.colorTheme.accent)) {
        return "#000000";
      } else {
        return "#FFFFFF";
      }
    },
  },
  methods: {
    applyColorTheme(newColorTheme) {
      this.colorTheme = newColorTheme;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
}
.app {
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 30px;
  padding-left: 30px;
  background-color: v-bind("colorTheme.neutral");
  color: v-bind("colorTheme.primary");
}

h1 {
  color: v-bind("colorTheme.accent");
}

.primary-button:hover {
  opacity: 0.8;
}

.primary-button {
  background-color: v-bind("colorTheme.accent") !important;
  color: v-bind("accentComplement") !important;
  border: 1px solid v-bind("colorTheme.accent") !important;
  transition: 0.3s ease;
}

.secondary-button:hover {
  background-color: v-bind("colorTheme.accent") !important;
  color: v-bind("accentComplement") !important;
  border: 1px solid v-bind("colorTheme.accent") !important;
}

.secondary-button {
  background-color: transparent !important;
  color: v-bind("colorTheme.primary") !important;
  border: 1px solid v-bind("colorTheme.primary") !important;
  transition: 0.3s ease;
}

.bordered {
  border: 1px solid v-bind("colorTheme.primary");
}
</style>
