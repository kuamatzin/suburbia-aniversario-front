<template>
  <div>
    <div id="comming-soon" class="hero-image-suburbia">
      <div
        class="
          h-100
          d-flex
          flex-column
          justify-content-center
          align-items-center
        "
      >

        <countdown
          :time="
            new Date('10/06/2022 00:00:00').getTime() - new Date().getTime()
          "
        >
          <template slot-scope="props">
            <div class="row timer-countdown">
              <div class="col-md-3">
                <p class="timer">{{ props.days }}</p>
                <p class="text-center text-white">Días</p>
              </div>
              <div class="col-md-3">
                <p class="timer">{{ props.hours }}</p>
                <p class="text-center text-white">Horas</p>
              </div>
              <div class="col-md-3">
                <p class="timer">{{ props.minutes }}</p>
                <p class="text-center text-white">Minutos</p>
              </div>
              <div class="col-md-3">
                <p class="timer text-white">{{ props.seconds }}</p>
                <p class="text-center text-white">Segundos</p>
              </div>
            </div>
          </template>
        </countdown>
      </div>
    </div>
  </div>
</template>

<script>
import VueCountdown from "@chenfengyuan/vue-countdown";

export default {
  components: { countdown: VueCountdown },
};
</script>

<style scoped lang="scss">
.timer-countdown {
  width: 80vw;
  margin-top: 300px;
}

.timer {
  font-size: 3rem;
  text-align: center;
  color: white;
}

.hero-image-suburbia {
  background-image: url("./../assets/bg_countdwon_R.jpg");
  height: 100vh;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;

  p {
    color: white;
  }

  .timer {
    font-size: 1.5rem;
  }

  .timer-countdown {
    margin-top: 390px;
  }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  .hero-image-suburbia {
    background-image: url("./../assets/bg_countdwon_R.jpg");
    height: 100vh;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .hero-image-suburbia {
    background-image: url("./../assets/bg_countdwon_R.jpg");
    height: 100vh;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;

    .timer-countdown {
      margin-top: 500px;
    }

    .timer {
      font-size: 4rem;
    }
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  .hero-image-suburbia {
    background-image: url("./../assets/images/01\ COUNTDOWN/RELOJ.jpg");
    height: 100vh;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
  }

  .timer-countdown {
    width: 50vw;
  }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  .hero-image-suburbia {
    background-image: url("./../assets/images/01\ COUNTDOWN/RELOJ.jpg");
    height: 100vh;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
  }

  .timer-countdown {
    width: 40vw;
  }
}
</style>
