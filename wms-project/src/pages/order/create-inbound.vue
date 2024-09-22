<template>
  <inbound-form></inbound-form>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {warehouseController} from "@/shared/utils/api/warehouseController/warehouseController";
import InboundForm from "@/features/InboundOrder/ui/inbound-form.vue";
const collection = ref([]);
const loading = ref(false);

onMounted(async () => {
  try {
    const response = await warehouseController.getWarehouses();
    collection.value = response.data.warehouses;
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false;
  }
})
</script>

<style scoped>

</style>
