<template>
  <nav v-if="user">
    <div >
        <p>Hey there... display name {{user.displayName}}</p>
        <p class="email">Currently logged in as {{user.email}}</p>
    </div>
    <button @click="handleSubmit">Logout</button>
  </nav>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  setup(props,context) {
    const router = useRouter()
    const store = useStore()
    const user = store.getters.getuser
    const handleSubmit = async () => {
      await store.dispatch('logout')
    }
    return { handleSubmit, user }
  }
}
</script>

<style>

</style>