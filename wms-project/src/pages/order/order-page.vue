<template>
  <v-card
    flat
  >
    <template v-slot:title>
      <v-skeleton-loader type="subtitle" :loading="loading">
        <p class="text-h4">Order {{ orderData?.reference }}</p>
      </v-skeleton-loader>
    </template>

    <template v-slot:text>
      <v-skeleton-loader type="subtitle" :loading="loading">
        <div class="d-flex flex-column gap-2">
          <p class="text-h6">Status: {{ orderData.status.name }}</p>
          <p class="text-h6">Type: {{ orderData.type.name }}</p>
          <p class="text-h6">PickUp Location: {{ }}</p>
          <p class="text-h6">Consignee: {{  }}</p>
          <p class="text-h6">Description: {{ orderData.description ?? '-' }}</p>
          <p class="text-h6">AWB: {{ orderData.AWB ?? '-' }}</p>
          <p class="text-h6">Invoice: {{ orderData.invoice ?? '-' }}</p>
          <p class="text-h6">POD: {{ orderData.POD ?? '-' }}</p>
          <p class="text-h6">ETA: {{ orderData.ETA ?? '-' }}</p>
          <p class="text-h6">Created by: {{ orderData.created_by.name }} {{ orderData.created_by.surname }}</p>
        </div>
      </v-skeleton-loader>
    </template>

    <v-data-table
      :headers="headers"
      :items="collection"
      :loading="loading"
      item-value="name"
    >
      <template v-slot:loading>
        <v-skeleton-loader type="table-row@5"></v-skeleton-loader>
      </template>
    </v-data-table>

    <div v-if="loading" class="mt-4">
      <v-skeleton-loader type="card"></v-skeleton-loader>
    </div>

    <v-snackbar
      timer="2000"
      color="red"
      v-model="snackbar"
    >
      <template v-slot:text>
        Something went wrong
      </template>
    </v-snackbar>
  </v-card>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {orderController} from "@/shared/utils/api/orderController/orderController";
import {useRoute} from "vue-router";

const loading = ref(true);
const orderData = ref(null);
const collection = ref([]);
const snackbar = ref(false);
const route = useRoute()

onMounted(async () => {
  try {
    loading.value = true;
    const response = await orderController.getOrderById(route.params.id);
    orderData.value = response.data;
    collection.value = response.data.products;
    loading.value = false;
  } catch (error) {
    snackbar.value = true;
  }
})

const headers = [
  {title: 'Model', align: 'left', key: 'model_name'},
  {title: 'Quantity', align: 'left', key: 'quantity'},
];
</script>

<style scoped>

</style>
