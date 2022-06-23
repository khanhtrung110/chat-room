import { createStore, Store } from 'vuex'
import { ref } from 'vue';
import { projectAuth } from '../../firebase/config';

const loginFuntion = {
  state: {
		user: null
	  },
    getters:{
      getuser: state => state.user
    },
  mutations: {
    setUser(state,payload) {
     state.user = payload
     console.log('user state changed:', state.user)
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
    async logout(context) {
      await projectAuth.signOut()
     
        context.commit('setUser', null)
    },
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

projectAuth.onAuthStateChanged(user =>{
  console.log('User state change', user)
  loginFuntion.state.user = user
})

export  default loginFuntion