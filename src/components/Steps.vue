<template>
  <div class="section-suburbia container mt-5">
    <h3 class="text-center primary-color">MECÁNICA</h3>

    <p class="text-center px-5 mt-4">
      Responde correctamente al mayor número de preguntas en el menor tiempo posible y gana
      <span
        class="secondary-color font-weight-bold"
      >¡una Stepway totalmente nueva!</span>
    </p>

    <div
      class="row mt-5"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="800"
    >
      <div class="col-md-4 mb-4">
        <div class="d-flex align-items-center">
          <img alt="Ticket" src="./../assets/1a.svg" style="width: 100px" />

          <p class="ml-2 primary-color secondary-font font-weight-bold">PARTICIPA CON CADA COMPRA MÍNIMA DE $500</p>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="d-flex align-items-center">
          <img alt="Ticket" src="./../assets/2a.svg" style="width: 100px" />

          <p class="ml-2 primary-color secondary-font font-weight-bold">REGISTRA TU TICKET (NO ACUMULABLES)</p>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="d-flex align-items-center">
          <img alt="Ticket" src="./../assets/3a.svg" style="width: 100px" />

          <p class="ml-2 primary-color secondary-font font-weight-bold">TARJETAS SUBURBIA Y BBVA OTORGAN DOBLE PARTICIPACIÓN</p>
        </div>
      </div>
    </div>

    <div
      class="row mt-1"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="800"
    >
      <div class="col-md-2 offset-md-1">
        <img
          alt="Paso 1"
          src="./../assets/1.svg"
          style="width: 80px"
          class="img-fluid d-block mx-auto mb-3"
        />
        <h4 class="text-center secondary-color">Paso 1</h4>
        <p class="text-center">Entra a la sección para participar en la trivia.</p>
      </div>

      <div class="col-md-2">
        <img
          alt="Paso 1"
          src="./../assets/2.svg"
          style="width: 80px"
          class="img-fluid d-block mx-auto mb-3"
        />
        <h4 class="text-center secondary-color">Paso 2</h4>
        <p class="text-center">Tendrás 12 preguntas para resolver.</p>
      </div>

      <div class="col-md-2">
        <img
          alt="Paso 1"
          src="./../assets/3.svg"
          style="width: 80px"
          class="img-fluid d-block mx-auto mb-3"
        />
        <h4 class="text-center secondary-color">Paso 3</h4>
        <p class="text-center">Cada segundo cuenta, completa la trivia en el menor tiempo.</p>
      </div>

      <div class="col-md-2">
        <img
          alt="Paso 1"
          src="./../assets/4.svg"
          style="width: 80px"
          class="img-fluid d-block mx-auto mb-3"
        />
        <h4 class="text-center secondary-color">Paso 4</h4>
        <p class="text-center">Al finalizar verás tu tiempo y aciertos.</p>
      </div>

      <div class="col-md-2">
        <img
          alt="Paso 1"
          src="./../assets/5.svg"
          style="width: 80px"
          class="img-fluid d-block mx-auto mb-3"
        />
        <h4 class="text-center secondary-color">Paso 5</h4>
        <p class="text-center">¡Recuerda que puedes seguir paticipando por cada compra de $500!</p>
      </div>
      <div id="calendario" class="mt-4"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
