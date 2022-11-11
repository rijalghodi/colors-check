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
          placeholder="#HEX"
          v-bind:style="{
            'background-color': colorInput.primary,
            color: primaryComplement,
          }"
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
            'background-color': colorInput.neutral,
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
            'background-color': colorInput.accent,
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
        title="Apply color pallete as theme"
        class="primary-button px-7 py-1 border w-auto"
      >
        <span class="text-sm">Apply</span>
      </button>
      <button
        @click="onSave"
        type="button"
        title="Save color pallete"
        class="primary-button px-7 py-1 border w-auto"
      >
        <span class="text-sm">Save</span>
      </button>
      <button
        @click="onReset"
        type="reset"
        title="Reset color theme"
        class="primary-button px-7 py-1 border w-auto"
      >
        <span class="text-sm">Reset</span>
      </button>
    </div>
  </form>
</template>

<script>
let isHexColor = require("../util/isHexColor");
let isLightColor = require("../util/isLightColor.js");
let createId = require("../util/createId");

export default {
  name: "NewPallete",
  props: ["defaultColorTheme"],
  data() {
    return {
      defaultColor: this.defaultColorTheme,
      primary: "",
      neutral: "",
      accent: "",
      primaryComplement: "",
      neutralComplement: "",
      accentComplement: "",
    };
  },

  computed: {
    colorInput() {
      let colors = {};
      if (isHexColor(this.primary)) {
        colors.primary = this.primary;
      } else {
        colors.primary = "transparent";
      }
      if (isHexColor(this.neutral)) {
        colors.neutral = this.neutral;
      } else {
        colors.neutral = "transparent";
      }
      if (isHexColor(this.accent)) {
        colors.accent = this.accent;
      } else {
        colors.accent = "transparent";
      }
      return colors;
    },
  },

  watch: {
    colorInput: {
      handler(newColorInput) {
        if (newColorInput.primary === "transparent") {
          this.primaryComplement = "#FF0000";
        } else if (isLightColor(newColorInput.primary)) {
          this.primaryComplement = "#000000";
        } else {
          this.primaryComplement = "#FFFFFF";
        }

        if (newColorInput.neutral === "transparent") {
          this.neutralComplement = "#FF0000";
        } else if (isLightColor(newColorInput.neutral)) {
          this.neutralComplement = "#000000";
        } else {
          this.neutralComplement = "#FFFFFF";
        }

        if (newColorInput.accent === "transparent") {
          this.accentComplement = "#FF0000";
        } else if (isLightColor(newColorInput.accent)) {
          this.accentComplement = "#000000";
        } else {
          this.accentComplement = "#FFFFFF";
        }
      },
      deep: true,
    },
  },
  methods: {
    onApply() {
      if (
        !isHexColor(this.primary) ||
        !isHexColor(this.neutral) ||
        !isHexColor(this.accent)
      ) {
        alert(
          "Please add the colors with hex format (for example: #FFFFFF or #FFF)"
        );
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
        alert(
          "Please add the colors with hex format (for example: #FFFFFF or #FFF)"
        );
        return;
      }

      const newPallete = {
        id: createId(this.primary, this.neutral, this.accent),
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
