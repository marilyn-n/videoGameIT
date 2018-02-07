let myGameArea = new Board(document)
  
const startGame = () => {  
	const myPlayer = new Player(400,530,document, IMAGES_PARAMS.GEORGIE)
	let myObstacles = []
	const updateGame = () => {
		refreshScreen(myGameArea)
		createObstacle(myObstacles,myGameArea.frames)
		refreshObstacles(myObstacles,myGameArea)
		myGameArea.drawPlayer(myPlayer)
		myGameArea.score()
		if(isCollision(myPlayer,myObstacles)) {
			myGameArea.stop()  			
			endAudio.play()
			endAudio.volume = 1.5
		}
	}
	myGameArea.start() 
	document.onkeydown  = myPlayer.createKeydownFn()
	myGameArea.interval = setInterval(updateGame, 20)
}

