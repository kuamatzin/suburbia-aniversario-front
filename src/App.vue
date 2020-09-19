<template>
  <div id="app">
    <div class="pagewide p-3 bg-white">
      <div class="container">
        <img alt="Suburbia aniversario" class="mb-4" src="./assets/logo.jpg" style="width: 130px" />
      </div>
    </div>
    <Navbar />

    <Banner />

    <Steps />

    <Calendar />

    <Ticket />

    <Play />

    <FAQ />

    <Winners />

    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Banner from "./components/Banner.vue";
import Steps from "./components/Steps.vue";
import Calendar from "./components/Calendar.vue";
import Ticket from "./components/Ticket.vue";
import Play from "./components/Play.vue";
import FAQ from "./components/FAQ.vue";
import Winners from "./components/Winners.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Banner,
    Steps,
    Calendar,
    Ticket,
    Play,
    FAQ,
    Winners,
    Footer,
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
