<template>
  <div class="bordered border selection:border py-3 px-1">
    <h2 class="text-lg mb-3 text-center">Pallete Collection</h2>
    <div class="flex flex-col item-center justify-center gap-2">
      <div
        title="Apply"
        class="p-2 h-12 flex justify-center duration-300 ease-out"
        :key="pallete.id"
        v-for="pallete in palletes"
      >
        <PalleteVue
          @apply-pallete="$emit('apply-pallete', pallete.id)"
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
  emits: ["delete-pallete", "apply-pallete"],
};
</script>

<style scoped></style>
