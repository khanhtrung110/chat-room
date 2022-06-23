import { createStore } from 'vuex'
import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

import loginFuntion from './modules/loginFuntion';
import userCollection from './modules/userCollection';


const storeData = createStore({
	modules:{
		loginFuntion,userCollection
	}
  });

export default storeData