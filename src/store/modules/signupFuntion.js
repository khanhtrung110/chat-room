import { createStore } from 'vuex'
import { ref } from 'vue';
import { projectAuth } from '../../firebase/config';

const signupFuntion = {
  state: {
    user: null
  },
  mutation: {
    setUser(state, payload) {
      state.user = payload
    },
  },
  // context.commit('setUser', res.user)
  actions: {
    async signup(context, { email, password, displayName }) {
    const res = await projectAuth.createUserWithEmailAndPassword(email, password)
      if (res) {
        context.commit('setUser', res.user)
      } else {
        throw new Error('could not complete login')
      }
    await res.user.updateProfile({ displayName })
    },
    
  }
}
export  default signupFuntion