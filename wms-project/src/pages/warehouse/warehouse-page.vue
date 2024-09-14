<template>
  <v-card
    flat
  >
    <template v-slot:title>
      <v-skeleton-loader type="subtitle" :loading="loading">
        <p class="text-h4">{{ warehouseData?.name }}</p>
      </v-skeleton-loader>
    </template>

    <template v-slot:text>
      <v-skeleton-loader type="subtitle" :loading="loading">
        <div class="d-flex flex-column gap-2">
          <p class="text-h6">Company: {{ warehouseData?.vendor?.name || '-' }}</p>
          <p class="text-h6">Address: {{ getFullAddress }}</p>
        </div>
      </v-skeleton-loader>
    </template>

    <div class="mt-4">
      <v-data-table
        :group-by="groupBy"
        :headers="headers"
        :items="collection"
        :loading="loading"
        item-value="name"
        hover
      >
        <template v-slot:loading>
          <v-skeleton-loader type="card"></v-skeleton-loader>
        </template>
        <template v-slot:group-header="{ item, columns, toggleGroup, isGroupOpen }">
          <tr>
            <td :colspan="columns.length">
              <VBtn
                :icon="isGroupOpen(item) ? '$expand' : '$next'"
                size="small"
                variant="text"
                @click="toggleGroup(item)"
              ></VBtn>
              {{ item.value }}
            </td>
          </tr>
        </template>
      </v-data-table>
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
import {computed, onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {warehouseController} from "@/shared/utils/api/warehouseController/warehouseController";

const loading = ref(true);
const warehouseData = ref({});
const collection = ref([]);
const snackbar = ref(false);
const route = useRoute()

onMounted(async () => {
  try {
    loading.value = true;
    await Promise.all([
      getWarehouseById(),
      getProductsInWarehouse()
    ]);
    loading.value = false;
  } catch (error) {
    snackbar.value = true;
  }
})

const getWarehouseById = async () => {
  try {
    const response = await warehouseController.getWarehouseById(route.params.id);
    warehouseData.value = response.data;
    return response;
  } catch (error) {
    return error;
  }
}

const getProductsInWarehouse = async () => {
  try {
    const response = await warehouseController.getProductsInWarehouse(route.params.id);
    collection.value = response.data;
    return response;
  } catch (error) {
    return error;
  }
}

const getFullAddress = computed(() => {
  return [warehouseData.value?.country, warehouseData.value?.city, warehouseData.value?.street, warehouseData.value?.building_number].join(', ')
})

const groupBy = [
  {
    title: 'Model',
    key: 'model_name',
    order: 'asc',
  },
]

const headers = [
  {
    title: 'HS code',
    align: 'start',
    key: 'hs_code',
  },
  {
    title: 'Serials',
    align: 'start',
    key: 'serial_number',
    width: '25%',
  },
  {
    title: 'Amount in stock',
    align: 'start',
    key: 'amount_in_stock',
  },
]

</script>

<style scoped>

</style>
