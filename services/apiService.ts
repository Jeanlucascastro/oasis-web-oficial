
import axios from 'axios';
const runtimeConfig = useRuntimeConfig()
runtimeConfig.public.apiBase
const apiService = {
  async request(url: string) {
    try {
      const response = await axios.get(runtimeConfig.public.apiBase + url);
      console.log('axios', url)
      console.log('axios', response)
      return response.data;

    } catch (error) {
      throw error;
    }
  },

  async login(url: string, login: string, password: string) {
    console.log('kakdspoakdpokaspodkaposdkopasdk')

    axios.post('http://192.168.0.104:8080' + url, {
          login: login,
          password: password
        }, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
          },
        }).then((d) => {
          console.log('DDD', d.data)

          return d.data
        });
}

  
};

export default apiService;
