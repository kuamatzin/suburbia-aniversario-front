<template>
  <div>
    <nav class="navbar navbar-light" style="background: #531F54">
      <a class="navbar-brand pl-3">
        <img alt="Suburbia aniversario" src="./assets/logo.jpg" style="width: 100px" />
      </a>
      <span class="text-white">
        Cerrar sesión
      </span>
    </nav>

    <div class="container-fluid py-3 px-4">
      <div class="card">
        <div class="mt px-3 mt-3">
          <h3>Registros</h3>
        </div>
        <div class="card-body">
          <table class="table table-condensed" style="border-collapse:collapse;">
            <thead>
              <tr>
                <th scope="col">Fecha</th>
                <th scope="col">Nombre</th>
                <th scope="col">Email</th>
                <th scope="col">Ticket</th>
                <th scope="col">Fecha</th>
                <th scope="col">Store</th>
                <th scope="col">Terminal</th>
                <th scope="col">Transacción</th>
                <th scope="col">Monto de compra</th>
                <th scope="col">Participaciones jugadas</th>
                <th scope="col">Noº max. participaciones</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="ticket of data.data">
                <tr
                  data-toggle="collapse"
                  :data-target="'#demo' + ticket.id"
                  class="accordion-toggle pointer"
                  :key="ticket.id"
                >
                  <td>{{ticket.created_at}}</td>
                  <td>{{ticket.first_name}} {{ticket.paternal_last_name}}</td>
                  <td>{{ticket.email}}</td>
                  <td>{{ticket.ticket}}</td>
                  <td>{{ticket.ticket_data.date}}</td>
                  <td>{{ticket.ticket_data.store}}</td>
                  <td>{{ticket.ticket_data.terminal}}</td>
                  <td>{{ticket.ticket_data.transaction}}</td>
                  <td>{{ticket.buy_amount}}</td>
                  <td>{{ticket.attempts}}</td>
                  <td>{{ticket.max_attempts}}</td>
                </tr>
                <tr :key="ticket.ticket">
                  <td colspan="6" class="hiddenRow" style="padding: 0">
                    <div class="accordian-body collapse" :id="'demo' + ticket.id">
                      <table class="table">
                        <thead class="thead-dark">
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Respuestas correctas</th>
                            <th scope="col">Respuestas incorrectas</th>
                            <th scope="col">Tiempo</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(answer, index) of ticket.answers" :key="answer.id">
                            <th scope="row">{{index + 1}}</th>
                            <td>{{answer.correct_answers}}</td>
                            <td>{{12 - answer.correct_answers}}</td>
                            <td>{{answer.seconds}}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Trivia from "./services/trivia";

export default {
  mounted() {
    this.getResults();
  },

  data() {
    return {
      error: "",
      data: "",
      answers: [],
    };
  },

  methods: {
    async getResults() {
      [
        this.error,
        {
          data: { data: this.data },
        },
      ] = await Trivia.getResults();
      if (this.error) return console.log(this.error);
      this.answers = this.data.data.map((el) => el.answers);
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

.card {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 100%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
</style>