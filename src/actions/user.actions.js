import UserService from '../services/UserService'

export const USER_SAVED = 'USER/USER_SAVED'
export const USER_LOADED = 'USER/USER_LOADED'

export function saveUser(user, callback) {
    const request = UserService.saveUser(user).then(callback)

    return {
        type: USER_SAVED,
        payload: request
    }
}

export function loadUser(callback) {
    const request = UserService.loadUser().then( user => {
        callback(user)
        return user
    })

    return {
        type: USER_LOADED,
        payload: request
    };
}
