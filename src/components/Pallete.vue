<template>
  <button
    title="Apply as Color Theme"
    @click="$emit('apply-pallete', pallete.id)"
  >
    <i :class="['fa-solid', 'fa-check', pallete.applied ? 'applied' : '']"></i>
  </button>
  <div
    class="w-1/4"
    v-bind:style="{ 'background-color': pallete.primary }"
  ></div>
  <div
    class="w-1/4 py-1"
    v-bind:style="{ 'background-color': pallete.neutral }"
  ></div>
  <div
    class="w-1/4 py-1"
    v-bind:style="{ 'background-color': pallete.accent }"
  ></div>
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
