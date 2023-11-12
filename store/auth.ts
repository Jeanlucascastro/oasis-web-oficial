export const state = () => ({
    token: null
  });
  
  export const mutations = {
    setToken(state: { token: any; }, token: any) {
      state.token = token;
    }
  };
  
  export const actions = {
    saveToken({ commit }: any, token: any) {
      commit('setToken', token);
    }
  };

  export const getters = {
    getToken: (state: { auth: { token: any; }; }) => {
      return state.auth.token;
    }
  };