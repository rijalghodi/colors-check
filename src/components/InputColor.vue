<template>
  <div>
    <div class="flex flex-row gap-2 items-center">
      <label for="accent" class="text-sm">accent</label>
      <div class="w-3 h-3" v-bind:style="{ 'background-color': accent }"></div>
    </div>
    <input
      id="accent"
      class="w-full bg-transparent bordered px-2 py-0.5"
      placeholder="#772299"
      v-model="accent"
      @change="onChange"
    />
  </div>
</template>

<script>
export default {
  name: "InputColor",
  props: {
    name: String,
    background: String,
  },
};
</script>
