import { defineStore, skipHydrate } from "pinia";
import { useLocalStorage } from '@vueuse/core'
 

export const useCounterStore = defineStore('counter', {
 
   state: () => (
      { 
        count: useLocalStorage('count', 0), 
      }
   ),
  
    actions: {
      increment ( val ) {
        this.count += val
      },
    },

    getters : {
      countDigitalLength : ( state ) => state.count.toString().length,
    },

    hydrate(state, initialState) {
      // in this case we can completely ignore the initial state since we
      // want to read the value from the browser
      state.count = useLocalStorage('count',0)
    }


})