<template>
  <div
    class="section-suburbia container mt-5"
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="800"
  >
    <h3 class="text-center primary-color-subtitle">GANADOR</h3>

    <div
      class="row"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="800"
    >
      <div class="col-md-8 offset-md-2">
        <div>
          <img
            src="./../assets/ganadores.jpg"
            alt="ganadores"
            class="img-fluid"
            style="position: relative"
          />
        </div>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-md-6 mb-3">
        <div class="h-100 d-flex align-items-center">
          <img alt="Ticket" src="./../assets/nota.svg" style="width: 100px" />

          <span class="primary-color px-3 secondary-font" style="font-size: 1.2rem">
            <strong>NOTA</strong>: CONSERVA TU TICKET,
            EN CASO DE SER EL GANADOR
            SERÁ NECESARIO PARA VALIDACIÓN.
          </span>
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <div class="h-100 d-flex align-items-center">
          <img alt="Ticket" src="./../assets/participa.svg" style="width: 100px" />

          <span
            id="ganadores"
            class="ml-3 primary-color px-3 secondary-font" style="font-size: 1.2rem"
          >¡RECUERDA QUE CON CADA COMPRA MÍNIMA DE $500 PUEDES PARTICIPAR NUEVAMENTE!</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default {
  name: "Ticket",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button {
  background: #ff0e9b !important;
  padding: 14px 55px;
  font-weight: bold;
  border-color: #ff0e9b !important;
  font-size: 1rem;
}

.winners-text {
  top: 70px;
  padding-left: 40px;
  padding-right: 130px;
  font-size: 12px;
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  .winners-text {
    top: 105px;
    padding-left: 50px;
    padding-right: 180px;
    font-size: 13px;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .winners-text {
    top: 85px;
    padding-left: 50px;
    padding-right: 180px;
    font-size: 13px;
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  .winners-text {
    top: 125px;
    padding-left: 50px;
    padding-right: 180px;
    font-size: 15px;
  }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  .winners-text {
    top: 155px;
    padding-left: 100px;
    padding-right: 220px;
    font-size: 18px;
  }
}
</style>
