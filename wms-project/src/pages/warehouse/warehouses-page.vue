<template>
  <v-card
    title="Warehouses list"
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
      @click:row="openWarehouse"
    >
      <template v-slot:loading>
        <v-skeleton-loader type="table-row@10"></v-skeleton-loader>
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup>
import {onMounted, ref} from "vue";
import router from "@/app/router";
import {warehouseController} from "@/shared/utils/api/warehouseController/warehouseController";

const loading = ref(true);
const search = ref();
const collection = ref([]);

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

const headers = [
  {
    title: 'Name',
    align: 'start',
    key: 'name',
  },
  {
    title: 'Company',
    align: 'start',
    key: 'vendor.name',
  },
  {
    title: 'Country',
    align: 'start',
    key: 'country',
  },
  {
    title: 'City',
    align: 'start',
    key: 'city',
  },
  {
    title: 'Email',
    align: 'start',
    key: 'email',
  },
];

function openWarehouse(event, row) {
  router.push(`/warehouses/${row.item.id}`);
}
</script>
<style scoped>

</style>
