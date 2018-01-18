import UserService from 'Services/UserService'
import MoveService from 'Services/MoveService'

export const USER_SAVED = 'USER/USER_SAVED'
export const USER_LOADED = 'USER/USER_LOADED'
export const TRANSFER_COINS = 'USER/TRANSFER_COINS'

export function saveUser(user, callback) {
    
    return {
        type: USER_SAVED,
        payload: UserService.saveUser(user).then(user => {
            callback()
            return user
        })
    }
}

export function loadUser(callback) {
    var _user;
    const promise = UserService.loadUser()
        .then( user => {
            if (!user) return
            _user = user
            return MoveService.setMoves(user.moves)
        }).then( moves => {
            callback(_user)
            return _user
        })

    return {
        type: USER_LOADED,
        payload: promise
    };
}

export function transferCoins(from, to, amount, onSuccess, onError) {
    if ((from.coins - amount) <= 0) {
        onError('You have no enough coins!')

        return {
            type: TRANSFER_COINS,
            payload: Promise.resolve(from)
        };
    }

    const promise = MoveService.addMove(to, amount)
        .then( moves => {
            from.moves = moves
            from.coins = from.coins - amount
            return UserService.saveUser(from)
        }).then(user => {
            onSuccess()
            return from;
        })

    return {
        type: TRANSFER_COINS,
        payload: promise
    };
}
