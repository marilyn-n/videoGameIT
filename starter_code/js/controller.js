let myGameArea = new Board(document)
  
const startGame = () => {  
	const myPlayer = new Player(400,530,document,'images/gorgie.png')
	let myObstacles = []
	const updateGame = () => {
		refreshScreen(myGameArea)
		createObstacle(myObstacles,myGameArea.frames)
		refreshObstacles(myObstacles,myGameArea)
		myGameArea.drawPlayer(myPlayer)
		myGameArea.score()
		if(isCollision(myPlayer,myObstacles)) {
            myGameArea.stop()  

		}
	}
	myGameArea.start() 
	document.onkeydown  = myPlayer.createKeydownFn()
	myGameArea.interval = setInterval(updateGame, 20)
}

