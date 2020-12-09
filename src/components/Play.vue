<template>
  <div data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="800">
    <div class="hero-image parallax py-1">
      <div class="h-100">
        <div class="h-100 d-flex flex-column justify-content-center">
          <h3 class="text-center primary-color-subtitle play-title">JUGAR</h3>
          <div class="container mt-5">
            <div class="row">
              <div class="col-md-5 col-sm-6 col-xs-6 col-6 d-flex align-items-center">
                <div>
                  <p class="text-black secondary-font" style="font-size: 1.5rem; text-transform: uppercase;">¡Llego el momento de participar para ganar una stepway!</p>
                  <p
                      class="text-black"
                  >Si ya registraste tu ticket, captúralo nuevamente para concluir tus participaciones restantes.</p>
                  <p class="text-black">¡Regístralo arriba si aún no lo has hecho!</p>

                  <p class="text-black">Al terminar todas tus participaciones, te enviaremos un correo con tu registro y resultados.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="mobile-play pb-3">
      <h3 class="text-center play-title pt-5 primary-color-subtitle">JUGAR</h3>

      <h4 class="text-center text-black mt-3 secondary-font">¡LLEGO EL MOMENTO DE PARTICIPAR<br>PARA GANAR ESTE AUTO!</h4>

      <p class="text-black text-center px-5 mt-5">Si ya registraste tu ticket, captúralo nuevamente para concluir tus participaciones restantes.</p>

      <p class="text-black text-center px-5">¡Regístralo arriba si aún no lo has hecho!</p>

      <img src="./../assets/stepway2.png" class="img-fluid d-block ml-5 px-5">
    </div>

    <div class="verify-ticket py-5">
      <div class="container">
        <div class="d-flex flex-column align-items-center justify-content-center">
          <div class="form-group mt-1">
            <label class="text-black">Código de facturación</label>
            <input type="text" class="form-control" :class="{'is-invalid': $vuelidation.error('ticket') || (customTicketIsValid === false && formTouched) }" v-model="ticket" />
            <div class="invalid-feedback" v-if='$vuelidation.error("ticket")'>{{ $vuelidation.error('ticket') }}</div>
            <div class="invalid-feedback" v-else>Este campo debe ser un ticket válido</div>
          </div>

          <button @click="verify" id="faq" :disabled="loading" class="d-flex align-items-center btn btn-primary mt-3 mx-auto button">VERIFICAR <span v-if="loading" class="ml-2 my-auto spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></button>


          <div class="mt-5" v-if="registeredTicket">
            <div class="d-flex flex-column align-items-center justify-content-center"> 
              
              <div class="d-flex align-items-center mb-3" v-for="index in registeredTicket.attempts" :key="index">
                <p class="m-0 text-black">Participación #{{index}}</p>

                <div class="ml-3 btn-completed">completado</div>
              </div>

              <p style="display:none">{{registeredTicket.games}}</p>
              <div v-if="registeredTicket.games">
                <div class="d-flex align-items-center mb-3" v-for="n in registeredTicket.games" :key="n">
                  
                  <p class="m-0 text-black">Participación #{{(n + registeredTicket.init) - 1}}</p>

                  <button class="ml-3 btn-play" @click="initGame">jugar</button>
                </div>
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
import { EventBus } from './../services/events';

export default {
  name: "Play",

  props: {
    msg: String,
  },

  watch: {
    ticket: function(newValue) {
      this.customTicketIsValid = newValue.length === 23;

      const result = newValue.replace(/[^A-Za-z0-9]/g, "").replace(/(.{5})/g, '$1 ').toUpperCase().trim();
      if (result.length > 23) {
        this.$nextTick(() => this.ticket = this.ticket.substring(0, this.ticket.length - 1));
        return ;
      }
      this.$nextTick(() => this.ticket = result);
    },
  },

  validation: {
    ticket: {
      required: { msg: 'Este campo es requerido' }
    }
  },

  mounted() {
    EventBus.$on('sendDataToPlay', (ticket) => {
      this.formatTicketData(ticket)
    })

    EventBus.$on('plusOneTicketPlay', () => {
      this.registeredTicket.attempts = this.registeredTicket.attempts + 1;
      this.registeredTicket.games = this.registeredTicket.games - 1;
      this.registeredTicket.init =  this.registeredTicket.max_attempts - this.registeredTicket.games + 1;
    });
  },

  data() {
    return {
      ticket: "",
      customTicketIsValid: false,
      formTouched: false,
      registeredTicket: '',
      loading: false,
    }
  },

  vuelidation: {
    data: {
      ticket: {
        required: { msg: 'Este campo es requerido' },
      },
    },
  },

  methods: {
    async verify() {
      this.formTouched = true;
      if (this.$vuelidation.valid()) {
        this.loading = true;
        const [error, data] = await Trivia.getTicket(this.ticket.replace(/ /g,''))
        this.loading = false;
        if (error) return console.log(error);

        this.formatTicketData(data.data.data, true);
      }
    },

    formatTicketData(data, sendToTicket = false) {
      const object = {};
      object['id'] = data.id;
      object['attempts'] = data.attempts ? Number(data.attempts) : 0;
      object['max_attempts'] = Number(data.max_attempts);
      object['games'] = object['max_attempts'] - object['attempts'];
      object['init'] =  object['max_attempts'] - object['games'] + 1;
      this.registeredTicket = {...object};
      if (sendToTicket) {
        EventBus.$emit('getTicket', this.registeredTicket);
      }
    },

    initGame() {
      window.$('#init').modal('show')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn-play {
  background: #ff0e9b !important;
  border: none;
  padding-bottom: .3rem;
  padding-top: .3rem;
  width: 170px;
  color: white;
}

.btn-completed {
  background: white !important;
  border: none;
  padding-bottom: .3rem;
  padding-top: .3rem;
  width: 170px;
  color: #711968;
  text-align: center;
  cursor: default;
}

.mobile-play {
  background: url('./../assets/modalSuccess.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.button {
  background: #D70000 !important;
  padding: 14px 55px;
  font-weight: bold;
  border-color: #D70000 !important;
  font-size: 1rem;
}

.verify-ticket {
  background-image: url("./../assets/verificar.jpg");
  min-height: 250px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
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
  background-image: url("./../assets/jugar.jpg");
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  display: none;
}

.mobile-play {
  background: url('./../assets/trivia.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
    background-image: url("./../assets/jugar.jpg");
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
    display: block;
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
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  .hero-image {
    background-image: url("./../assets/jugar.jpg");
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
    display: block;
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
    background-image: url("./../assets/jugar.jpg");
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
    display: block;
  }
}
</style>
