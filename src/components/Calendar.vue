<template>
  <div
    class="section-suburbia mt-5"
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="800"
  >
    <h3 class="text-center primary-color-subtitle">CALENDARIO</h3>

    <div class="calendar-image parallax py-1 mt-5">
      <!-- <div
        class="h-100 d-flex align-items-center justify-content-center"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="800"
      >
       <div class="mx-2">
         <img src="../assets/icon-40.svg" alt="calendar" style="width: 100px">
       </div>
        <div class="text-calendar">
          <h3 class="text-left text-white regular primary-font">VIGENCIA DE PARTICIPACIÓN</h3>
          <h3
            class="text-left text-white mt-2 primary-font"
          >Del 3 al 20 de junio 2021</h3>
        </div>
      </div> -->
    </div>
    <div id="ticket" class="ancla"></div>
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
  background-image: url("./../assets/images/02_IMG_LANDING/banner-40.jpg");
  height: 250px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
}

.text-calendar {
  display: block;
  padding-right: 20px;
  padding-left: 20px;
  h3 {
    font-size: 1.2rem;
  }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  .calendar-image {
    background-image: url("./../assets/images/02_IMG_LANDING/banner-40.jpg");
    height: 250px;
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
    background-image: url("./../assets/images/02_IMG_LANDING/bg-calendario_completo.jpg");
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
    background-image: url("./../assets/images/02_IMG_LANDING/bg-calendario_completo.jpg");
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
    background-image: url("./../assets/images/02_IMG_LANDING/bg-calendario_completo.jpg");
    height: 200px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
  }
}
</style>
