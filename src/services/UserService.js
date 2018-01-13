import store from 'store'

const KEY = 'mister-bitcoin-user'

function loadUser () {
  return new Promise((resolve, reject) => { 
    resolve(store.get(KEY) || null)
  })
}

function saveUser(user) {
  return new Promise((resolve, reject) => { 
    store.set(KEY, user)  
    resolve(user)
  })
}

function getEmptyUser() {
  return {
    name: '',
    coins: 100
  }
}

export default {
  loadUser,
  saveUser,
  getEmptyUser
}


