const PLAYER_PARAMS = {
	'X':{'MAX': 700,'MIN': 40,'INCREMENT': 100,'DECREMENT': 100},
	'Y':{'MAX': 520, 'MIN':40, 'INCREMENT': 50, 'DECREMENT': 50},
	'AUDIO': {
		'LEFT': {'FILE_PATH':'./audio/it-main-hi.mp3', 'VOLUME': 0.8},
		'RIGHT': {'FILE_PATH':'./audio/it-main-cut-georgie.mp3', 'VOLUME': 0.8},
		'UP': {'FILE_PATH':'./audio/it-main-laugh.mp3', 'VOLUME': 0.8},
		'DOWN': {'FILE_PATH':'./audio/it-main-hi.mp3', 'VOLUME': 0.8},
	   'END':{'FILE_PATH': './audio/pennywise-laugh.mp3', 'VOLUME': 1}
	}
}
//game over sound           
const endAudio = new Audio(PLAYER_PARAMS.AUDIO.END.FILE_PATH)
endAudio.volume = PLAYER_PARAMS.AUDIO.END.VOLUME
//left arrow sound
const leftAudio = new Audio(PLAYER_PARAMS.AUDIO.LEFT.FILE_PATH)
leftAudio.volume = PLAYER_PARAMS.AUDIO.LEFT.VOLUME
//right arrow sound
const rightAudio = new Audio(PLAYER_PARAMS.AUDIO.RIGHT.FILE_PATH)
rightAudio.volume = PLAYER_PARAMS.AUDIO.RIGHT.VOLUME



const OBSTACLE_PARAMS = {
	'MIN_WIDTH' : 50,
	'MAX_WIDTH' : 150,
	'HEIGHT' : 20,
	'CREATE_INTERVAL' : 150,
	'COORDINATE' : { 
		'RIGHT' : {'X': 150, 'Y': 0 },
		'LEFT' : {'X': 650,'Y': 0 }
	}
}


const BALLOON_PARAMS = {

}

const BOARD_PARAMS = {
	'FRAMES' : 0,
	'POINTS' : 0
}


const IMAGES_PARAMS = {
	'BALLOON' : './images/balloon.png',
	'GEORGIE' :'./images/georgie.png',
	'PENNYWISE' : './images/it-clown.png'
}

