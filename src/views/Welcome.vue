<template>
  <div class="welcome container">
    <p>Welcome {{alertText}}</p> 
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm @login="enterChat" />
      <p>
        Already registered?
        <span @click="showLogin = false">Signup</span> instead
      </p>
    </div>
    <div v-else>
      <h2>Sign up</h2>
      <SignupForm @signup="enterChat" />
      <p>
        No account yet? <span @click="showLogin = true">Login</span> instead
      </p>
    </div>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const alertText= ref("not yet")
    const showLogin = ref(true)
    const router = useRouter()
    const enterChat = () => {
      // router.push({ name: 'Chatroom' });
    };

    return { 
      showLogin,
      alertText,
      enterChat };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
</style>