import { defineStore } from "pinia";
import { useLocalStorage } from '@vueuse/core'

export const useAuthStore = defineStore('Auth', {
    state : ()=> ({
        isAuthenticate : true,
        
        user: useLocalStorage('user', {}), 
    }),

    actions : {
        setUser ( user ) {
            this.user = user
        }
    },

    getters : {
        getUser : ( state)  => state.user ,
        getStaus : ( state ) => state.isAuthenticate
    },

    hydrate(state, initialState) {
        // in this case we can completely ignore the initial state since we
        // want to read the value from the browser
        state.user = useLocalStorage('user',{})
      }

})

 