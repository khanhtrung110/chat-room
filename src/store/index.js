import { createStore } from 'vuex'

import loginFuntion from './modules/loginFuntion';


const storeData = createStore({
	modules:{
		loginFuntion
	
	}
  });

export default storeData