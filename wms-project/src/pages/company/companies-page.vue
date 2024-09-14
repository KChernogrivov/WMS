<template>
  <v-card
    title="Companies list"
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
import {companyController} from "@/shared/utils/api/companyController/companyController";

const loading = ref(true);
const search = ref();
const collection = ref([]);

onMounted(async () => {
  try {
    const response = await companyController.getCompanies();
    collection.value = response.data;
    console.log(collection.value);
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
  {
    title: 'Phone',
    align: 'start',
    key: 'phone',
  },
];

function openOrder(event, row) {
  router.push(`/companies/${row.item.id}`);
}
</script>
<style scoped>

</style>
