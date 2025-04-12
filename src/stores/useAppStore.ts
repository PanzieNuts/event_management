import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    userAccount: [
      {
        username: 'firstpersonnel',
        email: 'firstpersonnel@gmail.com',
        name: 'Mama mo blue',
        password: '0000'
      },
      {
        username: 'secondpersonnel',
        email: 'secondpersonnel@gmail.com',
        name: 'queenie',
        password: '12A3'
      }
    ],
    currentUser: null as null | { username: string; email: string; name: string }

  }),
  actions: {
    login(username: string, password: string) {
      const user = this.userAccount.find((u) => u.username === username && u.password === password)
      if (user) {
        this.currentUser = user
        return true
      }
      return false
    },

    logout() {
      this.currentUser = null
    }
  }
})
