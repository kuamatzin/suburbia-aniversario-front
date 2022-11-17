////////////////////////////////////////////////////////////
// P2
////////////////////////////////////////////////////////////
var world;
var scaleX = 50, scaleY = -50;

var physicsData = {init:false, paused:true};
var carMaterial, wallMaterial, objectMaterial;
var worldData = {car:[], objects:[]};

var carEngineData = {
						maxSteer:Math.PI / 7,
						accelaration:2,
						deceleration:2
					};

var carAIData = {
					reverse:100,
					reset:150
				};

var aiMoveData = {distance:300, range:70};

/*!
 *
 * START PHYSICS - This is the function that runs to start physics
 *
 */
function startPhysics(){
	'Iniciando física';
	world = new p2.World({gravity:[0,0]});

	worldData.car = [];
	worldData.objects = [];

	contactPhysics();

	if(!physicsData.init){
		physicsData.init = true;
		requestAnimationFrame(updatePhysics);
	}
}

function stopPhysics(){
	worldData.car = [];
	worldData.objects = [];
}

/*!
 *
 * CONTACT PHYSICS - This is the function that runs for physics collision
 *
 */
function contactPhysics(){
	carMaterial = new p2.Material();
	policeCarMaterial = new p2.Material();
	wallMaterial = new p2.Material();
	objectMaterial = new p2.Material();

	//contact
	var carVsCar = new p2.ContactMaterial(carMaterial, carMaterial, {
		// friction
		friction: 0.5,
		// bounce
		restitution: 1
	});

	var carVsPoliceCar = new p2.ContactMaterial(carMaterial, policeCarMaterial, {
		// friction
		friction: 0.5,
		// bounce
		restitution: 1.5
	});

	var carVsWall = new p2.ContactMaterial(carMaterial, wallMaterial, {
		// friction
		friction: 0.5,
		// bounce
		restitution: 1
	});

	var carVsObject = new p2.ContactMaterial(carMaterial, objectMaterial, {
		// friction
		friction: 0.5,
		// bounce
		restitution: .3
	});

	world.addContactMaterial(carVsPoliceCar);
	world.addContactMaterial(carVsCar);
	world.addContactMaterial(carVsWall);
	world.addContactMaterial(carVsObject);

	world.on('beginContact', function (evt){
		if(!physicsData.paused){
			var contactVelocityA = getBodyVelocity(evt.bodyA);
			var contactVelocityB = getBodyVelocity(evt.bodyB);

			if(evt.bodyA.contactType === 'car' && evt.bodyB.contactType === 'grass'){
				toggleCarSlow(evt.bodyA, true);
			}

			if(evt.bodyA.contactType === 'grass' && evt.bodyB.contactType === 'car'){
				toggleCarSlow(evt.bodyB, true);
			}

			if(evt.bodyA.contactType === 'car' && evt.bodyB.contactType === 'checkpoint'){
				updateCheckpoint(evt.bodyA,evt.bodyB.index);
			}

			if(evt.bodyA.contactType === 'checkpoint' && evt.bodyB.contactType === 'car'){
				updateCheckpoint(evt.bodyB,evt.bodyA.index);
			}

			//car contact
			if(evt.bodyA.contactType === 'car' && evt.bodyA.contactCon && evt.bodyB.contactType === 'car' && evt.bodyB.contactCon){
				if(contactVelocityA > 3){
					var thisCar = gameWorldData.car[evt.bodyA.index];
					console.log('car contact', thisCar);

					var randomNum = Math.floor(Math.random()*2)+1;
					var soundName = 'soundHit'+randomNum;
					if(thisCar.carType == 1){
						randomNum = Math.floor(Math.random()*4)+1;
						soundName = 'soundHitCrash'+randomNum;
					}
					playSoundWithinArea(thisCar, soundName);
				}

				if(contactVelocityB > 3){
					var thisCar = gameWorldData.car[evt.bodyB.index];
					var randomNum = Math.floor(Math.random()*2)+1;
					var soundName = 'soundHit'+randomNum;
					if(thisCar.carType == 1){
						randomNum = Math.floor(Math.random()*4)+1;
						soundName = 'soundHitCrash'+randomNum;
					}
					playSoundWithinArea(thisCar, soundName);
				}
			}

			//wall contact
			if(evt.bodyA.contactType === 'car' && evt.bodyA.contactCon && evt.bodyB.contactType === 'wall'){
				if(contactVelocityA > 2){
					var thisCar = gameWorldData.car[evt.bodyA.index];
					var randomNum = Math.floor(Math.random()*2)+1;
					var soundName = 'soundHit'+randomNum;
					playSoundWithinArea(thisCar, soundName);
				}
			}

			if(evt.bodyA.contactType === 'wall' && evt.bodyB.contactCon && evt.bodyB.contactType === 'car'){
				if(contactVelocityB > 2){
					var thisCar = gameWorldData.car[evt.bodyB.index];
					var randomNum = Math.floor(Math.random()*2)+1;
					var soundName = 'soundHit'+randomNum;
					playSoundWithinArea(thisCar, soundName);
				}
			}

			//police vs racer contact damage
			if(evt.bodyA.contactType === 'car' && evt.bodyA.contactCon && evt.bodyB.contactType === 'car' && evt.bodyB.contactCon && gameData.gameMode == 'pursuit'){
				if(evt.bodyA.contactCarType === 'racer' && evt.bodyB.contactCarType === 'police'){
					getPhysicsCarHit(evt.bodyA.index, evt.bodyB.index, contactVelocityB);
				}

				if(evt.bodyA.contactCarType === 'police' && evt.bodyB.contactCarType === 'racer'){
					getPhysicsCarHit(evt.bodyB.index, evt.bodyA.index, contactVelocityA);
				}
			}
		}
	});

	// Disable any equations between the current passthrough body and the character
	world.on('preSolve', function (evt){

		for(var i=0; i<evt.contactEquations.length; i++){
			var eq = evt.contactEquations[i];
			eq.enabled = checkPhysicsCollision(eq);
		}

		for(var i=0; i<evt.frictionEquations.length; i++){
			var eq = evt.frictionEquations[i];
			eq.enabled = checkPhysicsCollision(eq);
		}
	});

	world.on('endContact', function (evt){
		if(evt.bodyA.contactType === 'car' && evt.bodyB.contactType === 'grass'){
			toggleCarSlow(evt.bodyA, false);
		}

		if(evt.bodyA.contactType === 'grass' && evt.bodyB.contactType === 'car'){
			toggleCarSlow(evt.bodyB, false);
		}
	});
}

function toggleCarSlow(body, con){
	var thisCar = gameWorldData.car[body.index];
	if(con){
		thisCar.engineData.slowarea++;
	}else{
		thisCar.engineData.slowarea--;
	}
}

function updateCheckpoint(body, id){
	var nextID = Number(id+1);
	var thisCar = gameWorldData.car[body.index];
	var thisCanvasCar = gameWorldData.car[body.index];

	if(!thisCar.checkpointData.init && id == map_array[gameData.mapIndex].checkpoints.length-1){
		return;
	}

	//start
	if(!thisCar.checkpointData.init && id == 0){
		thisCar.checkpointData.init = true;
		thisCar.checkpointData.index = nextID;
	}else if(id == map_array[gameData.mapIndex].checkpoints.length && thisCar.checkpointData.index == map_array[gameData.mapIndex].checkpoints.length){
		thisCar.checkpointData.index = 1;
		thisCar.checkpointData.lap++;

		if(!$.editor.enable){
			if(body.index == gameData.userIndex && gameData.gameMode == 'race'){
				//count lap
				playSound('soundLap');
				updateGameTimer();

				if(thisCar.checkpointData.lap == map_array[gameData.mapIndex].lap-1){
					updateGameStatus(gameFinalLapMessage, true);
				}

				if(thisCar.checkpointData.lap == map_array[gameData.mapIndex].lap){
					playSound('soundLapFinish');
					//end game
					endGame();
				}
			}else{
				if(thisCar.checkpointData.lap == map_array[gameData.mapIndex].lap){
					thisCar.engineData.active = false;

					if(gameData.gameMode == 'pursuit'){
						updateLifeBar(thisCanvasCar);
					}
				}
			}
		}
	}else{
		//checkpoint
		if(thisCar.checkpointData.index+1 == nextID){
			thisCar.checkpointData.index = nextID;
		}
	}
}

/*!
 *
 * CHECK COLLISION WITHIN AREA - This is the function that runs to check if collision within area
 *
 */
function playSoundWithinArea(thisCar, sound){
	if(thisCar.soundTime <= 0){
		thisCar.soundTime = 20;

		var pt = p2Container.localToGlobal(thisCar.x, thisCar.y);

		var volume = 0;
		if(pt.x >= offset.x && pt.x < (canvasW-offset.x)){
			if(pt.y >= offset.y && pt.y < (canvasW-offset.y)){
				volume = 1;
			}
		}3

		playSound(sound, volume);
	}
}

function checkPhysicsCollision(eq){
	var enable = true;
	if((eq.bodyA.contactCon === false || eq.bodyB.contactCon === false)){
		enable = false;
	}
	return enable;
}

/*!
 *
 * CREATE PHYSICS OBJECT - This is the function that runs to create physics object
 *
 */
function createPhysicsCollisions(type, path){
	var contactName = type == 0 ? 'wall' : 'grass';
	var collisionResponse = type == 0 ? true : false;
	var collisionBody = new p2.Body({
		mass:0,
		position:[0,0]
	});

	var polygonPath = [];
	for(var n=0; n<path.length; n++){
		if(type == 0){
			if(n != path.length-1){
				createPhysicsWall(path[n][0], path[n][1], path[n+1][0], path[n+1][1]);
			}else{
				createPhysicsWall(path[n][0], path[n][1], path[0][0], path[0][1]);
			}
		}

		var newPath = [convertCanvasToP2X(path[n][0]), convertCanvasToP2Y(path[n][1])];
		polygonPath.push(newPath);
	}

	collisionBody.fromPolygon(polygonPath);
	collisionBody.contactType = contactName;
	collisionBody.contactCon = collisionResponse;
	world.addBody(collisionBody);
}

function createCheckpointCollisions(index, x, y, rotation, w){
	var checkpointBody = new p2.Body({
		mass:0,
		position:[convertCanvasToP2X(x),convertCanvasToP2Y(y)],
		angle: -(rotation) / (180 / Math.PI)
	});

	var planeShape = new p2.Box({width:convertCanvasToP2W(w), height:convertCanvasToP2H(gameData.checkpointH)});

	checkpointBody.addShape(planeShape);
	checkpointBody.contactType = 'checkpoint';
	checkpointBody.index = index;
	checkpointBody.contactCon = false;
	world.addBody(checkpointBody);
}

function createPhysicsWall(startX, startY, endX, endY){
	var width = getDistanceByValue(startX, startY, endX, endY);
	var height = 15;
	var angle = getDirection(startX, startY, endX, endY) + 90;
	var pos = getCenterPosition(startX, startY, endX, endY);

	var wallBody = new p2.Body({
		mass:0,
		position:[convertCanvasToP2X(pos.x),convertCanvasToP2Y(pos.y)],
		angle: -(angle) / (180 / Math.PI)
	});

	var wallShape = new p2.Box({width:convertCanvasToP2W(width), height:convertCanvasToP2H(height)});
	wallShape.material = wallMaterial;
	wallBody.contactType = 'wall';
	wallBody.contactCon = true;
	wallBody.addShape(wallShape);
	world.addBody(wallBody);
}

function createPhysicsCar(type,w,h,x,y,rotation,carType){
	var massNum = type == 0 ? 1 : .8;

	// Create a dynamic body for the chassis
	var chassisBody = new p2.Body({
		mass: massNum,
		position:[convertCanvasToP2X(x), convertCanvasToP2Y(y)],
		angle: -(rotation) / (180 / Math.PI)
	});

	var carShape = new p2.Box({ width: convertCanvasToP2W(w), height: convertCanvasToP2H(h) });
	carShape.material = carMaterial;

	chassisBody.addShape(carShape);
	chassisBody.index = worldData.car.length;
	chassisBody.contactType = 'car';
	chassisBody.contactCarType = carType;
	chassisBody.contactCon = true;
	chassisBody.carType = type;
	world.addBody(chassisBody);

	var wheelFriction = [22,22];
	if(type == 1){
		wheelFriction = [25,25];
	}

	// Create the vehicle
	var vehicle = new p2.TopDownVehicle(chassisBody);

	// Add one front wheel and one back wheel - we don't actually need four :)
	var frontWheel = vehicle.addWheel({
		localPosition: [0, convertCanvasToP2W(h/2)]
	});
	frontWheel.setSideFriction(wheelFriction[0]);

	// Back wheel
	var backWheel = vehicle.addWheel({
		localPosition: [0, -(convertCanvasToP2W(h/2))]
	});
	backWheel.setSideFriction(wheelFriction[1]); // Less side friction on back wheel makes it easier to drift

	vehicle.addToWorld(world);

	worldData.car.push({body:chassisBody, shape:carShape, vehicle:vehicle, frontWheel:frontWheel, backWheel:backWheel})
}

/*!
 *
 * PHYSICS LOOP - This is the function that runs to loop and update physics
 *
 */
var lastTime;
var maxSubSteps = 5; // Max physics ticks per render frame
var fixedDeltaTime = 1 / 60; // Physics "tick" delta time

function updatePhysics(time){
	requestAnimationFrame(updatePhysics);

	// Get the elapsed time since last frame, in seconds
	var deltaTime = lastTime ? (time - lastTime) / 1000 : 0;
	lastTime = time;

	// Make sure the time delta is not too big (can happen if user switches browser tab)
	deltaTime = Math.min(1 / 10, deltaTime);

	// Move physics bodies forward in time
	world.step(fixedDeltaTime, deltaTime, maxSubSteps);

	if(worldData.car.length > 0){
		updateCarMovePhysics();
		renderPhysics();
	}
}

function renderPhysics(){
	// Draw all bodies

	if(!physicsData.paused){
		drawCar();
	}
}

function drawCar(){
	for(var n=0; n<worldData.car.length; n++){
		var x = worldData.car[n].body.interpolatedPosition[0],
			y = worldData.car[n].body.interpolatedPosition[1];

		var thisCar = gameWorldData.car[n];
		thisCar.x = x * scaleX;
		thisCar.y = y * scaleY;

		if(gameData.gameMode == 'pursuit'){
			thisCar.lifeContainer.x = thisCar.x;
			thisCar.lifeContainer.y = thisCar.y+1;
		}

		var currentRotate = -(worldData.car[n].body.angle) * 180 / Math.PI;
		if(currentRotate > 360 || currentRotate < -360){
			worldData.car[n].body.angle = 0;
		}else{
			thisCar.rotation = currentRotate;
		}

		if(getBodyVelocity(worldData.car[n].body) > 7 && worldData.car[n].frontWheel.steerValue != 0){
			if(gameWorldData.car[n].tyre.playTime > 0){
				gameWorldData.car[n].tyre.playTime--
			}else{
				if(thisCar.inRange){
					gameWorldData.car[n].tyre.playTime = 100;
					var randomNum = Math.floor(Math.random()*4)+1;
					playSound('soundTyre'+randomNum);
				}
			}
		}
	}
}

/*!
 *
 * UPDATE CAR MOVEMENT - This is the function that runs to update car movement
 *
 */

function updateCarMovePhysics(){
	//user car
	var userPhysicsCar = worldData.car[gameData.userIndex];
	var userCanvasCar = gameWorldData.car[gameData.userIndex];
	var userPress = false;

	if(!gameData.gameControl){
		userCanvasCar.keyData.speed = 0;
	}

	if(userCanvasCar.keyData.up && gameData.gameControl){
		userCanvasCar.keyData.speed += carEngineData.accelaration;
		userCanvasCar.keyData.speed = userCanvasCar.keyData.speed > userCanvasCar.engineData.speed ? userCanvasCar.engineData.speed : userCanvasCar.keyData.speed;
		userPress = true;
	}

	if(userCanvasCar.keyData.down && gameData.gameControl){
		userCanvasCar.keyData.speed -= carEngineData.deceleration;
		userCanvasCar.keyData.speed = userCanvasCar.keyData.speed < -userCanvasCar.engineData.reverseSpeed ? -userCanvasCar.engineData.reverseSpeed : userCanvasCar.keyData.speed;
		userPress = true;
	}

	var brakeForce = 0;
	if(!userCanvasCar.keyData.up && !userCanvasCar.keyData.down){
		if(userPhysicsCar.backWheel.getSpeed() > 0.1){
			userCanvasCar.keyData.speed--;
			userCanvasCar.keyData.speed = userCanvasCar.keyData.speed <= 0 ? 0 : userCanvasCar.keyData.speed;
		}else if(userPhysicsCar.backWheel.getSpeed() < 0){
			userCanvasCar.keyData.speed++;
			userCanvasCar.keyData.speed = userCanvasCar.keyData.speed > 0 ? 0 : userCanvasCar.keyData.speed;
		}
		brakeForce = 1;
	}

	userCanvasCar.dust.visible = false;
	setSoundVolume('car'+gameData.userIndex, 0);

	if(userCanvasCar.engineData.slowarea > 0){
		if(getBodyVelocity(userPhysicsCar.body) > 2){
			userCanvasCar.dust.visible = true;
			setSoundVolume('car'+gameData.userIndex, 1);
		}
		keepItSlow(userPhysicsCar, userCanvasCar);
	}

	var turnLeft = userCanvasCar.keyData.left == true ? 1 : 0;
	var turnRight = userCanvasCar.keyData.right == true ? 1 : 0;

	// Steer value zero means straight forward. Positive is left and negative right.
	userPhysicsCar.frontWheel.steerValue = carEngineData.maxSteer * (turnLeft - turnRight);

	// Engine force forward
	userPhysicsCar.backWheel.engineForce = userCanvasCar.keyData.speed;
	userPhysicsCar.backWheel.setBrakeForce(brakeForce);

	if(userCanvasCar.keyData.down && gameData.gameControl){
		userPress = true;
		if(userPhysicsCar.backWheel.getSpeed() > 0.1){
			// Moving forward - add some brake force to slow down
			userPhysicsCar.backWheel.setBrakeForce(5);
		} else {
			// Moving backwards - reverse the engine force
			userPhysicsCar.backWheel.setBrakeForce(0);
			userPhysicsCar.backWheel.engineForce = userCanvasCar.keyData.speed;
		}
	}

	//if car stuck
	if(userCanvasCar.idleData.reset >= carAIData.reset){
		var velNum = .3;

		if(randomBoolean()){
			userPhysicsCar.body.velocity[0] += velNum;
		}else{
			userPhysicsCar.body.velocity[0] -= velNum;
		}

		if(randomBoolean()){
			userPhysicsCar.body.velocity[1] += velNum;
		}else{
			userPhysicsCar.body.velocity[1] -= velNum;
		}
	}

	if(userPress){
		var thisDistance = getDistanceByValue(userCanvasCar.oldX, userCanvasCar.oldY, userCanvasCar.x, userCanvasCar.y);
		userCanvasCar.oldX = userCanvasCar.x;
		userCanvasCar.oldY = userCanvasCar.y;

		if(thisDistance <= 0){
			userCanvasCar.idleData.reset++;
		}else{
			userCanvasCar.idleData.reset = 0;
		}
	}

	//enemy car
	gameData.chase = [];
	for(var n=0; n<worldData.car.length; n++){
		if(gameWorldData.car[n].soundTime > 0){
			gameWorldData.car[n].soundTime--;
		}

		if(n!=gameData.userIndex){
			if(gameWorldData.car[n].carType == 1){
				findNearestCar(n);
			}
			findNextMove(n);
			chaseUserPhysics(n);
		}
	}
}

function keepItSlow(car){
	var maxVel = 5;
	var slowVel = .5;

	if(car.body.velocity[0] > maxVel){
		car.body.velocity[0] -= slowVel;
	}

	if(car.body.velocity[0] < -maxVel){
		car.body.velocity[0] += slowVel;
	}

	if(car.body.velocity[1] > maxVel){
		car.body.velocity[1] -= slowVel;
	}

	if(car.body.velocity[1] < -maxVel){
		car.body.velocity[1] += slowVel;
	}
}

/*!
 *
 * FIND NEAREST MOVE - This is the function that runs to find nearest car to move
 *
 */
function findNextMove(index){
	var thisCanvasCar = gameWorldData.car[index];
	if(thisCanvasCar.moveData.index == -1){
		//find nearest ai move
		var nearestArr = [];
		for(var n=0; n<map_array[gameData.mapIndex].aimove.length; n++){
			var targetMove = map_array[gameData.mapIndex].aimove[n];
			var thisDistance = getDistanceByValue(thisCanvasCar.x, thisCanvasCar.y, targetMove[0], targetMove[1]);
			nearestArr.push({index:n, distance:thisDistance});
		}

		sortOnObject(nearestArr, 'distance', false);
		thisCanvasCar.moveData.index = nearestArr[0].index;
	}

	var targetMove = map_array[gameData.mapIndex].aimove[thisCanvasCar.moveData.index];
	var thisDistance = getDistanceByValue(thisCanvasCar.x, thisCanvasCar.y, targetMove[0], targetMove[1]);
	if(thisDistance <= aiMoveData.distance){
		thisCanvasCar.moveData.index++;
		thisCanvasCar.moveData.index = thisCanvasCar.moveData.index > map_array[gameData.mapIndex].aimove.length-1 ? 0 : thisCanvasCar.moveData.index;

		thisCanvasCar.moveData.rangeX = randomIntFromInterval(-aiMoveData.range,aiMoveData.range);
		thisCanvasCar.moveData.rangeY = randomIntFromInterval(-aiMoveData.range,aiMoveData.range);
	}
}

/*!
 *
 * FIND NEAREST CAR - This is the function that runs to find nearest car to chase
 *
 */
function findNearestCar(index){
	var thisCanvasCar = gameWorldData.car[index];
	var nearestArr = [];

	for(var n=0; n<worldData.car.length; n++){
		var targetCanvasCar = gameWorldData.car[n];
		if(n != index && targetCanvasCar.carType == 0 && targetCanvasCar.engineData.active && gameData.chase.indexOf(n) == -1){
			var thisDistance = getDistanceByValue(thisCanvasCar.x, thisCanvasCar.y, targetCanvasCar.x, targetCanvasCar.y);
			nearestArr.push({index:n, distance:thisDistance});
		}
	}

	sortOnObject(nearestArr, 'distance', false);

	thisCanvasCar.pursuitData.index = -1;
	if(nearestArr.length > 0){
		if(nearestArr[0].distance <= 500 && nearestArr[0].distance != 0){
			if(!thisCanvasCar.pursuitData.init){
				playSoundLoopID('siren'+index, 'soundSiren');
				setSoundVolume('siren'+index, 0);
			}
			thisCanvasCar.pursuitData.init = true;
			thisCanvasCar.moveData.index = -1;
			thisCanvasCar.pursuitData.index = nearestArr[0].index;
			gameData.chase.push(nearestArr[0].index);
		}
	}
}

/*!
 *
 * CHASE AND MOVE CAR - This is the function that runs to chase and move cars
 *
 */

function chaseUserPhysics(n){
	var thisCanvasCar = gameWorldData.car[n];
	var thisPhysicsCar = worldData.car[n];

	thisPhysicsCar.frontWheel.steerValue = 0;
	positionDetectionArea(thisCanvasCar);

	if(gameData.gameAIControl && thisCanvasCar.engineData.active){
		if(thisCanvasCar.carType == 1 && !thisCanvasCar.pursuitData.init){
			return;
		}

		if(thisCanvasCar.engineData.update > 0){
			thisCanvasCar.engineData.update--;
		}else{
			thisCanvasCar.engineData.update = thisCanvasCar.engineData.updateTime;
			thisCanvasCar.engineData.cSpeed = thisCanvasCar.engineData.speed + Math.round(Math.random()*3);
			thisCanvasCar.engineData.cReverseSpeed = thisCanvasCar.engineData.reverseSpeed + Math.round(Math.random()*3);
		}

		var carSpeed = thisCanvasCar.engineData.cSpeed;
		var carReverseSpeed = thisCanvasCar.engineData.cReverseSpeed;

		var wheelSide = getWheelDirection(thisCanvasCar);
		var engineDirection = checkCarEngine(thisCanvasCar, thisPhysicsCar);
		var engineValue = engineDirection == true ? carSpeed : -carReverseSpeed;

		if(engineDirection){
			if(wheelSide == 'left'){
				thisPhysicsCar.frontWheel.steerValue = carEngineData.maxSteer;
			}else if(wheelSide == 'right'){
				thisPhysicsCar.frontWheel.steerValue = -carEngineData.maxSteer;
			}
		}else{
			if(wheelSide == 'left'){
				thisPhysicsCar.frontWheel.steerValue = -carEngineData.maxSteer;
			}else if(wheelSide == 'right'){
				thisPhysicsCar.frontWheel.steerValue = carEngineData.maxSteer;
			}
		}

		var carSpeed = getBodyVelocity(thisPhysicsCar.body);
		var brakeForce = 0;
		if(wheelSide == 'none'){

		}else{
			if(carSpeed > thisCanvasCar.engineData.speed){
				brakeForce = carSpeed/1.8;
			}
		}

		thisPhysicsCar.backWheel.engineForce = engineValue;
		thisPhysicsCar.backWheel.setBrakeForce(brakeForce);

		//if car stuck at corner or not move
		if(thisCanvasCar.idleData.reset >= carAIData.reset){
			var velNum = .3;

			if(randomBoolean()){
				thisPhysicsCar.body.velocity[0] += velNum;
			}else{
				thisPhysicsCar.body.velocity[0] -= velNum;
			}

			if(randomBoolean()){
				thisPhysicsCar.body.velocity[1] += velNum;
			}else{
				thisPhysicsCar.body.velocity[1] -= velNum;
			}
		}
	}else{
		thisPhysicsCar.backWheel.engineForce = 0;
	}

	thisCanvasCar.dust.visible = false;
	setSoundVolume('car'+n, 0);

	if(thisCanvasCar.engineData.slowarea > 0){
		if(getBodyVelocity(thisPhysicsCar.body) > 2){
			thisCanvasCar.dust.visible = true;

			var volumeNum = thisCanvasCar.inRange == true ? 1 : .1;
			setSoundVolume('car'+n, volumeNum);
		}
		keepItSlow(thisPhysicsCar);
	}
}

/*!
 *
 * POSITION CAR AREA - This is the function that runs to position car area
 *
 */
function positionDetectionArea(thisCanvasCar){
	for(var n=0; n<3; n++){
		var currentRotate = thisCanvasCar.rotation-90;
		if(n == 0){
			currentRotate -= 30;
		}else if(n == 2){
			currentRotate += 30;
		}

		var pos = getAnglePosition(thisCanvasCar.x, thisCanvasCar.y, 60, currentRotate);
		var thisDetect = thisCanvasCar.detectionArray[n];
		thisDetect.x = pos.x;
		thisDetect.y = pos.y;
	}
}

/*!
 *
 * CAR ENGINE - This is the function that runs to check car engine
 *
 */
function checkCarEngine(thisCanvasCar, thisPhysicsCar){
	var engineDirection = true;
	var thisDistance = getDistanceByValue(thisCanvasCar.oldX, thisCanvasCar.oldY, thisCanvasCar.x, thisCanvasCar.y);
	thisCanvasCar.oldX = thisCanvasCar.x;
	thisCanvasCar.oldY = thisCanvasCar.y;

	if(thisCanvasCar.idleData.reverse >= 0){
		thisCanvasCar.idleData.time = 0;
		thisCanvasCar.idleData.reverse--;
		engineDirection = false;
	}else{
		var carSpeed = getBodyVelocity(thisPhysicsCar.body);
		if(thisDistance <= 2 && carSpeed <= 2){
			thisCanvasCar.idleData.time++;
		}else{
			thisCanvasCar.idleData.time = 0;
		}

		if(thisCanvasCar.idleData.time >= carAIData.reverse){
			thisCanvasCar.idleData.reverse = carAIData.reverse;
		}
	}

	if(thisDistance <= 0){
		thisCanvasCar.idleData.reset++;
	}else{
		thisCanvasCar.idleData.reset = 0;
	}

	return engineDirection;
}

/*!
 *
 * WHEEL DIRECTION - This is the function that runs to get wheel direction
 *
 */
function getWheelDirection(thisCanvasCar){
	var targetX = 0;
	var targetY = 0;

	if(thisCanvasCar.pursuitData.index != -1 && thisCanvasCar.carType == 1){
		targetX = gameWorldData.car[thisCanvasCar.pursuitData.index].x;
		targetY = gameWorldData.car[thisCanvasCar.pursuitData.index].y;
	}else{
		targetX = map_array[gameData.mapIndex].aimove[thisCanvasCar.moveData.index][0]+thisCanvasCar.moveData.rangeX;
		targetY = map_array[gameData.mapIndex].aimove[thisCanvasCar.moveData.index][1]+thisCanvasCar.moveData.rangeY;
	}

	var nearestArr = [];
	for(var n=0; n<3; n++){
		var thisDetect = thisCanvasCar.detectionArray[n];
		var thisDistance = getDistanceByValue(thisDetect.x, thisDetect.y, targetX, targetY);
		nearestArr.push({index:n, distance:thisDistance})
	}

	sortOnObject(nearestArr, 'distance', false);

	var wheelSide;
	if(nearestArr[0].index == 0){
		wheelSide = 'left';
	}else if(nearestArr[0].index == 1){
		wheelSide = 'none';
	}else if(nearestArr[0].index == 2){
		wheelSide = 'right';
	}

	return wheelSide;
}

/*!
 *
 * GET CAR HIT - This is the function that runs to get car hit
 *
 */
function getPhysicsCarHit(index, indexOpp, damage){
	var thisCanvasCar = gameWorldData.car[index];
	var damageMul = 1;

	if(!thisCanvasCar.engineData.active){
		return;
	}

	thisCanvasCar.engineData.life -= Math.round(damage) * damageMul;
	thisCanvasCar.engineData.life = thisCanvasCar.engineData.life < 0 ? 0 : thisCanvasCar.engineData.life;

	if(thisCanvasCar.engineData.life <= 0){
		updateGameStatus(gameCaughtMessage.replace('[POSITION]', index), true);
	}

	updateLifeBar(thisCanvasCar);
}

function getBodyVelocity(body){
	return Math.abs(body.velocity[0]) + Math.abs(body.velocity[1]);
}

function convertCanvasToP2X(x){
	return x/scaleX;
}

function convertCanvasToP2Y(y){
	return y/scaleY;
}

function convertCanvasToP2W(w){
	return w/scaleX;
}

function convertCanvasToP2H(h){
	return h/scaleX;
}
