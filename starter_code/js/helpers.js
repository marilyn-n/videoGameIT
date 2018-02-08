const isCollision = (player,pieces) => {
	for (let piece of pieces){
		if (player.isCrash(piece)) {
			return true
		}
	}
}

const refreshScreen = (board) => {
	board.clear()
	board.drawTrack()
	board.frames++
}

const createPiece = (pieces,frames) => {
	const IN = OBSTACLE_PARAMS
	if (frames % IN.CREATE_INTERVAL === 0){
		const width = randomWidth(IN.MAX_WIDTH, IN.MIN_WIDTH)
		const side = randomSide()
		const type = randomType()
		pieces.push(randomPiece(side, width, type))
	}
}
const randomType = () => {
	let out
	const type = Math.floor(Math.random() * 2) + 1
	if (type === 0) {
		out = 'balloon'
	} else {
		out = 'obstacle'
	}
	return out
}

const randomSide = () => {
	let out
	const side = Math.floor(Math.random() * 2) + 1
	if (side === 1) {
		out = 'left'
	} else {
		out = 'right'
	}
	return out
}

const randomPiece = (side, width, type) => {
	const IN = OBSTACLE_PARAMS
	const left = IN.COORDINATE.LEFT
	const right = IN.COORDINATE.RIGHT
	let out
	if (side === 'left') {
		out = (new Piece (width, IN.HEIGHT, 'black', left.X - width, left.Y,  type))
	} else if (side === 'right'){
		out = (new Piece (width, IN.HEIGHT, 'black', right.X, right.Y, type))
	}
	return out
}

const randomWidth = (	maxWidth, minWidth) => {
	let width =  Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth)
	return width
}

const refreshPieces = (pieces, board) => {
	for (let piece of pieces){
		piece.y++
		piece.draw(board)
	}
}
