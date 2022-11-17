<template>
  <!-- GAME -->
  <div if="gggame">
    <div id="mainLoader"><img src="assets/loader.png" /><br/><span>0</span></div>
      <!-- PERCENT LOADER END-->

      <!-- CONTENT START-->
      <div id="mainHolder">

        <!-- BROWSER NOT SUPPORT START-->
        <div id="notSupportHolder">
              <div class="notSupport">TU NAVEGADOR NO ES COMPATIBLE.<br/>ACTUALIZA TU NAVEGADOR PARA EJECUTAR EL JUEGO</div>
          </div>
          <!-- BROWSER NOT SUPPORT END-->

          <!-- ROTATE INSTRUCTION START-->
          <div id="rotateHolder">
              <div class="mobileRotate">
                <div class="rotateImg"><img src="assets/rotate.png" /></div>
                  <div class="rotateDesc">Gire su dispositivo<br/>a landscape</div>
              </div>
          </div>
          <!-- ROTATE INSTRUCTION END-->

          <!-- CANVAS START-->
          <div id="canvasHolder">
              <canvas id="gameCanvas" width="1280" height="768"></canvas>
          </div>
          <!-- CANVAS END-->

      </div>
  </div>
</template>

<script>
export default {
  name: "Game"
}
</script>

<style scoped>

</style>
