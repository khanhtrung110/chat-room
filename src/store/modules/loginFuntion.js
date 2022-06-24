import { projectFirestore } from '../../firebase/config'
import { projectAuth } from '../../firebase/config';

const loginFuntion = {
  state: {
    user: null
  },
  getters: {
    getuser: state => state.user
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      console.log('user state changed:', state.user)
    },
  },
  // context.commit('setUser', res.user)
  actions: {
    async login(context, { email, password }) {
      console.log('login',email, password)
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
    async addDoc(state,doc) {
      if(state){
        await projectFirestore.collection('messages').add(doc);
      }
      
    },
  }
}

projectAuth.onAuthStateChanged(user => {
  loginFuntion.state.user = user
  console.log('User',user)
})

export default loginFuntion