<template>
  <div class="mt-5">
    <footer>
      <div class="container">
        <div class="row py-5">
          <div class="col-sm-3 order-sm-12 footer-bottom">
            <div class="d-flex align-items-center justify-content-center">
              <a target="_blank" href="https://www.facebook.com/estrenasuburbia/">
                <i class="fab fa-facebook-square icon mx-2"></i>
              </a>
              <a target="_blank" href="https://twitter.com/estrenasuburbia">
                <i class="fab fa-twitter icon mx-2"></i>
              </a>
              <a target="_blank" href="https://www.instagram.com/modasuburbia">
                <i class="fab fa-instagram icon mx-2"></i>
              </a>
              <a target="_blank" href="https://www.youtube.com/user/ModaSuburbia">
                <i class="fab fa-youtube icon mx-2"></i>
              </a>
            </div>
          </div>

          <div class="col-sm-9 order-sm-1">
            <div class="row">
              <div class="col-md-3 d-flex align-items-center justify-content-center text-center" style="color: grey;">
                  Derechos reservados Suburbia 2022
              </div>

              <div class="col-md-3 d-flex align-items-center justify-content-center text-center">
                <a href="/bases" target="_blank">
                  Bases del concurso
                </a>
              </div>

              <div class="col-md-3 d-flex align-items-center justify-content-center text-center">
                <a href="https://assets.suburbia.com.mx/ayuda/index.html#/sec/otros-temas/terminos-y-condiciones" target="_blank">
                  Términos y condiciones
                </a>
              </div>

              <div class="col-md-3 d-flex align-items-center justify-content-center text-center">
                <a href="https://assets.suburbia.com.mx/ayuda/index.html#/sec/credito/aviso-de-privacidad-integral-clientes" target="_blank">Aviso de privacidad</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default {
  name: "Footer",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  min-height: 100px;
  background: #464646;
  display: flex;
  align-items: center;
}

a {
  text-decoration: underline;
  color: grey;
}

.slash {
  display: none;
}

.button {
  background: #ff0e9b !important;
  padding: 14px 55px;
  font-weight: bold;
  border-color: #ff0e9b !important;
  font-size: 1rem;
}

.icon {
  color: #a1a1a1;
  font-size: 2rem;
}

.footer-bottom {
  margin-bottom: 2rem;
}

@media (min-width: 992px) {
  .footer-bottom {
    margin-bottom: 0rem;
  }

  .slash {
    display: inline;
  }
}
</style>
