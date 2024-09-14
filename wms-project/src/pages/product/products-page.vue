<template>
  <v-card
    title="Products list"
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
import router from "@/app/router";
import {productController} from "@/shared/utils/api/productController/productController";

const loading = ref(true);
const search = ref();

onMounted(async () => {
  try {
    const response = await productController.getProducts();
    collection.value = response.data.products;
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
    key: 'model_name',
  },
  {
    title: 'Company',
    align: 'start',
    key: 'vendor.name',
  },
  {
    title: 'Description',
    align: 'start',
    key: 'description',
  },
  {
    title: 'Price',
    align: 'start',
    key: 'price',
  },
];

const collection = ref([]);

function openOrder(event, row) {
  router.push(`/products/${row.item.id}`);
}
</script>
<style scoped>

</style>
