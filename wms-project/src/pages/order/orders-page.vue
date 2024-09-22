<template>
  <v-card
    title="Orders list"
    flat
  >
    <template v-slot:text>
      <v-text-field
        v-model="search"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
      ></v-text-field>
    </template>

    <v-data-table
      hover
      :headers="headers"
      :items="collection"
      :search="search"
      :loading="loading"
      @click:row="openOrder"
    >
      <template v-slot:loading>
        <v-skeleton-loader type="table-row@10"></v-skeleton-loader>
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {orderController} from "@/shared/utils/api/orderController/orderController";
import router from "@/app/router";

const loading = ref(true);
const search = ref();
const collection = ref([]);

onMounted(async () => {
  try {
    const response = await orderController.getOrders();
    collection.value = response.data.orders;
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false;
  }
})

const headers = [
  {
    title: 'Reference',
    align: 'start',
    sortable: false,
    key: 'reference',
  },
  {title: 'Description', key: 'description', align: 'end'},
  {title: 'Status', key: 'status.name', align: 'end'},
];

function openOrder(event, row) {
  router.push(`/orders/${row.item.id}`);
}
</script>
<style scoped>

</style>
