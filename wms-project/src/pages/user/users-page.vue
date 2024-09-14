<template>
  <v-card
    title="Users list"
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
import {userController} from "@/shared/utils/api/userController/userController";

const loading = ref(true);
const collection = ref([]);
const search = ref();

onMounted(async () => {
  try {
    const response = await userController.getUsers();
    collection.value = response.data;
    loading.value = false;
  } catch (error) {
    console.log(error)
  }
})

const headers = [
  {
    title: 'Name',
    align: 'start',
    key: 'name',
  },
  {
    title: 'Surname',
    align: 'start',
    key: 'surname',
  },
  {
    title: 'Phone',
    align: 'start',
    key: 'phone',
  },
  {
    title: 'Company',
    align: 'start',
    key: 'vendor.name',
  },
  {
    title: 'email',
    align: 'start',
    key: 'email',
  },
];
</script>
<style scoped>

</style>
