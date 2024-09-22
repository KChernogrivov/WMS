<template>
  <v-card
    flat
  >
    <template v-slot:title>
      <v-skeleton-loader type="subtitle" :loading="loading">
        <p class="text-h4">Company {{ company?.name }}</p>
      </v-skeleton-loader>
    </template>

    <template v-slot:text>
      <v-skeleton-loader type="subtitle" :loading="loading">
        <div class="d-flex flex-column gap-2">
          <p class="text-h6">Address: {{ getFullAddress }}</p>
          <p class="text-h6">Email: {{ company.email }}</p>
          <p class="text-h6">Website: {{ company.website }}</p>
          <p class="text-h6">Phone: {{ company.phone }}</p>
          <p class="text-h6">Phone 2: {{ company.phone_2 }}</p>
        </div>
      </v-skeleton-loader>
    </template>

    <v-card>
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
import {companyController} from "@/shared/utils/api/companyController/companyController";
import router from "@/app/router";

const loading = ref(true);
const company = ref(null);
const search = ref();
const collection = ref([]);
const snackbar = ref(false);
const route = useRoute()

onMounted(async () => {
  try {
    loading.value = true;
    await Promise.all([
      getCompanyById(),
      getWarehousesCompany()
    ]);
    loading.value = false;
  } catch (error) {
    snackbar.value = true;
  }
})

const getCompanyById = async () => {
  try {
    const response = await companyController.getCompanyById(route.params.id);
    company.value = response.data;
    return response;
  } catch (error) {
    return error;
  }
}

const getWarehousesCompany = async () => {
  try {
    const response = await companyController.getWarehousesCompany(route.params.id);
    collection.value = response.data;
    return response;
  } catch (error) {
    return error;
  }
}

const getFullAddress = computed(() => {
  return [company.value?.country, company.value?.city, company.value?.street, company.value?.building_number].join(', ')
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
