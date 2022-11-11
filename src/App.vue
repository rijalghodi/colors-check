<template>
  <div class="app">
    <HeaderBar />
    <MainVue
      @apply-color-theme="applyColorTheme"
      :colorTheme="colorTheme"
      @apply-pallete="applyColorTheme"
    />
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
        neutral: "#243942",
        accent: "#FF7559",
      },
    };
  },
  computed: {
    accentComplement() {
      return isLightColor(this.colorTheme.accent) ? "#000000" : "#FFFFFF";
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
  font-size: 18px;
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

button {
  padding: 0.3rem 1rem !important;
}

input:focus {
  outline: none;
}

.bold {
  color: v-bind("colorTheme.accent") !important;
  font-weight: 500;
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

.applied {
  color: v-bind("colorTheme.accent");
  font-size: 1.6rem;
  transition: 0.2s;
}
</style>
