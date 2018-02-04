
    class Game {
        constructor(doc,board){
            this.gamePlayer = null
            this.gameArea = board
            this.gameObstacles = []
            this.interval = null
            this.doc = doc
        }
         
        update() {
            refreshScreen(this.gameArea)
            createObstacle(this.gameObstacles,this.gameArea.frames)
            refreshObstacles(this.gameObstacles,this.gameObstacles)
            this.gameObstacles.drawPlayer(this.gamePlayer)
            this.gameObstacles.score()
            if(isCollision(this.gamePlayer,this.gameObstacles)) {
                this.gameArea.stop()
            }
        }
  
        start() {
            this.gameArea.frames = 0 
            clearInterval(this.gameArea.interval)
            this.gamePlayer = new Player(135,530,this.doc,'images/car.png')
            this.gameObstacles = []
            this.gameArea.start() 
            document.onkeydown  = this.gamePlayer.createKeydownFn()
            this.interval = setInterval(this.update, 20)
        }
        stop(){
            clearInterval(this.interval)
            this.gameArea.stop()
        }
      
    }
  
  // const myGame = new Game(document, new Board(document))
  // myGame.start()

