////////////////////////////////////////////////////////////
// GAME v1.8
////////////////////////////////////////////////////////////

/*!
 *
 * GAME SETTING CUSTOMIZATION START
 *
 */

//keyboard key code
var keyboard_arr = {left:[65,37],
					right:[68,39],
					up:[87,38],
					down:[83,40]};

//car array
var car_array = [
					{image:'assets/car1.png', thumb:'assets/car1_thumb.png', data:{width:40, height:90, speed:7, reverseSpeed:5, life:100}},
					{image:'assets/car1.png', thumb:'assets/car1_thumb.png', data:{width:40, height:90, speed:7, reverseSpeed:5, life:100}},
					{image:'assets/car1.png', thumb:'assets/car1_thumb.png', data:{width:44, height:90, speed:7, reverseSpeed:5, life:100}},
					{image:'assets/car1.png', thumb:'assets/car1_thumb.png', data:{width:40, height:95, speed:7, reverseSpeed:5, life:100}},
					{image:'assets/car1.png', thumb:'assets/car1_thumb.png', data:{width:40, height:90, speed:7, reverseSpeed:5, life:100}},
					{image:'assets/car1.png', thumb:'assets/car1_thumb.png', data:{width:40, height:90, speed:7, reverseSpeed:5, life:100}},
					{image:'assets/car1.png', thumb:'assets/car1_thumb.png', data:{width:40, height:90, speed:7, reverseSpeed:5, life:100}},
					{image:'assets/car1.png', thumb:'assets/car1_thumb.png', data:{width:40, height:98, speed:7, reverseSpeed:5, life:100}},
				];

//police car array
var policecar_array = [
					{image:'assets/car_police1.png', thumb:'assets/car_police1_thumb.png', data:{width:44, height:96, speed:12, reverseSpeed:10, damage:1.3}},
					{image:'assets/car_police2.png', thumb:'assets/car_police2_thumb.png', data:{width:40, height:93, speed:12, reverseSpeed:10, damage:1.3}}
				];

//map array
var map_array = [
					{
						radar:'assets/map1_radar.png',
						thumb:'assets/map1_thumb.png',
						image:'assets/map1.png',
						lap:5,
						collisions:[
							{type:0, path:[[-1671,440],[-1460,288],[-1442,-214],[-1017,-204],[-717,-372],[-482,-675],[-209,-1078],[1287,-1081],[1804,-687],[1813,-836],[1287,-1226],[-221,-1214],[-1683,-1211],[-1773,430],]},
							{type:0, path:[[-1665,452],[-1655,852],[-1349,1115],[587,1109],[872,966],[1101,585],[1398,-74],[1711,-771],[1813,-734],[1813,1270],[-1792,1260],[-1804,424],]},
							{type:0, path:[[-981,406],[-987,502],[295,489],[394,446],[623,204],[772,-204],[707,-433],[447,-523],[218,-483],[76,-362],[-129,-49],[-491,247],[-783,396],]},
							{type:1, path:[[-516,982],[-519,1056],[-117,1053],[-107,997],[339,985],[648,917],[880,765],[1023,551],[1329,-440],[1661,-381],[973,1127],[-1451,1177],[-1727,861],[-1715,369],[-1507,235],[-1427,242],[-1429,610],[-1359,777],[-1247,904],[-1033,991],]},
							{type:1, path:[[-1408,236],[-1312,53],[-1139,-74],[-928,-102],[-826,-114],[-838,-204],[-643,-297],[-535,-409],[-473,-517],[-371,-495],[-340,-706],[-207,-873],[-15,-951],[342,-954],[348,-1040],[750,-1043],[753,-944],[1150,-932],[1298,-814],[1373,-597],[1323,-381],[1565,-353],[1751,-811],[1212,-1171],[-965,-1171],[-1544,-257],[-1541,232],]},
							{type:1, path:[[-841,669],[-829,579],[-990,554],[-984,341],[-665,282],[-693,186],[-426,59],[-188,-149],[-98,-313],[16,-307],[66,-530],[295,-536],[311,-629],[747,-619],[753,-536],[948,-539],[803,-204],[911,-149],[781,245],[683,220],[639,387],[543,520],[388,570],[283,570],[270,675],]},
							],
						checkpoints:[
							[-579,830,90,800],
							[-1269,443,0,800],
							[-447,-142,45,800],
							[507,-811,90,800],
							[1071,-127,0,800],
							[654,734,45,800],
							],
						aimove:[
							[-579,836],
							[-1068,824],
							[-1278,434],
							[-954,68],
							[-384,-166],
							[-177,-643],
							[255,-796],
							[1014,-784],
							[1194,-475],
							[888,437],
							[621,758],
							[174,833],
							],
						cars:[
							{x:-463,y:774,rotation:270,type:0},
							{x:-465,y:888,rotation:270,type:0},
							{x:-317,y:774,rotation:270,type:0},
							{x:-316,y:885,rotation:270,type:0},
							{x:-170,y:774,rotation:270,type:0},
							{x:-171,y:885,rotation:270,type:0},
							{x:-23,y:771,rotation:270,type:0},
							{x:-23,y:884,rotation:270,type:0},
							{x:271,y:-988,rotation:125,type:1},
							{x:1245,y:-27,rotation:190,type:1},
							],
					},
					];

var countdownTotal = 4; //total countdown

//racer mode
var gamePosText = 'POS'; //position text display
var gameLapText = 'LAP'; //lap text display
var gameLapCountText = '[NUMBER]/[TOTAL]';  //lap count text display
var gamePosCountText = '[NUMBER]/[TOTAL]';  //position count text display

var resultPos_arr = ['1ST','2ND','3RD','4TH','5TH','6TH','7TH','8TH'];
var gameFinalLapMessage = '¡ÚLTIMA VUELTA!'; //game win message
// EDIT GAME
//var gameFinishMessage = 'FINISH [POSITION]'; //game win message
var gameFinishMessage = '¡GRAN CARRERA!'; //game win message

//police pursuit mode
var gameCaughtText = 'BUSTED'; //total busted text display
var gameCaughtMessage = 'CAR[POSITION] BUSTED'; //game caught message
var gameCaughtCompleteMessage = 'ALL CARS BUSTED'; //game all cars caught message
var gameCaughtFailMessage = 'RACE IS FINISH'; //game caught fail message

//car life bar
var lifeBar = {
					width:90, //width of the bar
					height:15, //height of the bar
					strokeNum:8, //stroke number
					strokeColor:'#333', //stroke color
					fillColor:'#00D936', //fill color
					bgColor:'#333', //background color
					offset:70 //offet position y from car
				};

var exitMessage = 'ARE YOUR SURE YOU\nWANT TO QUIT THE GAME?'; //exit game message

var resultTitleWinText = 'CONGRATULATION!'; //result title display text
var resultTitleLoseText = 'GAME OVER!'; //result title display text

var resultLossText = 'YOU FINISH IN [POSITION]'; //result loss display text
var resultWinText = 'YOU FINISH IN [POSITION]'; //result win display text
var resultBestTimeText = 'BEST TIME : [NUMBER]'; //result win display text

var resultPursuitText = '[TOTAL] CARS BUSTED'; //result caught display text
var resultPursuitAwayText = '[TOTAL] CARS GET AWAY'; //result not caught display text

var resultPursuitAllText = 'ALL RACERS BUSTED'; //result caught all display text
var resultPursuitTimeText = 'PURSUIT TIME : [NUMBER]'; //result caugh time display text


//Social share, [SCORE] will replace with game score
var shareEnable = false; //toggle share
var shareText = 'SHARE YOUR SCORE'; //social share message
var shareTitle = 'Win the game in [POSITION] position in Pursuit Race Game.';//social share score title
var shareMessage = '[POSITION] position is my new result on Pursuit Race Game! Try it now!'; //social share score message
var sharePursuitTitle = '[TOTAL] cars busted in Pursuit Race Game.';//social share score title
var sharePursuitMessage = 'Total [TOTAL] cars busted is my new pursuit result on Pursuit Race Game! Try it now!'; //social share score message

/*!
 *
 * GAME SETTING CUSTOMIZATION END
 *
 */
$.editor = {enable:false};

var playerData = {time:0, best:0, pos:0, caught:0};
var gameData = {paused:true, gameMode:'race', gameControl:false, gameAIControl:false, userIndex:0, carIndex:0, mapIndex:0, cars:[], pos:[], aimove:[], gameEnd:false, startDate:0, timer:false, checkpointW:800, checkpointH:20, checkpoint:[], mapW:0, mapH:0, mapRadarW:0, mapRadarH:0, mapRadarGap:20, chase:[], pursuitLap:0};
var statsData = {speed:0, strength:0, damage:0};
var gameWorldData = {car:[]};
var cameraData = {con:true, index:0};
var mapRadarData = {radius:3, alpha:.8, userColor:'#ff0000', oppColor:'#333', pursuitColor:'#0018ff'};

/*!
 *
 * GAME BUTTONS - This is the function that runs to setup button event
 *
 */
function buildGameButton(){
	mobileControllerContainer.visible = false;

	if($.browser.mobile || isTablet){
		mobileControllerContainer.visible = true;
	}else{
		var isInIframe = (window.location != window.parent.location) ? true : false;
		if(isInIframe){
			this.document.onkeydown = keydown;
			this.document.onkeyup = keyup;

			$(window).blur(function() {
				appendFocusFrame();
			});
			appendFocusFrame();
        }else{
            this.document.onkeydown = keydown;
			this.document.onkeyup = keyup;
        }
	}

	buttonStart.cursor = "pointer";
	buttonStart.addEventListener("click", function(evt) {
		playSound('soundClick');
		playSound('soundEngine');
		// EDIT GAME
		goPage('select');
		goPage('instructions');
	});

	buttonStart2.cursor = "pointer";
	buttonStart2.addEventListener("click", function(evt) {
		goPage('game');
	});

	//select
	buttonLeftMap.cursor = "pointer";
	buttonLeftMap.addEventListener("click", function(evt) {
		playSound('soundClick');
		toggleGameMap(false);
	});

	buttonRightMap.cursor = "pointer";
	buttonRightMap.addEventListener("click", function(evt) {
		playSound('soundClick');
		toggleGameMap(true);
	});

	buttonLeftCar.cursor = "pointer";
	buttonLeftCar.addEventListener("click", function(evt) {
		playSound('soundClick');
		toggleGameCar(false);
	});

	buttonRightCar.cursor = "pointer";
	buttonRightCar.addEventListener("click", function(evt) {
		playSound('soundClick');
		toggleGameCar(true);
	});

	itemButtonModeRacer.cursor = "pointer";
	itemButtonModeRacer.addEventListener("click", function(evt) {
		playSound('soundClick');
		toggleGameMode(false);
	});

	itemButtonModePursuit.cursor = "pointer";
	itemButtonModePursuit.addEventListener("click", function(evt) {
		playSound('soundClick');
		toggleGameMode(true);
	});

	buttonReady.cursor = "pointer";
	buttonReady.addEventListener("click", function(evt) {
		playSound('soundClick');
		goPage('game');
	});

	//result
	buttonContinue.cursor = "pointer";
	buttonContinue.addEventListener("click", function(evt) {
		playSound('soundClick');
		goPage('main');
	});

	buttonFacebook.cursor = "pointer";
	buttonFacebook.addEventListener("click", function(evt) {
		share('facebook');
	});
	buttonTwitter.cursor = "pointer";
	buttonTwitter.addEventListener("click", function(evt) {
		share('twitter');
	});
	buttonWhatsapp.cursor = "pointer";
	buttonWhatsapp.addEventListener("click", function(evt) {
		share('whatsapp');
	});

	buttonSoundOff.cursor = "pointer";
	buttonSoundOff.addEventListener("click", function(evt) {
		toggleGameMute(true);
	});

	buttonSoundOn.cursor = "pointer";
	buttonSoundOn.addEventListener("click", function(evt) {
		toggleGameMute(false);
	});

	buttonFullscreen.cursor = "pointer";
	buttonFullscreen.addEventListener("click", function(evt) {
		toggleFullScreen();
	});

	buttonSettings.cursor = "pointer";
	buttonSettings.addEventListener("click", function(evt) {
		toggleOption();
	});

	buttonExit.cursor = "pointer";
	buttonExit.addEventListener("click", function(evt) {
		toggleConfirm(true);
		toggleOption();
	});

	buttonConfirm.cursor = "pointer";
	buttonConfirm.addEventListener("click", function(evt) {
		toggleConfirm(false);
		goPage('result');
	});

	itemExit.addEventListener("click", function(evt) {

	});

	buttonCancel.cursor = "pointer";
	buttonCancel.addEventListener("click", function(evt) {
		toggleConfirm(false);
	});

	//mobile buttons
	totalMobileDirection = ['left','right','up','down'];
	for(var n = 0; n<totalMobileButtons.length; n++){
		$.buttons[totalMobileButtons[n]].name = totalMobileButtons[n];
		$.buttons[totalMobileButtons[n]].direction = totalMobileDirection[n];
		$.buttons[totalMobileButtons[n]].addEventListener("mousedown", function(evt) {
			toggleKeyPress(evt.target.name, evt.target.direction, true);
		});
		$.buttons[totalMobileButtons[n]].addEventListener("pressup", function(evt) {
			toggleKeyPress(evt.target.name, evt.target.direction, false);
		});
	}

	for(var n=0; n < car_array.length; n++){
		gameData.cars.push(n);
	}
}

function appendFocusFrame(){
	$('#mainHolder').prepend('<div id="focus" style="position:absolute; width:100%; height:100%; z-index:1000;"></div');
	$('#focus').click(function(){
		$('#focus').remove();
	});
}

/*!
 *
 * MAP AND CAR SELECT - This is the function that runs for map and car select
 *
 */
function checkGameMode(){
	toggleGameMode(false);

	var availablePoliceCar = false;
	for(var n=0; n<map_array[gameData.mapIndex].cars.length; n++){
		if(map_array[gameData.mapIndex].cars[n].type == 1){
			availablePoliceCar = true;
		}
	}

	if(!availablePoliceCar){
		itemButtonModeRacer.visible = false;
		itemButtonModePursuit.visible = false;
	}
}

function toggleGameMode(con){
	itemButtonModeRacer.visible = false;
	itemButtonModePursuit.visible = false;

	if(con){
		gameData.gameMode = 'pursuit';
		itemButtonModeRacer.visible = true;
		gameData.carIndex = Math.round(Math.random()*(policecar_array.length-1));
	}else{
		gameData.gameMode = 'race';
		itemButtonModePursuit.visible = true;
		gameData.carIndex = Math.round(Math.random()*(car_array.length-1));
	}

	updateGameCar();
}

function toggleGameCar(con){
	if(gameData.gameMode == 'pursuit'){
		if(con){
			gameData.carIndex++;
			gameData.carIndex = gameData.carIndex > policecar_array.length - 1 ? 0 : gameData.carIndex;
		}else{
			gameData.carIndex--;
			gameData.carIndex = gameData.carIndex < 0 ? policecar_array.length - 1 : gameData.carIndex;
		}
	}else{
		if(con){
			gameData.carIndex++;
			gameData.carIndex = gameData.carIndex > car_array.length - 1 ? 0 : gameData.carIndex;
		}else{
			gameData.carIndex--;
			gameData.carIndex = gameData.carIndex < 0 ? car_array.length - 1 : gameData.carIndex;
		}
	}

	updateGameCar();
}

function updateGameCar(){
	for(var n=0; n<car_array.length; n++){
		TweenMax.killTweensOf($.selectCar[n]);
		$.selectCar[n].rotation = 0;
		$.selectCar[n].visible = false;
	}

	for(var n=0; n<policecar_array.length; n++){
		TweenMax.killTweensOf($.selectCar['police'+n]);
		$.selectCar['police'+n].rotation = 0;
		$.selectCar['police'+n].visible = false;
	}

	if (gameData.gameMode == 'pursuit'){
		$.selectCar['police'+gameData.carIndex].visible = true;
		animateGameCar($.selectCar['police'+gameData.carIndex]);
	} else if(gameData.gameMode == 'race'){
		$.selectCar[gameData.carIndex].visible = true;
		animateGameCar($.selectCar[gameData.carIndex]);
	}
}

function animateGameCar(car){
	car.rotation = 0;
	TweenMax.to(car, 1.5, {rotation:360, overwrite:true, ease:Linear.easeNone, onComplete:animateGameCar, onCompleteParams:[car]});
}

function toggleGameMap(con){
	if(con){
		gameData.mapIndex++;
		gameData.mapIndex = gameData.mapIndex > map_array.length - 1 ? 0 : gameData.mapIndex;
	}else{
		gameData.mapIndex--;
		gameData.mapIndex = gameData.mapIndex < 0 ? map_array.length - 1 : gameData.mapIndex;
	}

	updateGameMap();
}

function updateGameMap(){
	for(var n=0; n<map_array.length; n++){
		$.selectMap[n].visible = false;
	}

	$.selectMap[gameData.mapIndex].visible = true;
	checkGameMode();
}

/*!
 *
 * KEYBOARD EVENTS - This is the function that runs for keyboard events
 *
 */
function keydown(event) {
	if(!gameData.gameControl){
		return;
	}

	var userCar = gameWorldData.car[gameData.userIndex];
	if(keyboard_arr.left.indexOf(event.keyCode) != -1){
		//left
		userCar.keyData.left = true;
	}

	if(keyboard_arr.right.indexOf(event.keyCode) != -1){
		//right
		userCar.keyData.right = true;
	}

	if(keyboard_arr.up.indexOf(event.keyCode) != -1){
		//up
		userCar.keyData.up = true;
	}

	if(keyboard_arr.down.indexOf(event.keyCode) != -1){
		//down
		userCar.keyData.down = true;
	}
}

function keyup(event) {
	if(!gameData.gameControl){
		return;
	}

	var userCar = gameWorldData.car[gameData.userIndex];
	if(keyboard_arr.left.indexOf(event.keyCode) != -1 && userCar.keyData.left){
		userCar.keyData.left = false
	}

	if(keyboard_arr.right.indexOf(event.keyCode) != -1 && userCar.keyData.right){
		userCar.keyData.right = false;
	}

	if(keyboard_arr.up.indexOf(event.keyCode) != -1 && userCar.keyData.up){
		userCar.keyData.up = false;
	}

	if(keyboard_arr.down.indexOf(event.keyCode) != -1 && userCar.keyData.down){
		userCar.keyData.down = false;
	}
}

function toggleKeyPress(name, side, con){
	if(con){
		$.buttons[name].gotoAndStop('press');
	}else{
		$.buttons[name].gotoAndStop('static');
	}

	var userCar = gameWorldData.car[gameData.userIndex];
	userCar.keyData[side] = con;
}


/*!
 *
 * DISPLAY PAGES - This is the function that runs to display pages
 *
 */
var curPage=''
function goPage(page){
	curPage=page;

	mainContainer.visible = false;
	instructionsContainer.visible = false;
	selectContainer.visible = false;
	gameContainer.visible = false;
	editContainer.visible = false;
	resultContainer.visible = false;

	stopSoundLoop('musicGame');

	var targetContainer = null;
	switch(page){
		case 'main':
			playSoundLoop('musicMain');
			targetContainer = mainContainer;
		break;

		case 'instructions':
			targetContainer = instructionsContainer;
		break;

		case 'select':
			targetContainer = selectContainer;

			checkGameMode()
			updateGameMap();
		break;

		case 'game':
			targetContainer = gameContainer;

			stopSoundLoop('musicMain');
			playSoundLoop('musicGame');

			startGame();
		break;

		case 'edit':
			targetContainer = editContainer;

			buttonSettings.visible = false;
			stopSoundLoop('musicMain');
		break;

		case 'result':
			console.log(playerData);
			targetContainer = resultContainer;
			stopSoundLoop('musicMain');

			stopGame();
			stopPhysics();

			window.Event.$emit("gameFinished", playerData);

			if(gameData.gameMode == 'race'){
				saveGame(playerData.pos);

				resultTimeTxt.text = resultBestTimeText.replace('[NUMBER]', millisecondsToTimeGame(playerData.best));
				if(playerData.pos <= 3){
					resultTitleTxt.text = resultTitleWinText;
					resultScoreTxt.text = resultWinText.replace('[POSITION]', resultPos_arr[playerData.pos-1]);
					resultScoreTxt.text = ''
				}else{
					resultTitleTxt.text = resultTitleLoseText;
					resultScoreTxt.text = resultLossText.replace('[POSITION]', resultPos_arr[playerData.pos-1]);
					resultScoreTxt.text = ''
				}
			} else{
				saveGame(playerData.caught);

				if(playerData.caught == gameWorldData.car.length-1){
					//win
					resultTimeTxt.text = resultPursuitTimeText.replace('[NUMBER]', millisecondsToTimeGame(playerData.time));

					resultTitleTxt.text = resultTitleWinText;
					resultScoreTxt.text = resultPursuitAllText;
				}else{
					//fail
					resultTimeTxt.text = resultPursuitAwayText.replace('[TOTAL]', (gameWorldData.car.length-1) - playerData.caught);

					resultTitleTxt.text = resultTitleLoseText;
					resultScoreTxt.text = resultPursuitText.replace('[TOTAL]', playerData.caught);
				}
			}
		break;
	}

	if(targetContainer != null){
		targetContainer.visible = true;
		targetContainer.alpha = 0;
		TweenMax.to(targetContainer, .5, {alpha:1, overwrite:true});
	}

	resizeCanvas();
}

function toggleConfirm(con){
	confirmContainer.visible = con;

	if(con){
		TweenMax.pauseAll(true, true);
		//gameData.paused = true;
	}else{
		TweenMax.resumeAll(true, true)
		//gameData.paused = false;
	}
}

/*!
 *
 * START GAME - This is the function that runs to start play game
 *
 */

function startGame(){
	startPhysics();

	gameWorldData.car = [];
	gameData.chase = [];
	createMap(gameData.mapIndex);

	gameData.paused = false;
	gameData.gameEnd = false;
	gameData.pursuitLap = 0;
	itemArrowUser.animateData = {y:0, side:true, range:20};

	playerData.time = 0;
	playerData.best = 0;
	playerData.pos = 0;
	playerData.caught = 0;
	updateGameStats();

	gameTimerTxt.text = '-';
	if(gameData.gameMode == 'pursuit'){
		gamePosTxt.text = gameCaughtText;
	}else{
		gamePosTxt.text = gamePosText;
	}

	countdownContainer.visible = false;
	gameData.gameControl = gameData.gameAIControl = false;
	toggleCountdown(true);
}

/*!
 *
 * COUNTDOWN - This is the function that runs countdown timer
 *
 */
var countdownInterval = null;
var countNum = 0;
function toggleCountdown(con){
	if(con){
		for(var n=0; n<countdownTotal; n++){
			$.traffic[n].gotoAndStop(0);
			$.traffic[n].visible = true;
		}

		countNum = -1;
		countdownInterval = setInterval(updateCountdown, 1000);
		updateCountdown();
	}else{
		clearInterval(countdownInterval);
		countdownInterval = null;
	}
}

function updateCountdown(){
	if($.traffic[countNum] != undefined){
		$.traffic[countNum].gotoAndStop(1);
	}
	countNum++;

	if(countNum > countdownTotal){
		for(var n=0; n<countdownTotal; n++){
			$.traffic[n].visible = false;
		}

		toggleCountdown(false);
	}else if(countNum == countdownTotal){
		playSound('soundCountdownRace');

		//start race
		gameData.gameControl = true;
		gameData.gameAIControl = true;
		physicsData.paused = false;

		var thisCanvasCar = gameWorldData.car[gameData.userIndex];
		thisCanvasCar.pursuitData.init = true;

		playSoundLoopID('siren'+gameData.userIndex, 'soundSiren');
		setSoundVolume('siren'+gameData.userIndex, 0);

		toggleGameTimer(true);
		playSoundLoop('soundMove');
	}else{
		if(countNum >= 1)
			playSound('soundCountdown');
	}
}

function updateGameStatus(text, con){
	if(text == undefined){
		return;
	}

	gameStatusTxt.text = text;
	countdownContainer.visible = true;
	countdownContainer.x = 500;
	countdownContainer.alpha = 0;

	var speedNum = con == true ? 1.5 : .8;
	TweenMax.to(countdownContainer, speedNum, {alpha:1, x:0, overwrite:true, ease:Expo.easeOut, onComplete:completeGameStatus, onCompleteParams:[con]});
}

function completeGameStatus(con){
	var speedNum = con == true ? .8 : .3;
	TweenMax.to(countdownContainer, speedNum, {alpha:0, x:-500, overwrite:true, ease:Expo.easeIn});
}

 /*!
 *
 * STOP GAME - This is the function that runs to stop play game
 *
 */
function stopGame(){
	TweenMax.killAll();
	gameData.paused = true;
	physicsData.paused = true;
	gameData.gameEnd = true;
	gameData.gameControl = false;

	gameDebugTxt.text = '';
	toggleGameTimer(false);
	stopSoundLoop('soundMove');
	toggleCountdown(false);

	for(var n=0; n<gameWorldData.car.length; n++){
		stopSoundLoopID('car'+n, 'soundDust');
		stopSoundLoopID('siren'+n, 'soundSiren');
	}

	effectContainer.removeAllChildren();
	objectContainer.removeAllChildren();
}

/*!
 *
 * SAVE GAME - This is the function that runs to save game
 *
 */
function saveGame(score){
	if ( typeof toggleScoreboardSave == 'function' ) {
		$.scoreData.score = score;
		if(typeof type != 'undefined'){
			$.scoreData.type = type;
		}
		toggleScoreboardSave(true);
	}

	/*$.ajax({
      type: "POST",
      url: 'saveResults.php',
      data: {score:score},
      success: function (result) {
          console.log(result);
      }
    });*/
}

/*!
 *
 * CREATE MAP - This is the function that run to load and create map
 *
 */
function createMap(index){
	gameData.mapIndex = index;
	for(var n=0; n<map_array.length; n++){
		$.maps['radar'+n].visible = false;
		$.maps[n].visible = false;
		$.maps[n].mask = null;
	}

	$.maps['radar'+index].visible = true;
	$.maps[index].visible = true;
	mapMask.visible = false;
	$.maps[index].mask = mapMask;
	gameData.mapW = $.maps[index].image.naturalWidth;
	gameData.mapH = $.maps[index].image.naturalHeight;
	gameData.mapRadarW = $.maps['radar'+index].image.naturalWidth;
	gameData.mapRadarH = $.maps['radar'+index].image.naturalHeight;

	//collisions
	for(var n=0; n<map_array[index].collisions.length; n++){
		createPhysicsCollisions(map_array[index].collisions[n].type, map_array[index].collisions[n].path);
	}

	//checkpoints
	for(var n=0; n<map_array[index].checkpoints.length; n++){
		createCheckpointCollisions(n, map_array[index].checkpoints[n][0], map_array[index].checkpoints[n][1], map_array[index].checkpoints[n][2], map_array[index].checkpoints[0][3]);
	}
	createCheckpointCollisions(n, map_array[index].checkpoints[0][0], map_array[index].checkpoints[0][1], map_array[index].checkpoints[0][2], map_array[index].checkpoints[0][3]);

	//cars
	mapRadarIndContainer.removeAllChildren();
	shuffle(gameData.cars);
	var carIndex = 0;

	gameData.pos = [];

	var policeCarArray = [];
	for(var n=0; n<map_array[index].cars.length; n++){
		var canCreatePolice = true;
		if(map_array[index].cars[n].type == 0){
			gameData.pos.push(n);
		}else{
			policeCarArray.push(n);
		}
	}
	shuffle(policeCarArray);
	// EDIT GAME: desactivar policia
	var canCreatePolice = false;
	for(var n=0; n<policeCarArray.length; n++){
		var pCarIndex = policeCarArray[n];
		if(gameData.gameMode == 'pursuit' && n >= 1){
			canCreatePolice = false;
		}

		if(canCreatePolice){
			createCar(map_array[index].cars[pCarIndex].type, 0, map_array[index].cars[pCarIndex].x, map_array[index].cars[pCarIndex].y, map_array[index].cars[pCarIndex].rotation, pCarIndex);

			if(gameData.gameMode == 'pursuit' && n == 0){
				gameData.userIndex = gameWorldData.car.length-1;
				cameraData.index = gameWorldData.car.length-1;
			}
		}
	}

	// EDIT GAME: POSICION COCHE AL INICIO
	//shuffle(gameData.pos);

	var firstRound = true;
	var resetCars = false;

	// EDIT GAME: PONER SOLO UN COCHE
	//for(var n=0; n<gameData.pos.length; n++){
	for(var n=0; n<1; n++){
		var curCarIndex = gameData.cars[carIndex];
		var posIndex = gameData.pos[n];
		var isUser = false;

		if(n == 0 && gameData.gameMode == 'race'){
			isUser = true;

			//set user
			curCarIndex = gameData.carIndex;
			gameData.userIndex = gameWorldData.car.length;
			cameraData.index = gameData.userIndex;
		}

		createCar(map_array[index].cars[posIndex].type, curCarIndex, map_array[index].cars[posIndex].x, map_array[index].cars[posIndex].y, map_array[index].cars[posIndex].rotation, n);

		if(!isUser){
			carIndex++;
		}

		if(carIndex > car_array.length-1){
			resetCars = true;
		}

		if(firstRound && gameData.gameMode == 'race'){
			if(gameData.cars[carIndex] == gameData.carIndex){
				carIndex++;
				if(carIndex > car_array.length-1){
					resetCars = true;
				}
			}
		}

		if(resetCars){
			firstRound = false;
			shuffle(gameData.cars);
			carIndex = 0;
		}
	}
}

/*!
 *
 * CREATE CAR - This is the function that run to create car
 *
 */
function createCar(type,index,x,y,rotation,id){
	var newCar;
	var carArray;
	var carLife, carDamage;
	var indColor = mapRadarData.pursuitColor;

	if(type == 0){
		newCar = $.car[index].clone();
		carArray = car_array;
		carLife = car_array[index].data.life;
		carDamage = 0;
		indColor = index == gameData.carIndex ? mapRadarData.userColor : mapRadarData.oppColor;
		if(gameData.gameMode == 'pursuit'){
			indColor = mapRadarData.oppColor;
		}
	}else{
		if(gameData.gameMode == 'pursuit'){
			index = gameData.carIndex;
		}else{
			index = Math.round(Math.random()*(policecar_array.length-1));
		}
		newCar = $.car['police'+index].clone();
		carArray = policecar_array;
		carLife = 0;
		carDamage = car_array[index].data.damage;
	}

	var newInd = new createjs.Shape();
	newInd.graphics.beginFill(indColor).drawCircle(0,0,mapRadarData.radius);
	mapRadarIndContainer.addChild(newInd);
	newCar.radar = newInd;

	newCar.x = x;
	newCar.y = y;
	newCar.rotation = rotation;
	newCar.carType = type;
	newCar.keyData = {up:false, down:false, left:false, right:false, speed:0};
	newCar.engineData = {
							speed:carArray[index].data.speed,
							reverseSpeed:carArray[index].data.reverseSpeed,
							cSpeed:carArray[index].data.speed,
							cReverseSpeed:carArray[index].data.reverseSpeed,
							update:0,
							updateTime:50,
							slowarea:0,
							slowdown:false,
							active:true,
							life:carLife,
							lifeMax:carLife,
							damage:carDamage
						};

	newCar.idleData = {time:0, reset:0, reverse:0, impulse:0};

	var moveIndex = type == 0 ? 0 : -1;
	newCar.moveData = {index:moveIndex, rangeX:0, rangeY:0};
	newCar.checkpointData = {init:false, index:0, lap:0, distance:0, indicator:0};
	newCar.pursuitData = {index:-1, init:false, volume:0};
	newCar.oldX = x;
	newCar.oldY = y;
	newCar.radius = 60;
	newCar.soundTime = 0;
	newCar.inRange = true;
	newCar.index = gameWorldData.car.length;

	var carLabel = new createjs.Text(gameWorldData.car.length, "bold 18px Arial", "#FFF");
	newCar.textlabel = carLabel;

	/*newCar.addEventListener("click", function(evt) {
		gameData.userIndex = evt.target.index;
		cameraData.index = evt.target.index;
	});*/

	//tyre array
	newCar.tyre = {playTime:0};

	//detection array
	var detectionArray = [];
	for(var n=0; n<3; n++){
		detectionArray.push({x:0, y:0});
	}
	newCar.detectionArray = detectionArray;

	//dust
	var newDust = itemDustAnimate.clone();
	newDust.visible = false;
	newCar.dust = newDust;

	playSoundLoopID('car'+gameWorldData.car.length, 'soundDust');
	setSoundVolume('car'+gameWorldData.car.length, 0);
	gameWorldData.car.push(newCar);

	if(type == 1){
		var newSiren = itemSirenAnimate.clone();
		newCar.siren = newSiren;
		effectContainer.addChild(newSiren);
	}

	if($.editor.enable){
		editPathContainer.addChild(newDust, newCar, carLabel);
	}else{
		objectContainer.addChild(newDust, newCar);
	}

	if(gameData.gameMode == 'pursuit'){
		createLifeBar(newCar);
	}

	var carType = type == 0 ? 'racer' : 'police';
	createPhysicsCar(type,carArray[index].data.width,carArray[index].data.height,x,y,rotation,carType);
}

/*!
 *
 * CREATE LIFEBAR - This is the function that run to create car life bar
 *
 */
function createLifeBar(obj){
	var lifeBorder = new createjs.Shape();
	var lifeBg = new createjs.Shape();
	var lifeFill = new createjs.Shape();
	var lifeContainer = new createjs.Container();

	obj.lifeBorder = lifeBorder;
	obj.lifeBg = lifeBg;
	obj.lifeFill = lifeFill;
	obj.lifeContainer = lifeContainer;
	obj.lifeContainer.visible = false;

	obj.lifeContainer.regX = (lifeBar.width/2);
	obj.lifeContainer.regY = lifeBar.offset;

	lifeContainer.addChild(lifeBg, lifeFill, lifeBorder);
	objectContainer.addChild(lifeContainer);

	updateLifeBar(obj);
}

function updateLifeBar(obj){
	if(obj.carType == 1){
		obj.lifeContainer.visible = false;
		return;
	}else if(!obj.engineData.active){
		obj.lifeContainer.visible = false;
		return;
	}

	var lifeW, lifeH, lifeFill;
	var thisFillColor = lifeBar.fillColor;

	var barW = lifeBar.width;
	var barH = lifeBar.height;

	if(obj.engineData.life <= 0){
		obj.lifeContainer.visible = false;
		obj.engineData.active = false;
	}else{
		obj.lifeContainer.visible = true;

		lifeW = barW;
		lifeH = barH;
		lifeFill = obj.engineData.life / obj.engineData.lifeMax * lifeW;

		obj.lifeContainer.uncache();
		obj.lifeBorder.graphics.clear();
		obj.lifeBg.graphics.clear();
		obj.lifeFill.graphics.clear();
		obj.lifeBorder.graphics.setStrokeStyle(lifeBar.strokeNum).beginStroke(lifeBar.strokeColor).drawRect(0, 0, lifeW, lifeH);
		obj.lifeBg.graphics.beginFill(lifeBar.bgColor).drawRect(0, 0, lifeW, lifeH);
		obj.lifeFill.graphics.beginFill(thisFillColor).drawRect(0, 0, lifeFill, lifeH);
		obj.lifeContainer.cache(0,0,lifeW, lifeH);
	}
}

/*!
 *
 * UPDATE CAR DISTANCE - This is the function that runs to update car distance
 *
 */
function updateCarDistance(){
	for(var n=0; n<gameWorldData.car.length; n++){
		var thisCar = gameWorldData.car[n];

		var thisIndex = thisCar.checkpointData.index;
		thisIndex = thisIndex > map_array[gameData.mapIndex].checkpoints.length-1 ? 0 : thisIndex;
		var targetCheckpoint = map_array[gameData.mapIndex].checkpoints[thisIndex];
		var thisDistance = getDistanceByValue(thisCar.x, thisCar.y, targetCheckpoint[0], targetCheckpoint[1]);
		thisCar.checkpointData.distance = thisDistance;


		var pt = p2Container.localToGlobal(thisCar.x, thisCar.y);
		thisCar.inRange = false;
		if(pt.x >= offset.x && pt.x < (canvasW-offset.x)){
			if(pt.y >= offset.y && pt.y < (canvasW-offset.y)){
				thisCar.inRange = true;
			}
		}

		//dust
		thisCar.dust.x = thisCar.x;
		thisCar.dust.y = thisCar.y;
		thisCar.dust.rotation = thisCar.rotation;

		//label
		thisCar.textlabel.x = thisCar.x;
		thisCar.textlabel.y = thisCar.y;
	}
}

/*!
 *
 * UPDATE GAME - This is the function that runs to loop game update
 *
 */
function updateGame(){
	if(!gameData.paused){
		updateCamera();
		updateCarArrow();
		updateNextDirectionArrow();
		updateCarDistance();
		updateGameStats();
		updateCarSiren();

		objectContainer.sortChildren(sortFunction);
	}
}

/*!
 *
 * UPDATE CAMERA - This is the function that runs to update camera
 *
 */
function updateCamera(){
	if(!cameraData.con){
		return;
	}

	var userCar = gameWorldData.car[cameraData.index];

	var currentX = userCar.x;
	var currentY = userCar.y;

	var extraSpaceX = (stageW-(offset.x*1.5)) - gameData.mapW;
	var extraSpaceY = (stageH-(offset.y*1.5)) - gameData.mapH;

	if(extraSpaceX < 0){
		currentX = currentX < (extraSpaceX/2) ? (extraSpaceX/2) : currentX;
		currentX = currentX > Math.abs(extraSpaceX/2) ? Math.abs(extraSpaceX/2) : currentX;
	}

	if(extraSpaceY < 0){
		currentY = currentY < (extraSpaceY/2) ? (extraSpaceY/2) : currentY;
		currentY = currentY > Math.abs(extraSpaceY/2) ? Math.abs(extraSpaceY/2) : currentY;
	}

	if($.editor.enable){
		editMoveContainer.regX = currentX;
		editMoveContainer.regY = currentY;
	}else{
		p2Container.regX = currentX;
		p2Container.regY = currentY;

		mapMask.x = currentX;
		mapMask.y = currentY;
	}

	//p2Container.rotation =  -userCar.rotation;
}

/*!
 *
 * UPDATE INDICATOR - This is the function that runs to update car indicator
 *
 */

function updateCarArrow(){
	var userCar = gameWorldData.car[gameData.userIndex];

	itemArrowUser.x = userCar.x;
	itemArrowUser.y = userCar.y + itemArrowUser.animateData.y;

	if(itemArrowUser.animateData.side){
		itemArrowUser.animateData.y--;
		if(itemArrowUser.animateData.y < -itemArrowUser.animateData.range){
			itemArrowUser.animateData.side = false;
		}
	}else{
		itemArrowUser.animateData.y++;
		if(itemArrowUser.animateData.y >= 0){
			itemArrowUser.animateData.side = true;
		}
	}
}

/*!
 *
 * UPDATE NEXT DIRECTION INDICATOR - This is the function that runs to update car direction indicator
 *
 */

function updateNextDirectionArrow(){
	var userCar = gameWorldData.car[gameData.userIndex];
	var thisIndex = userCar.checkpointData.index;
	thisIndex = thisIndex > map_array[gameData.mapIndex].checkpoints.length-1 ? 0 : thisIndex;

	var targetCheckpoint = map_array[gameData.mapIndex].checkpoints[thisIndex];
	var thisDistance = getDistanceByValue(userCar.x, userCar.y, targetCheckpoint[0], targetCheckpoint[1]);

	if(thisDistance < 700){
		thisIndex++;
		thisIndex = thisIndex > map_array[gameData.mapIndex].checkpoints.length-1 ? 0 : thisIndex;
	}

	targetCheckpoint = map_array[gameData.mapIndex].checkpoints[thisIndex];
	var pt = p2Container.localToGlobal(targetCheckpoint[0], targetCheckpoint[1]);
	var scrSize = {width:canvasW, height:canvasH};

	var centerMouse = {
						x:pt.x - (scrSize.width/2),
						y:pt.y - (scrSize.height/2)};

	//find slope
	var slope = centerMouse.y/centerMouse.x;
	slope = isNaN(slope) == true ? 0 : slope;

	//for a bit of padding use a smaller screen size
	padSize = {width:scrSize.width-(offset.x * 2),
			  height:scrSize.height-(offset.y * 2)};

	//calculate indicator position
	if(centerMouse.y<0){
		//top of screen
		indicatorPos = {x:(-padSize.height/2)/slope,
					   y:-padSize.height/2}
	}else{
		// bottom of screen
		indicatorPos = {x:(padSize.height/2)/slope,
					   y:padSize.height/2}
	}

	if(indicatorPos.x<-padSize.width/2){
		//left side
		indicatorPos = {x:-padSize.width/2,
					   y:  slope * -padSize.width/2}
	}else if(indicatorPos.x>padSize.width/2){
		//right side
		indicatorPos = {x:padSize.width/2,
					   y:  slope * padSize.width/2}
	}

	indicatorPos = {x:indicatorPos.x + (scrSize.width/2),
				y: indicatorPos.y + (scrSize.height/2)}

	itemArrowGuide.x = indicatorPos.x;
	itemArrowGuide.y = indicatorPos.y;

	itemArrowGuide.visible = false;
	var carRadius = 50;
	if(pt.x < offset.x - carRadius){
		itemArrowGuide.visible = true;
	}else if(pt.x > (stageW - offset.x) + carRadius){
		itemArrowGuide.visible = true;
	}else if(pt.y < offset.y - carRadius){
		itemArrowGuide.visible = true;
	}else if(pt.y > (stageH - offset.y) + carRadius){
		itemArrowGuide.visible = true;
	}

	var rotation = getDirection(targetCheckpoint[0], targetCheckpoint[1], userCar.x, userCar.y);
	itemArrowGuide.rotation = rotation+180;

	if(gameData.gameMode == 'pursuit'){
		itemArrowGuide.visible = false;
	}
}

/*!
 *
 * UPDATE CAR SIREN - This is the function that runs to update car siren
 *
 */
function updateCarSiren(){
	for(var n=0; n<gameWorldData.car.length; n++){
		var thisCar = gameWorldData.car[n];
		if(thisCar.carType == 1){
			thisCar.siren.x = thisCar.x;
			thisCar.siren.y = thisCar.y;
			thisCar.siren.rotation = thisCar.rotation;

			if(thisCar.pursuitData.init){
				thisCar.siren.visible = true;
				if(thisCar.inRange){
					thisCar.pursuitData.volume += .1;
					thisCar.pursuitData.volume = thisCar.pursuitData.volume > 1 ? 1 : thisCar.pursuitData.volume;
				}else{
					thisCar.pursuitData.volume -= .1;
					thisCar.pursuitData.volume = thisCar.pursuitData.volume <= .1 ? .1 : thisCar.pursuitData.volume;
				}

				setSoundVolume('siren'+n, thisCar.pursuitData.volume);
			}else{
				thisCar.siren.visible = false;
			}
		}
	}
}

/*!
 *
 * UPDATE GAME TIMER - This is the function that runs to update game timer
 *
 */
function toggleGameTimer(con){
	gameData.timer = con;
	if(con){
		gameData.startDate = new Date();
	}
}

function updateGameTimer(){
	if(playerData.best == 0){
		playerData.best = playerData.time;
	}else if(playerData.time < playerData.best){
		playerData.best = playerData.time;
	}

	toggleGameTimer(true);
}

/*!
 *
 * UPDATE GAME STATS - This is the function that runs to update game stats
 *
 */
function updateGameStats(score){
	var userCar = gameWorldData.car[gameData.userIndex];

	//timer
	if(gameData.timer){
		var currentTime = new Date();
		var datenumber = currentTime - gameData.startDate;
		playerData.time = datenumber;

		var timerText = millisecondsToTimeGame(datenumber);
		if(playerData.best != 0){
			timerText += ' | '+	millisecondsToTimeGame(playerData.best);
		}

		if(gameData.gameMode == 'pursuit'){
			gameTimerTxt.text = timerText;
		}else{
			gameTimerTxt.text = timerText;
		}
	}

	//position
	var scalePercent = gameData.mapRadarW/gameData.mapW;
	var allposition_arr = [];
	for(var n=0; n<gameWorldData.car.length; n++){
		var thisCar = gameWorldData.car[n];
		if(thisCar.carType == 0){
			allposition_arr.push({index:n, lap:thisCar.checkpointData.lap, checkpoint:thisCar.checkpointData.index, distance:thisCar.checkpointData.distance});
		}

		thisCar.radar.x = thisCar.x * scalePercent;
		thisCar.radar.y = thisCar.y * scalePercent;
	}

	allposition_arr.sort(function(a, b) {
		return b["lap"] - a["lap"] || b["checkpoint"] - a["checkpoint"] || a["distance"] - b["distance"];
	});

	var curPos = 0;
	var output = '';
	for(var n=0; n<allposition_arr.length; n++){
		if(allposition_arr[n].index == gameData.userIndex){
			curPos = n+1;
		}

		output += 'pos:'+(n+1)+' lap:'+allposition_arr[n].lap+', checkpoint: '+allposition_arr[n].checkpoint+', dis: '+allposition_arr[n].distance+', index: '+allposition_arr[n].index+'\n';
	}

	gameDebugTxt.text = output;

	if(!gameData.gameEnd){
		playerData.pos = curPos;
	}

	if(gameData.gameMode == 'pursuit'){
		//caught
		var caughtNum = 0;
		var lastLap = -1;

		for(var n=allposition_arr.length-1; n>=0; n--){
			var thisCar = gameWorldData.car[allposition_arr[n].index];
			if(thisCar.engineData.active && lastLap == -1){
				lastLap = allposition_arr[n].lap;
			}

			if(thisCar.engineData.life <= 0 && thisCar.carType == 0){
				caughtNum++;
			}
		}

		playerData.caught = caughtNum;

		var currentPos = gamePosCountText.replace('[NUMBER]', caughtNum);
		currentPos = currentPos.replace('[TOTAL]', allposition_arr.length);

		gamePosCountTxt.text = currentPos;

		//lap
		if(lastLap != -1){
			gameData.pursuitLap = lastLap;
		}
		var currentLap = gameLapCountText.replace('[NUMBER]', gameData.pursuitLap);
		currentLap = currentLap.replace('[TOTAL]', map_array[gameData.mapIndex].lap);
		gameLapCountTxt.text = currentLap;

		if(!gameData.gameEnd){
			if(lastLap == -1){
				updateGameStatus(gameCaughtFailMessage, true);

				endGame();
			}

			if(playerData.caught == gameWorldData.car.length-1){
				updateGameStatus(gameCaughtCompleteMessage, true);

				endGame();
			}
		}
	}else{
		//pos
		var currentPos = gamePosCountText.replace('[NUMBER]', playerData.pos);
		currentPos = currentPos.replace('[TOTAL]', allposition_arr.length);

		gamePosCountTxt.text = currentPos;

		//lap
		var currentLap = gameLapCountText.replace('[NUMBER]', userCar.checkpointData.lap);
		currentLap = currentLap.replace('[TOTAL]', map_array[gameData.mapIndex].lap);
		gameLapCountTxt.text = currentLap;
	}
}

function endGame(){
	if(gameData.gameMode == 'race'){
		updateGameStatus(gameFinishMessage.replace('[POSITION]', resultPos_arr[playerData.pos-1]), true);

		gameData.gameEnd = true;
		gameData.gameControl = false;
		TweenMax.to(gameContainer, 3, {overwrite:true, onComplete:function(){
			goPage('result');
		}});
	}else{
		gameData.gameEnd = true;
		gameData.gameControl = false;
		TweenMax.to(gameContainer, 3, {overwrite:true, onComplete:function(){
			goPage('result');
		}});
	}
}

/*!
 *
 * OPTIONS - This is the function that runs to toggle options
 *
 */

function toggleOption(){
	if(optionsContainer.visible){
		optionsContainer.visible = false;
	}else{
		optionsContainer.visible = true;
	}
}

/*!
 *
 * OPTIONS - This is the function that runs to mute and fullscreen
 *
 */
function toggleGameMute(con){
	buttonSoundOff.visible = false;
	buttonSoundOn.visible = false;
	toggleMute(con);
	if(con){
		buttonSoundOn.visible = true;
	}else{
		buttonSoundOff.visible = true;
	}
}

function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

/*!
 *
 * MILLISECONDS CONVERT - This is the function that runs to convert milliseconds to time
 *
 */
function millisecondsToTimeGame(milli) {
	var milliseconds = milli % 1000;
	var seconds = Math.floor((milli / 1000) % 60);
	var minutes = Math.floor((milli / (60 * 1000)) % 60);

	if(seconds<10){
		seconds = '0'+seconds;
	}

	if(minutes<10){
		minutes = '0'+minutes;
	}

	return minutes+':'+seconds+':'+String(milliseconds+'000').substring(0,2);
}


/*!
 *
 * SHARE - This is the function that runs to open share url
 *
 */
function share(action){
	gtag('event','click',{'event_category':'share','event_label':action});

	var loc = location.href
	loc = loc.substring(0, loc.lastIndexOf("/") + 1);

	var title = '';
	var text = '';

	if(gameData.gameMode == 'race'){
		title = shareTitle.replace("[POSITION]", playerData.pos);
		text = shareMessage.replace("[POSITION]", playerData.pos);
	}else{
		title = sharePursuitTitle.replace("[TOTAL]", playerData.caught);
		text = sharePursuitMessage.replace("[TOTAL]", playerData.caught);
	}

	var shareurl = '';

	if( action == 'twitter' ) {
		shareurl = 'https://twitter.com/intent/tweet?url='+loc+'&text='+text;
	}else if( action == 'facebook' ){
		shareurl = 'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(loc+'share.php?desc='+text+'&title='+title+'&url='+loc+'&thumb='+loc+'share.jpg&width=590&height=300');
	}else if( action == 'whatsapp' ){
		shareurl = "whatsapp://send?text=" + encodeURIComponent(text) + " - " + encodeURIComponent(loc);
	}

	window.open(shareurl);
}

var sortFunction = function(obj1, obj2, options) {
	if (obj1.y > obj2.y) { return 1; }
	if (obj1.y < obj2.y) { return -1; }
	return 0;
}
