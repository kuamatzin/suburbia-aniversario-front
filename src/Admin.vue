<template>
  <div>
    <nav class="navbar navbar-light" style="background: #531f54">
      <a class="navbar-brand pl-3">
        <img
          alt="Suburbia aniversario"
          src="./assets/logo.jpg"
          style="width: 100px"
        />
      </a>
      <span class="text-white cursor-pointer" @click="close()"
        >Cerrar sesión</span
      >
    </nav>

    <div class="container-fluid py-3 px-4" style="height: 85vh">
      <div
        v-if="loading"
        class="h-100 d-flex align-items-center justify-content-center"
      >
        <div class="spinner-border m-5" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div v-else>
        <div class="row">
          <div class="col-md-3">
            <div class="cards">
              <div class="card-body">
                <h4>
                  Número de registros:
                  <br />{{ stats.total_tickets }}
                </h4>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="cards">
              <div class="card-body">
                <h4>
                  Número de participaciones:
                  <br />{{ stats.participations }}
                </h4>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="cards" style="height: 104px">
              <div class="card-body">
                <div class="form-inline my-3">
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Ticket"
                    aria-label="Search"
                    style="width: 60%"
                    v-model="ticket"
                  />
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    :disabled="ticket === ''"
                    @click="searchTicket()"
                  >
                    Buscar
                  </button>
                  <button
                    class="btn btn-outline-danger my-2 my-sm-0 ml-1"
                    :disabled="ticket === ''"
                    @click="cancelSearch()"
                  >
                    &times;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card mt-3">
          <div class="mt px-3 mt-3">
            <h3>Registros</h3>
          </div>
          <div class="card-body" v-if="data !== ''">
            <table
              class="table table-condensed"
              style="border-collapse: collapse"
            >
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Email</th>
                  <th scope="col">Ticket</th>
                  <th scope="col">Tipo de compra</th>
                  <th scope="col">Store</th>
                  <th scope="col">Terminal</th>
                  <th scope="col">Transacción</th>
                  <th scope="col">Monto de compra</th>
                  <th scope="col">Método de pago</th>
                  <th scope="col">Participaciones jugadas</th>
                  <th scope="col">Noº max. participaciones</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(ticket, index) of data.data">
                  <tr
                    data-toggle="collapse"
                    :data-target="'#demo' + ticket.id"
                    class="accordion-toggle pointer"
                    :key="ticket.id"
                  >
                    <td>{{ index + 1 }}</td>
                    <td>{{ moment(ticket.created_at).format("LLL") }}</td>
                    <td>
                      {{ ticket.first_name }} {{ ticket.paternal_last_name }}
                    </td>
                    <td>{{ ticket.email }}</td>
                    <td>{{ ticket.ticket }}</td>
                    <td>
                      <span v-if="ticket.buy_type == 'store'">Física</span>
                      <span v-else>Online</span>
                    </td>
                    <td>{{ ticket.ticket_data.store }}</td>
                    <td>{{ ticket.ticket_data.terminal }}</td>
                    <td>{{ ticket.ticket_data.transaction }}</td>
                    <td>{{ ticket.buy_amount }}</td>
                    <td>
                      <span v-if="ticket.payment_method === 'cash'"
                        >Efectivo</span
                      >
                      <span v-if="ticket.payment_method === 'suburbia_card'"
                        >Tarjeta Suburbia</span
                      >

                      <span v-if="ticket.payment_method === 'small_payment'"
                        >Mini Pagos</span>

                      <span v-if="ticket.payment_method === 'credit_card'"
                        >Tarjeta de crédito</span>

                      <span v-if="ticket.payment_method === 'other'">Otro</span>
                    </td>
                    <td>{{ ticket.attempts }}</td>
                    <td>{{ ticket.max_attempts }}</td>
                  </tr>
                  <tr :key="ticket.ticket">
                    <td colspan="6" class="hiddenRow" style="padding: 0">
                      <div
                        class="accordian-body collapse"
                        :id="'demo' + ticket.id"
                      >
                        <table class="table">
                          <thead class="thead-dark">
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Tiempo</th>
                              <th scope="col"># Participaciones inconclusas</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="(answer, index) of ticket.max_attempts"
                              :key="answer.id"
                            >
                              <th scope="row">{{ index + 1 }}</th>
                              <td>
                                <p>{{ getTime(ticket.answers[index].seconds) }}</p>
                              </td>
                            </tr>
                            <tr
                              v-if="
                                ticket.attempts - ticket.answers.length > 0
                              "
                            >
                              <th scope="row">
                                {{ ticket.answers.length + 1 }}
                              </th>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td class="text-center">
                                {{ ticket.attempts - ticket.answers.length }}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
            <pagination :data="data" @pagination-change-page="getResults">
            </pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Trivia from "./services/trivia";
import * as moment from "moment";
moment.locale("es");

export default {
  mounted() {
    this.getResults();
  },

  data() {
    return {
      ticket: "",
      error: "",
      data: "",
      answers: [],
      stats: {
        total_tickets: 0,
      },
      moment,
      loading: false,
    };
  },

  methods: {
    async getResults(page = 1) {
      if (!localStorage.token) {
        this.$router.push("/login");
      }
      this.loading = true;
      const [error, response] = await Trivia.getResults(page);
      if (error) {
        this.$router.push("/login");
        return console.log(error);
      }
      this.data = response.data.data;
      this.stats.total_tickets = response.data.count;
      this.stats.participations = response.data.participations;
      this.stats.answers = response.data.answers;
      this.answers = response.data.data.data.map((el) => el.answers);
      this.loading = false;
    },

    close() {
      localStorage.clear();
      this.$router.push("/login");
    },

    async searchTicket() {
      this.loading = true;
      const [error, response] = await Trivia.searchByTicket(this.ticket);
      if (error) {
        this.$router.push("/login");
        return console.log(error);
      }
      this.data = response.data.data;
      this.stats.total_tickets = response.data.count;
      this.stats.participations = response.data.participations;
      this.stats.answers = response.data.answers;
      this.answers = response.data.data.data.map((el) => el.answers);
      this.loading = false;
    },

    async cancelSearch() {
      await this.getResults();
      this.ticket = "";
    },

    getTime(seconds) {
      const mins = Math.floor(Number((seconds / 60) % 60));
      let secs = Math.floor(Number(seconds % 60));
      secs = secs < 10 ? `0${secs}` : secs;

      return `${mins}:${secs}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.pointer {
  cursor: pointer;
}

.navbar {
  top: 0px;
}

.cards {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
}

.cards:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  .card {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 100%;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .card {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 100%;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  .card {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 100%;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  .card {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 100%;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
}
</style>