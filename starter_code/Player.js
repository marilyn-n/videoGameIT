class Player {
    constructor(x,y,doc,srcPath){
        this.x = x
        this.y = y
        this.doc = doc
        this.img = new Image()
        this.img.src = srcPath
    }

    moveLeft() {
        if (this.x>45){
            this.x-=10
        }
    }

    moveRight() {
        if (this.x<225){
            this.x+=10
        }
    }

    moveUp() {
        if (this.y>40){
            this.y-=10
        }
    }

    moveDown() {
        if (this.y<520){
            this.y+=10
        }
    }

    left() {
        return this.x
    }

    right() {
        return this.x+30
    }

    top() {
        return this.y
    }

    bottom() {
        return this.y+60
    }

    isCrash(obstacle) {
        const isBottom = this.bottom() < obstacle.top()
        const isTop = this.top() > obstacle.bottom()
        const isRight = this.right() < obstacle.left()
        const isLeft = this.left() > obstacle.right()
        return !(isBottom || isTop || isLeft || isRight)
    }
    createKeydownFn(e) {
        return (e) => {
            switch (e.keyCode){
            case 37:
                this.moveLeft()
                new Audio('./it-main-cut.mp3').play()
                break
            case 39:
                this.moveRight()
                new Audio('./it-main-cut.mp3').play()
                break
            case 38:
                this.moveUp()
                new Audio('./it-main-cut.mp3').play()
                break
            case 40:
                this.moveDown()
                new Audio('./it-main-cut.mp3').play()
                break
            } 
        }
    }
}