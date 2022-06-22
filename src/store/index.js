import { createStore } from 'vuex'
import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

import loginFuntion from './modules/loginFuntion'
import signupFuntion from './modules/signupFuntion'


const storeData = createStore({
	modules:{
		loginFuntion,
		signupFuntion
	}
  });

export default storeData