<template>
  <div>
    <div class="container">
      <a target="_blank" href="https://www.suburbia.com.mx/tienda/inicio">
        <img src="../assets/logo.jpg" alt="logo" width="150px" class="navbar-white my-2" />
      </a>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="w-100 mobile-menu">
        <li class="nav-item logo-mobile">
          <a href="https://www.suburbia.com.mx/tienda/inicio">
            <img
              alt="Suburbia aniversario"
              src="./../assets/logo.jpg"
              style="width: 100px"
            />
          </a>
        </li>
        <button
          style="width: 100px"
          class="navbar-toggler hidden-sm-up float-xs-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars" style="color: white"></i>
        </button>
      </div>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
          class="navbar-nav d-flex justify-content-center align-items-center w-100"
        >
          <li class="nav-item active" @click="hideCollapse">
            <a class="nav-link" href="#mecanica">Mecánica</a>
          </li>
          <li class="nav-item" @click="hideCollapse">
            <a class="nav-link" href="#calendario">Calendario</a>
          </li>
          <li class="nav-item" @click="hideCollapse">
            <a class="nav-link" href="#ticket">Registrar ticket</a>
          </li>
          <li class="nav-item" @click="hideCollapse">
            <a class="nav-link" href="#jugar">Jugar</a>
          </li>
          <li class="nav-item" @click="hideCollapse">
            <a class="nav-link" href="#faq">Preguntas frecuentes</a>
          </li>
          <li class="nav-item" @click="hideCollapse">
            <a class="nav-link" href="#ganadores">Ganadores</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String,
  },
  methods: {
    hideCollapse() {
      window.$(".navbar-collapse").collapse("hide");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  background: #621e66 !important;
  padding: 0.9rem 1rem !important;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;
}
.nav-link {
  color: white !important;
  font-size: 1.1rem;
}
.nav-item {
  margin-left: 20px;
  margin-right: 20px;
}
.logo {
  display: none;
}
.logo-mobile {
  display: inline;
}
.mobile-menu {
  display: flex;
  justify-content: space-between;
}
.navbar-white {
  display: none;
}
// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  .logo-mobile {
    display: none;
  }
  .mobile-menu {
    display: none;
  }
  .navbar-white {
    display: inline;
  }
}
// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  .logo {
    display: inline;
  }
}
</style>