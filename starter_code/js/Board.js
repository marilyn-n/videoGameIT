class Board {
	constructor(doc){
		this.doc = doc
		this.canvas = this.doc.createElement('canvas')
		this.frames = BOARD_PARAMS.FRAMES
		this.points = BOARD_PARAMS.POINTS
		this.interval = null
	}
	drawTrack(){
		this.ctx.fillStyle='black'
		this.ctx.fillRect(0,0,800,600)

	}
	start() {
		this.frames = BOARD_PARAMS.FRAMES
		clearInterval(this.interval)
		this.canvas.width = 800
		this.canvas.height = 600
		this.ctx = this.canvas.getContext('2d')
		this.doc.body.insertBefore(this.canvas, this.doc.body.childNodes[0])
	}
	clear() {
		this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
	} 

	// ============gameOver
	stop() {
		clearInterval(this.interval)
		this.ctx.fillStyle = '#870007'
		this.ctx.fillRect(0,0,800,600)
		this.ctx.font = '40px Shadows Into Light Two'
		this.ctx.fillStyle = 'white'
		this.ctx.fillText('You\'\ll float too!', 200, 250)
		this.ctx.fillStyle = 'white'
		this.ctx.fillText('Your final score', 200, 290)
		this.ctx.fillText(this.points, 400, 330)
	}
	score() {
		this.points = (Math.floor(this.frames/50))
		this.ctx.font = '18px serif'
		this.ctx.fillStyle = 'white'
		this.ctx.fillText('Score: ' + this.points, 60, 30)
	}   
	drawPlayer(player) {
		this.ctx.drawImage(player.img, player.x, player.y, 40,70)
	}      
      
}
