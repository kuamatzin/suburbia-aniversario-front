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
            <input type="text" class="form-control" :class="{'is-invalid': $vuelidation.error('second_name') }" v-model="second_name" />
            <div class="invalid-feedback" v-if='$vuelidation.error("second_name")'>{{ $vuelidation.error('second_name') }}</div>
          </div>

          <div class="form-group mt-4">
            <label for="inputName">Apellido Paterno*</label>
            <input type="text" class="form-control" :class="{'is-invalid': $vuelidation.error('paternal_last_name') }" v-model="paternal_last_name" />
            <div class="invalid-feedback" v-if='$vuelidation.error("paternal_last_name")'>{{ $vuelidation.error('paternal_last_name') }}</div>
          </div>

          <div class="form-group mt-4">
            <label for="inputName">Apellido Materno*</label>
            <input type="text" class="form-control" :class="{'is-invalid': $vuelidation.error('maternal_last_name') }" v-model="maternal_last_name" />
            <div class="invalid-feedback">{{ $vuelidation.error('maternal_last_name') }}</div>
          </div>

          <div class="form-group mt-4">
            <label for="exampleFormControlSelect1">Género*</label>
            <select class="form-control" v-model="gender" :class="{'is-invalid': $vuelidation.error('gender') }">
              <option value="" disabled>Seleccionar</option>
              <option value="male">Hombre</option>
              <option value="female">Mujer</option>
            </select>
            <div class="invalid-feedback">{{ $vuelidation.error('gender') }}</div>
          </div>

          <div class="row mt-4">
            <div class="col-md-12">
              <label for="exampleFormControlSelect1">Fecha de nacimiento*</label>
            </div>

            <div class="col-md-4">
              <div class="form-group">
                <select class="form-control" v-model="b_day" :class="{'is-invalid': $vuelidation.error('b_day') }">
                  <option value="" disabled>Seleccionar</option>
                  <option v-for="index in 31" :key="index">{{ index }}</option>
                </select>
                <div class="invalid-feedback">{{ $vuelidation.error('b_day') }}</div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="form-group">
                <select class="form-control" v-model="b_month" :class="{'is-invalid': $vuelidation.error('b_month') }">
                  <option value="" disabled>Seleccionar</option>
                  <option v-for="month in date.month" :key="month">{{month}}</option>
                </select>
                <div class="invalid-feedback">{{ $vuelidation.error('b_month') }}</div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="form-group">
                <select class="form-control" v-model="b_year" :class="{'is-invalid': $vuelidation.error('b_year') }">
                  <option value="" disabled>Seleccionar</option>
                  <option v-for="index in 90" :key="index">{{ 2021 - index}}</option>
                </select>
                <div class="invalid-feedback">{{ $vuelidation.error('b_year') }}</div>
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
            <label for="inputName">Tienda*</label>
            <select class="form-control" @change="setBuyTypeValidation()" v-model="buy_type" :class="{'is-invalid': $vuelidation.error('buy_type') }">
              <option value="" disabled>Seleccionar</option>
              <option value="store">Física</option>
              <option value="online">Online</option>
            </select>
            <div class="invalid-feedback">{{ $vuelidation.error('buy_type') }}</div>
          </div>

          <div class="form-group mt-4">
            <label for="inputName">Código de facturación* <i @click="openHelpModal(1)" class="ml-2 far fa-question-circle secondary-color cursor-pointer"></i></label>
            <input @click.right.prevent @copy.prevent @paste.prevent type="text" class="form-control" :class="{'is-invalid': $vuelidation.error('ticket') || ticketAlreadyExists || (customTicketIsValid === false && formTouched) }" v-model="ticket" />
            <div class="invalid-feedback" v-if="ticketAlreadyExists">Este ticket ya fue registrado previamente.</div>
            <template v-else>
              <div class="invalid-feedback" v-if='$vuelidation.error("ticket")'>{{ $vuelidation.error('ticket') }}</div>
              <div class="invalid-feedback" v-else>Este campo debe ser un ticket válido</div>
            </template>
          </div>

          <div class="form-group mt-4">
            <label for="inputName">Código de facturación* (Repetir)</label>
            <input @click.right.prevent @copy.prevent @paste.prevent type="text" class="form-control" :class="{'is-invalid': $vuelidation.error('confirm_ticket') || (customTicketConfirmationIsValid === false && formTouched) }" v-model="confirm_ticket" />
            <div class="invalid-feedback" v-if='$vuelidation.error("confirm_ticket")'>{{ $vuelidation.error('confirm_ticket') }}</div>
            <div class="invalid-feedback" v-else>Este campo debe coincidir con el ticket</div>
          </div>

          <div class="form-group mt-4" v-if="buy_type === 'online'">
            <label for="inputName">Número de boleta*</label>
            <input type="text" @input="preventMaxCharacters('online_ticket', 16)" class="form-control" :class="{'is-invalid': $vuelidation.error('online_ticket') }" v-model="online_ticket" />
            <div class="invalid-feedback" v-if='$vuelidation.error("online_ticket")'>{{ $vuelidation.error('online_ticket') }}</div>
          </div>

          <div class="row mt-4" v-if="buy_type === 'store'">
            <div class="col-md-4">
              <div class="form-group">
                <label for="inputName">Terminal TE:*</label>
                <input type="number" @input="preventMaxCharacters('terminal', 2)" class="form-control" :class="{'is-invalid': $vuelidation.error('terminal') }" v-model="terminal" />
                <div class="invalid-feedback" v-if='$vuelidation.error("terminal")'>{{ $vuelidation.error('terminal') }}</div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label for="inputName">Transacción TR:*</label>
                <input type="number" @input="preventMaxCharacters('transaction', 4)" class="form-control" :class="{'is-invalid': $vuelidation.error('transaction') }" v-model="transaction" />
                <div class="invalid-feedback" v-if='$vuelidation.error("transaction")'>{{ $vuelidation.error('transaction') }}</div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label for="inputName">Tienda:*</label>
                <input type="number" @input="preventMaxCharacters('store_number', 4)" class="form-control" :class="{'is-invalid': $vuelidation.error('store_number') || validateStore === false }" v-model="store_number" />
                <div class="invalid-feedback" v-if='$vuelidation.error("store_number")'>{{ $vuelidation.error('store_number') }}</div>
                <div class="invalid-feedback" v-if="!$vuelidation.error('store_number') && (validateStore === false && formTouched)">Este campo debe ser un ticket válido</div>
              </div>
            </div>
          </div>

          <div class="form-group mt-4">
            <label for="inputName">Dónde realizaste tu compra</label>
            <input type="text" class="form-control" disabled v-model="store" id="inputName" aria-describedby="nameHelp" />
          </div>

          <div class="form-group mt-4">
            <label for="exampleFormControlSelect1">Método de pago</label>
            <select class="form-control" v-model="payment_method" :class="{'is-invalid': $vuelidation.error('payment_method') }">
              <option value="" disabled>Seleccionar</option>
              <option value="suburbia_card">Tarjeta Suburbia</option>
              <option value="bbva_card">Tarjeta BBVA Bancomer</option>
              <option value="cash">Efectivo</option>
              <option value="other">Otra forma de pago</option>
            </select>
            <div class="invalid-feedback">{{ $vuelidation.error('payment_method') }}</div>
          </div>

          <div class="form-group mt-4">
            <label for="inputName">Monto Total de Compra* <i @click="openHelpModal(2)" class="ml-2 far fa-question-circle secondary-color cursor-pointer"></i></label>
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
            <div class="invalid-error mb-2" v-if="formTouched && !correctInfo">Verifica que toda la información sea correcta</div>

            <div class="d-flex align-items-center mt-2">
              <i class="far fa-square checkbox" @click="bases = !bases" v-if="bases === false"></i>
              <i class="fas fa-check-square active-checkbox" @click="bases = !bases" v-else></i>

              <span class="ml-3">Acepto las <a target="_blank" href="/bases" class="form-check-label link" for="defaultCheck3">
                bases del concurso
              </a></span>
            </div>
            <div class="invalid-error mb-2" v-if="formTouched && !bases">Debes aceptar las bases del concurso</div>

            <div class="d-flex align-items-center mt-2">
              <i class="far fa-square checkbox" @click="terms = !terms" v-if="terms === false"></i>
              <i class="fas fa-check-square active-checkbox" @click="terms = !terms" v-else></i>

              <span class="ml-3">Acepto los <a target="_blank" href="https://assets.suburbia.com.mx/assets/ayuda/#/sec/otros-temas/terminos-y-condiciones" class="form-check-label link" for="defaultCheck3">
                términos y condiciones
              </a></span>
            </div>
            <div class="invalid-error mb-2" v-if="formTouched && !terms">Acepta los términos y condiciones</div>

            <div class="d-flex align-items-center mt-2">
              <i class="far fa-square checkbox" @click="privacy = !privacy" v-if="privacy === false"></i>
              <i class="fas fa-check-square active-checkbox" @click="privacy = !privacy" v-else></i>

              <span class="ml-3">He leído el <a target="_blank" href="http://assets.suburbia.com.mx/assets/ayuda/#/sec/credito/aviso-de-privacidad-integral-clientes" class="form-check-label link" for="defaultCheck3">
                aviso de privacidad
              </a></span>
            </div>

            <div class="invalid-error mb-2" v-if="formTouched && !privacy">Lee nuestro aviso de privacidad</div>
          </div>

          <button id="jugar" :disabled="loading" class="d-flex align-content-center justify-content-center btn btn-primary mt-5 mx-auto button" @click="submit()">
            REGISTRAR
            <span v-if="loading" class="ml-2 my-auto spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          </button>
      </div>
    </div>

    <!-- Modal Iniciar -->
    <div class="modal fade" id="init" tabindex="-1" aria-labelledby="triviaStart" aria-hidden="true" data-backdrop="static" data-keyboard="false">
      <div class="modal-dialog modal-lg modal-dialog-scrollable">
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

            <button class="start mt-4 mb-4 d-flex align-content-center" @click="startTrivia()">INICIAR <span v-if="loading" class="ml-2 my-auto spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Trivia -->
    <div class="modal fade" id="trivia" tabindex="-1" aria-labelledby="triviaLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
      <div class="modal-dialog modal-lg modal-dialog-scrollable">
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
                  <div class="col-md-6 mt-4">
                    <div class="d-flex justify-content-center align-items-center option" @click="answerSelected = data_questions[activeQuestion].responses[0].id" :class="{'selected': answerSelected === data_questions[activeQuestion].responses[0].id}">
                      <div class="number-option">A</div>
                      <div class="option-response px-2">{{data_questions[activeQuestion].responses[0].response}}</div>
                    </div>
                  </div>
                  <div class="col-md-6 mt-4">
                    <div class="d-flex justify-content-center align-items-center option" @click="answerSelected = data_questions[activeQuestion].responses[1].id" :class="{'selected': answerSelected === data_questions[activeQuestion].responses[1].id}">
                      <div class="number-option">B</div>
                      <div class="option-response px-2">{{data_questions[activeQuestion].responses[1].response}}</div>
                    </div>
                  </div>
                </div>

                <div class="row row-modal">
                  <div class="col-md-6 mt-4">
                    <div class="d-flex justify-content-center align-items-center option" @click="answerSelected = data_questions[activeQuestion].responses[2].id" :class="{'selected': answerSelected === data_questions[activeQuestion].responses[2].id}">
                      <div class="number-option">C</div>
                      <div class="option-response px-2">{{data_questions[activeQuestion].responses[2].response}}</div>
                    </div>
                  </div>
                  <div class="col-md-6 mt-4">
                    <div class="d-flex justify-content-center align-items-center option" @click="answerSelected = data_questions[activeQuestion].responses[3].id" :class="{'selected': answerSelected === data_questions[activeQuestion].responses[3].id}">
                      <div class="number-option">D</div>
                      <div class="option-response px-2">{{data_questions[activeQuestion].responses[3].response}}</div>
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

              <button v-if="activeQuestion + 1 === data_questions.length" :disabled="answerSelected === 1000 || loading" class="d-flex align-items-center last-question mt-4 mb-4" @click="sendAnswers()">
                <span>
                  Finalizar
                  <i class="fas fa-arrow-alt-circle-right ml-2"></i>
                </span>

                <span v-if="loading" class="ml-2 my-auto spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Exito -->
    <div class="modal fade" id="success" tabindex="-1" aria-hidden="true" data-backdrop="static" data-keyboard="false">
      <div class="modal-dialog modal-lg modal-dialog-scrollable">
        <div class="modal-content modal-success">
          <div class="modal-body">

            <div class="container mt-4">
              <div class="row px-4">
                <div class="col-md-4 mb-3">
                  <div class="d-flex flex-column align-items-center justify-content-center">
                    <img src="./../assets/logo-dorado.png" class="img-fluid">
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
                      {{ timerResult }}
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="d-flex flex-column align-items-center justify-content-center">
                    <span class="text-white">ACIERTOS</span>
                    <div class="results mt-2">
                      {{response.answer.correct_answers}}/12
                    </div>
                  </div>
                </div>
              </div>

              <div class="px-5 mt-4 d-flex justify-content-center align-items-center">
                <img src="./../assets/icon_eye_blanco.svg" width="100px" alt="">
                <p class="ml-2 text-white">Recibirás un correo con todos los resultados una vez concluidas todas las participaciones.</p>
              </div>

              <div class="row" v-if="response.ticket.attempts < response.ticket.max_attempts">
                <div class="col-md-6">
                  <button class="success-buttons mt-4 mb-4" @click="closeModal()">CERRAR</button>
                </div>

                <div class="col-md-6">
                  <button class="success-buttons mt-4 mb-4" @click="playAgain()">
                    <p class="m-0">JUGAR OTRA VEZ</p>
                    <p class="m-0 participations">({{response.ticket.max_attempts - response.ticket.attempts}} participaciones restantes)</p>
                  </button>
                </div>
              </div>

              <div class="row" v-else>
                <div class="col-md-6 offset-md-3">
                  <button class="success-buttons mt-4 mb-4" @click="closeModal()">CERRAR</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Ayuda -->
    <div class="modal fade" id="help" tabindex="-1">
      <div class="modal-dialog modal-lg modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-body">
           <img v-if="ticketHelper" alt="Suburbia aniversario" src="./../assets/ticket_popup.jpg" class="w-100" />
           <img v-else alt="Suburbia aniversario" src="./../assets/ticket_popup_precio.jpg" class="w-100" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Trivia from "./../services/trivia";
import { EventBus } from './../services/events';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const msg = 'Este campo es requerido';

export default {
  name: "Ticket",

  mounted() {
    EventBus.$on('getTicket', (ticket) => {
      this.response.ticket = ticket;
    })

    if (process.env.NODE_ENV === 'development') this.setTestData();
  },
  
  data() {
    return {
      ticketHelper: true,
      date: {
        month: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        month_f: {
          'Enero': '01',
          'Febrero': '02',
          'Marzo': '03',
          'Abril': '04',
          'Mayo': '05',
          'Junio': '06',
          'Julio': '07',
          'Agosto': '08',
          'Septiembre': '09',
          'Octubre': '10',
          'Noviembre': '11',
          'Diciembre': '12'
        },
      },
      trivia: {
        token: '',
      },
      first_name: "",
      second_name: "",
      paternal_last_name: "",
      maternal_last_name: "",
      gender: "",
      b_day: '',
      b_month: '',
      b_year: '',
      phone: "",
      mobile: "",
      email: "",
      buy_type: "",
      online_ticket: "",
      terminal: "",
      transaction: "",
      store_number: "",
      ticket: "",
      confirm_ticket: "",
      store: "",
      payment_method: "",
      buy_amount: 0,
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
      timerResult: '0:00',
      isRunning: false,
      interval: null,
      validateStore: "false",
      customTicketIsValid: true,
      customTicketConfirmationIsValid: true,
      ticketAlreadyExists: false,
      formTouched: false,
      isInputActive: false,
      value: '',
      response: {
        ticket: '',
        token: '',
        answer: ''
      },
      answers: [],
      loading: false
    };
  },

  vuelidation: {
    data: {
      first_name: {
        required: { msg },
      },
      maternal_last_name: {
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
      buy_type: {
        required: { msg },
      },
      online_ticket: {
        numeric: true,
        length: 16,
      },
      terminal: {
        numeric: true,
        length: 2,
      },
      transaction: {
        numeric: true,
        length: 4,
      },
      store_number: {
        numeric: true,
        length: 4,
      },
      ticket: {
        required: { msg },
      },
      confirm_ticket: {
        required: { msg },
      },
      buy_amount: {
        min: true
      },
      b_day: {
        required: { msg }
      },
      b_month: {
        required: { msg }
      },
      b_year: {
        required: { msg }
      },
      payment_method: {
        required: { msg }
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
      this.ticketAlreadyExists = false;
      this.formTouched = true;
      this.customTicketIsValid = newValue.length === 23;
      this.customTicketConfirmationIsValid = newValue === this.confirm_ticket;
      const result = newValue.replace(/[^A-Za-z0-9]/g, "").replace(/(.{5})/g, '$1 ').toUpperCase().trim();
      if (result.length > 23) {
        this.$nextTick(() => this.ticket = this.ticket.substring(0, this.ticket.length - 1));
        return ;
      }
      this.$nextTick(() => this.ticket = result);
    },

    confirm_ticket: function(newValue) {
      this.customTicketConfirmationIsValid = newValue === this.ticket;
      const result = newValue.replace(/[^A-Za-z0-9]/g, "").replace(/(.{5})/g, '$1 ').toUpperCase().trim();
      if (result.length > 23) {
        this.$nextTick(() => this.confirm_ticket = this.confirm_ticket.substring(0, this.confirm_ticket.length - 1));
        return ;
      }
      this.$nextTick(() => this.confirm_ticket = result);
    }
  },

  methods: {
    setBuyTypeValidation() {
      if (this.buy_type === 'store') {
        this.terminal = "";
        this.transaction = "";
        this.store_number = "";
        this.online_ticket = "2222222222222222";
      } else {
        this.terminal = "22";
        this.transaction = "2222";
        this.store_number = "2222";
        this.online_ticket = "";
        this.store = 'Tienda Online'
      }
    },

    preventMaxCharacters(value, max) {
      if (this[value].length > max) {
        this[value] = this[value].slice(0, max);
      }

      if (value === 'store_number' && this[value].length === 4) {
        this.getStore(this[value]);
      }
    },

    async submit() {
      this.formTouched = true;
      if (this.buy_type === "online") {
        this.store = 'Tienda Online'
      }
      if (this.$vuelidation.valid() && this.customTicketIsValid && this.customTicketConfirmationIsValid && this.ticketAlreadyExists === false) {
        this.loading = true;
        const [error, data ] = await Trivia.registerTicket({
          first_name: this.first_name,
          second_name: this.second_name,
          paternal_last_name: this.paternal_last_name,
          maternal_last_name: this.maternal_last_name,
          gender: this.gender,
          phone: this.phone,
          mobile: this.mobile,
          email: this.email,
          buy_type: this.buy_type,
          online_ticket: this.online_ticket,
          store_number: this.store_number,
          terminal: this.terminal,
          transaction: this.transaction,
          ticket: this.ticket.replace(/ /g,''),
          store: this.store,
          payment_method: this.payment_method,
          buy_amount: this.buy_amount,
          birthdate: `${this.b_year}-${this.date.month_f[this.b_month]}-${this.b_day < 10 ? '0' + this.b_day : this.b_day}T00:00:00.000000Z`,
        });
        this.loading = false;
        if (error) { return this.alert(error) }
        this.response.ticket = data.data.data;
        EventBus.$emit('sendDataToPlay', JSON.parse(JSON.stringify(this.response.ticket)) );
        window.$('#init').modal('show')
      } else {
        console.log(this.$vuelidation.errors())
      }
    },

    alert(error) {
      if (error.response && error.response.data && error.response.data.errors) {
        if (error.response.data.errors.ticket && error.response.data.errors.ticket[0] === "The ticket has already been taken.") {
          this.ticketAlreadyExists = true;
          console.log(this.ticketAlreadyExists);
        }
      }
    },

    playAgain() {
      window.$('#success').modal('hide')
      window.$('#init').modal('show')
    },

    async startTrivia() {
      this.loading = true;
      const [error, { data }] = await Trivia.getToken(this.response.ticket.id);
      this.loading = false;
      if (error) return alert('Oops ocurrió un problema, intenta más tarde');
      this.resetFields();
      this.response.token = data.token;
      this.response.ticket = data.ticket;
      EventBus.$emit('plusOneTicketPlay');
      this.loading = true;
      const [errorQuestions, { data: dataQuestions }] = await Trivia.getQuestions();
      this.loading = false;
      if (errorQuestions) return alert('Oops ocurrió un problema, intenta más tarde');
      window.$('#init').modal('hide')
      window.$('#trivia').modal('show');
      this.data_questions = dataQuestions.data;
      this.toggleTimer();
    },

    toggleTimer() {
      if (this.isRunning) {
        console.log("Voy a parar");
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
      this.answers.push({
        question_id: this.data_questions[this.activeQuestion].id,
        answer_id: this.answerSelected,
      });
      this.activeQuestion = this.activeQuestion + 1;
      this.answerSelected = 1000;
    },

    async sendAnswers() {
      this.toggleTimer();
      this.loading = true;
      this.answers.push({
        question_id: this.data_questions[this.activeQuestion].id,
        answer_id: this.answerSelected,
      });
      const dataAnswers = {
        ticket_id: this.response.ticket.id,
        token: this.response.token,
        responses: this.answers,
        timer: this.timer,
      }

      const [error, data] = await Trivia.sendAnswers(dataAnswers);
      this.loading = false;
      this.data_questions = [];
      this.activeQuestion = 0;
      this.answerSelected = 1000;
      this.time = 0;
      this.minutes = 0;
      this.timerResult = this.timer;
      this.timer = '0:00';

      if(error) { return alert('Error mandando preguntas'); }
      this.response.answer = data.data.answer;
      this.response.ticket = data.data.ticket;
      this.response.token = '';
      this.answers = [];

      EventBus.$emit('sendDataToPlay', JSON.parse(JSON.stringify(data.data.ticket)));

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
      this.ticketHelper = type === 1;
      window.$('#help').modal('show')
    },

    getStore(store) {
      this.store = Trivia.getStore(store);
      this.validateStore = this.store ? true: false;
    },

    resetFields() {
      this.first_name = "";
      this.second_name = "";
      this.paternal_last_name = "";
      this.maternal_last_name = "";
      this.gender = "";
      this.b_day = '';
      this.b_month = '';
      this.b_year = '';
      this.phone = "";
      this.mobile = "";
      this.email = "";
      this.buy_type = "";
      this.online_ticket = "";
      this.terminal = "";
      this.transaction = "";
      this.store_number = "";
      this.ticket = "";
      this.confirm_ticket = "";
      this.store = "";
      this.payment_method = "";
      this.displayValue = 0;
      this.correctInfo = false;
      this.terms = false;
      this.privacy = false;
      this.bases = false;
      this.customTicketIsValid = true;
      this.customTicketConfirmationIsValid = true;
      this.ticketAlreadyExists = false;
      this.formTouched = false;
      this.$vuelidation.reset();
    },

    setTestData() {
      this.first_name = "Carlos";
      this.second_name = "Carlos";
      this.paternal_last_name = "Cuamatzin";
      this.maternal_last_name = "Hernández";
      this.gender = "male";
      this.b_day = '1';
      this.b_month = 'Enero';
      this.b_year = '1990';
      this.phone = "2228544315";
      this.mobile = "2228544315";
      this.email = "kuamatzin@gmail.com";
      this.buy_type = "store";
      this.online_ticket = "";
      this.terminal = "";
      this.transaction = "";
      this.store_number = "";
      this.ticket = "22222 22222 22222 22222";
      this.confirm_ticket = "22222 22222 22222 22222";
      this.store = "";
      this.payment_method = "suburbia_card";
      this.buy_amount = 0;
      this.correctInfo = true;
      this.terms = true;
      this.privacy = true;
      this.bases = true;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.modal-dialog{
      overflow-y: initial !important
}
.modal-body{
  height: 100%;
  overflow-y: auto;
}

.invalid-error {
    width: 100%;
    margin-top: .25rem;
    font-size: 80%;
    color: #dc3545;
}

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
  padding-top: 0rem;
  padding-bottom: 1rem;
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  .trivia-modal {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
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
  background: #ff0e9b !important;
  border-radius: .4rem;

  .number-option {
    background: #ff0e9b !important;
    height: 100%;
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
  cursor: pointer;
  background: #666666;
  height: 100%;

  .number-option {
    border-radius: .4rem;
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
    border-top-right-radius: .4rem;
    border-bottom-right-radius: .4rem;
    background: white;
    align-items: center;
    justify-content: center;
    width: 95%;
    color: #666666;
    overflow-wrap: anywhere;
    display: flex;
    font-size: 1.2rem;
    height: 100%;
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
  background: url('./../assets/bg_gracias.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.form-control.is-invalid, .was-validated .form-control:invalid {
    background-position: right calc(.575em + .875rem) center !important;
}
</style>
