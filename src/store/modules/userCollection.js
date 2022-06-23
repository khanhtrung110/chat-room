import { projectFirestore } from '../../firebase/config'

const userCollection = {
    state: {
        },
      getters:{
         },
    mutations: {
    
         },
    // context.commit('setUser', res.user)
    actions: {
        async addDoc(doc) {
            await projectFirestore.collection('messages').add(doc) ;
          },
    }
  }
  export default userCollection