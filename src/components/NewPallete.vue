<template>
  <form class="bordered p-3 mb-10 text-base">
    <!-- Colors -->
    <h2 class="text-lg mb-3">New Color Pallete</h2>
    <div class="flex flex-row mb-5">
      <!-- Primary -->
      <div>
        <label for="primary" class="w-full block text-center text-sm"
          >Primary</label
        >
        <input
          id="primary"
          class="w-full bg-transparent px-2 py-1 text-center"
          v-bind:style="{
            'background-color': primary,
            color: primaryComplement,
          }"
          placeholder="#HEX"
          v-model="primary"
        />
      </div>
      <!-- Neutral -->
      <div>
        <label for="neutral" class="w-full block text-center text-sm"
          >Neutral</label
        >

        <input
          id="neutral"
          class="w-full bg-transparent px-2 py-1 text-center"
          v-bind:style="{
            'background-color': neutral,
            color: neutralComplement,
          }"
          placeholder="#HEX"
          v-model="neutral"
        />
      </div>
      <!-- Accent -->
      <div>
        <label for="accent" class="w-full block text-center text-sm"
          >Accent</label
        >
        <input
          id="accent"
          class="w-full bg-transparent px-2 py-1 text-center"
          v-bind:style="{
            'background-color': accent,
            color: accentComplement,
          }"
          placeholder="#HEX"
          v-model="accent"
        />
      </div>
    </div>
    <div class="flex flex-row justify-center gap-2">
      <button
        @click="onApply"
        type="button"
        title="Apply Pallete as Color Theme"
        class="primary-button px-7 py-1 border w-auto"
      >
        <i class="fa-solid fa-check"></i>
      </button>
      <button
        @click="onSave"
        type="button"
        title="Save Color Theme"
        class="primary-button px-7 py-1 border w-auto"
      >
        <i class="fa-solid fa-plus"></i>
      </button>
      <button
        @click="onReset"
        type="reset"
        title="Reset Color Theme"
        class="primary-button px-7 py-1 border w-auto"
      >
        <i class="fa-solid fa-arrow-rotate-left"></i>
      </button>
    </div>
  </form>
</template>

<script>
let isHexColor = require("../util/isHexColor");
// let isLightColor = require("../util/isLightColor.js");

export default {
  name: "NewPallete",
  props: ["defaultColorTheme"],
  data() {
    return {
      defaultColor: this.defaultColorTheme,
      primary: "",
      neutral: "",
      accent: "",
    };
  },
  mounted() {
    this.$root.$on("update-input-color", (newColorTheme) => {
      console.log(newColorTheme);
    });
  },
  // computed: {
  //   primaryComplement() {
  //     if (this.primary) {
  //       return isLightColor(this.primary) ? "#000000" : "#FFFFFF";
  //     } else {
  //       return "#FFF";
  //     }
  //   },
  //   neutralComplement() {
  //     if (this.neutral) {
  //       return isLightColor(this.neutral) ? "#000000" : "#FFFFFF";
  //     } else {
  //       return "#FFF";
  //     }
  //   },
  //   accentComplement() {
  //     if (this.accent) {
  //       return isLightColor(this.accent) ? "#000000" : "#FFFFFF";
  //     } else {
  //       return "#FFF";
  //     }
  //   },
  // },
  methods: {
    onApply() {
      if (
        !isHexColor(this.primary) ||
        !isHexColor(this.neutral) ||
        !isHexColor(this.accent)
      ) {
        alert("Please add the colors with hex format (for example: #FFFFFF)");
        return;
      }

      const newColorTheme = {
        primary: this.primary,
        neutral: this.neutral,
        accent: this.accent,
      };

      this.$emit("apply-color-theme", newColorTheme);
    },
    onSave() {
      if (
        !isHexColor(this.primary) ||
        !isHexColor(this.neutral) ||
        !isHexColor(this.accent)
      ) {
        alert("Please add the colors with hex format (for example: #FFFFFF)");
        return;
      }

      const newPallete = {
        id: `${this.primary.toLowerCase()}${this.neutral.toLowerCase()}${this.accent.toLowerCase()}`,
        applied: false,
        primary: this.primary,
        neutral: this.neutral,
        accent: this.accent,
      };

      this.$emit("add-pallete", newPallete);
    },
    onReset() {
      this.primary = "";
      this.neutral = "";
      this.accent = "";
      this.$emit("apply-color-theme", this.defaultColor);
    },
  },
};
</script>
