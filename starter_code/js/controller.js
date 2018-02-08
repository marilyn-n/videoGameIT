let myGameArea = new Board(document)
  
const startGame = () => {  
	const myPlayer = new Player(400,530,document, IMAGES_PARAMS.GEORGIE)
	let myPieces = []
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

