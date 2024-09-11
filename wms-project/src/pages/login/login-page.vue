<template>
  <v-sheet
    class="pa-6 rounded mx-auto"
    max-width="400"
  >
    <h4 class="text-h5 font-weight-bold mb-4">Login</h4>
    <v-form @submit="onSubmit">
      <v-text-field
        v-model="login.value.value"
        :error-messages="login.errorMessage.value"
        placeholder="johndoe@gmail.com"
        type="email"
        label="Email"
      ></v-text-field>

      <v-text-field
        class="mt-2"
        v-model="password.value.value"
        :error-messages="password.errorMessage.value"
        type="password"
        label="Password"
      ></v-text-field>

      <v-btn
        class="text-none text-black mt-2"
        color="red-accent-2"
        size="x-large"
        variant="flat"
        :disabled="!meta.valid"
        :loading="isLoading"
        type="submit"
        block
      >
        Login
      </v-btn>
    </v-form>
  </v-sheet>
</template>

<script setup>
import {useField, useForm} from 'vee-validate'
import {authController} from "@/shared/utils/api/authController/authController";
import {ref} from "vue";
import router from "@/app/router";

const {handleSubmit, meta, setErrors} = useForm({
  validationSchema: {
    login(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

      return 'Must be a valid e-mail.'
    },
    password(value) {
      return value?.length
    },
  },
})

const login = useField('login');
const password = useField('password');
const isLoading = ref(false);

const onSubmit = handleSubmit(async values => {
  try {
    isLoading.value = true;
    const response = await authController.login(values);
    localStorage.setItem('token', response.data.token_access);
    router.push('/orders');
  } catch (error) {
    setErrors({
      password: error.response.data.error.message,
    });
  } finally {
    isLoading.value = false;
  }
});
</script>

<style scoped>

</style>
