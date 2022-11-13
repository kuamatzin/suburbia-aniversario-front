////////////////////////////////////////////////////////////
// CANVAS
////////////////////////////////////////////////////////////
var stage
var canvasW=0;
var canvasH=0;

/*!
 *
 * START GAME CANVAS - This is the function that runs to setup game canvas
 *
 */
function initGameCanvas(w,h){
	var gameCanvas = document.getElementById("gameCanvas");
	gameCanvas.width = w;
	gameCanvas.height = h;

	canvasW=w;
	canvasH=h;
	stage = new createjs.Stage("gameCanvas");

	createjs.Touch.enable(stage);
	stage.enableMouseOver(20);
	stage.mouseMoveOutside = true;

	createjs.Ticker.framerate = 60;
	createjs.Ticker.addEventListener("tick", tick);
}

var guide = false;
var canvasContainer, mainContainer, instructionsContainer, gameContainer, holesContainer, effectContainer, ballContainer, handleContainer, resultContainer;
var guideline, bg, logo, buttonStart, bgInstructions, logoInstructions, buttonStart2, buttonContinue, buttonFacebook, buttonTwitter, buttonWhatsapp, buttonFullscreen, buttonSoundOn, buttonSoundOff, fpsLabel;

$.selectCar = {};
$.selectMap = {};
$.car = {};
$.maps = {};
$.traffic = {};
$.buttons = {};

/*!
 *
 * BUILD GAME CANVAS ASSERTS - This is the function that runs to build game canvas asserts
 *
 */
function buildGameCanvas(){
	canvasContainer = new createjs.Container();
	mainContainer = new createjs.Container();
	instructionsContainer = new createjs.Container();
	selectContainer = new createjs.Container();
	mobileControllerContainer = new createjs.Container();
	countdownContainer = new createjs.Container();
	p2Container = new createjs.Container();
	mapContainer = new createjs.Container();
	mapRadarIndContainer = new createjs.Container();
	mapRadarContainer = new createjs.Container();
	objectContainer = new createjs.Container();
	effectContainer = new createjs.Container();
	trafficContainer = new createjs.Container();
	gameContainer = new createjs.Container();
	confirmContainer = new createjs.Container();
	optionsContainer = new createjs.Container();
	resultContainer = new createjs.Container();

	editMapContainer = new createjs.Container();
	editShapeContainer = new createjs.Container();
	editPathContainer = new createjs.Container();
	editContainer = new createjs.Container();
	editMoveContainer = new createjs.Container();

	bg = new createjs.Bitmap(loader.getResult('background'));
	logo = new createjs.Bitmap(loader.getResult('logo'));

	bgInstructions = new createjs.Bitmap(loader.getResult('backgroundInstructions'));
	logoInstructions = new createjs.Bitmap(loader.getResult('logoInstructions'));

	buttonStart = new createjs.Bitmap(loader.getResult('buttonStart'));
	centerReg(buttonStart);
	buttonStart.x = canvasW/2;
	buttonStart.y = canvasH/100 * 77;

	buttonStart2 = new createjs.Bitmap(loader.getResult('buttonStart2'));
	centerReg(buttonStart2);
	buttonStart2.x = canvasW/2 * 1.5;
	buttonStart2.y = canvasH/100 * 77;

	//selection
	itemSelect = new createjs.Bitmap(loader.getResult('itemSelect'));

	buttonReady = new createjs.Bitmap(loader.getResult('buttonReady'));
	centerReg(buttonReady);
	buttonReady.x = canvasW/100 * 72.5;
	buttonReady.y = canvasH/100 * 77;

	buttonLeftMap = new createjs.Bitmap(loader.getResult('buttonLeft'));
	centerReg(buttonLeftMap);
	buttonLeftMap.x = canvasW/100 * 32;
	buttonLeftMap.y = canvasH/100 * 77;

	buttonRightMap = new createjs.Bitmap(loader.getResult('buttonRight'));
	centerReg(buttonRightMap);
	buttonRightMap.x = canvasW/100 * 39;
	buttonRightMap.y = canvasH/100 * 77;

	buttonLeftCar = new createjs.Bitmap(loader.getResult('buttonLeft'));
	centerReg(buttonLeftCar);
	buttonLeftCar.x = canvasW/100 * 69;
	buttonLeftCar.y = canvasH/100 * 60;

	buttonRightCar = new createjs.Bitmap(loader.getResult('buttonRight'));
	centerReg(buttonRightCar);
	buttonRightCar.x = canvasW/100 * 76;
	buttonRightCar.y = canvasH/100 * 60;

	itemButtonModeRacer = new createjs.Bitmap(loader.getResult('itemButtonModeRacer'));
	centerReg(itemButtonModeRacer);
	itemButtonModeRacer.x = canvasW/100 * 72.5;
	itemButtonModeRacer.y = canvasH/100 * 17.5;

	itemButtonModePursuit = new createjs.Bitmap(loader.getResult('itemButtonModePursuit'));
	centerReg(itemButtonModePursuit);
	itemButtonModePursuit.x = canvasW/100 * 72.5;
	itemButtonModePursuit.y = canvasH/100 * 17.5;

	selectContainer.addChild(itemSelect);

	//game
	gamePosTxt = new createjs.Text();
	gamePosTxt.font = "35px bebas_neueregular";
	gamePosTxt.color = "#fff";
	gamePosTxt.textAlign = "left";
	gamePosTxt.textBaseline='alphabetic';
	gamePosTxt.text = gamePosText;

	gamePosCountTxt = new createjs.Text();
	gamePosCountTxt.font = "65px bebas_neueregular";
	gamePosCountTxt.color = "#fff";
	gamePosCountTxt.textAlign = "left";
	gamePosCountTxt.textBaseline='alphabetic';
	gamePosCountTxt.text = '2/6';

	gameLapTxt = new createjs.Text();
	gameLapTxt.font = "35px bebas_neueregular";
	gameLapTxt.color = "#fff";
	gameLapTxt.textAlign = "left";
	gameLapTxt.textBaseline='alphabetic';
	gameLapTxt.text = gameLapText;

	gameLapCountTxt = new createjs.Text();
	gameLapCountTxt.font = "35px bebas_neueregular";
	gameLapCountTxt.color = "#fff";
	gameLapCountTxt.textAlign = "left";
	gameLapCountTxt.textBaseline='alphabetic';
	gameLapCountTxt.text = '2/4';

	itemTimer = new createjs.Bitmap(loader.getResult('itemTimer'));
	centerReg(itemTimer);

	gameTimerTxt = new createjs.Text();
	gameTimerTxt.font = "35px bebas_neueregular";
	gameTimerTxt.color = "#fff";
	gameTimerTxt.textAlign = "left";
	gameTimerTxt.textBaseline='alphabetic';
	gameTimerTxt.text = '';

	gameStatusTxt = new createjs.Text();
	gameStatusTxt.font = "70px bebas_neueregular";
	gameStatusTxt.color = "#FFBF00";
	gameStatusTxt.textAlign = "center";
	gameStatusTxt.textBaseline='alphabetic';
	gameStatusTxt.text = '3';
	gameStatusTxt.x = canvasW/2;
	gameStatusTxt.y = canvasH/100 * 30.5;

	itemGameStat = new createjs.Bitmap(loader.getResult('itemGameStat'));

	itemArrowUser = new createjs.Bitmap(loader.getResult('itemArrowUser'));
	centerReg(itemArrowUser);
	itemArrowUser.regY = 90;

	itemArrowGuide = new createjs.Bitmap(loader.getResult('itemArrowGuide'));
	centerReg(itemArrowGuide);
	itemArrowGuide.regY = 90;

	for(var n=0; n<car_array.length; n++){
		console.log(car_array[n].image);
		$.car[n] = new createjs.Bitmap(loader.getResult('car'+n));
		$.car[n].x = -500;
		centerReg($.car[n]);
		gameContainer.addChild($.car[n]);

		$.selectCar[n] = new createjs.Bitmap(loader.getResult('carThumb'+n));
		centerReg($.selectCar[n]);
		$.selectCar[n].x = canvasW/100 * 72;
		$.selectCar[n].y = canvasH/100 * 38;

		if(car_array[n].data.speed > statsData.speed){
			statsData.speed = car_array[n].data.speed;
		}
		if(car_array[n].data.life > statsData.strength){
			statsData.strength = car_array[n].data.life;
		}
		if(car_array[n].data.damage > statsData.damage){
			statsData.damage = 	car_array[n].data.damage;
		}

		selectContainer.addChild($.selectCar[n]);
	}

	for(var n=0; n<policecar_array.length; n++){
		$.car['police'+n] = new createjs.Bitmap(loader.getResult('police'+n));
		$.car['police'+n].x = -500;
		centerReg($.car['police'+n]);
		gameContainer.addChild($.car['police'+n]);

		$.selectCar['police'+n] = new createjs.Bitmap(loader.getResult('policeThumb'+n));
		centerReg($.selectCar['police'+n]);
		$.selectCar['police'+n].x = canvasW/100 * 72;
		$.selectCar['police'+n].y = canvasH/100 * 38;

		selectContainer.addChild($.selectCar['police'+n]);
	}

	for(var n=0; n<map_array.length; n++){
		$.maps[n] = new createjs.Bitmap(loader.getResult('map'+n));
		centerReg($.maps[n]);
		mapContainer.addChild($.maps[n]);

		$.maps['radar'+n] = new createjs.Bitmap(loader.getResult('mapRadar'+n));
		centerReg($.maps['radar'+n]);
		mapRadarContainer.addChild($.maps['radar'+n]);

		$.selectMap[n] = new createjs.Bitmap(loader.getResult('mapThumb'+n));
		centerReg($.selectMap[n]);
		$.selectMap[n].x = canvasW/100 * 35.5;
		$.selectMap[n].y = canvasH/100 * 56;
		selectContainer.addChild($.selectMap[n]);
	}

	mapMask = new createjs.Shape();
	mapMask.graphics.beginFill('orange').drawRect(-(canvasW/2), -(canvasH/2), canvasW, canvasH);
	mapContainer.addChild(mapMask);


	var _frameW = 70;
	var _frameH = 53;
	var _frame = {"regX": _frameW/2, "regY": _frameH/2, "height": _frameH, "count": 2, "width": _frameW};
	var _animations = {animate:{frames: [0,1], speed:.5}};

	itemSirenData = new createjs.SpriteSheet({
		"images": [loader.getResult('itemSiren').src],
		"frames": _frame,
		"animations": _animations
	});

	itemSirenAnimate = new createjs.Sprite(itemSirenData, "animate");
	itemSirenAnimate.framerate = 20;
	itemSirenAnimate.x = 0;
	itemSirenAnimate.y = -500;

	totalMobileButtons = ['itemButtonLeft','itemButtonRight','itemButtonAcc','itemButtonBrake'];
	for(var n = 0; n<totalMobileButtons.length; n++){
		var _frameW = 73;
		var _frameH = 63;
		var _frame = {"regX": _frameW/2, "regY": _frameH/2, "height": _frameH, "count": 2, "width": _frameW};
		var _animations = {static:{frames: [0]},
							press:{frames: [1]}};

		itemButtonData = new createjs.SpriteSheet({
			"images": [loader.getResult(totalMobileButtons[n]).src],
			"frames": _frame,
			"animations": _animations
		});

		$.buttons[totalMobileButtons[n]] = new createjs.Sprite(itemButtonData, "static");
		$.buttons[totalMobileButtons[n]].gotoAndStop('static');
		$.buttons[totalMobileButtons[n]].framerate = 20;

		mobileControllerContainer.alpha = .8;
		mobileControllerContainer.addChild($.buttons[totalMobileButtons[n]]);
	}

	//dust
	var _frameW = 50;
	var _frameH = 45;
	var _frame = {"regX": _frameW/2, "regY": (_frameH/2)-60, "height": _frameH, "count": 2, "width": _frameW};
	var _animations = {animate:{frames: [0,1], speed:1}};

	itemDustData = new createjs.SpriteSheet({
		"images": [loader.getResult('itemDust').src],
		"frames": _frame,
		"animations": _animations
	});

	itemDustAnimate = new createjs.Sprite(itemDustData, "animate");
	itemDustAnimate.framerate = 20;
	itemDustAnimate.x = 0;
	itemDustAnimate.y = -500;

	//traffic
	var _frameW = 82;
	var _frameH = 89;
	var _frame = {"regX": _frameW/2, "regY": (_frameH/2), "height": _frameH, "count": 2, "width": _frameW};
	var _animations = {animate:{frames: [0,1], speed:1}};

	itemTrafficData = new createjs.SpriteSheet({
		"images": [loader.getResult('itemTraffic').src],
		"frames": _frame,
		"animations": _animations
	});

	itemTrafficAnimate = new createjs.Sprite(itemTrafficData, "animate");
	itemTrafficAnimate.framerate = 20;
	itemTrafficAnimate.x = 0;
	itemTrafficAnimate.y = -500;

	var trafficW = 82;
	var startX = (canvasW/2) - ((countdownTotal * trafficW)/2);
	startX += (trafficW/2);

	for(var n=0; n<countdownTotal; n++){
		$.traffic[n] = 	itemTrafficAnimate.clone();
		$.traffic[n].x = startX;
		$.traffic[n].y = canvasH/100 * 20;
		$.traffic[n].gotoAndStop(0);
		startX += trafficW;

		trafficContainer.addChild($.traffic[n]);
	}

	//result
	itemResult = new createjs.Bitmap(loader.getResult('itemResult'));

	resultTitleTxt = new createjs.Text();
	resultTitleTxt.font = "60px bebas_neueregular";
	resultTitleTxt.color = "#fff";
	resultTitleTxt.textAlign = "center";
	resultTitleTxt.textBaseline='alphabetic';
	resultTitleTxt.text = resultTitleWinText;
	resultTitleTxt.x = canvasW/2;
	resultTitleTxt.y = canvasH/100 * 24;

	resultTimeTxt = new createjs.Text();
	resultTimeTxt.font = "55px bebas_neueregular";
	resultTimeTxt.color = "#fff";
	resultTimeTxt.textAlign = "center";
	resultTimeTxt.textBaseline='alphabetic';
	resultTimeTxt.text = '';
	resultTimeTxt.x = canvasW/2;
	resultTimeTxt.y = canvasH/100 * 35;

	resultScoreTxt = new createjs.Text();
	resultScoreTxt.font = "80px bebas_neueregular";
	resultScoreTxt.color = "#ffbf00";
	resultScoreTxt.textAlign = "center";
	resultScoreTxt.textBaseline='alphabetic';
	resultScoreTxt.text = '';
	resultScoreTxt.x = canvasW/2;
	resultScoreTxt.y = canvasH/100 * 44;

	resultShareTxt = new createjs.Text();
	resultShareTxt.font = "40px bebas_neueregular";
	resultShareTxt.color = "#ccc";
	resultShareTxt.textAlign = "center";
	resultShareTxt.textBaseline='alphabetic';
	resultShareTxt.text = shareText;
	resultShareTxt.x = canvasW/2;
	resultShareTxt.y = canvasH/100 * 52;

	buttonFacebook = new createjs.Bitmap(loader.getResult('buttonFacebook'));
	buttonTwitter = new createjs.Bitmap(loader.getResult('buttonTwitter'));
	buttonWhatsapp = new createjs.Bitmap(loader.getResult('buttonWhatsapp'));
	centerReg(buttonFacebook);
	createHitarea(buttonFacebook);
	centerReg(buttonTwitter);
	createHitarea(buttonTwitter);
	centerReg(buttonWhatsapp);
	createHitarea(buttonWhatsapp);
	buttonFacebook.x = canvasW/100*42;
	buttonTwitter.x = canvasW/2;
	buttonWhatsapp.x = canvasW/100*58;
	buttonFacebook.y = buttonTwitter.y = buttonWhatsapp.y = canvasH/100*59;

	buttonContinue = new createjs.Bitmap(loader.getResult('buttonContinue'));
	centerReg(buttonContinue);
	createHitarea(buttonContinue);
	buttonContinue.x = canvasW/2;
	buttonContinue.y = canvasH/100 * 72;

	//option
	buttonFullscreen = new createjs.Bitmap(loader.getResult('buttonFullscreen'));
	centerReg(buttonFullscreen);
	buttonSoundOn = new createjs.Bitmap(loader.getResult('buttonSoundOn'));
	centerReg(buttonSoundOn);
	buttonSoundOff = new createjs.Bitmap(loader.getResult('buttonSoundOff'));
	centerReg(buttonSoundOff);
	buttonSoundOn.visible = false;
	buttonExit = new createjs.Bitmap(loader.getResult('buttonExit'));
	centerReg(buttonExit);
	buttonSettings = new createjs.Bitmap(loader.getResult('buttonSettings'));
	centerReg(buttonSettings);

	createHitarea(buttonFullscreen);
	createHitarea(buttonSoundOn);
	createHitarea(buttonSoundOff);
	createHitarea(buttonExit);
	createHitarea(buttonSettings);

	//exit
	itemExit = new createjs.Bitmap(loader.getResult('itemExit'));
	itemExit.hitArea = new createjs.Shape(new createjs.Graphics().beginFill("#000").drawRect(0, 0, itemExit.image.naturalWidth, itemExit.image.naturalHeight));

	buttonConfirm = new createjs.Bitmap(loader.getResult('buttonConfirm'));
	centerReg(buttonConfirm);
	buttonConfirm.x = canvasW/100* 42;
	buttonConfirm.y = canvasH/100 * 63;

	buttonCancel = new createjs.Bitmap(loader.getResult('buttonCancel'));
	centerReg(buttonCancel);
	buttonCancel.x = canvasW/100 * 58;
	buttonCancel.y = canvasH/100 * 63;

	confirmMessageTxt = new createjs.Text();
	confirmMessageTxt.font = "50px bebas_neueregular";
	confirmMessageTxt.color = "#fff";
	confirmMessageTxt.textAlign = "center";
	confirmMessageTxt.textBaseline='alphabetic';
	confirmMessageTxt.text = exitMessage;
	confirmMessageTxt.lineHeight = 50;
	confirmMessageTxt.x = canvasW/2;
	confirmMessageTxt.y = canvasH/100 *43;

	confirmContainer.addChild(itemExit, buttonConfirm, buttonCancel, confirmMessageTxt);
	confirmContainer.visible = false;

	fpsLabel = new createjs.Text("-- fps", "bold 18px Arial", "#FFF");
	fpsLabel.x = 140;
	fpsLabel.y = 100;
	fpsLabel.visible = false;

	if(guide){
		guideline = new createjs.Shape();
		guideline.graphics.setStrokeStyle(2).beginStroke('red').drawRect((stageW-contentW)/2, (stageH-contentH)/2, contentW, contentH);
		fpsLabel.visible = true;
	}

	p2Container.x = canvasW/2;
	p2Container.y = canvasH/2;

	editContainer.x = canvasW/2;
	editContainer.y = canvasH/2;

	gameDebugTxt = new createjs.Text("--", "bold 18px Arial", "#FFF");
	gameDebugTxt.x = 220;
	gameDebugTxt.y = -260;

	editBg = new createjs.Shape();
	editPathHighlight = new createjs.Shape();
	editCheckpointHighlight = new createjs.Shape();
	editMoveHighlight = new createjs.Shape();
	editMoveContainer.addChild(editMapContainer, editShapeContainer, editPathHighlight, editMoveHighlight, editCheckpointHighlight, editPathContainer);
	editContainer.addChild(editBg, editMoveContainer, gameDebugTxt);

	mainContainer.addChild(bg, logo, buttonStart);
	instructionsContainer.addChild(bgInstructions, logoInstructions, buttonStart2);
	selectContainer.addChild(buttonReady, /*buttonLeftMap, buttonRightMap, buttonLeftCar, buttonRightCar, itemButtonModeRacer, itemButtonModePursuit*/);
	p2Container.addChild(mapContainer, objectContainer, itemArrowUser, effectContainer);
	countdownContainer.addChild(itemGameStat, gameStatusTxt);
	mapRadarContainer.addChild(mapRadarIndContainer);
	mapRadarContainer.alpha = mapRadarData.alpha;
	gameContainer.addChild(itemDustAnimate, itemSirenAnimate, p2Container, mapRadarContainer, itemArrowGuide, countdownContainer, mobileControllerContainer, /*gamePosTxt, gamePosCountTxt,, gameLapTxt, gameLapCountTxt, itemTimer, gameTimerTxt*/);
	resultContainer.addChild(itemResult, resultTitleTxt, resultScoreTxt, resultTimeTxt, buttonContinue);
	optionsContainer.addChild(buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonExit);
	optionsContainer.visible = false;

	if(shareEnable){
		resultContainer.addChild(resultShareTxt, buttonFacebook, buttonTwitter, buttonWhatsapp);
	}

	canvasContainer.addChild(bg, mainContainer, instructionsContainer, selectContainer, gameContainer, editContainer, resultContainer, confirmContainer, optionsContainer, /*buttonSettings,*/ guideline, fpsLabel);
	stage.addChild(canvasContainer);

	resizeCanvas();
}


/*!
 *
 * RESIZE GAME CANVAS - This is the function that runs to resize game canvas
 *
 */
function resizeCanvas(){
 	if(canvasContainer!=undefined){
		buttonSettings.x = (canvasW - offset.x) - 60;
		buttonSettings.y = offset.y + 60;

		var distanceNum = 75;
		if(curPage != 'game'){
			buttonExit.visible = false;
			buttonSoundOn.x = buttonSoundOff.x = buttonSettings.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+distanceNum;
			buttonSoundOn.x = buttonSoundOff.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+(distanceNum);

			buttonFullscreen.x = buttonSettings.x;
			buttonFullscreen.y = buttonSettings.y+(distanceNum*2);
		}else{
			buttonExit.visible = true;
			buttonSoundOn.x = buttonSoundOff.x = buttonSettings.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+distanceNum;
			buttonSoundOn.x = buttonSoundOff.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+(distanceNum);

			buttonFullscreen.x = buttonSettings.x;
			buttonFullscreen.y = buttonSettings.y+(distanceNum*2);

			buttonExit.x = buttonSettings.x;
			buttonExit.y = buttonSettings.y+(distanceNum*3);

			mapRadarContainer.x = offset.x + ((gameData.mapRadarW/2) + gameData.mapRadarGap);
			mapRadarContainer.y = canvasH - ( offset.y + (gameData.mapRadarH/2) + gameData.mapRadarGap);
		}

		//game
		gamePosTxt.x = offset.x + 50;
		gamePosTxt.y = offset.y + 70;

		if(gameData.gameMode == 'pursuit'){
			gamePosCountTxt.x = gamePosTxt.x + 100;
			gamePosCountTxt.y = gamePosTxt.y + 20;
		}else{
			gamePosCountTxt.x = gamePosTxt.x + 60;
			gamePosCountTxt.y = gamePosTxt.y + 20;
		}

		gameLapTxt.x = gamePosTxt.x;
		gameLapTxt.y = gamePosTxt.y + 70;
		gameLapCountTxt.x = gamePosCountTxt.x;
		gameLapCountTxt.y = gameLapTxt.y;

		itemTimer.x = gameLapTxt.x + 10;
		itemTimer.y = gameLapTxt.y + 35;

		gameTimerTxt.x = itemTimer.x + 30;
		gameTimerTxt.y = itemTimer.y + 13;

		//buttons
		var rangeX = 85;
		var rangeY = 70;

		$.buttons['itemButtonLeft'].x = offset.x + rangeX;
		$.buttons['itemButtonLeft'].y = (canvasH - offset.y) - rangeY;

		$.buttons['itemButtonRight'].x = $.buttons['itemButtonLeft'].x + rangeX;
		$.buttons['itemButtonRight'].y = $.buttons['itemButtonLeft'].y;

		$.buttons['itemButtonBrake'].x = (canvasW - offset.x) - rangeX;
		$.buttons['itemButtonBrake'].y = (canvasH - offset.y) - rangeY;

		$.buttons['itemButtonAcc'].x = $.buttons['itemButtonBrake'].x - rangeX;
		$.buttons['itemButtonAcc'].y = $.buttons['itemButtonBrake'].y;

	}
}

/*!
 *
 * REMOVE GAME CANVAS - This is the function that runs to remove game canvas
 *
 */
 function removeGameCanvas(){
	 stage.autoClear = true;
	 stage.removeAllChildren();
	 stage.update();
	 createjs.Ticker.removeEventListener("tick", tick);
	 createjs.Ticker.removeEventListener("tick", stage);
 }

/*!
 *
 * CANVAS LOOP - This is the function that runs for canvas loop
 *
 */
function tick(event) {
	fpsLabel.text = Math.round(createjs.Ticker.getMeasuredFPS()) + " fps";

	updateGame();
	stage.update(event);
}

/*!
 *
 * CANVAS MISC FUNCTIONS
 *
 */
function centerReg(obj){
	obj.regX=obj.image.naturalWidth/2;
	obj.regY=obj.image.naturalHeight/2;
}

function createHitarea(obj){
	obj.hitArea = new createjs.Shape(new createjs.Graphics().beginFill("#000").drawRect(0, 0, obj.image.naturalWidth, obj.image.naturalHeight));
}
