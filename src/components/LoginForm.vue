<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <button>Log in</button>
  </form>
</template>

<script>
import {ref} from 'vue'
import userLogin from '../composables/userLogin'
export default {
    setup(props, context){
        const {error , login} = userLogin();


        const email = ref('')
        const password = ref('')
        const handleSubmit = async () =>{
          await login(email.value,   password.value) 
          if (!error.value) {
            console.log('hehe')
              context.emit('login')
          }
        }


        return { email, password,handleSubmit}
    }
}
</script>
<style>

</style>