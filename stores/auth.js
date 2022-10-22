import { defineStore } from "pinia";

export const useAuthStore = defineStore('Auth', {
    state : ()=> ({
        isAuthenticate : true,
        user : {
            name: "Sarthak",
            email: "sarthak@bitfumes.com"
        }
    })
})