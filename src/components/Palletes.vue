<template>
  <div class="bordered border selection:border py-3 px-1">
    <h2 class="text-lg mb-3">Color Palletes</h2>
    <div class="flex flex-col item-center justify-center gap-2">
      <div
        title="Apply"
        class="p-2 flex justify-center gap-1"
        :key="pallete.id"
        v-for="pallete in palletes"
      >
        <PalleteVue
          @delete-pallete="$emit('delete-pallete', pallete.id)"
          :pallete="pallete"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PalleteVue from "./Pallete.vue";

export default {
  name: "PalletesVue",
  components: {
    PalleteVue,
  },
  props: {
    palletes: Array,
  },
  emits: ["delete-pallete"],
};
</script>

<style scoped></style>
