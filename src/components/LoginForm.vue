<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
     <div class="error">{{ error }}</div> 
    <button>Log in</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  setup(props,context) {
    const email = ref('')
    const password = ref('')
    const error = ref(null)
    const store = useStore()
    const router = useRouter()
    const handleSubmit = async () => {
      try {
        await store.dispatch('login', {
          email: email.value,
          password: password.value
        }
        )
        router.push({ name: 'Chatroom' });
      }
      catch (err) {
        error.value = err.message
      }
    }
    return { handleSubmit, email, password, error }
  }
}
</script>
<style>
</style>