////////////////////////////////////////////////////////////
// CANVAS LOADER
////////////////////////////////////////////////////////////

 /*!
 *
 * START CANVAS PRELOADER - This is the function that runs to preload canvas asserts
 *
 */
function initPreload(){
	toggleLoader(true);

	checkMobileEvent();

	$(window).resize(function(){
		resizeGameFunc();
	});
	resizeGameFunc();

	loader = new createjs.LoadQueue(false);
	manifest=[
			{src:'assets/background.png', id:'background'},
			{src:'assets/backgroundInstructions.png', id:'backgroundInstructions'},
			{src:'assets/logo.png', id:'logo'},
			{src:'assets/logoInstructions.png', id:'logoInstructions'},
			{src:'assets/button_start.png', id:'buttonStart'},
			{src:'assets/button_start_2.png', id:'buttonStart2'},

			{src:'assets/item_select.png', id:'itemSelect'},
			{src:'assets/button_ready.png', id:'buttonReady'},
			{src:'assets/button_left.png', id:'buttonLeft'},
			{src:'assets/button_right.png', id:'buttonRight'},

			{src:'assets/item_timer.png', id:'itemTimer'},
			{src:'assets/item_status.png', id:'itemGameStat'},
			{src:'assets/item_arrow_user.png', id:'itemArrowUser'},
			{src:'assets/item_arrow_guide.png', id:'itemArrowGuide'},

			{src:'assets/item_siren.png', id:'itemSiren'},
			{src:'assets/item_dust.png', id:'itemDust'},
			{src:'assets/item_traffic.png', id:'itemTraffic'},

			{src:'assets/item_mode_racer.png', id:'itemButtonModeRacer'},
			{src:'assets/item_mode_pursuit.png', id:'itemButtonModePursuit'},

			{src:'assets/button_mobile_left.png', id:'itemButtonLeft'},
			{src:'assets/button_mobile_right.png', id:'itemButtonRight'},
			{src:'assets/button_mobile_acc.png', id:'itemButtonAcc'},
			{src:'assets/button_mobile_brake.png', id:'itemButtonBrake'},

			{src:'assets/button_yes.png', id:'buttonConfirm'},
			{src:'assets/button_no.png', id:'buttonCancel'},
			{src:'assets/item_confirm.png', id:'itemExit'},

			{src:'assets/button_continue.png', id:'buttonContinue'},
			{src:'assets/item_result.png', id:'itemResult'},
			{src:'assets/button_facebook.png', id:'buttonFacebook'},
			{src:'assets/button_twitter.png', id:'buttonTwitter'},
			{src:'assets/button_whatsapp.png', id:'buttonWhatsapp'},
			{src:'assets/button_fullscreen.png', id:'buttonFullscreen'},
			{src:'assets/button_sound_on.png', id:'buttonSoundOn'},
			{src:'assets/button_sound_off.png', id:'buttonSoundOff'},
			{src:'assets/button_exit.png', id:'buttonExit'},
			{src:'assets/button_settings.png', id:'buttonSettings'}];

	for(var n=0; n<car_array.length; n++){
		manifest.push({src:car_array[n].image, id:'car'+n});
		manifest.push({src:car_array[n].thumb, id:'carThumb'+n});
	}

	for(var n=0; n<policecar_array.length; n++){
		manifest.push({src:policecar_array[n].image, id:'police'+n});
		manifest.push({src:policecar_array[n].thumb, id:'policeThumb'+n});
	}

	for(var n=0; n<map_array.length; n++){
		manifest.push({src:map_array[n].image, id:'map'+n});
		manifest.push({src:map_array[n].thumb, id:'mapThumb'+n});
		manifest.push({src:map_array[n].radar, id:'mapRadar'+n});
	}

	if ( typeof addScoreboardAssets == 'function' ) {
		addScoreboardAssets();
	}

	soundOn = true;
	if($.browser.mobile || isTablet){
		if(!enableMobileSound){
			soundOn=false;
		}
	}

	if(soundOn){
		manifest.push({src:'assets/sounds/music_menu.ogg', id:'musicMain'});
		manifest.push({src:'assets/sounds/music_game.ogg', id:'musicGame'});
		manifest.push({src:'assets/sounds/sound_click.ogg', id:'soundClick'});
		manifest.push({src:'assets/sounds/sound_hit_crash1.ogg', id:'soundHitCrash1'});
		manifest.push({src:'assets/sounds/sound_hit_crash2.ogg', id:'soundHitCrash2'});
		manifest.push({src:'assets/sounds/sound_hit_crash3.ogg', id:'soundHitCrash3'});
		manifest.push({src:'assets/sounds/sound_hit_crash4.ogg', id:'soundHitCrash4'});
		manifest.push({src:'assets/sounds/hit.ogg', id:'soundHit1'});
		manifest.push({src:'assets/sounds/hit2.ogg', id:'soundHit2'});
		manifest.push({src:'assets/sounds/dust.ogg', id:'soundDust'});
		manifest.push({src:'assets/sounds/move.ogg', id:'soundMove'});
		manifest.push({src:'assets/sounds/siren.ogg', id:'soundSiren'});
		manifest.push({src:'assets/sounds/countdown.ogg', id:'soundCountdown'});
		manifest.push({src:'assets/sounds/countdown_race.ogg', id:'soundCountdownRace'});

		manifest.push({src:'assets/sounds/sound_tyre1.ogg', id:'soundTyre1'});
		manifest.push({src:'assets/sounds/sound_tyre2.ogg', id:'soundTyre2'});
		manifest.push({src:'assets/sounds/sound_tyre3.ogg', id:'soundTyre3'});
		manifest.push({src:'assets/sounds/sound_tyre4.ogg', id:'soundTyre4'});

		manifest.push({src:'assets/sounds/lap.ogg', id:'soundLap'});
		manifest.push({src:'assets/sounds/lap_finish.ogg', id:'soundLapFinish'});

		createjs.Sound.alternateExtensions = ["mp3"];
		loader.installPlugin(createjs.Sound);
	}

	loader.addEventListener("complete", handleComplete);
	loader.addEventListener("fileload", fileComplete);
	loader.addEventListener("error",handleFileError);
	loader.on("progress", handleProgress, this);
	loader.loadManifest(manifest);
}

/*!
 *
 * CANVAS FILE COMPLETE EVENT - This is the function that runs to update when file loaded complete
 *
 */
function fileComplete(evt) {
	var item = evt.item;
	//console.log("Event Callback file loaded ", evt.item.id);
}

/*!
 *
 * CANVAS FILE HANDLE EVENT - This is the function that runs to handle file error
 *
 */
function handleFileError(evt) {
	console.log("error ", evt);
}

/*!
 *
 * CANVAS PRELOADER UPDATE - This is the function that runs to update preloder progress
 *
 */
function handleProgress() {
	$('#mainLoader span').html(Math.round(loader.progress/1*100)+'%');
}

/*!
 *
 * CANVAS PRELOADER COMPLETE - This is the function that runs when preloader is complete
 *
 */
function handleComplete() {
	toggleLoader(false);
	initMain();
};

/*!
 *
 * TOGGLE LOADER - This is the function that runs to display/hide loader
 *
 */
function toggleLoader(con){
	if(con){
		$('#mainLoader').show();
	}else{
		$('#mainLoader').hide();
	}
}