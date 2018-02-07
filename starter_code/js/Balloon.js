class Balloon {
	constructor(width, height, color, x, y){  
		this.width = width
		this.height = height
		this.color = color
		this.x = x
		this.y = y
		this.img = new Image();
		this.img.src = IMAGES_PARAMS.BALLOON
		this.img.onload = () => {
			this.drawBalloon();
		}
	
	}
	update(board){
		board.ctx.fillStyle = this.color
		board.ctx.fillRect(this.x, this.y, this.width, this.height)
	}
	drawBalloon(board){
		board.ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
	}
	left() {
		return this.x
	}

	right() {
		return this.x + this.width
	}

	top() {
		return this.y           

	}

	bottom() {
		return this.y + this.height
	}
}


