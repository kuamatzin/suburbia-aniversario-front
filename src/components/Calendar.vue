<template>
  <div
    class="section-suburbia mt-5"
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="800"
  >
    <h3 class="text-center primary-color">CALENDARIO</h3>

    <div class="calendar-image parallax py-1 mt-5">
      <div
        class="h-100 d-flex flex-column justify-content-center"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="800"
      >
        <div class="text-calendar">
          <h3 class="text-center text-white px-5 regular primary-font">VIGENCIA DE PARTICIPACIÓN</h3>
          <h3
            class="text-center text-white mt-2 px-5 primary-font"
          >DEL 1 AL 31 DE OCTUBRE DE 2020</h3>
        </div>
      </div>
    </div>
    <div id="ticket" style="position: absolute; top: 5rem"></div>
  </div>
</template>

<script>
export default {
  name: "Calendar",
};
</script>

<style scoped lang="scss">
.win {
  color: white;
  font-size: 1.5rem;
  margin-bottom: 7rem;
}

.regular {
  font-weight: normal;
}

.calendar-image {
  background-image: url("./../assets/calendarioMobile.jpg");
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  background-attachment: scroll;
}

.text-calendar {
  display: block;
  padding-right: 60px;
  padding-left: 60px;
  h3 {
    font-size: 1.2rem;
  }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  .calendar-image {
    background-image: url("./../assets/calendario.jpg");
    height: 200px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
  }

  .text-calendar {
    display: block;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .calendar-image {
    background-image: url("./../assets/calendario.jpg");
    height: 200px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  .calendar-image {
    background-image: url("./../assets/calendario.jpg");
    height: 200px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
  }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  .calendar-image {
    background-image: url("./../assets/calendario.jpg");
    height: 200px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
  }
}
</style>
