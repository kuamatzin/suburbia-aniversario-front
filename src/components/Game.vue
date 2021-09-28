<template>
  <!-- GAME -->
  <div>
    <canvas id="canvas" class="ani_hack" width="1920" height="1080"></canvas>

    <div data-orientation="landscape" class="orientation-msg-container">
      <p class="orientation-msg-text">Por favor, gira tu teléfono</p>
    </div>

    <div
        id="block_game"
        style="position: fixed; background-color: transparent; top: 0px; left: 0px; width: 100%; height: 100%; display:none"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Game"
}
</script>

<style scoped>

</style>
