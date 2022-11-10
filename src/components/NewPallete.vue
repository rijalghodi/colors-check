<template>
  <form @submit.prevent="onSubmit" class="bordered p-3 mb-10 text-base">
    <!-- Colors -->
    <h2 class="text-lg mb-3">New Color Pallete</h2>
    <div class="flex flex-row gap-2 mb-5">
      <!-- Primary -->
      <div class="justify-start shrink grow w-50">
        <label for="primary" class="w-full block text-left text-sm"
          >Primary</label
        >
        <input
          id="primary"
          class="bordered w-full bg-transparent px-2 py-0.5"
          placeholder="#FFFFFF"
          v-model="primary"
        />
      </div>
      <!-- Neutral -->
      <div>
        <div class="flex flex-row gap-2 items-center">
          <label for="neutral" class="text-sm">Neutral</label>
          <div
            class="w-3 h-3 rounded-full"
            v-bind:style="{ 'background-color': neutral }"
          ></div>
        </div>
        <input
          id="neutral"
          class="w-full bg-transparent bordered px-2 py-0.5"
          placeholder="#772299"
          v-model="neutral"
          @change="onChange"
        />
      </div>
      <!-- Accent -->
      <div>
        <div class="flex flex-row gap-2 items-center">
          <label for="accent" class="text-sm">Accent</label>
          <div
            class="w-3 h-3 rounded-full"
            v-bind:style="{ 'background-color': accent }"
          ></div>
        </div>
        <input
          id="accent"
          class="w-full bg-transparent bordered px-2 py-0.5"
          placeholder="#772299"
          v-model="accent"
        />
      </div>
    </div>
    <div class="flex flex-row justify-center gap-1">
      <button
        @click="onApply"
        type="button"
        class="primary-button px-7 py-1 border w-auto"
      >
        Apply
      </button>
      <button type="submit" class="primary-button px-7 py-1 border w-auto">
        Save
      </button>
    </div>
  </form>
</template>

<script>
let isHexColor = require("../util/isHexColor");
export default {
  name: "NewPallete",
  data() {
    return {
      primary: "#000000",
      neutral: "#FFFBBB",
      accent: "#BFABAB",
    };
  },
  methods: {
    onApply() {
      if (
        !isHexColor(this.primary) ||
        !isHexColor(this.neutral) ||
        !isHexColor(this.accent)
      ) {
        return;
      }

      const newColorTheme = {
        primary: this.primary,
        neutral: this.neutral,
        accent: this.accent,
      };

      this.$emit("apply-color-theme", newColorTheme);
    },
    onSubmit() {
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
        primary: this.primary,
        neutral: this.neutral,
        accent: this.accent,
      };

      this.$emit("add-pallete", newPallete);
    },
  },
  watch: {
    // // whenever color input changes, this function will run
    // question(newQuestion, oldQuestion) {
    //   if (newQuestion.includes('?')) {
    //     this.getAnswer()
    //   }
    // }
  },
};
</script>
