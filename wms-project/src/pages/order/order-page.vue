<template>
  <v-card
    flat
  >
    <template v-slot:title>
      <p class="text-h4">Order detail</p>
    </template>
    <template v-slot:text>
      <v-skeleton-loader type="subtitle" :loading="loading">
        {{ orderData }}
      </v-skeleton-loader>
    </template>

    <v-data-table
      :group-by="groupBy"
      :headers="headers"
      :items="collection"
      :loading="loading"
      item-value="name"
    >
      <template v-slot:group-header="{ item, columns, toggleGroup, isGroupOpen }">
        <tr>
          <td :colspan="columns.length">
            <VBtn
              :icon="isGroupOpen(item) ? '$expand' : '$next'"
              size="small"
              variant="text"
              @click="toggleGroup(item)"
            ></VBtn>
            {{ item.value ? 'Contains gluten' : 'Gluten free' }}
          </td>
        </tr>
      </template>

      <template v-slot:loading>
        <v-skeleton-loader type="table-row@5"></v-skeleton-loader>
      </template>
    </v-data-table>

    <div class="mt-4">
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
const snackbar = ref(false);
const route = useRoute()

onMounted(async () => {
  try {
    loading.value = true;
    const response = await orderController.getOrderById(route.params.id);
    orderData.value = response.data;
    loading.value = false;
  } catch (error) {
    snackbar.value = true;
  }
})

const groupBy = [
  {
    key: 'model',
  },
];

const headers = [
  {title: 'Model', align: 'center', key: 'model'},
  {title: 'HS code', key: 'hs-code', align: 'center'},
  {title: 'Serial', align: 'center', key: 'serials'},
  {title: 'Location', align: 'center', key: 'location'},
  {title: 'Amount in stock', key: 'amount-in-stock', align: 'center'},
  {title: 'Status', align: 'center', key: 'status'},
];

const collection = ref([]);
</script>

<style scoped>

</style>
