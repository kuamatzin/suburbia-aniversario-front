<template>
  <div class="mt-5">
    <footer>
      <div class="container">
        <div class="row py-5">
          <div class="col-sm-3 order-sm-12 footer-bottom">
            <div class="d-flex align-items-center justify-content-center">
              <a target="_blank" href="https://www.facebook.com/moda.suburbia">
                <i class="fab fa-facebook-square icon mx-2"></i>
              </a>
              <a target="_blank" href="https://twitter.com/Moda_Suburbia">
                <i class="fab fa-twitter icon mx-2"></i>
              </a>
              <a target="_blank" href="https://www.instagram.com/modasuburbia">
                <i class="fab fa-instagram icon mx-2"></i>
              </a>
              <a target="_blank" href="https://www.youtube.com/user/ModaSuburbia">
                <i class="fab fa-youtube icon mx-2"></i>
              </a>
              <a target="_blank" href="https://www.pinterest.com.mx/SuburbiaModa">
                <i class="fab fa-pinterest icon mx-2"></i>
              </a>
            </div>
          </div>

          <div class="col-sm-9 order-sm-1">
            <div class="d-flex">
              <div class="px-3">
                <a href="/terminos" target="_blank">
                  Todos los derechos reservados D.R.
                  <span class="ml-2 slash">/</span>
                </a>
              </div>

              <div class="px-3">
                <a href="/terminos" target="_blank">
                  Bases del concurso
                  <span class="ml-2 slash">/</span>
                </a>
              </div>
              
              <div class="px-3">
                <a href="/terminos" target="_blank">
                  Términos y condiciones
                  <span class="ml-2 slash">/</span>
                </a>
              </div>

              <div class="px-3">
                <a href="/terminos" target="_blank">Aviso de privacidad</a>
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
