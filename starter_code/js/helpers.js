const isCollision = (player,obstacles) => {
	for (let obstacle of obstacles){
		if (player.isCrash(obstacle)) {
			return true
		}
	}
}

const refreshScreen = (board) => {
	board.clear()
	board.drawTrack()
	board.frames++
}

const createObstacle = (obstacles,frames) => {
	const IN = OBSTACLE_PARAMS
	if (frames % IN.CREATE_INTERVAL === 0){
		const width = randomWidth(IN.MAX_WIDTH, IN.MIN_WIDTH)
		const side = randomSide()
		obstacles.push(randomObstacle(side, width))
	}
}

const randomSide = () => {
	let out
	const side = Math.floor(Math.random() * 2) + 1
	if (side === 0) {
		out = 'left'
	} else {
		out = 'right'
	}
	return out
}


const randomObstacle = (side, width) => {
	const IN =OBSTACLE_PARAMS
	const left = IN.COORDINATE.LEFT
	const right = IN.COORDINATE.RIGHT
	let out
	if (side === 'left') {
		out = (new Obstacle (width, IN.HEIGHT, 'black', left.X - width, left.Y))
	} else if (side === 'right'){
		out = (new Obstacle (width, IN.HEIGHT, 'black', right.X, right.Y))
	}
	return out
}
	


const randomWidth = (	maxWidth, minWidth) => {
	let width =  Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth)
	return width
}

const refreshObstacles = (obstacles,board) => {
	for (let obstacle of obstacles){
		obstacle.y++
		obstacle.draw(board)
	}
}
