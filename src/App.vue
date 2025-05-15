<template>
  <div id="app">
    <div id="comming-soon" style="background: #5F2263; height: 100vh;" v-if="!activeWebsite">
      <div class="h-100 d-flex flex-column justify-content-center align-items-center" v-if="waitSoon">
        <img alt="Suburbia aniversario" class="mb-4" src="./assets/logo.jpg" style="width: 230px" />
        <h3 style="color: white" class="text-center">Pronto descubriras lo que tenemos preparado para ti.</h3>
      </div>

      <div v-else>
        <div class="desktop">
          <img src="./assets/images/end_game_winner.jpeg" width="100%">
        </div>
        <div class="mobile">
          <img src="./assets/images/end_game_mobile_winner.jpeg" width="100%">
        </div>
      </div>
    </div>

    <div v-else>
      <div v-if="activeCountdown">
        <Counter />
      </div>

      <div v-else>
        <Game v-if="inited" v-show="gameStarted" />

        <div class="game-finished" v-if="gameFinished">
          <!-- Logo centered -->
          <img alt="Suburbia aniversario" class="mb-4" src="https://protact.mx/assets/img/white_logo.png" style="width: 400px" />
          <div class="d-flex j align-items-center">
            <span class="font-weight-bold text-2xl">Has tardado</span> <span class="game-time">{{ time }} segundos</span> <span>en completar el juego</span>
          </div>
          <h2 class="mt-4">¡Exige tu premio!</h2>
<button class="btn btn-light mt-4" @click="restartGame" style="font-weight: bold; font-size: 1.2rem; padding: 0.75rem 2rem; border-radius: 8px;">Reiniciar juego</button>
        </div>
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
      waitSoon: true,
      activeWebsite: true,
      gameStarted: true,
      inited: true,
      activeCountdown: false,
      time: 0,
      gameFinished: false
    };
  },

  mounted() {
    EventBus.$on("gameStarted", () => {
      this.gameStarted = true;
    });

    EventBus.$on("gameFinished", (time) => {
      this.time = time;
      this.gameStarted = false;
      this.gameFinished = true;
    });
  },

  methods: {
    restartGame() {
      // Reload the page
      window.location.reload();
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap");

@media (min-width: 577px) {
  .mobile {
    display: none;
  }
}

.game-finished {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, #ff2a68 0%, #ff5858 50%, #ff6f61 100%);
  color: #fff;
  font-family: 'Montserrat', 'Rajdhani', sans-serif;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
}

.game-finished h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.2rem;
  letter-spacing: 2px;
  text-shadow: 0 2px 16px rgba(0,0,0,0.15);
}

.game-finished p {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0;
}

.game-time {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(90deg, #fff 30%, #fff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-left: 1rem;
  margin-right: 1rem;
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
