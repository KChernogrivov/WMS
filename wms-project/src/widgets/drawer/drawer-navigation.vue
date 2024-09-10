<template>
  <v-navigation-drawer
    expand-on-hover
    rail
  >
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        subtitle="sandra_a88@gmailcom"
        title="Sandra Adams"
      >
        <template v-slot:append>
          <v-btn
            icon="mdi-menu-down"
            size="small"
            variant="text"
          ></v-btn>
        </template>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list v-model:opened="open">
      <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item>

      <v-list-group value="Orders">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-circle"
            title="Orders"
          ></v-list-item>
        </template>

        <v-list-item
          link
          title="List of orders"
        ></v-list-item>

        <v-list-item
          link
          title="Create inbound"
        ></v-list-item>

        <v-list-item
          link
          title="Create outbound"
        ></v-list-item>

        <v-list-item
          link
          title="Create internal"
        ></v-list-item>
      </v-list-group>

      <v-list-group value="Warehouses">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-circle"
            title="Warehouses"
          ></v-list-item>
        </template>

        <v-list-item
          link
          to="/warehouses"
          title="List of warehouses"
        ></v-list-item>

        <v-list-item
          link
          to="/warehouses/create"
          title="Create warehouse"
        ></v-list-item>

      </v-list-group>

      <v-list-group value="Products">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-circle"
            title="Products"
          ></v-list-item>
        </template>

        <v-list-item
          link
          to="/products"
          title="List of products"
        ></v-list-item>

        <v-list-item
          link
          to="/products/create"
          title="Create product"
        ></v-list-item>
      </v-list-group>

      <v-list-group value="Companies">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-circle"
            title="Companies"
          ></v-list-item>
        </template>

        <v-list-item
          link
          to="/companies"
          title="List of companies"
        ></v-list-item>

        <v-list-item
          link
          to="/companies/create"
          title="Create company"
        ></v-list-item>
      </v-list-group>

      <v-list-group value="Users">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-circle"
            title="Users"
          ></v-list-item>
        </template>

        <v-list-item
          link
          to="/users"
          title="List of users"
        ></v-list-item>

        <v-list-item
          link
          to="/users/create"
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
