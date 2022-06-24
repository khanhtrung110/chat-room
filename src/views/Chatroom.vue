<template>
  <div class="container">
    <Navbar/>
    <ChatWindow />
    <NewChatForm/>
  </div>
</template>

<script>
import NewChatForm from '../components/NewChatForm.vue'
import ChatWindow from '../components/ChatWindow.vue'
import Navbar from '../components/Navbar.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { effect, watch, watchEffect } from '@vue/runtime-core'
export default {
  components:{
    Navbar,
    NewChatForm,
    ChatWindow
  },
  setup(){
    const store = useStore();
    const router = useRouter();
    const user = store.getters.getuser

    // watchEffect(()=>{
    //   if (!user) {
    //       router.push({name: 'Welcome'})
    //   }
    // })
    // watch(user, ()=>{

    // })
  }

}
</script>

<style>

</style>