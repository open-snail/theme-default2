import { fetchMasterInfo, login, getInfo, fetchConfigList } from "@/api/index";
import { getToken, setToken, removeToken } from "@/plugins/auth";

export const state = () => ({
  masterUserInfo: null,
  userInfo: null,
  token: getToken(),
  config: null
})

export const mutations = {
  SET_MASTER_USER_INFO: (state, obj) => {
    state.masterUserInfo = obj;
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_USER_INFO: (state, userInfo) => {
    state.userInfo = userInfo;
  },
  SET_CONFIG: (state, config) => {
    state.config = config;
  }
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('fetchMasterInfo')
  },
  async fetchMasterInfo({ commit }) {
    const result = await fetchMasterInfo(this.$axios.$request);
    if (result.success === 1) {
      commit("SET_MASTER_USER_INFO", result.model);
      return result;
    }
  },
  async getInfo({ commit, state }) {
    const result = await getInfo(state.token);
    if (result.success === 1) {
      commit("SET_USER_INFO", result.model);
      return result;
    }
  },
  async getConfigList({ commit }, params) {
    const result = await fetchConfigList({ type: 0 });
    if (result.success === 1) {
      commit("SET_CONFIG", result.model);
      return result;
    }
  },
  async login({ commit, dispatch }, params) {
    const result = await login(params);
    const { model, success } = result;
    if (success === 1) {
      commit("SET_TOKEN", model.token);
      setToken(model.token);
      dispatch("getInfo");
      return result;
    }
  }
}
