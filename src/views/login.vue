<template>
  <v-container class=" fill-height d-flex justify-center align-center">
    <v-card class="pa-6" width="500px">
      <v-card-title class="text-h5 text-center">Login</v-card-title>

      <v-card-text>
        <v-form @submit.prevent="handleLogin">
          <v-text-field
            v-model="username"
            label="Username"
            prepend-icon="mdi-account"
            required
          />
          <v-text-field
            v-model="password"
            label="Password"
            prepend-icon="mdi-lock"
            append-inner-icon="mdi-eye"
            required
          />
          <v-btn type="submit" block color="#FF9149" class="mt-4">Login</v-btn>
        </v-form>

        <v-alert v-if="error" type="error" class="mt-4">
          {{ error }}
        </v-alert>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '../stores/useAppStore'


const router = useRouter()
const store = useAppStore()

const username = ref('')
const password = ref('')
const error = ref('')

const handleLogin = () => {
  const success = store.login(username.value, password.value)
  if (success) {
    error.value = ''
    router.push('/event')
  } else {
    error.value = 'Invalid credentials. Please try again.'
  }
}
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
}

</style>
