<template>
  <v-card
    flat
  >
    <template v-slot:title>
      <v-skeleton-loader>
        <p class="text-h4">Create inbound order</p>
      </v-skeleton-loader>
    </template>

    <v-form @submit="onSubmit">
      <v-divider><p class="text-h6">Recipient</p></v-divider>

      <v-autocomplete
        v-model="consignee.value.value"
        :error-messages="consignee.errorMessage.value"
        class="mt-2"
        :items="warehouses"
        placeholder="Warehouse"
        item-title="name"
        item-value="id"
      ></v-autocomplete>

      <v-divider><p class="text-h6">Sender</p></v-divider>

      <v-row class="mt-2">
        <v-col cols="12" md="6">
          <v-text-field
            v-model="recipientCompany.value.value"
            :error-messages="recipientCompany.errorMessage.value"
            label="Company name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            v-model="contactPerson.value.value"
            :error-messages="contactPerson.errorMessage.value"
            label="Contact person"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            v-model="phone.value.value"
            :error-messages="phone.errorMessage.value"
            label="Phone"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row class="mb-2">
        <v-col cols="12" md="3">
          <v-text-field
            v-model="county.value.value"
            :error-messages="county.errorMessage.value"
            label="Country"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            v-model="city.value.value"
            :error-messages="city.errorMessage.value"
            label="City"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            v-model="street.value.value"
            :error-messages="street.errorMessage.value"
            label="Street"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            v-model="house.value.value"
            :error-messages="house.errorMessage.value"
            label="House"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-divider><p class="text-h6">Delivery</p></v-divider>

      <v-row class="mt-2">
        <v-col cols="12" md="6">
          <v-text-field
            v-model="orderReference.value.value"
            :error-messages="orderReference.errorMessage.value"
            label="Order reference"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="tracking.value.value"
            :error-messages="tracking.errorMessage.value"
            label="Tracking"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="AWB.value.value"
            :error-messages="AWB.errorMessage.value"
            label="AWB"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="description.value.value"
            label="Description"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="ETA.value.value"
            :error-messages="ETA.errorMessage.value"
            type="date"
            label="ETA"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-file-input
            v-model="invoice.value.value"
            label="Invoice"
            :error-messages="invoice.errorMessage.value"
          ></v-file-input>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-file-input
            v-model="POD.value.value"
            :error-messages="POD.errorMessage.value"
            label="POD"
          ></v-file-input>
        </v-col>
      </v-row>

      <v-divider><p class="text-h6">Products</p></v-divider>

      <v-row
        v-for="(product, index) in products"
        :key="index"
        class="mt-2"
      >

        <v-col cols="12" md="3">
          <v-autocomplete
            v-model="product.value.id"
            :items="warehouses"
            placeholder="Product"
            item-title="name"
            item-value="id"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            v-model="product.value.quantity"
            label="Quantity"
          ></v-text-field>
        </v-col>

        <v-col cols="12" :md="products.length > 1 ? 3 : 6">
          <v-text-field
            v-model="product.value.serials"
            label="Serials"
          ></v-text-field>
        </v-col>

        <v-col
          v-if="products.length > 1"
          cols="12" md="3"
        >
            <v-btn
              class="text-none text-black"
              color="red-accent-2"
              size="x-large"
              variant="flat"
              width="100%"
              @click="removeProduct(index)"
            >
              Remove
            </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="9"
        ></v-col>
        <v-col cols="12" md="3">
          <v-btn
            class="text-none text-black mt-2"
            color="red-accent-2"
            size="x-large"
            variant="flat"
            width="100%"
            @click="addProduct({
              id: null,
              quantity: null,
              serials: [],
            })"
          >
            Add product
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="9"></v-col>
        <v-col
          cols="12"
          md="3"
        >
          <v-btn class="text-none text-black mt-2"
                 color="red-accent-2"
                 size="x-large"
                 variant="flat"
                 width="100%"
                 :disabled="!meta.valid"
                 type="submit"
          >
            Submit
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {warehouseController} from "@/shared/utils/api/warehouseController/warehouseController";
import {useField, useFieldArray, useForm} from "vee-validate";
import {orderController} from "@/shared/utils/api/orderController/orderController";

const warehouses = ref([]);
const loading = ref(false);

onMounted(async () => {
  try {
    const response = await warehouseController.getWarehouses();
    warehouses.value = response.data.warehouses;
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false;
  }
})

// Form logic

const isLoading = ref(false);

const {handleSubmit, meta, setErrors} = useForm({
  validationSchema: {
    'recipient.id': value => !!value,
    'sender.company': value => !!value,
    'sender.contact_person': value => !!value,
    'sender.phone': value => !!value,
    'sender.county': value => !!value,
    'sender.city': value => !!value,
    'sender.street': value => !!value,
    'sender.house': value => !!value,
    'delivery.order_reference': value => !!value,
    'delivery.ETA': value => !!value,
    'delivery.description': value => !!value,
    'delivery.tracking': value => !!value,
    'delivery.AWB': value => !!value,
  },
  initialValues: {
    products: [
      {
        id: null,
        quantity: null,
        serials: [],
      }
    ]
  }
})

const consignee = useField('recipient.id')

const recipientCompany = useField('sender.company');
const contactPerson = useField('sender.contact_person');
const phone = useField('sender.phone');
const county = useField('sender.county');
const city = useField('sender.city');
const street = useField('sender.street');
const house = useField('sender.house');

const orderReference = useField('delivery.order_reference');
const ETA = useField('delivery.ETA');
const tracking = useField('delivery.tracking');
const AWB = useField('delivery.AWB');
const description = useField('delivery.description');
const invoice = useField('delivery.invoice');
const POD = useField('delivery.POD');

const { remove: removeProduct,push: addProduct, fields: products } = useFieldArray('products')

const onSubmit = handleSubmit(async values => {
  try {
    isLoading.value = true;
    console.log(values);
    const response = await orderController.createOrder(values);
    console.log(response);
  } catch (error) {
    setErrors({
      password: error.response.data.error?.message,
    });
  } finally {
    isLoading.value = false;
  }
});
</script>

<style scoped>

</style>
