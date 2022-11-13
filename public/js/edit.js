////////////////////////////////////////////////////////////
// EDIT TRACKS
////////////////////////////////////////////////////////////
var editData = { show:true, mapNum:0, collisionNum:0, pathNum:0, pathAdd:false, checkpointNum:0, checkpointAdd:false, aiNum:0, aiAdd:false, carNum:0, test:false, scalepercent:1};
var editShapeData = {fill:'#fff', fillAlpha:.5, fillSelect:'#FFFF00', strokeColor:'#ccff00', strokeNum:8};
var editPathData = {fill:'#ff7f00', radius:10};
var editPathHighlighData = {fill:'#ff0000', radius:15};
var editCheckpointData = {fill:'#ff7f00', radius:25};
var editCheckpointHighlighData = {fill:'#ff0000', radius:30};

var mapLoader, mapFileFest;

/*!
 * 
 * EDIT READY
 * 
 */
$(function() {
	$.editor.enable = true;
});

function loadEditPage(){
	$.get('editTools.html', function(data){
		$('body').prepend(data);
		$('#editWrapper').show();
		toggleEditOption();
		buildEditButtons();
		buildMapEvents();
	});		
}

/*!
 * 
 * BUILD EDIT BUTTONS - This is the function that runs to build edit buttons
 * 
 */
function buildEditButtons(){
	editPathHighlight.graphics.beginFill(editPathHighlighData.fill).drawCircle(0, 0, editPathHighlighData.radius);
	editMoveHighlight.graphics.beginFill(editCheckpointHighlighData.fill).drawCircle(0, 0, editCheckpointHighlighData.radius);
	editCheckpointHighlight.graphics.beginFill(editCheckpointHighlighData.fill).drawRect(-((gameData.checkpointW+10)/2), -((gameData.checkpointH+10)/2), gameData.checkpointW+10, gameData.checkpointH+10);
	editCheckpointHighlight.alpha = .5;
	
	//mapNum list
	editData.mapNum = 0;
	buildMapDropdown();
	
	$('#toggleShowOption').click(function(){
		toggleShowOption();
	});
	
	$("#maplist").change(function() {
		if($(this).val() != ''){
			editData.mapNum = Number($(this).val());
			loadMapData();
		}
	});
	
	$('#prevMap').click(function(){
		toggleMap(false);
	});
	
	$('#nextMap').click(function(){
		toggleMap(true);
	});
	
	$('#zoomIn').click(function(){
		toggleZoom(true);
	});
	
	$('#zoomOut').click(function(){
		toggleZoom(false);
	});
	
	$('#addMap').click(function(){
		actionMap('new');
	});
	
	$('#removeMap').click(function(){
		actionMap('remove');
	});
	
	$('#moveMapUp').click(function(){
		actionMap('moveup');
	});
	
	$('#moveMapDown').click(function(){
		actionMap('movedown');
	});
	
	$('#editMap').click(function(){
		toggleEditOption('map', true);
	});
	
	$('#testRun').click(function(){
		toggleEditOption('test', true);
	});
	
	$('#updateMapData').click(function(){
		map_array[editData.mapNum].radar = $('#radar').val();
		map_array[editData.mapNum].thumb = $('#thumbnail').val();
		map_array[editData.mapNum].image = $('#image').val();
		map_array[editData.mapNum].lap = $('#timer').val();
		
		loadMapAssets();
	});
	
	$('#editMapCollision').click(function(){
		toggleEditOption('collision', true);
	});
	
	$('#editCheckpoints').click(function(){
		toggleEditOption('checkpoint', true);
	});
	
	$('#editAIMove').click(function(){
		toggleEditOption('aimove', true);
	});
	
	$('#editCarPos').click(function(){
		toggleEditOption('car', true);
	});
	
	$('.resetMapCenter').click(function(){
		setMapCenter();
	});
	
	$('.backMain').click(function(){
		toggleEditOption();
	});
	
	$('.backMap').click(function(){
		toggleEditOption('map', true);
	});
	
	
	//collision
	$("#collisionlist").change(function() {
		if($(this).val() != ''){
			editData.collisionNum = Number($(this).val());
			drawCollisions();
		}
	});
	
	$('#prevCollision').click(function(){
		toggleCollision(false);
	});
	
	$('#nextCollision').click(function(){
		toggleCollision(true);
	});
	
	$('#editCollision').click(function(){
		toggleEditOption('shape', true);
	});
	
	$('#addCollision').click(function(){
		actionCollision('new');
	});
	
	$('#removeCollision').click(function(){
		actionCollision('remove');
	});
	
	$("#collisionType").change(function() {
		if($(this).val() != ''){
			map_array[editData.mapNum].collisions[editData.collisionNum].type = Number($(this).val());
		}
	});
	
	//path
	$("#pathlist").change(function() {
		if($(this).val() != ''){
			editData.pathNum = Number($(this).val());
			posPathHighlight();
			setMapPosiiton(editPathHighlight.x, editPathHighlight.y);
		}
	});
	
	$('#prevPath').click(function(){
		togglePath(false);
	});
	
	$('#nextPath').click(function(){
		togglePath(true);
	});
	
	$('#removePath').click(function(){
		actionPath('remove');
	});
	
	$('#backToCollision').click(function(){
		toggleEditOption('collision', true);
	});
	
	//checkpoints
	$("#checkpointslist").change(function() {
		if($(this).val() != ''){
			editData.checkpointNum = Number($(this).val());
			updateCheckpointsData();
			drawCheckpoints();
			setMapPosiiton(editCheckpointHighlight.x, editCheckpointHighlight.y);
		}
	});
	
	$('#prevCheckpoint').click(function(){
		toggleCheckpoint(false);
	});
	
	$('#updateCheckpointRotation').click(function(){
		map_array[editData.mapNum].checkpoints[editData.checkpointNum][2] = Math.round($('#checkpointRotation').val());
		map_array[editData.mapNum].checkpoints[editData.checkpointNum][3] = Math.round($('#checkpointWidth').val());
		drawCheckpoints();
	});
	
	$('#nextCheckpoint').click(function(){
		toggleCheckpoint(true);
	});
	
	$('#removeCheckpoint').click(function(){
		actionCheckpoint('remove');
	});
	
	//ai
	$("#aimovelist").change(function() {
		if($(this).val() != ''){
			editData.aiNum = Number($(this).val());
			drawAIMove();
			setMapPosiiton(editMoveHighlight.x, editMoveHighlight.y);
		}
	});
	
	$('#prevAIMove').click(function(){
		toggleAIMove(false);
	});
	
	$('#nextAIMove').click(function(){
		toggleAIMove(true);
	});
	
	$('#removeAIMove').click(function(){
		actionAI('remove');
	});
	
	//car
	$("#carslist").change(function() {
		if($(this).val() != ''){
			editData.carNum = Number($(this).val());
			setMapPosiiton(map_array[editData.mapNum].cars[editData.carNum].x, map_array[editData.mapNum].cars[editData.carNum].y);
			updateCarData();
		}
	});
	
	$('#prevCar').click(function(){
		toggleCar(false);
	});
	
	$('#nextCar').click(function(){
		toggleCar(true);
	});
	
	$('#addCar').click(function(){
		actionCar('new');
	});
	
	$('#removeCar').click(function(){
		actionCar('remove');
	});
	
	$('#updateCar').click(function(){
		map_array[editData.mapNum].cars[editData.carNum].x = Math.round($('#carX').val());
		map_array[editData.mapNum].cars[editData.carNum].y = Math.round($('#carY').val());
		map_array[editData.mapNum].cars[editData.carNum].rotation = Math.round($('#carRotation').val());
		map_array[editData.mapNum].cars[editData.carNum].type = Number($('#carType').val());
		
		$.car['edit'+editData.carNum].x = Math.round($('#carX').val());
		$.car['edit'+editData.carNum].y = Math.round($('#carY').val());
		$.car['edit'+editData.carNum].rotation = Math.round($('#carRotation').val());
		
		drawEditCars();
	});
	
	//test
	$("#followcarlist").change(function() {
		if($(this).val() != ''){
			cameraData.index = Number($(this).val());
		}
	});
	
	$('#prevFollowCar').click(function(){
		toggleFollowCar(false);
	});
	
	$('#nextFollowCar').click(function(){
		toggleFollowCar(true);
	});
	
	$('#stickcamera').change(function() {
        toggleFollowCamera();
    });
	
	$('#testRunGame').click(function(){
		testRunGame();
	});
	
	//generate
	$('#generateArray').click(function(){
		generateArray();
	});
}

/*!
 * 
 * TOGGLE DISPLAY OPTION - This is the function that runs to toggle display option
 * 
 */
 
function toggleShowOption(){
	if(editData.show){
		editData.show = false;
		$('#editOption').hide();
		$('#toggleShowOption').val('Show Edit Option');
	}else{
		editData.show = true;
		$('#editOption').show();
		$('#toggleShowOption').val('Hide Edit Option');
	}
}

/*!
 * 
 * TOGGLE EDIT OPTION - This is the function that runs to toggle edit option
 * 
 */
function toggleEditOption(con, update){
	$('#mapDataWrapper').hide();
	$('#editCollisionWrapper').hide();
	$('#editShapeWrapper').hide();
	$('#editCheckpointWrapper').hide();
	$('#editAIWrapper').hide();
	$('#editMapWrapper').hide();
	$('#editCarWrapper').hide();
	$('#editTestRunWrapper').hide();
	
	editData.pathAdd = false;
	editData.checkpointAdd = false;
	editData.aiAdd = false;
	editData.carAdd = false;
	editPathHighlight.visible = false;
	editMoveHighlight.visible = false;
	editCheckpointHighlight.visible = false;
	
	if(editData.test){
		mapImage.mask = null;
		editData.test = false;
		stopGame();	
	}
	
	if(con == 'collision'){
		$('#editCollisionWrapper').show();
		
		editPathContainer.removeAllChildren();
		editData.collisionNum = 0;
		buildCollisionDropdown();
		drawCollisions();
	}else if(con == 'shape'){
		editPathContainer.visible = true;
		$('#editShapeWrapper').show();
		
		editData.pathAdd = true;
		editData.pathNum = 0;
		buildPathDropdown();
		drawShape();
		drawPaths();
	}else if(con == 'checkpoint'){
		$('#editCheckpointWrapper').show();
		
		editData.checkpointAdd = true;
		editData.checkpointNum = 0;
		buildCheckpointDropdown();
		drawCheckpoints();
		setMapPosiiton(editCheckpointHighlight.x, editCheckpointHighlight.y);
	}else if(con == 'aimove'){
		$('#editAIWrapper').show();
		
		editData.aiAdd = true;
		editData.aiNum = 0;
		buildAIDropdown();
		drawAIMove();
		setMapPosiiton(editMoveHighlight.x, editMoveHighlight.y);
	}else if(con == 'car'){
		editPathContainer.visible = true;
		$('#editCarWrapper').show();
		
		editData.carAdd = true;
		editData.carNum = 0;
		buildCars();
		drawEditCars();
		updateCarData();
		setMapPosiiton(map_array[editData.mapNum].cars[editData.carNum].x, map_array[editData.mapNum].cars[editData.carNum].y);
	}else if(con == 'map'){
		$('#editMapWrapper').show();
		
		editPathContainer.removeAllChildren();
		editShapeContainer.removeAllChildren();
	}else if(con == 'test'){
		$('#editTestRunWrapper').show();
		
		buildTestgameDropdown();
	}else{
		$('#mapDataWrapper').show();
		editPathContainer.removeAllChildren();
		editShapeContainer.removeAllChildren();
	}
}

/*!
 * 
 * BUILD MAP DROPDOWN - This is the function that runs to build map dropdown
 * 
 */
function buildMapDropdown(){
	$('#maplist').empty();
	for(n=0;n<map_array.length;n++){
		$('#maplist').append($("<option/>", {
			value: n,
			text: 'Map '+(n+1)
		}));
	}
	$('#maplist').val(editData.mapNum);
	
	loadMapData();
}

/*!
 * 
 * TOGGLE MAP - This is the function that runs to toggle map
 * 
 */
function toggleMap(con){
	if(con){
		editData.mapNum++;
		editData.mapNum = editData.mapNum > map_array.length - 1 ? 0 : editData.mapNum;
	}else{
		editData.mapNum--;
		editData.mapNum = editData.mapNum < 0 ? map_array.length - 1 : editData.mapNum;
	}
	
	$('#maplist').prop("selectedIndex", editData.mapNum);
	
	loadMapData();
}

function toggleZoom(con){
	if(con){
		editMoveContainer.scaleX += .1;
	}else{
		editMoveContainer.scaleX -= .1;
	}
	
	editMoveContainer.scaleX = editMoveContainer.scaleX < .1 ? .1 : editMoveContainer.scaleX;
	editMoveContainer.scaleY = editMoveContainer.scaleX;
	
	editMoveContainer.scaleX = editMoveContainer.scaleX > 1 ? 1 : editMoveContainer.scaleX;
	editMoveContainer.scaleY = editMoveContainer.scaleX;
	
	editData.scalepercent = editMoveContainer.scaleX;
}

function setMapCenter(){
	editBg.x = 0;
	editBg.y = 0;
	editMoveContainer.x = 0;
	editMoveContainer.y = 0;
}

function setMapPosiiton(x,y){
	editBg.x = 0 - (x * editMoveContainer.scaleX);
	editBg.y = 0 - (y * editMoveContainer.scaleX);
	editMoveContainer.x = editBg.x;
	editMoveContainer.y = editBg.y;	
}

/*!
 * 
 * LOAD EDITOR MAP - This is the function that runs to load editor data
 * 
 */
function loadMapData(){
	toggleEditOption();
	
	$('#radar').val(map_array[editData.mapNum].radar);
	$('#thumbnail').val(map_array[editData.mapNum].thumb);
	$('#image').val(map_array[editData.mapNum].image);
	$('#lap').val(map_array[editData.mapNum].lap);
	
	loadMapAssets();
}

/*!
 * 
 * EDITOR ACTION - This is the function that runs to for editor action
 * 
 */
function actionMap(action){
	switch(action){
		case 'new':
			map_array.push({radar:'', thumb:'', image:'', lap:2, collisions:[], checkpoints:[], aimove:[], cars:[]});
			editData.mapNum = map_array.length - 1;
			buildMapDropdown();
		break;
		
		case 'remove':
			if(map_array.length > 1){
				map_array.splice(editData.mapNum, 1);
				editData.mapNum = 0;
				buildMapDropdown();
			}
		break;
		
		case 'moveup':
			if(editData.mapNum-1 >= 0){
				swapArray(map_array, editData.mapNum-1, editData.mapNum);
				editData.mapNum--;
				buildMapDropdown();
			}
		break;
		
		case 'movedown':
			if(editData.mapNum+1 < map_array.length){
				swapArray(map_array, editData.mapNum+1, editData.mapNum);
				editData.mapNum++;
				buildMapDropdown();
			}
		break;
	}
}

/*!
 * 
 * GENERATE ARRAY - This is the function that runs to generate array
 * 
 */
function generateArray(){
	var outputArray = '';
	var space = '					';
	var space2 = '						';
	var space3 = '							';
	
	outputArray += "[\n";
	for(e=0;e<map_array.length;e++){
		var collisionsArray = '\n';
		var checkpointArray = '\n';
		var aiArray = '\n';
		var carsArray = '\n';
		
		for(var l=0; l < map_array[e].collisions.length; l++){
			collisionsArray += space3+'{type:'+map_array[e].collisions[l].type+', path:[';
			for(var p=0; p< map_array[e].collisions[l].path.length; p++){
				collisionsArray += "["+map_array[e].collisions[l].path[p][0]+","+map_array[e].collisions[l].path[p][1]+"],";
			}
			collisionsArray += ']},\n';
		}
		for(var l=0; l < map_array[e].checkpoints.length; l++){
			checkpointArray += space3+"["+map_array[e].checkpoints[l][0]+","+map_array[e].checkpoints[l][1]+","+map_array[e].checkpoints[l][2]+","+map_array[e].checkpoints[l][3]+"],\n";
		}
		for(var l=0; l < map_array[e].aimove.length; l++){
			aiArray += space3+"["+map_array[e].aimove[l][0]+","+map_array[e].aimove[l][1]+"],\n";
		}
		for(var l=0; l < map_array[e].cars.length; l++){
			carsArray += space3+"{x:"+map_array[e].cars[l].x+",y:"+map_array[e].cars[l].y+",rotation:"+map_array[e].cars[l].rotation+",type:"+map_array[e].cars[l].type+"},\n";
		}
		
		outputArray += space+"{\n";
		outputArray += space2+"radar:'"+map_array[e].radar+"',\n";
		outputArray += space2+"thumb:'"+map_array[e].thumb+"',\n";
		outputArray += space2+"image:'"+map_array[e].image+"',\n";
		outputArray += space2+"lap:"+map_array[e].lap+",\n";
		outputArray += space2+"collisions:["+collisionsArray+space3+"],\n";
		outputArray += space2+"checkpoints:["+checkpointArray+space3+"],\n";
		outputArray += space2+"aimove:["+aiArray+space3+"],\n";
		outputArray += space2+"cars:["+carsArray+space3+"],\n";
		outputArray += space+"},\n\n";
	}
	outputArray += space+'];';
	outputArray = outputArray.replace(/undefined/g,0);
	$('#outputArray').val(outputArray);	
}

/*!
 * 
 * LOAD MAP ASSETS - This is the function that runs to load map assets
 * 
 */
 var editMapData = {x:0, y:0, moveX:0, moveY:0, w:0, h:0};
 var mapImage;
 
function loadMapAssets(){
	editMapContainer.removeAllChildren();
	
	mapFileFest = [];
	mapFileFest = [{src:map_array[editData.mapNum].image, id:'mapImage'}];
	
	mapLoader = new createjs.LoadQueue(false);
	mapLoader.addEventListener("complete", handleMapComplete);
	mapLoader.loadManifest(mapFileFest);
}

function handleMapComplete() {
	mapImage = new createjs.Bitmap(mapLoader.getResult('mapImage'));
	mapImage.x = -(mapImage.image.naturalWidth/2);
	mapImage.y = -(mapImage.image.naturalHeight/2);
	
	editMapData.x = mapImage.x;
	editMapData.y = mapImage.y;
	
	editMapData.w = mapImage.image.naturalWidth;
	editMapData.h = mapImage.image.naturalHeight;
	
	editBg.graphics.clear();
	editBg.graphics.beginFill('green').drawRect(-(editMapData.w/2), -(editMapData.h/2), editMapData.w, editMapData.h);
	setMapCenter();
	
	editMapContainer.addChild(mapImage);
};

/*!
 * 
 * MAP EVENTS - This is the function that runs to load map events
 * 
 */
function buildMapEvents(){
	editBg.addEventListener("mousedown", function(evt) {
		toggleDragMapEvent(evt, 'drag')
	});
	editBg.addEventListener("pressmove", function(evt) {
		toggleDragMapEvent(evt, 'move')
	});
	editBg.addEventListener("pressup", function(evt) {
		toggleDragMapEvent(evt, 'release');
	});	
	editBg.addEventListener("dblclick", function(evt) {
		addShapePath(evt);
	});	
}

function toggleDragMapEvent(obj, con){
	switch(con){
		case 'drag':
			obj.target.offset = {x:obj.target.x-(obj.stageX), y:obj.target.y- (obj.stageY)};
		break;
		
		case 'move':
			obj.target.x = (obj.stageX) + obj.target.offset.x;
			obj.target.y = (obj.stageY) + obj.target.offset.y;
			
			editMoveContainer.x = obj.target.x;
			editMoveContainer.y = obj.target.y;
		break;
		
		case 'release':
			
		break;
	}
}

/*!
 * 
 * COLLISIONS EVENTS - This is the function that runs to load collisions events
 * 
 */

function buildCollisionDropdown(){
	$('#collisionlist').empty();
	for(n=0;n<map_array[editData.mapNum].collisions.length;n++){
		$('#collisionlist').append($("<option/>", {
			value: n,
			text: 'Collision '+(n+1)
		}));
	}
	$('#collisionlist').val(editData.collisionNum);
}

function toggleCollision(con){
	if(con){
		editData.collisionNum++;
		editData.collisionNum = editData.collisionNum > map_array[editData.mapNum].collisions.length - 1 ? 0 : editData.collisionNum;
	}else{
		editData.collisionNum--;
		editData.collisionNum = editData.collisionNum < 0 ? map_array[editData.mapNum].collisions.length - 1 : editData.collisionNum;
	}
	
	$('#collisionlist').prop("selectedIndex", editData.collisionNum);
	$('#collisionType').prop("selectedIndex", map_array[editData.mapNum].collisions[editData.collisionNum].type);
	drawCollisions();
}

function actionCollision(action){
	switch(action){
		case 'new':
			map_array[editData.mapNum].collisions.push({type:0, path:[]});
			editData.collisionNum = map_array[editData.mapNum].collisions.length - 1;
			
			buildCollisionDropdown();
			drawCollisions();
			toggleEditOption('shape', true);
		break;
		
		case 'remove':
			//if(map_array[editData.mapNum].collisions.length > 1){
				map_array[editData.mapNum].collisions.splice(editData.collisionNum, 1);
				editData.collisionNum = 0;
				buildCollisionDropdown();
				drawCollisions();
			//}
		break;
	}
}

function drawCollisions(){
	editShapeContainer.removeAllChildren();
	
	if(map_array[editData.mapNum].collisions.length == 0){
		return;	
	}
	
	for(var n=0;n<map_array[editData.mapNum].collisions.length;n++){
		var selectedCon = false;
		if(n == editData.collisionNum){
			selectedCon = true;	
		}
		drawEditShape(map_array[editData.mapNum].collisions[n].path, selectedCon);
	}
	
	$('#collisionType').prop("selectedIndex", map_array[editData.mapNum].collisions[editData.collisionNum].type);
	if(map_array[editData.mapNum].collisions[editData.collisionNum].path.length > 0){
		setMapPosiiton(map_array[editData.mapNum].collisions[editData.collisionNum].path[0][0], map_array[editData.mapNum].collisions[editData.collisionNum].path[0][1]);
	}
}

function drawEditShape(path, con){
	var fillColor = editShapeData.fill;
	if(con){
		fillColor = editShapeData.fillSelect;	
	}
	var newShape = new createjs.Shape();
	newShape.graphics.beginFill(fillColor);
	if(con){
		newShape.graphics.beginStroke(editShapeData.strokeColor).setStrokeStyle(editShapeData.strokeNum);
		
		newShape.cursor = "pointer";
		newShape.addEventListener("mousedown", function(evt) {
			toggleDragShapeEvent(evt, 'drag')
		});
		newShape.addEventListener("pressmove", function(evt) {
			toggleDragShapeEvent(evt, 'move')
		});
		newShape.addEventListener("pressup", function(evt) {
			toggleDragShapeEvent(evt, 'drop')
		});
	}
	newShape.alpha = editShapeData.fillAlpha;
		  
	for(var n=0; n<path.length; n++){
		if(n == 0){
			newShape.graphics.moveTo(path[n][0], path[n][1])
		}else{
			newShape.graphics.lineTo(path[n][0], path[n][1])
		}
		
		if(n == path.length-1){
			newShape.graphics.lineTo(path[0][0], path[0][1]);	
		}
	}
	newShape.graphics.endFill();
	newShape.graphics.endStroke();
	
	editShapeContainer.addChild(newShape);
}

function toggleDragShapeEvent(obj, con){
	switch(con){
		case 'drag':
			editPathContainer.visible = false;
			editPathHighlight.visible = false;
			
			obj.target.offset = {x:obj.target.x-(obj.stageX), y:obj.target.y-(obj.stageY)};
			obj.target.oldPosition = {x:obj.target.x, y:obj.target.y};
		break;
		
		case 'move':
			obj.target.alpha = .5;
			obj.target.x = ((obj.stageX) + obj.target.offset.x) / editData.scalepercent;
			obj.target.y = ((obj.stageY) + obj.target.offset.y) / editData.scalepercent;
		break;
		
		case 'drop':
			var distanceX = obj.target.oldPosition.x - obj.target.x;
			var distanceY = obj.target.oldPosition.y - obj.target.y;
			
			for(var n=0; n<map_array[editData.mapNum].collisions[editData.collisionNum].path.length; n++){
				map_array[editData.mapNum].collisions[editData.collisionNum].path[n][0] -= Math.round(distanceX);
				map_array[editData.mapNum].collisions[editData.collisionNum].path[n][1] -= Math.round(distanceY);
			}
			
			if(editData.pathAdd){
				drawPaths();
				editPathContainer.visible = true;
			}
		break;
	}
}

/*!
 * 
 * EDIT PATH EVENTS - This is the function that runs to load path events
 * 
 */
function drawEditPath(n,x,y){
	var newPath = new createjs.Shape();
	newPath.graphics.beginFill(editPathData.fill).drawCircle(0, 0, editPathData.radius);
	newPath.x = x;
	newPath.y = y;
	editPathContainer.addChild(newPath);
	
	newPath.cursor = "pointer";
	newPath.name = n;
	newPath.addEventListener("mousedown", function(evt) {
		toggleDragEvent(evt, 'drag')
	});
	newPath.addEventListener("pressmove", function(evt) {
		toggleDragEvent(evt, 'move')
	});
	newPath.addEventListener("pressup", function(evt) {
		toggleDragEvent(evt, 'drop')
	});
}

function toggleDragEvent(obj, con){
	switch(con){
		case 'drag':
			obj.target.offset = {x:obj.target.x-(obj.stageX/ editData.scalepercent), y:obj.target.y-(obj.stageY/ editData.scalepercent)};
			obj.target.alpha = .5;
			
			editPathHighlight.visible = true;
			editPathHighlight.x = obj.target.x;
			editPathHighlight.y = obj.target.y;
			
			editData.pathNum = obj.target.name;
			$('#pathlist').val(editData.pathNum);
		break;
		
		case 'move':
			obj.target.alpha = .5;
			
			obj.target.x = ((obj.stageX/ editData.scalepercent) + obj.target.offset.x);
			obj.target.y = ((obj.stageY/ editData.scalepercent) + obj.target.offset.y);
			
			map_array[editData.mapNum].collisions[editData.collisionNum].path[editData.pathNum][0] = Math.round(obj.target.x);
			map_array[editData.mapNum].collisions[editData.collisionNum].path[editData.pathNum][1] = Math.round(obj.target.y);
			
			posPathHighlight();
			
			editShapeContainer.removeAllChildren();
			drawEditShape(map_array[editData.mapNum].collisions[editData.collisionNum].path, true);
		break;
		
		case 'drop':
			obj.target.alpha = 1;
		break;
	}
}

function buildPathDropdown(){
	$('#pathlist').empty();
	for(n=0;n<map_array[editData.mapNum].collisions[editData.collisionNum].path.length;n++){
		$('#pathlist').append($("<option/>", {
			value: n,
			text: 'Path '+(n+1)
		}));
	}
	$('#pathlist').val(editData.pathNum);
}

function togglePath(con){
	if(con){
		editData.pathNum++;
		editData.pathNum = editData.pathNum > map_array[editData.mapNum].collisions[editData.collisionNum].path.length - 1 ? 0 : editData.pathNum;
	}else{
		editData.pathNum--;
		editData.pathNum = editData.pathNum < 0 ? map_array[editData.mapNum].collisions[editData.collisionNum].path.length - 1 : editData.pathNum;
	}
	
	posPathHighlight();
	setMapPosiiton(editPathHighlight.x, editPathHighlight.y);
	
	$('#pathlist').prop("selectedIndex", editData.pathNum);
}

function posPathHighlight(){
	if(map_array[editData.mapNum].collisions[editData.collisionNum].path.length == 0){
		return;	
	}
	
	editPathHighlight.visible = true;
	editPathHighlight.x = map_array[editData.mapNum].collisions[editData.collisionNum].path[editData.pathNum][0];
	editPathHighlight.y = map_array[editData.mapNum].collisions[editData.collisionNum].path[editData.pathNum][1];
}

function drawShape(){
	editShapeContainer.removeAllChildren();
	drawEditShape(map_array[editData.mapNum].collisions[editData.collisionNum].path, true);	
}

function drawPaths(){
	editPathContainer.removeAllChildren();
	for(var n=0; n<map_array[editData.mapNum].collisions[editData.collisionNum].path.length; n++){
		drawEditPath(n,map_array[editData.mapNum].collisions[editData.collisionNum].path[n][0], map_array[editData.mapNum].collisions[editData.collisionNum].path[n][1]);
	}
	
	posPathHighlight();
}

function actionPath(action){
	switch(action){
		case 'remove':
			if(map_array[editData.mapNum].collisions[editData.collisionNum].path.length > 1){
				map_array[editData.mapNum].collisions[editData.collisionNum].path.splice(editData.pathNum, 1);
				editData.pathNum = 0;
				
				buildPathDropdown();
				drawShape();
				drawPaths();
			}
		break;
	}
}

function addShapePath(obj){
	if(editData.pathAdd){
		var pt = editMoveContainer.globalToLocal(stage.mouseX, stage.mouseY);
		
		if(map_array[editData.mapNum].collisions[editData.collisionNum].path.length == 0){
			map_array[editData.mapNum].collisions[editData.collisionNum].path.push([Math.round(pt.x), Math.round(pt.y)]);
			editData.pathNum = 0;
		}else{
			map_array[editData.mapNum].collisions[editData.collisionNum].path.splice(editData.pathNum, 0, [Math.round(pt.x), Math.round(pt.y)]);
			editData.pathNum++;
		}
		
		buildPathDropdown();
		drawShape();
		drawPaths();
	}else if(editData.checkpointAdd){
		var pt = editMoveContainer.globalToLocal(stage.mouseX, stage.mouseY);
		map_array[editData.mapNum].checkpoints.push([Math.round(pt.x), Math.round(pt.y), 0, gameData.checkpointW]);	
		editData.checkpointNum = map_array[editData.mapNum].checkpoints.length-1;
		
		buildCheckpointDropdown();
		drawCheckpoints();
		updateCheckpointsData();
	}else if(editData.aiAdd){
		var pt = editMoveContainer.globalToLocal(stage.mouseX, stage.mouseY);
		map_array[editData.mapNum].aimove.push([Math.round(pt.x), Math.round(pt.y)]);	
		editData.aiNum = map_array[editData.mapNum].aimove.length-1;
		
		buildAIDropdown();
		drawAIMove();
	}else if(editData.carAdd){
		actionCar('new');
	}
}

/*!
 * 
 * CHECKPOINTS EVENTS - This is the function that runs to load checkpoints events
 * 
 */
function buildCheckpointDropdown(){
	$('#checkpointslist').empty();
	for(n=0;n<map_array[editData.mapNum].checkpoints.length;n++){
		$('#checkpointslist').append($("<option/>", {
			value: n,
			text: 'Checkpoint '+(n+1)
		}));
	}
	$('#checkpointslist').val(editData.checkpointNum);
	updateCheckpointsData();
}

function toggleCheckpoint(con){
	if(con){
		editData.checkpointNum++;
		editData.checkpointNum = editData.checkpointNum > map_array[editData.mapNum].checkpoints.length - 1 ? 0 : editData.checkpointNum;
	}else{
		editData.checkpointNum--;
		editData.checkpointNum = editData.checkpointNum < 0 ? map_array[editData.mapNum].checkpoints.length - 1 : editData.checkpointNum;
	}
	
	posCheckpointHighlight();
	setMapPosiiton(editCheckpointHighlight.x, editCheckpointHighlight.y);
	$('#checkpointslist').prop("selectedIndex", editData.checkpointNum);
}

function updateCheckpointsData(){
	$('#checkpointRotation').val(map_array[editData.mapNum].checkpoints[editData.checkpointNum][2]);
	$('#checkpointWidth').val(map_array[editData.mapNum].checkpoints[editData.checkpointNum][3]);
}

function actionCheckpoint(action){
	switch(action){
		case 'remove':
			map_array[editData.mapNum].checkpoints.splice(editData.checkpointNum, 1);
			editData.checkpointNum = 0;
			buildCheckpointDropdown();
			drawCheckpoints();
		break;
	}
}

function drawCheckpoints(){
	editPathContainer.removeAllChildren();
	for(var n=0; n<map_array[editData.mapNum].checkpoints.length; n++){
		drawEditCheckpoint(n,map_array[editData.mapNum].checkpoints[n][0], map_array[editData.mapNum].checkpoints[n][1], map_array[editData.mapNum].checkpoints[n][2], map_array[editData.mapNum].checkpoints[n][3]);
	}
	
	posCheckpointHighlight();
	updateCheckpointsData();
}

function drawEditCheckpoint(n,x,y,rotation,w){
	var newText = new createjs.Text();
	newText.font = "30px bebas_neueregular";
	newText.color = "#fff";
	newText.textAlign = "center";
	newText.textBaseline='alphabetic';
	newText.text = n+1;
	newText.x = x;
	newText.y = y+8;
	
	var newPath = new createjs.Shape();
	newPath.graphics.beginFill(editCheckpointData.fill).drawRect(-(w/2), -(gameData.checkpointH/2), w, gameData.checkpointH);
	newPath.x = x;
	newPath.y = y;
	newPath.rotation = rotation;
	newPath.targetText = newText;
	editPathContainer.addChild(newPath, newText);
	
	newPath.cursor = "pointer";
	newPath.name = n;
	newPath.addEventListener("mousedown", function(evt) {
		toggleDragCheckpointEvent(evt, 'drag')
	});
	newPath.addEventListener("pressmove", function(evt) {
		toggleDragCheckpointEvent(evt, 'move')
	});
	newPath.addEventListener("pressup", function(evt) {
		toggleDragCheckpointEvent(evt, 'drop')
	});	
}

function toggleDragCheckpointEvent(obj, con){
	switch(con){
		case 'drag':
			obj.target.offset = {x:obj.target.x-(obj.stageX/ editData.scalepercent), y:obj.target.y-(obj.stageY/ editData.scalepercent)};
			obj.target.alpha = .5;
			
			editCheckpointHighlight.visible = true;
			editCheckpointHighlight.x = obj.target.x;
			editCheckpointHighlight.y = obj.target.y;
			editCheckpointHighlight.rotation = obj.target.rotation;
			
			editData.checkpointNum = obj.target.name;
			$('#checkpointslist').val(editData.checkpointNum);
			updateCheckpointsData();
		break;
		
		case 'move':
			obj.target.alpha = .5;
			obj.target.x = (obj.stageX/ editData.scalepercent) + obj.target.offset.x;
			obj.target.y = (obj.stageY/ editData.scalepercent) + obj.target.offset.y;
			
			obj.target.targetText.x = obj.target.x;
			obj.target.targetText.y = obj.target.y + 8;
			
			map_array[editData.mapNum].checkpoints[editData.checkpointNum][0] = Math.round(obj.target.x);
			map_array[editData.mapNum].checkpoints[editData.checkpointNum][1] = Math.round(obj.target.y);
			
			posCheckpointHighlight();
		break;
		
		case 'drop':
			obj.target.alpha = 1;
		break;
	}
}

function posCheckpointHighlight(){
	if(map_array[editData.mapNum].checkpoints.length == 0){
		return;	
	}
	
	editCheckpointHighlight.visible = true;
	editCheckpointHighlight.x = map_array[editData.mapNum].checkpoints[editData.checkpointNum][0];
	editCheckpointHighlight.y = map_array[editData.mapNum].checkpoints[editData.checkpointNum][1];
	editCheckpointHighlight.rotation = map_array[editData.mapNum].checkpoints[editData.checkpointNum][2];
}


/*!
 * 
 * AI MOVE EVENTS - This is the function that runs to load ai move events
 * 
 */

function buildAIDropdown(){
	$('#aimovelist').empty();
	for(n=0;n<map_array[editData.mapNum].aimove.length;n++){
		$('#aimovelist').append($("<option/>", {
			value: n,
			text: 'Move '+(n+1)
		}));
	}
	$('#aimovelist').val(editData.checkpointNum);
}

function toggleAIMove(con){
	if(con){
		editData.aiNum++;
		editData.aiNum = editData.aiNum > map_array[editData.mapNum].aimove.length - 1 ? 0 : editData.aiNum;
	}else{
		editData.aiNum--;
		editData.aiNum = editData.aiNum < 0 ? map_array[editData.mapNum].aimove.length - 1 : editData.aiNum;
	}
	
	posAIHighlight();
	setMapPosiiton(editMoveHighlight.x, editMoveHighlight.y);
	$('#aimovelist').prop("selectedIndex", editData.aiNum);
}

function actionAI(action){
	switch(action){
		case 'remove':
			map_array[editData.mapNum].aimove.splice(editData.aiNum, 1);
			editData.aiNum = 0;
			buildAIDropdown();
			drawAIMove();
		break;
	}
}

function drawAIMove(){
	editPathContainer.removeAllChildren();
	for(var n=0; n<map_array[editData.mapNum].aimove.length; n++){
		drawEditAIMove(n,map_array[editData.mapNum].aimove[n][0], map_array[editData.mapNum].aimove[n][1]);
	}
	
	posAIHighlight();
}

function drawEditAIMove(n,x,y){
	var newText = new createjs.Text();
	newText.font = "30px bebas_neueregular";
	newText.color = "#fff";
	newText.textAlign = "center";
	newText.textBaseline='alphabetic';
	newText.text = n+1;
	newText.x = x;
	newText.y = y+8;
	
	var newPath = new createjs.Shape();
	newPath.graphics.beginFill(editCheckpointData.fill).drawCircle(0, 0, editCheckpointData.radius);
	newPath.x = x;
	newPath.y = y;
	newPath.targetText = newText;
	editPathContainer.addChild(newPath, newText);
	
	newPath.cursor = "pointer";
	newPath.name = n;
	newPath.addEventListener("mousedown", function(evt) {
		toggleDragAIMoveEvent(evt, 'drag')
	});
	newPath.addEventListener("pressmove", function(evt) {
		toggleDragAIMoveEvent(evt, 'move')
	});
	newPath.addEventListener("pressup", function(evt) {
		toggleDragAIMoveEvent(evt, 'drop')
	});	
}

function toggleDragAIMoveEvent(obj, con){
	switch(con){
		case 'drag':
			obj.target.offset = {x:obj.target.x-(obj.stageX/ editData.scalepercent), y:obj.target.y-(obj.stageY/ editData.scalepercent)};
			obj.target.alpha = .5;
			
			editMoveHighlight.visible = true;
			editMoveHighlight.x = obj.target.x;
			editMoveHighlight.y = obj.target.y;
			
			editData.aiNum = obj.target.name;
			$('#aimovelist').val(editData.aiNum);
		break;
		
		case 'move':
			obj.target.alpha = .5;
			obj.target.x = (obj.stageX/ editData.scalepercent) + obj.target.offset.x;
			obj.target.y = (obj.stageY/ editData.scalepercent) + obj.target.offset.y;
			
			obj.target.targetText.x = obj.target.x;
			obj.target.targetText.y = obj.target.y + 8;
			
			map_array[editData.mapNum].aimove[editData.aiNum][0] = Math.round(obj.target.x);
			map_array[editData.mapNum].aimove[editData.aiNum][1] = Math.round(obj.target.y);
			
			posAIHighlight();
		break;
		
		case 'drop':
			obj.target.alpha = 1;
		break;
	}
}

function posAIHighlight(){
	if(map_array[editData.mapNum].aimove.length == 0){
		return;	
	}
	
	editMoveHighlight.visible = true;
	editMoveHighlight.x = map_array[editData.mapNum].aimove[editData.aiNum][0];
	editMoveHighlight.y = map_array[editData.mapNum].aimove[editData.aiNum][1];
}


/*!
 * 
 * CARS EVENTS - This is the function that runs to load cars events
 * 
 */
function buildCars(){
	$('#carslist').empty();
	for(n=0;n<map_array[editData.mapNum].cars.length;n++){
		$('#carslist').append($("<option/>", {
			value: n,
			text: 'Car '+(n+1)
		}));
	}
	$('#carslist').val(editData.carNum);
}

function toggleCar(con){
	if(con){
		editData.carNum++;
		editData.carNum = editData.carNum > map_array[editData.mapNum].cars.length - 1 ? 0 : editData.carNum;
	}else{
		editData.carNum--;
		editData.carNum = editData.carNum < 0 ? map_array[editData.mapNum].cars.length - 1 : editData.carNum;
	}
	$('#carslist').prop("selectedIndex", editData.carNum);
	setMapPosiiton(map_array[editData.mapNum].cars[editData.carNum].x, map_array[editData.mapNum].cars[editData.carNum].y);
	highlightCar();
	updateCarData();
}

function drawEditCars(){
	editPathContainer.removeAllChildren();
	for(var n=0;n<map_array[editData.mapNum].cars.length;n++){
		drawEditCar(n, map_array[editData.mapNum].cars[n].x, map_array[editData.mapNum].cars[n].y, map_array[editData.mapNum].cars[n].rotation, map_array[editData.mapNum].cars[n].type);
	}
	
	highlightCar();
}

function highlightCar(){
	for(var n=0;n<map_array[editData.mapNum].cars.length;n++){
		$.car['edit'+n].alpha = .5;
	}
	
	$.car['edit'+editData.carNum].alpha = 1;
}

function drawEditCar(n,x,y,rotation,type){
	var randomCarNum = Math.round(Math.random()*car_array.length);
	
	if(type == 0){
		$.car['edit'+n] = $.car[0].clone();
	}else{
		$.car['edit'+n] = $.car['police'+0].clone();		
	}
	$.car['edit'+n].x = x;
	$.car['edit'+n].y = y;
	$.car['edit'+n].rotation = rotation;
	$.car['edit'+n].alpha = .5;
	
	$.car['edit'+n].cursor = "pointer";
	$.car['edit'+n].name = n;
	$.car['edit'+n].addEventListener("mousedown", function(evt) {
		toggleDragCarEvent(evt, 'drag')
	});
	$.car['edit'+n].addEventListener("pressmove", function(evt) {
		toggleDragCarEvent(evt, 'move')
	});
	$.car['edit'+n].addEventListener("pressup", function(evt) {
		toggleDragCarEvent(evt, 'drop')
	});	
	
	editPathContainer.addChild($.car['edit'+n]);
}

function actionCar(action){
	switch(action){
		case 'new':
			var pt = editMoveContainer.globalToLocal(stage.mouseX, stage.mouseY);
			map_array[editData.mapNum].cars.push({x:pt.x, y:pt.y, rotation:0, type:0});
			editData.carNum = map_array[editData.mapNum].cars.length - 1;
			
			buildCars();
			drawEditCars();
			updateCarData();
		break;
		
		case 'remove':
			map_array[editData.mapNum].cars.splice(editData.carNum, 1);
			editData.carNum = 0;
			buildCars();
			drawEditCars();
		break;
	}
}

function updateCarData(){
	$('#carX').val(map_array[editData.mapNum].cars[editData.carNum].x);
	$('#carY').val(map_array[editData.mapNum].cars[editData.carNum].y);
	$('#carRotation').val(map_array[editData.mapNum].cars[editData.carNum].rotation);
	$('#carType').val(Number(map_array[editData.mapNum].cars[editData.carNum].type));	
}

function toggleDragCarEvent(obj, con){
	switch(con){
		case 'drag':
			obj.target.offset = {x:obj.target.x-(obj.stageX/ editData.scalepercent), y:obj.target.y-(obj.stageY/ editData.scalepercent)};
			
			editData.carNum = obj.target.name;
			$('#carslist').prop("selectedIndex", editData.carNum);
			highlightCar();
		break;
		
		case 'move':
			obj.target.x = (obj.stageX/ editData.scalepercent) + obj.target.offset.x;
			obj.target.y = (obj.stageY/ editData.scalepercent) + obj.target.offset.y;
			
			map_array[editData.mapNum].cars[editData.carNum].x = Math.round(obj.target.x);
			map_array[editData.mapNum].cars[editData.carNum].y = Math.round(obj.target.y);
			updateCarData();
		break;
		
		case 'drop':
			
		break;
	}
}

/*!
 * 
 * TEST GAME EVENTS - This is the function that runs to load test game events
 * 
 */
function testRunGame(){
	if(map_array[editData.mapNum].collisions.length == 0 || map_array[editData.mapNum].checkpoints.length == 0 || map_array[editData.mapNum].cars.length == 0 || map_array[editData.mapNum].aimove.length == 0){
		alert('Make sure you have create map collisions, checkpoints, ai move points and cars position before test run the game');
		return;
	}
	
	editPathContainer.removeAllChildren();
	editPathContainer.visible = true;
	editData.test = true;
	
	gameData.mapIndex = editData.mapNum;
	
	stopGame();
	startGame();
	toggleFollowCamera();
	
	cameraData.index = gameData.userIndex;
	$('#followcarlist').prop("selectedIndex", cameraData.index);
}

function toggleFollowCamera(){
	cameraData.con = false;
	
	editMoveContainer.regX = 0;
	editMoveContainer.regY = 0;
	editMoveContainer.rotation = 0;
	editMoveContainer.x = 0;
	editMoveContainer.y = 0;
	
	if($('#stickcamera').is(":checked")) {
		cameraData.con = true;
	}	
}

function buildTestgameDropdown(){
	$('#followcarlist').empty();
	for(n=0;n<map_array[editData.mapNum].cars.length;n++){
		$('#followcarlist').append($("<option/>", {
			value: n,
			text: 'Car '+(n)
		}));
	}
	$('#followcarlist').val(editData.collisionNum);
}

function toggleFollowCar(con){
	if(con){
		cameraData.index++;
		cameraData.index = cameraData.index > map_array[editData.mapNum].cars.length - 1 ? 0 : cameraData.index;
	}else{
		cameraData.index--;
		cameraData.index = cameraData.index < 0 ? map_array[editData.mapNum].cars.length - 1 : cameraData.index;
	}
	$('#followcarlist').prop("selectedIndex", cameraData.index);
	toggleFollowCamera();
}