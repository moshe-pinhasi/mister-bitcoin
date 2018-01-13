var moves = []

function addMove (to, amount) {
    const move = {at: (new Date()).getTime(), amount, to: to._id}
    moves.unshift(move)

    return getMoves()
}

function setMoves(inMoves) {
    moves = JSON.parse(JSON.stringify(inMoves))
    return Promise.resolve(moves)
}

function getMoves() {
    return Promise.resolve(moves)
}

export default {
    setMoves,
    addMove,
    getMoves
}