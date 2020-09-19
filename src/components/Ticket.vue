<template>
  <div class="section-suburbia container mt-5">
    <h3
      class="text-center primary-color"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="800"
    >REGISTRA TU TICKET</h3>

    <div
      class="row mt-5"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="800"
    >
      <div class="col-md-8 offset-md-2 mb-4">
        <div class="d-flex align-items-center">
          <img alt="Ticket" src="./../assets/ojo.png" style="width: 100px" />

          <p class="ml-3 primary-color secondary-font">
            SERÁ
            <span class="secondary-color font-weight-bold secondary-font">MUY IMPORTANTE</span> QUE REVISES TODA LA INFORMACIÓN QUE REGISTRES, YA QUE CUALQUIER INCONSISTENCIA PODRÍA SER CAUSA DE DESCALIFICACIÓN.
          </p>
        </div>
      </div>
    </div>

    <div
    >
      <div class="col-md-6 offset-md-3">
          <div class="form-group">
            <label for="inputName">Primer Nombre*</label>
            <input type="text" class="form-control" :class="{'is-invalid': $vuelidation.error('first_name') }" v-model="first_name" />
            <div class="invalid-feedback" v-if='$vuelidation.error("first_name")'>{{ $vuelidation.error('first_name') }}</div>
          </div>

          <div class="form-group">
            <label for="inputName">Segundo Nombre</label>
            <input type="text" class="form-control" :class="{'is-invalid': $vuelidation.error('second_name') }" />
            <div class="invalid-feedback" v-if='$vuelidation.error("second_name")'>{{ $vuelidation.error('second_name') }}</div>
          </div>

          <div class="form-group mt-4">
            <label for="inputName">Apellido Paterno*</label>
            <input type="text" class="form-control" :class="{'is-invalid': $vuelidation.error('paternal_last_name') }" v-model="paternal_last_name" />
            <div class="invalid-feedback" v-if='$vuelidation.error("paternal_last_name")'>{{ $vuelidation.error('paternal_last_name') }}</div>
          </div>

          <div class="form-group mt-4">
            <label for="inputName">Apellido Materno*</label>
            <input type="text" class="form-control" v-model="maternal_last_name" />
            <div class="invalid-feedback">{{ $vuelidation.error('maternal_last_name') }}</div>
          </div>

          <div class="form-group mt-4">
            <label for="exampleFormControlSelect1">Género*</label>
            <select class="form-control" v-model="gender">
              <option value="male">Hombre</option>
              <option value="female">Mujer</option>
            </select>
          </div>

          <div class="row mt-4">
            <div class="col-md-12">
              <label for="exampleFormControlSelect1">Fecha de nacimiento*</label>
            </div>

            <div class="col-md-4">
              <div class="form-group">
                <select class="form-control" id="exampleFormControlSelect1">
                  <option disabled selected>Día</option>
                  <option v-for="index in 31" :key="index">{{ index }}</option>
                </select>
              </div>
            </div>

            <div class="col-md-4">
              <div class="form-group">
                <select class="form-control" id="exampleFormControlSelect1">
                  <option disabled selected>Mes</option>
                  <option v-for="month in date.month" :key="month">{{month}}</option>
                </select>
              </div>
            </div>

            <div class="col-md-4">
              <div class="form-group">
                <select class="form-control" id="exampleFormControlSelect1">
                  <option disabled selected>Año</option>
                  <option v-for="index in 90" :key="index">{{ 2021 - index}}</option>
                </select>
              </div>
            </div>
          </div>

          <div class="form-group mt-2">
            <label for="inputName">Teléfono Fijo (10 dígitos)*</label>
            <input type="number" class="form-control" :class="{'is-invalid': $vuelidation.error('phone') }" v-model="phone" @input="updateValuePhone" />
            <div class="invalid-feedback" v-if='$vuelidation.error("phone")'>{{ $vuelidation.error('phone') }}</div>
          </div>

          <div class="form-group mt-4">
            <label for="inputName">Teléfono Móvil (10 dígitos)*</label>
            <input type="number" class="form-control" :class="{'is-invalid': $vuelidation.error('mobile') }" v-model="mobile" @input="updateValueMobile" />
            <div class="invalid-feedback" v-if='$vuelidation.error("mobile")'>{{ $vuelidation.error('mobile') }}</div>
          </div>

          <div class="form-group mt-4">
            <label for="inputName">Correo electrónico*</label>
            <input type="email" class="form-control" :class="{'is-invalid': $vuelidation.error('email') }" v-model="email" />
            <div class="invalid-feedback" v-if='$vuelidation.error("email")'>{{ $vuelidation.error('email') }}</div>
          </div>

          <div class="form-group mt-4">
            <label for="inputName">Nº. de Ticket/Código de facturación* <i @click="openHelpModal('ticket')" class="ml-2 far fa-question-circle secondary-color cursor-pointer"></i></label>
            <input type="text" class="form-control" :class="{'is-invalid': $vuelidation.error('ticket') || (customTicketIsValid === false && formTouched) }" v-model="ticket" />
            <div class="invalid-feedback" v-if='$vuelidation.error("ticket")'>{{ $vuelidation.error('ticket') }}</div>
            <div class="invalid-feedback" v-else>Este campo debe ser un ticket válido</div>
          </div>

          <div class="form-group mt-4">
            <label for="inputName">Nº. de Ticket/Código de facturación* (Repetir)</label>
            <input type="text" class="form-control" :class="{'is-invalid': $vuelidation.error('confirm_ticket') || (customTicketConfirmationIsValid === false && formTouched) }" v-model="confirm_ticket" />
            <div class="invalid-feedback" v-if='$vuelidation.error("confirm_ticket")'>{{ $vuelidation.error('confirm_ticket') }}</div>
            <div class="invalid-feedback" v-else>Este campo debe coincidir con el ticket</div>
          </div>

          <div class="form-group mt-4">
            <label for="inputName">Dónde realizaste tu compra</label>
            <input type="text" class="form-control" disabled v-model="store" id="inputName" aria-describedby="nameHelp" />
          </div>

          <div class="form-group mt-4">
            <label for="exampleFormControlSelect1">Método de pago</label>
            <select class="form-control" :class="{'is-invalid': $vuelidation.error('payment_method') }" v-model="payment_method">
              <option value="suburbia_card">Tarjeta Suburbia</option>
              <option value="bbva_card">Tarjeta BBVA Bancomer</option>
              <option value="cash">Efectivo</option>
              <option value="other">Otra forma de pago</option>
            </select>
            <div class="invalid-feedback" v-if='$vuelidation.error("confirm_ticket")'>{{ $vuelidation.error('confirm_ticket') }}</div>
          </div>

          <div class="form-group mt-4">
            <label for="inputName">Monto Total de Compra* <i @click="openHelpModal('ticket')" class="ml-2 far fa-question-circle secondary-color cursor-pointer"></i></label>
            <input @blur="isInputActive = false" @focus="isInputActive = true" type="text" class="form-control" :class="{'is-invalid': $vuelidation.error('buy_amount') }" v-model="displayValue" />
            <div class="invalid-feedback" v-if='$vuelidation.error("buy_amount")'>{{ $vuelidation.error('buy_amount') }}</div>
          </div>

          <div class="d-flex justify-content-end primary-color" style="font-size: .8rem">
            * Casilla obligatoria
          </div>

          <div class="mt-4">
            <div class="d-flex align-items-center">
              <i class="far fa-square checkbox" @click="correctInfo = !correctInfo" v-if="correctInfo === false"></i>
              <i class="fas fa-check-square active-checkbox" @click="correctInfo = !correctInfo" v-else></i>
              <label
                class="form-check-label ml-3"
                for="defaultCheck1"
              >He verificado que toda mi información es correcta</label>
            </div>

            <div class="d-flex align-items-center mt-2">
              <i class="far fa-square checkbox" @click="bases = !bases" v-if="bases === false"></i>
              <i class="fas fa-check-square active-checkbox" @click="bases = !bases" v-else></i>

              <span class="ml-3">Acepto las <a target="_blank" href="https://assets.suburbia.com.mx/assets/ayuda/#/sec/otros-temas/terminos-y-condiciones" class="form-check-label link" for="defaultCheck3">
                bases del concurso
              </a></span>
            </div>

            <div class="d-flex align-items-center mt-2">
              <i class="far fa-square checkbox" @click="terms = !terms" v-if="terms === false"></i>
              <i class="fas fa-check-square active-checkbox" @click="terms = !terms" v-else></i>

              <span class="ml-3">Acepto los <a target="_blank" href="https://assets.suburbia.com.mx/assets/ayuda/#/sec/otros-temas/terminos-y-condiciones" class="form-check-label link" for="defaultCheck3">
                términos y condiciones
              </a></span>
            </div>

            <div class="d-flex align-items-center mt-2">
              <i class="far fa-square checkbox" @click="privacy = !privacy" v-if="privacy === false"></i>
              <i class="fas fa-check-square active-checkbox" @click="privacy = !privacy" v-else></i>

              <span class="ml-3">He leído el <a target="_blank" href="https://assets.suburbia.com.mx/assets/ayuda/#/sec/otros-temas/terminos-y-condiciones" class="form-check-label link" for="defaultCheck3">
                aviso de privacidad
              </a></span>
            </div>
          </div>

          <button id="jugar" class="d-block btn btn-primary mt-5 mx-auto button" @click="submit()">REGISTRAR</button>
      </div>
    </div>

    <!-- Modal Iniciar -->
    <div class="modal fade" id="init" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content my-modal">
          <div class="modal-body">
            <p class="p-m text-center primary-color m-0 mt-4">¡Este es el momento de participar!</p>

            <div class="d-flex justify-content-center my-2">
              <i class="fas fa-circle bullet"></i>
            </div>

            <p class="p-m text-center m-0 primary-color">Deberás contestar a cada pregunta</p>
            <p class="p-m text-center m-0 primary-color">de opción múltiple seleccionando la respuesta correcta</p>

            <div class="d-flex justify-content-center my-2">
              <i class="fas fa-circle bullet"></i>
            </div>

            <p class="p-m text-center m-0 primary-color mt-3">Recuerda que una vez que des click en el botón</p>
            <p class="p-m text-center m-0 primary-color">de "INICIAR" comenzará a correr tu tiempo.</p>

            <div class="d-flex align-items-center justify-content-center mt-4 important py-3 px-4">
              <div>
                <p class="text-center m-0 title primary-color">IMPORTANTE:</p>

                <p class="p-m m-0 primary-color text-center">Iniciando no podrás regresar ni reiniciar por ningún motivo.</p>
                <p class="p-m m-0 primary-color text-center">Se registrará como participación aún siendo inconcluso.</p>
              </div>
            </div>

            <p class="text-center primary-color mt-4 good-luck">¡BUENA SUERTE!</p>

            <button class="start mt-4 mb-4" @click="startTrivia()">INICIAR</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Trivia -->
    <div class="modal fade" id="trivia" tabindex="-1" aria-labelledby="triviaLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-body">
            <div class="d-flex justify-content-between p-3">
              <div>
                {{activeQuestion + 1}}/{{data_questions.length}}
              </div>

              <div>
                <div class="counter">
                  {{ timer }}
                </div>
              </div>
            </div>
            

            <div v-if="data_questions.length > 0">
              <p class="p-m text-center m-0 mt-4">{{data_questions[activeQuestion].question}}</p>

              <div class="trivia-modal">
                <div class="row row-modal mt-4">
                  <div class="col-md-6 mb-4">
                    <div class="d-flex justify-content-center align-items-center option" @click="answerSelected = 0" :class="{'selected': answerSelected === 0}">
                      <div class="number-option">A</div>
                      <div class="option-response">{{data_questions[activeQuestion].responses[0].response}}</div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="d-flex justify-content-center align-items-center option" @click="answerSelected = 1" :class="{'selected': answerSelected === 1}">
                      <div class="number-option">B</div>
                      <div class="option-response">{{data_questions[activeQuestion].responses[1].response}}</div>
                    </div>
                  </div>
                </div>

                <div class="row row-modal mt-4">
                  <div class="col-md-6">
                    <div class="d-flex justify-content-center align-items-center option" @click="answerSelected = 2" :class="{'selected': answerSelected === 2}">
                      <div class="number-option">C</div>
                      <div class="option-response">{{data_questions[activeQuestion].responses[2].response}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="d-flex justify-content-end mr-5">
              <button v-if="activeQuestion + 1 < data_questions.length" :disabled="answerSelected === 1000" class="d-flex align-items-center next-question mt-4 mb-4" @click="nextQuestion">
                Siguiente
                <i class="fas fa-arrow-alt-circle-right ml-2"></i>
              </button>

              <button v-if="activeQuestion + 1 === data_questions.length" :disabled="answerSelected === 1000" class="d-flex align-items-center last-question mt-4 mb-4" @click="sendAnswers()">
                Finalizar
                <i class="fas fa-arrow-alt-circle-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Exito -->
    <div class="modal fade" id="success" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content modal-success">
          <div class="modal-body">

            <div class="container mt-4">
              <div class="row px-4">
                <div class="col-md-4 mb-3">
                  <div class="d-flex flex-column align-items-center justify-content-center">
                    <img src="./../assets/50.png" class="img-fluid">
                  </div>
                </div>

                <div class="col-md-8">
                  <div class="d-flex flex-column align-items-center justify-content-center">
                    <h2 class="text-white">¡MUCHAS GRACIAS POR FORMAR PARTE DE ESTE ANIVERSARIO!</h2>
                  </div>
                </div>
              </div>
            </div>

            <p class="mt-2 text-white text-center">Finalizaste la trivia y estos son tus resultados:</p>


            <div class="container">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <div class="d-flex flex-column align-items-center justify-content-center">
                    <span class="text-white">TIEMPO</span>
                    <div class="results mt-2">
                      3:47
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="d-flex flex-column align-items-center justify-content-center">
                    <span class="text-white">ACIERTOS</span>
                    <div class="results mt-2">
                      9/12
                    </div>
                  </div>
                </div>
              </div>

              <div class="px-5 mt-4 d-flex justify-content-center align-items-center">
                <img src="./../assets/participa.svg" width="150px" alt="">
                <p class="ml-2 text-white">Recibirás un correo con todos los resultados una vez concluidas todas las participaciones.</p>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <button class="success-buttons mt-4 mb-4" @click="closeModal()">CERRAR</button>
                </div>

                <div class="col-md-6">
                  <button class="success-buttons mt-4 mb-4">
                    <p class="m-0">JUGAR OTRA VEZ</p>
                    <p class="m-0 participations">(3 participaciones restantes)</p>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Ayuda -->
    <div class="modal fade" id="help" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
           <img alt="Suburbia aniversario" src="./../assets/ticket.png" class="w-100" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Trivia from "./../services/trivia";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const msg = 'Este campo es requerido';

export default {
  name: "Ticket",

  data() {
    return {
      date: {
        month: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      },
      trivia: {
        token: '',
      },
      name: "",
      first_name: "",
      second_name: "",
      paternal_last_name: "",
      maternal_last_name: "",
      gender: "male",
      phone: "",
      mobile: "",
      email: "",
      ticket: "",
      confirm_ticket: "",
      store: "Nombre tienda (ejemplo, esto viene de servidor)",
      payment_method: "suburbia_card",
      buy_amount: "",
      correctInfo: false,
      terms: false,
      privacy: false,
      bases: false,
      data_questions: [],
      activeQuestion: 0,
      answerSelected: 1000,
      time: 0,
      minutes: 0,
      timer: '0:00',
      isRunning: false,
      interval: null,
      customTicketIsValid: false,
      customTicketConfirmationIsValid: false,
      formTouched: false,
      isInputActive: false,
      value: '',
    };
  },

  vuelidation: {
    data: {
      first_name: {
        required: { msg },
      },
      paternal_last_name: {
        required: { msg },
      },
      gender: {
        required: { msg },
      },
      phone: {
        numeric: true,
        length: 10,
      },
      mobile: {
        numeric: true,
        length: 10,
      },
      email: {
        email: true
      },
      ticket: {
        required: { msg },
      },
      confirm_ticket: {
        required: { msg },
      },
      buy_amount: {
        required: { msg },
      },
    },
  },

  computed: {
    displayValue: {
      get: function() {
        if (this.isInputActive) {
          // Cursor is inside the input field. unformat display value for user
          return this.value.toString()
        } else {
          // User is not modifying now. Format display value for user interface
          return "$ " + Number(this.value).toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
        }
      },
      set: function(modifiedValue) {
        // Recalculate value after ignoring "$" and "," in user input
        let newValue = typeof modifiedValue === 'number' && isFinite(modifiedValue) ? modifiedValue : parseFloat(modifiedValue.replace(/[^\d.]/g, ""));
        // Ensure that it is not NaN
        if (isNaN(newValue)) {
          newValue = 0
        }
        // Note: we cannot set this.value as it is a "prop". It needs to be passed to parent component
        // $emit the event so that parent component gets it
        this.value = newValue;
        this.buy_amount = this.value;
      }
    }
  },

  watch: {
    ticket: function(newValue) {
      this.formTouched = true;
      this.customTicketIsValid = newValue.length === 27;
      this.customTicketConfirmationIsValid = newValue === this.confirm_ticket;
      const result = newValue.replace(/\D/g, "").replace(/(.{4})/g, '$1 ').trim();
      if (result.length > 27) {
        this.$nextTick(() => this.ticket = this.ticket.substring(0, this.ticket.length - 1));
        return ;
      }
      this.$nextTick(() => this.ticket = result);
    },

    confirm_ticket: function(newValue) {
      this.customTicketConfirmationIsValid = newValue === this.ticket;
      const result = newValue.replace(/\D/g, "").replace(/(.{4})/g, '$1 ').trim();
      if (result.length > 27) {
        this.$nextTick(() => this.confirm_ticket = this.confirm_ticket.substring(0, this.confirm_ticket.length - 1));
        return ;
      }
      this.$nextTick(() => this.confirm_ticket = result);
    }
  },

  methods: {
    submit() {
      this.formTouched = true;
      if (this.$vuelidation.valid()) {
        window.$('#init').modal('show')
      }
    },

    async startTrivia() {
      const [error, { data }] = await Trivia.getToken();
      if (error) return alert('Oops ocurrió un problema, intenta más tarde');
      this.token = data.token;
      alert(this.token);
      window.$('#init').modal('hide')
      window.$('#trivia').modal('show')
      const [errorQuestions, { data: dataQuestions }] = await Trivia.getQuestions();
      if (errorQuestions) return alert('Oops ocurrió un problema, intenta más tarde');

      this.data_questions = dataQuestions.data;
      this.toggleTimer();
    },

    toggleTimer() {
      if (this.isRunning) {
        clearInterval(this.interval);
      } else {
        this.interval = setInterval(this.incrementTime, 1000);
      }
      this.isRunning = !this.isRunning
    },

    incrementTime() {
      this.time = parseInt(this.time) + 1;
      if(this.time >= 60) {
        this.minutes = this.minutes + 1;
        this.time = 0;
      }
      this.timer = this.time >= 10 ? `${this.minutes}:${this.time}` : `${this.minutes}:0${this.time}`;
    },

    nextQuestion() {
      this.activeQuestion = this.activeQuestion + 1;
      this.answerSelected = 1000;
    },

    sendAnswers() {
      window.$('#trivia').modal('hide')
      window.$('#success').modal('show')
    },

    updateValuePhone(event) {
      const value = event.target.value
      this.phone = String(value).length <= 10 ? value : this.phone.substring(0, this.phone.length - 1);
      this.$forceUpdate()
    },

    updateValueMobile(event) {
      const value = event.target.value
      this.mobile = String(value).length <= 10 ? value : this.mobile.substring(0, this.mobile.length - 1);
      this.$forceUpdate()
    },

    closeModal() {
      window.$('#success').modal('hide')
    },

    openHelpModal(type) {
      console.log(type);
      window.$('#help').modal('show')
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.checkbox {
  font-size: 1.3rem;
  cursor: pointer;
  color: #711968;
}

.active-checkbox {
  font-size: 1.3rem;
  cursor: pointer;
  color: #711968;
}

.form-check-label {
  
}

.link {
  color: #711968;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #ff0e9b;
  }
}

.row-modal {
  padding-right: 5rem;
  padding-left: 5rem;
}

.trivia-modal {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.counter {
  background: #ff0e9b;
  padding: .5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: .4rem;
  font-size: 1.4rem;
  width: 80px;
}

.results {
  background: white;
  padding: .5rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff0e9b;
  font-weight: bold;
  border-radius: .4rem;
  font-size: 1.8rem;
  width: 80px;
}

.selected {
  border: 1px solid #ff0e9b !important;

  .number-option {
    background: #ff0e9b !important;
  }
}

.participations {
  color: #ff0e9b;
  font-size: .9rem !important;
  font-weight: normal !important;
}

.option {
  border: 1px solid #666666;
  border-radius: .4rem;
  height: 3.5rem;
  cursor: pointer;

  .number-option {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    background: #666666;
    color: white;
    height: 100%;
    font-size: 1.5rem;
  }

  .option-response {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75%;
    color: #666666;
    font-size: 1.2rem;
  }
}

.button {
  background: #ff0e9b !important;
  padding: 14px 55px;
  font-weight: bold;
  border-color: #ff0e9b !important;
  font-size: 1rem;
}

.bullet {
  color: #ff0e9b;
  font-size: .7rem;
}

.important {
  border: 1px solid #ff0e9b;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}

.title {
  font-weight: bold;
}

.p-m {
  font-weight: 600;
  font-size: 1.1rem;
}

.modal-content {
  border-radius: 1.2rem;
}

.good-luck {
  font-size: 1.2rem;
  font-weight: 800;
}

.start {
  color: white;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 1rem 5.5rem;
  display: block;
  margin-right: auto;
  margin-left: auto;
  border-radius: .8rem;
  background: #711968;
  border: none;
}

.success-buttons {
  color: white;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 1rem;
  width: 90%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  border-radius: .8rem;
  background: #711968;
  border: none;
  min-height: 90px;
}

.next-question {
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  padding: .8rem 2.5rem;
  border-radius: .35rem;
  background: #B2B2B2;
  border: none;

  &:hover:not([disabled]) {
    background: #ff0e9b;
  }
}

.last-question {
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  padding: .8rem 2.5rem;
  border-radius: .35rem;
  background: #B2B2B2;
  border: none;

  &:hover:not([disabled]) {
    background: #711968;
  }
}

.my-modal {
  background: url('./../assets/fondo.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.modal-success {
  background: url('./../assets/modalSuccess.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
