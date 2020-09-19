<template>
  <div class="position: relative">
    <div id="container-hero" class="hero-image-suburbia parallax margin-hero"></div>
    <div id="mecanica" style="position: absolute; top: 25rem"></div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hero-image-suburbia {
  background-image: url("./../assets/mobile.jpg");
  height: 350px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment:scroll;
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  .hero-image-suburbia {
    background-image: url("./../assets/mobile.jpg");
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment:scroll;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .hero-image-suburbia {
    background-image: url("./../assets/banner-home.jpg");
    height: 480px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment:scroll;
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  .hero-image-suburbia {
    background-image: url("./../assets/banner-home.jpg");
    height: 480px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment:scroll;
  }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  .hero-image-suburbia {
    background-image: url("./../assets/banner-home.jpg");
    height: 480px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment:scroll;
  }
}
</style>
