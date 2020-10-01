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
      '0776': 'SAN JUAN DEL RÍO GALERIAS',
      '0648': 'QUERÉTARO PLAZA DE TOROS',
      '0529': 'QUERÉTARO PLAZA DEL PARQUE',
      '0656': 'URUAPAN',
      '0772': 'ZAMORA SENTURA',
      '0559': 'MORELIA CAMELINAS',
      '0632': 'MORELIA LAS HUERTAS',
      '0573': 'CELAYA',
      '0660': 'SALAMANCA',
      '0668': 'SAN LUIS POTOSÍ MACRO PLAZA',
      '0571': 'SAN LUIS POTOSÍ TANGAMANGA',
      '0664': 'SAN LUIS POTOSÍ CENTRO',
      '0638': 'LEÓN TORRES LANDA',
      '0564': 'LEÓN PLAZA MAYOR',
      '0661': 'IRAPUATO',
      '0679': 'MAHATMA GANDHI',
      '0552': 'AGUASCALIENTES GALERÍAS',
      '0961': 'GUANAJUATO ALAIA',
      '0616': 'PLAZA CENTRAL',
      '0940': 'VALLE DE CHALCO',
      '0591': 'TEXCOCO PUERTA',
      '0934': 'ZUMPANGO',
      '0941': 'NICÓLAS ROMERO',
      '0937': 'FORUM BUENAVISTA',
      '0933': 'TUXTEPEC',
      '0944': 'TIJUANA SENDERO',
      '0936': 'URIANGATO',
      '0939': 'CIUDAD JUAREZ',
      '0586': 'CÓRDOBA',
      '0556': 'VERACRUZ',
      '0599': 'XALAPA',
      '0653': 'TLAXCALA',
      '0938': 'APIZACO',
      '0578': 'TEHUACÁN',
      '0580': 'PUEBLA PLAZA SAN DIEGO',
      '0527': 'PUEBLA PLAZA DORADA',
      '0577': 'PUEBLA MAYORAZGO',
      '0923': 'PUEBLA PARQUE',
      '0521': 'PUEBLA REFORMA',
      '0550': 'PUEBLA VÍA CAPU',
      '0535': 'PUEBLA PLAZA VICTORIA',
      '0524': 'TEPEYAC',
      '0530': 'TORRES LINDAVISTA',
      '0526': 'LINDAVISTA',
      '0493': 'BUENAVISTA',
      '0548': 'EJE CENTRAL',
      '0650': 'RIO DE LOS REMEDIOS',
      '0544': ' TACUBA',
      '0553': 'ACUEDUCTO DE GUADALUPE',
      '0523': 'ZÓCALO',
      '0623': 'TEXCOCO GRAN PATIO',
      '0622': 'TECÁMAC HÉROES',
      '0587': 'TECÁMAC POWER CENTER',
      '0558': 'METEPEC',
      '0777': 'ATLACOMULCO PLAZA',
      '0625': 'TOLUCA ALFREDO DEL MAZO',
      '0537': 'TOLUCA GRAN PLAZA',
      '0598': 'PACHUCA',
      '0774': 'TULANCINGO PATIO',
      '0551': 'CUAJIMALPA',
      '0630': 'EL ROSARIO',
      '0582': 'TOLTECAS',
      '0576': 'ARBOLEDAS',
      '0621': 'LAGO DE GUADALUPE',
      '0538': 'NAUCALPAN',
      '0492': 'SATÉLITE',
      '0532': 'CUAUTITLÁN',
      '0495': 'TOREO',
      '0499': 'AZCAPOTZALCO',
      '0951': 'HUEHUETOCA',
      '0541': 'ERMITA IZTAPALAPA',
      '0531': 'PLAZA ORIENTE',
      '0528': 'AEROPUERTO',
      '0597': 'CIUDAD JARDÍN',
      '0588': 'IXTAPALUCA AYOTLA',
      '0565': 'IXTAPALUCA CORTIJO',
      '0589': 'COACALCO POWER CENTER',
      '0561': 'COACALCO',
      '0644': 'PABELLÓN ECATEPEC',
      '0566': 'ECATEPEC LAS AMÉRICAS',
      '0525': 'ARAGÓN',
      '0570': 'GRAN SUR',
      '0491': 'MIGUEL ANGEL DE QUEVEDO',
      '0494': 'HOLBEIN',
      '0497': 'PLAZA UNIVERSIDAD',
      '0522': 'SAN JERÓNIMO',
      '0674': 'PATIO TLALPAN',
      '0496': 'MIRAMONTES',
      '0641': 'CUEMANCO',
      '0547': 'TACUBAYA',
      '0916': 'ANTENAS',
      '0563': 'TLÁHUAC',
      '0947': 'MONTERREY PASEO JUAREZ',
      '0590': 'MONTERREY GUADALUPE',
      '0594': 'MONTERREY CITADEL',
      '0557': 'MONTERREY UNIVERSIDAD',
      '0654': 'MONTERREY SANTA CATARINA',
      '0560': 'MONTERREY LA SILLA',
      '0579': 'MONTERREY PLAZA CENTRIKA',
      '0667': 'MONTERREY GONZALITOS',
      '0593': 'MONTERREY PLAZA LINCOLN',
      '0629': 'SALTILLO',
      '0943': 'SALTILLO SENDERO',
      '0592': 'ZACATECAS',
      '0595': 'POZA RICA',
      '0624': 'TAMPICO',
      '0635': 'CIUDAD VICTORIA',
      '0574': 'DURANGO',
      '0554': 'CHIHUAHUA',
      '0666': 'TORREÓN',
      '0665': 'MONCLOVA',
      '0920': 'GOMEZ PALACIOS',
      '0572': 'GUADALAJARA CENTRO SUR',
      '0945': 'TONALA',
      '0519': 'GUADALAJARA PLAZA DEL SOL',
      '0628': 'GUADALAJARA VALLARTA',
      '0652': 'GUADALAJARA TLAQUEPAQUE',
      '0498': 'GUADALAJARA PLAZA MEXICO',
      '0520': 'GUADALAJARA CENTRO',
      '0651': 'COLIMA',
      '0631': 'CIUDAD OBREGÓN',
      '0637': 'HERMOSILLO',
      '0645': 'MAZATLÁN',
      '0647': 'LOS MOCHIS',
      '0942': 'LOS MOCHIS SENDERO',
      '0626': 'CULIACÁN',
      '0620': 'TEPIC',
      '0921': "LA PAZ THE SHOPPE'S",
      '0950': 'LIQ TIJUANA (PASEO 2000)',
      '0655': 'OAXACA MACRO PLAZA',
      '0627': 'OAXACA SÍMBOLOS PATRIOS',
      '0658': 'OAXACA CENTRO',
      '0918': 'CUAUTLA PLAZA ATRIOS',
      '0567': 'JIUTEPEC',
      '0669': 'CUERNAVACA',
      '0585': 'ACAPULCO',
      '0581': 'TAPACHULA',
      '0575': 'TUXTLA GUTIÉRREZ',
      '0773': 'TUXTLA GUTIÉRREZ AMBAR',
      '0596': 'MÉRIDA ALTABRISA',
      '0562': 'MÉRIDA MONTEJO',
      '0662': 'MÉRIDA CENTRO',
      '0568': 'COATZACOALCOS',
      '0555': 'VILLAHERMOSA',
      '0569': 'CANCÚN NICHUPTE',
      '0663': 'CANCÚN',
      '0584': 'CHETUMAL',
      '0672': 'CAMPECHE',
      '0953': 'MÉRIDA GRAN SANTA FE',
      '0964': 'PASEO QUERÉTARO',
      '0969': 'UPTOWN JURIQUILLA',
      '0924': 'PARQUE VIA VALLEJO',
      '0955': 'TOLUCA MULTIPLAZA SANTIN',
      '0922': 'PACHUCA EXPLANADA',
      '0915': 'PUEBLA AMALUCAN',
      '0952': 'MONCLOVA PASEO',
      '0965': 'GUADALAJARA SANTA ANITA',
      '0996': 'LIQUIDACIONES TLALNEPANTLA',
      '0973': 'LIQUIDACIONES GUADALAJARA',
      '0974': 'LIQUIDACIONES TLAHUAC',
      '0988': 'TIZAYUCA',
      '0987': 'CENTRO SAN MIGUEL',
      '0994': 'ZITACUARO',
      '0949': 'TIJUANA PABELLÓN ROSARITO',
      '0782': 'TIENDA ONLINE',
    };

    return stores[number];
  },
};
