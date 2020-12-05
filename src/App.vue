<template>
  <div id="app">
    <go-top :size="50" bg-color="#EAC144"></go-top>

    <div class="pagewide p-3 bg-white">
      <div class="container">
        <img alt="Suburbia aniversario" class="mb-4" src="./assets/logo.jpg" style="width: 130px" />
      </div>
    </div>

    <Banner />

    <Winners />

    <Footer />
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
import Winners from "./components/Winners.vue";
import Footer from "./components/Footer.vue";
import GoTop from '@inotom/vue-go-top';

export default {
  name: "App",
  components: {
    Banner,
    Winners,
    Footer,
    GoTop
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap");

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Montserrat", sans-serif;
  color: #666666;

  h1,
  h2,
  h3,
  h4 {
    font-family: "Rajdhani", sans-serif !important;
    font-weight: 700;
  }
}

#myBtn {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: red;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 4px;
}

#myBtn:hover {
  background-color: #555;
}

.primary-font {
  font-family: "Montserrat", sans-serif !important;
}

.secondary-font {
  font-family: "Rajdhani", sans-serif !important;
}

.primary-color {
  color: #711968;
}

.secondary-color {
  color: #ff0e9b;
}

.section-suburbia {
  margin-top: 80px !important;
  margin-bottom: 80px !important;
}

.pagewide {
  display: none;
}

.navbar {
  top: 0px;
}

.cursor-pointer {
  cursor: pointer;
}

@media (min-width: 992px) {
  .pagewide {
    height: 75px;
    display: block;
  }

  .navbar {
    top: 80px;
  }
}
</style>
