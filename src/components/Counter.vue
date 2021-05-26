<template>
  <div>
    <div
      id="container-hero"
      class="hero-image-suburbia parallax margin-hero d-flex justify-content-center align-items-center"
    >
      <countdown
        :time="new Date('06/03/2021 00:00:00').getTime() - new Date().getTime()"
      >
        <template slot-scope="props">
          <div class="row timer-countdown">
            <div class="col-md-3">
              <p class="timer">{{ props.days }}</p>
              <p class="text-center">Días</p>
            </div>
            <div class="col-md-3">
              <p class="timer">{{ props.hours }}</p>
              <p class="text-center">Horas</p>
            </div>
            <div class="col-md-3">
              <p class="timer">{{ props.minutes }}</p>
              <p class="text-center">Minutos</p>
            </div>
            <div class="col-md-3">
              <p class="timer">{{ props.seconds }}</p>
              <p class="text-center">Segundos</p>
            </div>
          </div>
        </template>
      </countdown>
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
  margin-top: 340px;
}

.timer {
  font-size: 2.4rem;
  text-align: center;
  color: white;
}

.hero-image-suburbia {
  background-image: url("./../assets/bg_countdwon_R.jpg");
  height: 100vh;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;

  p {
    color: white;
  }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  .hero-image-suburbia {
    background-image: url("./../assets/under.jpg");
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .hero-image-suburbia {
    background-image: url("./../assets/under.jpg");
    height: 100vh;
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;

    .timer-countdown {
      margin-top: 0px;
    }

    .timer {
      font-size: 4rem;
    }
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  .hero-image-suburbia {
    background-image: url("./../assets/under.jpg");
    height: 100vh;
    background-position: center top;
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
    background-image: url("./../assets/under.jpg");
    height: 100vh;
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
  }

  .timer-countdown {
    width: 40vw;
  }
}
</style>
