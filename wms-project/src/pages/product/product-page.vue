<template>
  <v-card
    flat
  >
    <template v-slot:title>
      <v-skeleton-loader type="subtitle" :loading="loading">
        <p class="text-h4">Product {{ product?.model_name }}</p>
      </v-skeleton-loader>
    </template>

    <v-card>
      <template v-slot:text>
        <v-row class="text-h6">
          <v-col
            cols="12"
            sm="4"
          >
            <v-data-table :items="techInfo" hide-default-footer>
              <template v-slot:top>
                <p class="text-h5 pa-3">Technical information</p>
              </template>
            </v-data-table>
          </v-col>
          <v-col
            cols="12"
            sm="4"
          >
            <v-data-table :items="physicalInfo" hide-default-footer>
              <template v-slot:top>
                <p class="text-h5 pa-3">Physical information</p>
              </template>
            </v-data-table>
          </v-col>
          <v-col
            cols="12"
            sm="4"
          >
            <v-img
              width="100%"
              :height="300"
              src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            >
            </v-img>
          </v-col>
        </v-row>
      </template>
    </v-card>

    <v-card>
      <template v-slot:title>
        In stock warehouses
      </template>

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
        :search="search"
        :items="collection"
        :loading="loading"
        @click:row="openWarehouse"
      >
        <template v-slot:loading>
          <v-skeleton-loader type="table-row@10"></v-skeleton-loader>
        </template>
      </v-data-table>
    </v-card>

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
import {computed, onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {productController} from "@/shared/utils/api/productController/productController";
import router from "@/app/router";

const loading = ref(true);
const product = ref({});
const search = ref();
const collection = ref([]);
const snackbar = ref(false);
const route = useRoute()

onMounted(async () => {
  loading.value = true;
  await Promise.all([
    getProductById(),
    getProductsInWarehouse()
  ]).then(() => {
    loading.value = false;
  }).catch(() => {
    snackbar.value = true;
  });
})

const getProductById = async () => {
  await productController.getProductById(route.params.id).then((response) => {
    product.value = response.data;
  }).catch((error) => {
    throw error;
  });
}

const getProductsInWarehouse = async () => {
  await productController.getProductsInWarehouse(route.params.id).then((response) => {
    collection.value = response.data;
  }).catch((error) => {
    throw error;
  });
}

const physicalInfo = computed(() => {
  return [
    {
      name: 'Weight',
      value: product.value.weight + 'kg',
    },
    {
      name: 'Width',
      value: product.value.weight + 'cm',
    },
    {
      name: 'Height',
      value: product.value.height + 'cm',
    },
    {
      name: 'Length',
      value: product.value.length + 'cm',
    },
  ]
})

const techInfo = computed(() => {
  return [
    {
      name: 'Price',
      value: `${product.value?.price ?? '0'}$`,
    },
    {
      name: 'Company',
      value: product.value.vendor?.name,
    },
    {
      name: 'Product number',
      value: product.value.part_number,
    },
    {
      name: 'Model num',
      value: product.value.model_num,
    },
    {
      name: 'Is serial required',
      value: product.value.is_serial_required,
    },
    {
      name: 'HS code',
      value: product.value.hs_code,
    },
    {
      name: 'Bill of materials',
      value: product.value.bill_of_materials,
    },
    {
      name: 'Description',
      value: product.value.description,
    },
    {
      name: 'Note',
      value: product.value.note ?? '-',
    },
  ]
})


const headers = [
  {
    title: 'Name',
    align: 'start',
    key: 'name',
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
