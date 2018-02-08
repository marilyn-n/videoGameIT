let myGameArea = new Board(document)
let myPieces = []

const startGame = () => {  
	const myPlayer = new Player(400,530,document, IMAGES_PARAMS.GEORGIE)
	const updateGame = () => {
		refreshScreen(myGameArea)
		createPiece(myPieces,myGameArea.frames)
		refreshPieces(myPieces,myGameArea)
		myGameArea.drawPlayer(myPlayer)
		myGameArea.score()
		if(isCollision(myPlayer,myPieces)) {
			myGameArea.stop()  			
			endAudio.play()
		}
	}

	myGameArea.start() 
	document.onkeydown  = myPlayer.createKeydownFn()
	myGameArea.interval = setInterval(updateGame, 20)
}

