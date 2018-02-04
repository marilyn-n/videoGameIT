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
    board.frames ++

}

const createObstacle = (obstacles,frames) => {
    if (frames %150 ===0){
        minWidth = 50
        maxWidth = 150
        height = 20
        side = Math.floor(Math.random()*2)+1
        width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth)
        if (side===1){
            obstacles.push(new Obstacle(width, height, 'red', 270-width, 0 ))
        } else {
            obstacles.push(new Obstacle(width, height, 'red', 30, 0 ))
        }
    }
}

const refreshObstacles = (obstacles,board) => {
    for (let obstacle of obstacles){
        obstacle.y ++
        obstacle.update(board)
    }

}