
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
  }
};

export default apiService;
</script>
