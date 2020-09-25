import Vue from 'vue'
import App from './App.vue'
import Main from './Main.vue';
import Terms from './Terms.vue';
import Privacy from './Privacy.vue';
import Bases from './Bases.vue';
import Admin from './Admin.vue';
import Login from './Login.vue';
import Counter from './Counter.vue';
import Vuelidation from 'vuelidation';
import VueRouter from 'vue-router';

const validations = {
  alphabetic: function alphabetic(value) {
    var msg = 'Must be a alphabetic value';
    var valid = !Array.isArray(value) && /^[a-zA-Z]*$/.test(value);
    return [valid, msg];
  },
  alpha: function alpha(value) {
    var msg = 'Must only contain letters and numbers';
    var valid = !Array.isArray(value) && /^[a-zA-Z0-9]*$/.test(value);
    return [valid, msg];
  },
  alphaDash: function alphaDash(value) {
    var msg = 'Must only contain letters, numbers, underscores or dashes';
    var valid = !Array.isArray(value) && /^[a-zA-Z0-9_-]*$/.test(value);
    return [valid, msg];
  },
  alphaSpace: function alphaSpace(value) {
    var msg = 'Must only contain letters, numbers or spaces';
    var valid = !Array.isArray(value) && /^[a-zA-Z0-9\s]*$/.test(value);
    return [valid, msg];
  },
  length: function length(value, totalLength) {
    var msg = 'Este campo debe contener ' + totalLength + ' caractéres';
    var valid = !!value && value.length === Number(totalLength);
    return [valid, msg];
  },
  between: function between(value, args) {
    var msg = 'Must be between {{ min }} and {{ max }}';
    var valid = Number(args.min) <= value && Number(args.max) >= value;
    return [valid, msg];
  },
  min: function min(value) {
    var msg = 'Para poder participar el ticket de compra debe ser de mínimo $500';
    var valid = value >= 500;
    return [valid, msg];
  },
  betweenLength: function betweenLength(value, args) {
    var msg = 'Must have between {{ min }} and {{ max }} characters';
    var valid =
      Number(args.min) <= value.length && Number(args.max) >= value.length;
    return [valid, msg];
  },
  decimal: function decimal(value, args) {
    if (args === void 0) args = {};
    var points = args.points || (args.points = '*');
    var msg =
      'Must be a decimal<% if (points && points !== "*") { %> with {{ points }} points<% } %>';
    if (value === null || value === undefined || value === '') {
      return [false, msg];
    }
    var regexPart = points === '*' ? '*' : '{' + points + ',' + points + '}';
    var regex = new RegExp('^[0-9]*.?[0-9]' + regexPart + '$');
    if (!regex.test(value)) {
      return [false, msg];
    }
    return [!Number.isNaN(parseFloat(value)), msg];
  },
  email: function email(value) {
    var msg = 'El campo debe ser un email válido';
    var valid = /^(([^<>()[\]\\.,;:#\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,6}))$/.test(
      value
    );
    return [valid, msg];
  },
  includes: function includes(value, args) {
    args.value = value;
    var values = args.values;
    var msg =
      '{{ value }} is not one of the following: {{ values.join(", ") }}';
    return [
      !!values.filter(function(option) {
        return option === value;
      }).length,
      msg,
    ];
  },
  numeric: function numeric(value) {
    var msg = 'Este campo solo debe contener números';
    return [!Array.isArray(value) && /^[0-9]*$/.test(value), msg];
  },
};

Vue.use(Vuelidation, {
  methods: validations,
});

Vue.config.productionTip = false;

const routes = [
  { path: '/app', component: App },
  { path: '/terminos', component: Terms },
  { path: '/bases', component: Bases },
  { path: '/privacidad', component: Privacy },
  { path: '/admin', component: Admin },
  { path: '/login', component: Login },
  { path: '/', component: Counter },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

Vue.use(VueRouter);

new Vue({
  router,
  render: (h) => h(Main),
}).$mount('#app');