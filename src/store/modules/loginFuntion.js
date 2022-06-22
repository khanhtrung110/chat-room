import { createStore } from 'vuex'
import { ref } from 'vue';
import { projectAuth } from '../../firebase/config';

const loginFuntion = {
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
    async login(context, { email, password }) {
      const res = await projectAuth.signInWithEmailAndPassword(email, password)
      if (res) {
        context.commit('setUser', res.user)
      } else {
        throw new Error('could not complete login')
      }
    },
  }
}
export  default loginFuntion