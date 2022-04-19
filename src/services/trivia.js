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

  async getResults(page) {
    return await to(
      axios.get(`/results?page=${page}`, { headers: getHeaders() })
    );
  },

  async searchByTicket(ticket) {
    return await to(
      axios.get(`/ticket/number/${ticket}`, { headers: getHeaders() })
    );
  },

  async login(credentials) {
    const [error, data] = await to(axios.post('/login', credentials));
    if (error) return [error];
    localStorage.token = data.data.access_token;
    return [null];
  },

  getStore(number) {
    const stores = {
      '0491': 'Miguel Angel de Quevedo',
      '0492': 'Satélite',
      '0493': 'Buenavista',
      '0494': 'Holbein',
      '0495': 'Toreo',
      '0496': 'Miramontes',
      '0497': 'Plaza Universidad',
      '0498': 'Guadalajara Plaza Mexico',
      '0499': 'Azcapotzalco',
      '0519': 'Guadalajara Plaza del Sol',
      '0520': 'Guadalajara Centro',
      '0521': 'Puebla Reforma',
      '0522': 'San Jerónimo',
      '0523': 'Zócalo',
      '0524': 'Tepeyac',
      '0525': 'Aragón',
      '0526': 'Lindavista',
      '0527': 'Puebla Plaza Dorada',
      '0528': 'Aeropuerto',
      '0529': 'Querétaro Plaza del Parque',
      '0530': 'Torres Lindavista',
      '0531': 'Plaza Oriente',
      '0532': 'Cuautitlán',
      '0535': 'Puebla Plaza Victoria',
      '0537': 'Toluca Gran Plaza',
      '0538': 'Liquidaciones Naucalpan',
      '0541': 'Ermita Iztapalapa',
      '0544': 'Liquidaciones Tacuba',
      '0547': 'Tacubaya',
      '0548': 'Eje Central',
      '0550': 'Liquidaciones Puebla Vía Capu',
      '0551': 'Cuajimalpa',
      '0552': 'Aguascalientes Galerías',
      '0553': 'Liquidaciones Acueducto de Guadalupe',
      '0554': 'Chihuahua',
      '0555': 'Villahermosa',
      '0556': 'Veracruz',
      '0557': 'Monterrey Universidad',
      '0558': 'Metepec',
      '0559': 'Morelia Camelinas',
      '0560': 'Monterrey La Silla',
      '0561': 'Coacalco',
      '0562': 'Mérida Montejo',
      '0563': 'Tláhuac',
      '0564': 'León Plaza Mayor',
      '0565': 'Ixtapaluca Cortijo',
      '0566': 'Ecatepec Las Américas',
      '0567': 'Jiutepec',
      '0568': 'Coatzacoalcos',
      '0569': 'Cancún Nichupte',
      '0570': 'Gran Sur',
      '0571': 'San Luis Potosí Tangamanga',
      '0572': 'Guadalajara Centro Sur',
      '0573': 'Celaya',
      '0574': 'Durango',
      '0575': 'Tuxtla Gutiérrez',
      '0576': 'Arboledas',
      '0577': 'Puebla Mayorazgo',
      '0578': 'Tehuacán',
      '0579': 'Monterrey Plaza Centrika',
      '0580': 'Plaza San Diego',
      '0581': 'Tapachula',
      '0584': 'Chetumal',
      '0585': 'Acapulco',
      '0586': 'Córdoba',
      '0587': 'Tecámac Power Center',
      '0588': 'Ixtapaluca Ayotla',
      '0589': 'Coacalco Power Center',
      '0590': 'Monterrey Guadalupe',
      '0591': 'Puerta Texcoco',
      '0592': 'Zacatecas',
      '0593': 'Monterrey Plaza Lincoln',
      '0594': 'Monterrey Citadel',
      '0595': 'Poza Rica',
      '0596': 'Mérida Altabrisa',
      '0597': 'Ciudad Jardín',
      '0598': 'Pachuca',
      '0599': 'Xalapa',
      '0616': 'Plaza Central',
      '0620': 'Tepic',
      '0621': 'Lago de Guadalupe',
      '0622': 'Macro Plaza Héroes',
      '0623': 'Texcoco Gran Patio',
      '0624': 'Tampico',
      '0625': 'Toluca Alfredo del Mazo',
      '0626': 'Culiacán',
      '0627': 'Oaxaca Símbolos Patrios',
      '0628': 'Guadalajara Vallarta',
      '0629': 'Saltillo',
      '0630': 'El Rosario',
      '0631': 'Ciudad Obregón',
      '0632': 'Morelia las Huertas',
      '0635': 'Ciudad Victoria',
      '0637': 'Hermosillo',
      '0638': 'León Torres Landa',
      '0641': 'Cuemanco',
      '0644': 'Pabellón Ecatepec',
      '0645': 'Mazatlán',
      '0647': 'Los Mochis',
      '0648': 'Querétaro Plaza de Toros',
      '0650': 'Rio de los Remedios',
      '0651': 'Colima',
      '0652': 'Guadalajara Tlaquepaque',
      '0653': 'Tlaxcala',
      '0654': 'Monterrey Santa Catarina',
      '0655': 'Oaxaca Macro Plaza',
      '0656': 'Uruapan',
      '0658': 'Oaxaca Centro',
      '0660': 'Salamanca',
      '0661': 'Irapuato',
      '0662': 'Mérida Centro',
      '0663': 'Cancún',
      '0664': 'San Luis Potosí Centro',
      '0665': 'Monclova',
      '0666': 'Torreón',
      '0667': 'Monterrey Gonzalitos',
      '0668': 'San Luis Potosí Macro Plaza',
      '0669': 'Cuernavaca',
      '0672': 'Campeche',
      '0674': 'Patio Tlalpan',
      '0679': 'Mahatma Gandhi',
      '0772': 'Zamora Sentura',
      '0773': 'Tuxtla Ambar',
      '0774': 'Tulancingo Patio',
      '0776': 'San Juan del Rio',
      '0777': 'Atlacomulco',
      '0788': 'Tenaria',
      '0822': 'Las Misiones',
      '0825': ' Villahermosa Plaza Las Galas',
      '0834': 'Mundo E',
      '0915': 'Amalucan',
      '0916': 'Antenas',
      '0917': 'Puerta Aragon',
      '0918': 'Cuautla Plaza Atrios',
      '0920': 'Paseo Gomez Palacio',
      '0921': 'La Paz Galerias',
      '0922': 'Explanada Pachuca',
      '0923': 'Puebla Parque',
      '0924': 'Vía Vallejo',
      '0933': 'Tuxtepec',
      '0934': 'Zumpango',
      '0936': 'Uriangato',
      '0937': 'Forum Buenavista',
      '0938': 'Apizaco',
      '0939': 'Cd. Juarez',
      '0940': 'Valle de Chalco',
      '0941': 'Nicolas Romero',
      '0942': 'Los Mochis Sendero',
      '0943': 'Saltillo Sendero',
      '0944': 'Tijuana',
      '0945': 'Tonalá',
      '0947': 'Monterrey Paseo Juarez',
      '0949': 'Rosarito Pabellon',
      '0950': 'Liquidaciones Tijuana Paseo 2000',
      '0951': 'Huehuetoca',
      '0952': 'Monclova Paseo',
      '0953': 'Merida Gran Santa Fe',
      '0954': 'Culiacan Explanada',
      '0955': 'Toluca Santin',
      '0957': 'Patio Villahermosa',
      '0959': 'Patio Saltillo',
      '0961': 'Alaia Guanajuato',
      '0964': 'Paseo Queretaro',
      '0965': 'Galerias Santa Anita',
      '0969': 'Uptown Juriquilla',
      '0973': 'Liquidaciones Guadalajara',
      '0974': 'Liquidaciones Tlahuac',
      '0987': 'Centro San Miguel',
      '0988': 'Tizayuca Tizara',
      '0991': 'Gran Patio Ecatepec',
      '0992': 'Los Reyes Tepozan',
      '0994': 'Zitacuaro',
      '0996': 'Liquidaciones Tlalnepantla',
      '0824': 'León Galerías Las Torres',
      '0836': 'Perinorte',
      '0839': 'Villahermosa Galerías',
      '0980': 'Comalcalco',
      '0993': 'Cancún Mall',
      '0999': 'León Vía Alta',
    }

    return stores[number];
  },
};
