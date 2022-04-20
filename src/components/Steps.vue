<template>
  <div class="section-suburbia container mt-5">
    <h3 class="text-center primary-color-subtitle">MECÁNICA</h3>

    <p class="text-center px-5 mt-4">
      Completa el juego de memoria en el menor tiempo posible<br>y gana uno de los 3 paquetes de regalos que Suburbia tiene para ti.
    </p>

    <div
      class="row mt-5 desktop"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="800"
    >
      <div class="col-md-3 mb-4 d-md-flex align-items-center">
        <div class="d-block d-md-flex align-items-center text-md-left">
          <img
            alt="Ticket"
            src="./../assets/images/02_IMG_LANDING/icon-05.svg"
            style="width: 60px"
          />

          <small class="ml-2 carac primary-color secondary-font font-weight-bold mb-0">
            PARTICIPA POR CADA COMPRA MÍNIMA DE $1,000.00 PESOS
          </small>
        </div>
      </div>
      <div class="col-md-3 mb-4 d-md-flex align-items-center">
        <div class="d-flex align-items-center text-md-left">
          <img alt="Ticket" src="./../assets/icon-07.svg" style="width: 60px" />

          <small class="ml-2 carac primary-color secondary-font font-weight-bold mb-0 text-uppercase">
            Participan las compras en tiendas
            Suburbia y suburbia.com.mx
          </small>
        </div>
      </div>
      <div class="col-md-3 mb-4 d-md-flex align-items-center">
        <div class="d-flex align-items-center text-md-left">
          <img alt="Ticket" src="./../assets/2a.svg" style="width: 60px" />

          <small class="ml-2 carac primary-color secondary-font font-weight-bold mb-0">
            REGISTRA TU TICKET<br>(NO ACUMULABLES)
          </small>
        </div>
      </div>
      <div class="col-md-3 mb-4 d-md-flex align-items-center">
        <div class="d-flex align-items-center text-md-left">
          <img alt="Ticket" src="./../assets/icon-09.svg" style="width: 60px" />

          <small class="ml-2 carac primary-color secondary-font font-weight-bold mb-0 text-uppercase"
          >
            Las compras realizadas con Tarjeta Suburbia otorgan doble participación
          </small>
        </div>
      </div>
    </div>

    <div
      class="row mt-5 mobile"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="800"
    >
      <div class="col-md-3 mb-4 text-center">
          <img
          class="mx-auto d-block"
            alt="Ticket"
            src="./../assets/images/02_IMG_LANDING/icon-05.svg"
            style="width: 60px"
          />

          <small class="ml-2 carac primary-color secondary-font font-weight-bold mb-0">
            PARTICIPA POR CADA COMPRA MÍNIMA DE $1,000.00
          </small>
      </div>
      <div class="col-md-3 mb-4 text-center">
          <img class="mx-auto d-block" alt="Ticket" src="./../assets/icon-07.svg" style="width: 60px" />

          <small class="ml-2 carac primary-color secondary-font font-weight-bold mb-0 text-uppercase">
            Participan las compras en tiendas
            Suburbia y suburbia.com.mx
          </small>
      </div>
      <div class="col-md-3 mb-4 text-center">
          <img class="mx-auto d-block" alt="Ticket" src="./../assets/2a.svg" style="width: 60px" />

          <small class="ml-2 carac primary-color secondary-font font-weight-bold mb-0">
            REGISTRA TU TICKET (NO ACUMULABLES)
          </small>
      </div>
      <div class="col-md-3 mb-4 text-center">
          <img class="mx-auto d-block" alt="Ticket" src="./../assets/icon-09.svg" style="width: 60px" />

          <small class="ml-2 carac primary-color secondary-font font-weight-bold mb-0 text-uppercase"
          >
            Las compras realizadas con Tarjeta Suburbia, BBVA y
            Minipagos otorgan doble participación
          </small>
      </div>
    </div>

    <div
      class="row mt-1"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="800"
    >
      <div class="col-md-3">
        <img
          alt="Paso 1"
          src="./../assets/1.svg"
          style="width: 80px"
          class="img-fluid d-block mx-auto mb-3"
        />
        <h4 class="text-center secondary-color">Paso 1</h4>
        <p class="text-center">
          Regístrate y entra en la sección JUGAR para participar.
        </p>
      </div>

      <div class="col-md-3">
        <img
          alt="Paso 1"
          src="./../assets/3.svg"
          style="width: 80px"
          class="img-fluid d-block mx-auto mb-3"
        />
        <h4 class="text-center secondary-color">Paso 2</h4>
        <p class="text-center">
          Cada segundo cuenta, completa el juego en el menor tiempo.
        </p>
      </div>

      <div class="col-md-3">
        <img
          alt="Paso 1"
          src="./../assets/4.svg"
          style="width: 80px"
          class="img-fluid d-block mx-auto mb-3"
        />
        <h4 class="text-center secondary-color">Paso 3</h4>
        <p class="text-center">
          Al terminar tu participación, recibirás un correo con tu resultado.
        </p>
      </div>

      <div class="col-md-3">
        <img
          alt="Paso 1"
          src="./../assets/5.svg"
          style="width: 80px"
          class="img-fluid d-block mx-auto mb-3"
        />
        <h4 class="text-center secondary-color">Paso 4</h4>
        <p class="text-center">
          ¡Recuerda que puedes seguir participando con cada compra mínima de
          $1,000.00!
        </p>
      </div>
      <div id="calendario" class="mt-4 ancla-to-cal"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",

  props: {
    msg: String,
  },

  methods: {
    openGame() {
      window.$('#memorama').modal('show');
    }
  }
};
</script>

<style lang="scss" scoped>
  .carac {
    font-size: 12px;
  }

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 577px) {
    .mobile{
      display: none;
    }
  }

  @media (max-width: 576px) {
    .desktop{
      display: none;
    }
  }
</style>
