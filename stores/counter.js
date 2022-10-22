import { defineStore } from 'pinia'
 

export const useCounterStore = defineStore('counter', {
 
   state: () => (
      { 
        count: 0 
      }
   ),
    actions: {
      increment ( val ) {
        this.count += val
      },
    },

    getters : {
      countDigitalLength : ( state ) => state.count.toString().length,
    }


})