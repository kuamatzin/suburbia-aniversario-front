import Axios from 'axios';
import to from 'await-to-js';

const axios = Axios.create({
  baseURL: `${process.env.VUE_APP_URL}`,
});

const getHeaders = () => {
  return {
    authorization: `Bearer ${localStorage.token}`,
  };
};

export default {
  async getToken(ticket_id) {
    console.log(ticket_id);
    return await to(axios.post('/token', { ticket_id }));
  },

  async getTicket(ticket) {
    return await to(axios.get(`/ticket/${ticket}`));
  },

  async getQuestions() {
    return await to(axios.get('/questions'));
  },

  async registerTicket(ticket) {
    return await to(axios.post('/ticket', ticket));
  },

  async sendAnswers(answers) {
    return await to(axios.post('/responses', answers));
  },

  async getResults() {
    return await to(axios.get('/results', { headers: getHeaders() }));
  },

  async login(credentials) {
    const [error, data] = await to(axios.post('/login', credentials));
    if (error) return [error];
    localStorage.token = data.data.access_token;
    return [null];
  },

  getStore(number) {
    const stores = {
      '4160': 'Los Mochis',
      '0942': 'Los Mochis Sendero',
      '1612': 'Mazatlán',
      '4111': 'Culiacán',
      '5613': 'Hermosillo',
      '4159': 'Ciudad Obregón',
      '0921': 'Galerias La Paz',
      '0954': 'Explanada Culiacan',
      '3943': 'Saltillo',
      '0943': 'Saltillo Sendero',
      '4031': 'Monterrey Citadel',
      '1080': 'Monterrey Gonzalitos',
      '4110': 'Monterrey Guadalupe',
      '4439': 'Monterrey La Silla',
      '4050': 'Monterrey Plaza Lincoln',
      '0947': 'Paseo Juarez',
      '4003': 'Monterrey Plaza Centrika',
      '2146': 'Monterrey Santa Catarina',
      '4442': 'Monterrey Universidad',
      '4490': 'Chihuahua',
      '1238': 'Monclova',
      '2944': 'Torreón',
      '3095': 'Durango',
      '3412': 'Tampico',
      '2474': 'Ciudad Victoria',
      '4121': 'Poza Rica',
      '4040': 'Zacatecas',
      '0952': 'Monclova Paseo',
      '0920': 'Paseo Gomez Palacio',
      '1608': 'Colima',
      '3096': 'Guadalajara Centro Sur',
      '2959': 'Guadalajara Tlaquepaque',
      '4452': 'Guadalajara Centro',
      '4453': 'Guadalajara Plaza del Sol',
      '4451': 'Guadalajara Plaza Mexico',
      '0945': 'Tonalá',
      '5612': 'Guadalajara Vallarta',
      '1430': 'Tepic',
      '0965': 'Galerrias Santa Anita',
      '3063': 'Tapachula',
      '3064': 'Tuxtla',
      '0773': 'Tuxtla Ambar',
      '4013': 'Acapulco',
      '0918': 'Cuautla Atrios',
      '2905': 'Cuernavaca',
      '1135': 'Jiutepec',
      '3507': 'Oaxaca Símbolos Patrios',
      '2148': 'Oaxaca Macro Plaza',
      '3032': 'Oaxaca Centro',
      '3420': 'Tapachula Centro',
      '3606': 'Electricistas Campeche',
      '1173': 'Nichupte',
      '3529': 'Cancún Labna',
      '4039': 'Chetumal',
      '1197': 'Coatzacoalcos',
      '4436': 'Mérida Montejo',
      '3283': 'Mérida Centro',
      '1491': 'Altabrisa',
      '4446': 'Villahermosa',
      '0960': 'Merida Gran Santa Fe',
      '4014': 'Córdoba',
      '4454': 'Puebla Reforma',
      '4477': 'Plaza Dorada',
      '4457': 'Mercado Victoria',
      '2003': 'Mayorazgo',
      '4497': 'Vía Capu',
      '2004': 'Plaza San Diego',
      '0923': 'Puebla Parque',
      '1198': 'Tehuacán',
      '1712': 'Tlaxcala',
      '0938': 'Apizaco',
      '4445': 'Veracruz',
      '3037': 'Las Animas',
      '3206': 'Salamanca',
      '2094': 'Celaya',
      '4435': 'Morelia Camelinas',
      '2475': 'Morelia las Huertas',
      '2764': 'Uruapan',
      '0772': 'Zamora Sentura',
      '3671': 'Querétaro Plaza de Toros',
      '4455': 'Querétaro Plaza del Parque',
      '0776': 'San Juan del Rio',
      '4486': 'Aguascalientes Galerías',
      '2214': 'Mahatma Gandhi',
      '3235': 'Irapuato',
      '3735': 'León Plaza Mayor',
      '5611': 'León Torres Landa',
      '0961': 'Alaia',
      '3036': 'San Luis Potosí Tangamanga',
      '1756': 'San Luis Potosí Macro Plaza',
      '3280': 'San Luis Potosí Centro',
      '3044': 'Aguascalientes Centro',
      '4465': 'Azcapotzalco',
      '2473': 'El Rosario',
      '4462': 'Toreo',
      '4485': 'Cuajimalpa',
      '3097': 'Arboledas',
      '4473': 'Cuautitlán',
      '1407': 'Lago de Guadalupe',
      '4459': 'Satélite',
      '2051': 'Toltecas',
      '4493': 'Naucalpan',
      '0951': 'Huehuetoca',
      '4070': 'Lomas Verdes',
      '4460': 'Buenavista',
      '4484': 'Eje Central',
      '4467': 'Zócalo',
      '4480': 'Lindavista',
      '4471': 'Torres Lindavista',
      '4468': 'Tepeyac',
      '5470': 'Rio de los Remedios',
      '4492': ' Tacuba',
      '4498': 'Acueducto de Guadalupe',
      '4463': 'Miramontes',
      '0916': 'Antenas',
      '3740': 'Cuemanco',
      '2095': 'Gran Sur',
      '4461': 'Holbein',
      '4464': 'Plaza Universidad',
      '5671': 'Patio Tlalpan',
      '4466': 'San Jerónimo',
      '4476': 'Tacubaya',
      '4458': 'Miguel Angel de Quevedo',
      '3445': 'Tláhuac',
      '4470': 'Aeropuerto',
      '4474': 'Ermita Iztapalapa',
      '4472': 'Plaza Oriente',
      '4469': 'Aragón',
      '4488': 'Coacalco',
      '1134': 'Ixtapaluca Cortijo',
      '5766': 'Ecatepec Las Américas',
      '1515': 'Ciudad Jardín',
      '4142': 'Coacalco Power Center',
      '1695': 'Pabellón Ecatepec',
      '4041': 'Ixtapaluca Ayotla',
      '3413': 'Toluca Alfredo del Mazo',
      '0777': 'Atlacomulco',
      '4456': 'Toluca Gran Plaza',
      '1490': 'Texcoco Gran Patio',
      '3017': 'Macro Plaza Héroes',
      '4438': 'Metepec',
      '1172': 'Tecámac Power Center',
      '3062': 'Pachuca',
      '0922': 'Explanada Pachuca',
      '0955': 'Toluca Santin',
      '0944': 'Tijuana',
      '0939': 'Cd. Juarez',
      '0937': 'Forum',
      '1516': 'Plaza Central',
      '0936': 'Uriangato',
      '0941': 'Nicolas R.',
      '0940': 'Patio Chalco',
      '4141': 'Puerta Texcoco',
      '0934': 'Zumpango',
      '0933': 'Tuxtepec',
      '0788': 'Tenaria',
    };

    return stores[number];
  },
};
