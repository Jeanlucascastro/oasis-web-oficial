
<script lang="ts">
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
  try {
    const response = await axios.post('http://localhost:8080/auth/login', {
      login: login,
      password: password
    });
    console.log('axios', url)
    console.log('axios', response)
    return response.data;

  } catch (error) {
    throw error;
  }
}

  
};

export default apiService;
</script>
