<template>
  <form>
    <textarea
      placeholder="Type a message and hit enter to send ..."
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    >
    </textarea>
    <div class="error">{{error}}</div>
  </form>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref, watchEffect } from "vue";
import { timestamp } from "../firebase/config";

export default {
  setup() {
    const store = useStore();
    const error = ref("")
    const message = ref("");
    const user = store.getters.getuser;
    const handleSubmit = async () => {
      const chat = {
        name: user.displayName || null,
        message: message.value || null,
        createdAt: timestamp() || null
      };
      
      try {
      await store.dispatch('addDoc',chat)
      message.value = '';
      } catch (err) {
       error.value = err;
      }
    };

    return { message, handleSubmit,error };
  },
};
</script>

<style lang="scss" scoped>
form {
  @apply m-[10px];
  textarea {
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
    @apply w-full max-w-full mb-[6px] p-[10px];
  }
}
</style>