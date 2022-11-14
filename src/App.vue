<template>
  <div id="app">
    <div id="comming-soon" style="background: #5F2263; height: 100vh;" v-if="!activeWebsite">
      <div class="h-100 d-flex flex-column justify-content-center align-items-center" v-if="waitSoon">
        <img alt="Suburbia aniversario" class="mb-4" src="./assets/logo.jpg" style="width: 230px" />
        <h3 style="color: white" class="text-center">Pronto descubriras lo que tenemos preparado para ti.</h3>
      </div>

      <div v-else>
        <div class="desktop">
          <img src="./assets/images/winners.jpeg" width="100%">
        </div>
        <div class="mobile">
          <img src="./assets/images/winners_mobile.jpeg" width="100%">
        </div>
      </div>
    </div>

    <div v-else>
      <div v-if="activeCountdown">
        <Counter />
      </div>

      <div v-else>
        <go-top :size="50" bg-color="#EAC144"></go-top>

        <Navbar v-show="!gameStarted" />

        <Banner v-show="!gameStarted" />

        <Steps v-show="!gameStarted" />

        <Calendar v-show="!gameStarted" />

        <Ticket v-show="!gameStarted" />

        <Play v-show="!gameStarted" />

        <FAQ v-show="!gameStarted" />

        <Winners v-show="!gameStarted" />

        <Footer v-show="!gameStarted" />

        <Game v-if="inited" v-show="gameStarted" />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import Counter from "./components/Counter";
import Ticket from "./components/Ticket";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Steps from "./components/Steps";
import Calendar from "./components/Calendar";
import Play from "./components/Play";
import FAQ from "./components/FAQ";
import Winners from "./components/Winners";
import Footer from "./components/Footer";
import Game from "./components/Game";
import GoTop from "@inotom/vue-go-top";
import { EventBus } from "./services/events";

export default {
  name: "App",

  components: {
    Counter,
    GoTop,
    Ticket,
    Navbar,
    Banner,
    Steps,
    Calendar,
    Play,
    FAQ,
    Winners,
    Footer,
    Game,
  },

  data() {
    return {
      waitSoon: false,
      activeWebsite: true,
      gameStarted: false,
      inited: true,
      activeCountdown: false
    };
  },

  mounted() {
    EventBus.$on("gameStarted", () => {
      this.gameStarted = true;
    });

    EventBus.$on("gameFinished", () => {
      this.gameStarted = false;

      this.inited = false;

      setTimeout(() => {
        this.inited = true;
      }, 500);
    });
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap");

@media (min-width: 577px) {
  .mobile {
    display: none;
  }
}

@media (max-width: 576px) {
  .desktop {
    display: none;
  }
}

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
    font-family: "Montserrat", sans-serif !important;
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

.ancla-cal {
  position: absolute;
  top: 400px;
}

.ancla {
  position: absolute;
  top: 30px;
}

.ancla-to-cal {
  position: absolute;
  top: 550px;
}

.ancla-play {
  position: absolute;
  top: 1600px;
}

.ancla-faq {
  position: absolute;
  top: 470px;
}

@media (min-width: 992px) {
  .ancla {
    position: absolute;
    top: 180px;
  }

  .ancla-cal {
    position: absolute;
    top: 650px;
  }

  .ancla-to-cal {
    position: absolute;
    top: 150px;
  }

  .ancla-play {
    position: absolute;
    top: 1800px;
  }

  .ancla-faq {
    position: absolute;
    top: 680px;
  }
}

#myBtn:hover {
  background-color: #555;
}

.primary-color-subtitle {
  color: #621f64;
}

.primary-font {
  font-family: "Montserrat", sans-serif !important;
}

.secondary-font {
  font-family: "Montserrat", sans-serif !important;
}

.primary-color {
  color: #711968;
}

.secondary-color {
  color: #ff0e9b;
}

.text-black {
  color: #2e3030 !important;
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
