<template>
  <button
    title="Apply as Color Theme"
    @click="$emit('apply-pallete', pallete.id)"
  >
    <i :class="['fa-solid', 'fa-check', pallete.applied ? 'applied' : '']"></i>
  </button>
  <button
    class="w-1/4 hover:bg-opacity-80"
    v-bind:title="pallete.primary"
    v-bind:style="{ 'background-color': pallete.primary }"
  ></button>
  <button
    class="w-1/4 py-1 hover:!bg-opacity-80"
    v-bind:title="pallete.neutral"
    v-bind:style="{ 'background-color': pallete.neutral }"
  ></button>
  <button
    class="w-1/4 py-1 hover:bg-opacity-80"
    v-bind:title="pallete.accent"
    v-bind:style="{ 'background-color': pallete.accent }"
  ></button>
  <button
    title="Delete This Pallete"
    @click="$emit('delete-pallete', pallete.id)"
  >
    <i class="fa-solid fa-times"></i>
  </button>
</template>

<script>
export default {
  name: "PalleteVue",
  props: {
    pallete: Object,
  },
  methods: {
    onApplyPallete(pallete) {
      this.$emit("apply-pallete", pallete.id);
      this.$root$emit("update-input-color", pallete);
    },
    onDelete(id) {
      this.$emit("deletePallete", id);
    },
  },
};
</script>

<style scoped>
.color {
  width: 25%;
  background-color: tomato;
}
</style>
