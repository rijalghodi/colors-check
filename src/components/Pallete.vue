<template>
  <button title="Apply">
    <i class="fa-solid fa-check"></i>
  </button>
  <div
    class="w-1/4 py-1"
    v-bind:style="{ 'background-color': pallete.primary }"
  >
    {{ pallete.primary }}
  </div>
  <div
    class="w-1/4 py-1"
    v-bind:style="{ 'background-color': pallete.neutral }"
  >
    {{ pallete.neutral }}
  </div>
  <div class="w-1/4 py-1" v-bind:style="{ 'background-color': pallete.accent }">
    {{ pallete.accent }}
  </div>
  <button title="Delete" @click="$emit('delete-pallete', pallete.id)">
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
