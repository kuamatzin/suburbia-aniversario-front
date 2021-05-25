<template>
  <div
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="800"
  >
    <h3
      class="text-center primary-color"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="800"
    >
      JUGAR
    </h3>
    <div class="py-1">
      <div class="h-100">
        <div class="h-100 d-flex justify-content-center align-items-center">
          <div class="row mx-0">
            <div class="col-md-4 px-0">
              <div class="hero-image align-items-center">
                <div class="text-left text-white px-3 ml-4">
                  <h4 class="pt-5">
                    ¡LLEGÓ EL MOMENTO DE PARTICIPAR PARA GANAR UNO DE NUESTROS
                    PREMIOS!
                  </h4>
                  <ul class="pl-0 mt-3">
                    <li>
                      1 motocicleta Italika VORT-X200
                    </li>
                    <li>
                      4 motonetas Italika D150 2021
                    </li>
                    <li>
                      4 pantallas LG 75” UHD
                    </li>
                    <li>
                      4 pantallas LG 43” UHD
                    </li>
                    <li>
                      4 Smartphones Motorola RAZR 5G Negro
                    </li>
                  </ul>
                  <p class="mt-3">Si ya registraste tu ticket, verifícalo abajo para concluir tus participaciones restantes.</p>
                  <p>¡Regístralo si aún no lo has hecho!</p>
                  <small>*Imágenes sólo de caracter ilustrativo.</small>
                </div>
              </div>
            </div>
            <div class="col-md-8 px-0">
              <img src="../assets/regalo_right-21.jpg" alt="" style="height: 500px; width: 100%" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mobile-play pb-3">
      <div class="text-left text-white px-3 ml-4">
        <h4 class="pt-5">
          ¡LLEGÓ EL MOMENTO DE PARTICIPAR PARA GANAR UNO DE NUESTROS
          PREMIOS!
        </h4>
        <ul class="pl-0 mt-3">
          <li>
            1 motocicleta Italika VORT-X200
          </li>
          <li>
            4 motonetas Italika D150 2021
          </li>
          <li>
            4 pantallas LG 75” UHD
          </li>
          <li>
            4 pantallas LG 43” UHD
          </li>
          <li>
            4 Smartphones Motorola RAZR 5G Negro
          </li>
        </ul>
        <p class="mt-3">Si ya registraste tu ticket, verifícalo abajo para concluir tus participaciones restantes.</p>
        <p>¡Regístralo si aún no lo has hecho!</p>
        <small>*Imágenes sólo de caracter ilustrativo.</small>
      </div>
    </div>

    <div class="verify-ticket py-5 mt-2">
      <div class="container">
        <div
          class="d-flex flex-column align-items-center justify-content-center"
        >
          <div class="form-group">
            <label class="text-white"
              >Nº. de Ticket/Código de facturación</label
            >
            <input
              type="text"
              class="form-control"
              :class="{
                'is-invalid':
                  $vuelidation.error('ticket') ||
                  (customTicketIsValid === false && formTouched),
              }"
              v-model="ticket"
            />
            <div class="invalid-feedback" v-if="$vuelidation.error('ticket')">
              {{ $vuelidation.error("ticket") }}
            </div>
            <div class="invalid-feedback" v-else>
              Este campo debe ser un ticket válido
            </div>
          </div>

          <button
            @click="verify"
            id="faq"
            class="d-block btn btn-primary mt-3 mx-auto button"
          >
            VERIFICAR
          </button>

          <div class="mt-5" v-if="registeredTicket">
            <div
              class="d-flex flex-column align-items-center justify-content-center"
            >
              <div
                class="d-flex align-items-center mb-3"
                v-for="index in registeredTicket.attempts"
                :key="index"
              >
                <p class="m-0 text-white">Participación #{{ index }}</p>

                <div class="ml-3 btn-completed">completado</div>
              </div>

              <p style="display:none">{{ registeredTicket.games }}</p>

              <div
                class="d-flex align-items-center mb-3"
                v-for="(n, i) in registeredTicket.games"
                :key="i"
              >
                <p class="m-0 text-white">
                  Participación #{{ i + registeredTicket.init }}
                </p>

                <button class="ml-3 btn-play" @click="initGame">jugar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Trivia from "./../services/trivia";
import { EventBus } from "./../services/events";

export default {
  name: "Play",

  props: {
    msg: String,
  },

  watch: {
    ticket: function(newValue) {
      this.customTicketIsValid = newValue.length === 27;

      const result = newValue
        .replace(/\D/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();
      if (result.length > 27) {
        this.$nextTick(
          () => (this.ticket = this.ticket.substring(0, this.ticket.length - 1))
        );
        return;
      }
      this.$nextTick(() => (this.ticket = result));
    },
  },

  validation: {
    ticket: {
      required: { msg: "Este campo es requerido" },
    },
  },

  mounted() {
    EventBus.$on("sendDataToPlay", (ticket) => {
      this.formatTicketData(ticket);
    });
  },

  data() {
    return {
      ticket: "",
      customTicketIsValid: false,
      formTouched: false,
      registeredTicket: "",
    };
  },

  vuelidation: {
    data: {
      ticket: {
        required: { msg: "Este campo es requerido" },
      },
    },
  },

  methods: {
    async verify() {
      this.formTouched = true;
      if (this.$vuelidation.valid()) {
        const [error, data] = await Trivia.getTicket(
          this.ticket.replace(/ /g, "")
        );
        if (error) return console.log(error);

        this.formatTicketData(data.data.data);
      }
    },

    formatTicketData(data) {
      const object = {};
      object["id"] = data.id;
      object["attempts"] = data.attempts ? Number(data.attempts) : 0;
      object["max_attempts"] = Number(data.max_attempts);
      object["games"] = object["max_attempts"] - object["attempts"];
      object["init"] = object["max_attempts"] - object["games"] + 1;
      this.registeredTicket = { ...object };
      console.log(this.registeredTicket);
      EventBus.$emit("getTicket", this.registeredTicket);
    },

    initGame() {
      window.$("#init").modal("show");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul{
  list-style: none;
}
.btn-play {
  background: #ff0e9b !important;
  border: none;
  padding-bottom: 0.3rem;
  padding-top: 0.3rem;
  width: 170px;
  color: white;
}

.btn-completed {
  background: white !important;
  border: none;
  padding-bottom: 0.3rem;
  padding-top: 0.3rem;
  width: 170px;
  color: #711968;
  text-align: center;
  cursor: default;
}

.mobile-play {
  background: url("./../assets/regalo_left-20.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.button {
  background: #ff0e9b !important;
  padding: 14px 55px;
  font-weight: bold;
  border-color: #ff0e9b !important;
  font-size: 1rem;
}

.verify-ticket {
  background: #621e66;
}

.win-title {
  font-size: 1.3rem;
  margin-top: 5px;
}

.win {
  color: white;
  font-size: 0.8rem;
  margin-bottom: 1rem;
}

.win-min {
  font-size: 0.8rem;
}

.hero-image {
  background-image: url("./../assets/regalo_left-20.jpg");
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  display: none;
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  .win-title {
    font-size: 1.3rem;
    margin-top: 20px;
  }

  .win {
    color: white;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .hero-image {
    background-image: url("./../assets/regalo_left-20.jpg");
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
  }

  .win-title {
    font-size: 1.8rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  .win {
    color: white;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .win-min {
    font-size: 1.1rem;
  }

  .mobile-play {
    display: none;
  }

  .hero-image {
    display: block;
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  .hero-image {
    background-image: url("./../assets/regalo_left-20.jpg");
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
  }

  .win {
    color: white;
    font-size: 1.5rem;
    margin-bottom: 4rem;
  }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  .hero-image {
    background-image: url("./../assets/regalo_left-20.jpg");
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
  }
}
</style>
