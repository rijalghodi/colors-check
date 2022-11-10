<template>
  <div class="app">
    <HeaderBar />
    <MainVue
      @apply-color-theme="applyColorTheme"
      :defaultColorTheme="colorTheme"
      @apply-pallete="applyPallete"
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
        neutral: "#273e47",
        accent: "#FF7559",
      },
    };
  },
  computed: {
    primaryComplement() {
      if (this.primary) {
        return isLightColor(this.primary) ? "#000000" : "#FFFFFF";
      } else {
        return "#FFF";
      }
    },
    neutralComplement() {
      if (this.neutral) {
        return isLightColor(this.neutral) ? "#000000" : "#FFFFFF";
      } else {
        return "#FFF";
      }
    },
    accentComplement() {
      if (this.accent) {
        return isLightColor(this.accent) ? "#000000" : "#FFFFFF";
      } else {
        return "#FFF";
      }
    },
  },
  methods: {
    applyColorTheme(newColorTheme) {
      this.colorTheme = newColorTheme;
    },
    applyPallete(newColorTheme) {
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
  font-size: 1.5rem;
  transition: 0.2s ease-out;
}

.input-primary {
  color: v-bind("primaryComplement");
  background-color: v-bind("colorTheme.primary");
}

.input-neutral {
  color: v-bind("neutralComplement");
  background-color: v-bind("colorTheme.neutral");
}

.input-accent {
  color: v-bind("accentComplement");

  background-color: v-bind("colorTheme.accent");
}
</style>
