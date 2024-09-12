<template>
  <v-navigation-drawer
    :close-delay="200"
    expand-on-hover
    :mobile-breakpoint="'md'"
    rail
  >
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        subtitle="sandra_a88@gmailcom"
        title="Sandra Adams"
      >
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list v-model:opened="open" open-strategy="single">

      <v-list-group prepend-icon="mdi-truck-delivery" value="Orders">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            title="Orders"
          ></v-list-item>
        </template>

        <v-list-item
          link
          to="/orders"
          prepend-icon="mdi-format-list-bulleted"
          title="List of orders"
        >
        </v-list-item>

        <v-list-item
          link
          to="/orders/create-inbound"
          prepend-icon="mdi-download"
          title="Create inbound"
        ></v-list-item>

        <v-list-item
          link
          to="/orders/create-outbound"
          prepend-icon="mdi-upload"
          title="Create outbound"
        ></v-list-item>

        <v-list-item
          link
          to="/orders/create-internal"
          prepend-icon="mdi-autorenew"
          title="Create internal"
        ></v-list-item>
      </v-list-group>

      <v-list-group value="Warehouses">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-warehouse"
            title="Warehouses"
          ></v-list-item>
        </template>

        <v-list-item
          link
          to="/warehouses"
          prepend-icon="mdi-format-list-bulleted"
          title="List of warehouses"
        ></v-list-item>

        <v-list-item
          link
          to="/warehouses/create-warehouse"
          prepend-icon="mdi-plus"
          title="Create warehouse"
        ></v-list-item>

      </v-list-group>

      <v-list-group value="Products">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-tag-multiple"
            title="Products"
          ></v-list-item>
        </template>

        <v-list-item
          link
          to="/products"
          prepend-icon="mdi-format-list-bulleted"
          title="List of products"
        ></v-list-item>

        <v-list-item
          link
          to="/products/create"
          prepend-icon="mdi-plus"
          title="Create product"
        ></v-list-item>
      </v-list-group>

      <v-list-group value="Companies">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-briefcase"
            title="Companies"
          ></v-list-item>
        </template>

        <v-list-item
          link
          to="/companies"
          prepend-icon="mdi-format-list-bulleted"
          title="List of companies"
        ></v-list-item>

        <v-list-item
          link
          to="/companies/create"
          prepend-icon="mdi-plus"
          title="Create company"
        ></v-list-item>
      </v-list-group>

      <v-list-group value="Users">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-group"
            title="Users"
          ></v-list-item>
        </template>

        <v-list-item
          link
          to="/users"
          prepend-icon="mdi-format-list-bulleted"
          title="List of users"
        ></v-list-item>

        <v-list-item
          link
          to="/users/create"
          prepend-icon="mdi-plus"
          title="Create user"
        ></v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>

import {ref} from "vue";

const open = ref();
</script>

<style scoped>

</style>
