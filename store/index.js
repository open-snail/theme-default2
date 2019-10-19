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
  },
  SET_KEYWORDS: (state, keywords) => {
    state.keywords = keywords;
  },
}

export const actions = {
  async nuxtServerInit({ dispatch, commit }, { req }) {
    if (req.headers.cookie !== undefined) {
      let arr = req.headers.cookie.split(';').filter(function (value, index, array) {
        return value.indexOf('hello-blog-token=') !== -1
      })
      if (arr.length !== 0) {
        // 获取token
        const tokenName = arr[0].split('=')[0].trim()
        const tokenValue = arr[0].split('=')[1].trim()
        if (tokenName === 'hello-blog-token' && tokenValue !== null && tokenValue !== undefined && tokenValue !== '') {
          commit('SET_TOKEN', tokenValue)
        } else {
          // 未登录状态
          return
        }

        try {
          await dispatch('getInfo', {Authorization: tokenValue})
        } catch (error) {
          console.log(error)
        }
      }

    } else {
      commit('SET_USER_INFO', null)
      commit('SET_TOKEN', null)
    }

    await dispatch('getConfigList')
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
    const result = await getInfo(this.$axios.$request, state.token);
    if (result.success === 1) {
      commit("SET_USER_INFO", result.model);
      return result;
    }
  },
  async getConfigList({ commit }, params) {
    const result = await fetchConfigList(this.$axios.$request,params);
    if (result.success === 1) {
      let config = {}

      result.models.forEach(item => {
        if (item.configKey === "name") {
          config['name'] = item.configValue
        }

        if (item.configKey === "keywords") {
          config['keywords'] = item.configValue
        }

        if (item.configKey === "description") {
          config['description'] = item.configValue
        }

        if (item.configKey === "copyright") {
          config['copyright'] = item.configValue
        }

        if (item.configKey === "metas") {
          config['metas'] = item.configValue
        }

        if (item.configKey === "icp") {
          config['icp'] = item.configValue
        }
      });
      commit("SET_CONFIG", config);
      return result;
    }
  },
  async login({ commit, dispatch }, params) {
    const result = await login(this.$axios.$request,params);
    const { model, success } = result;
    if (success === 1) {
      commit("SET_TOKEN", model.token);
      setToken(model.token);
      dispatch("getInfo");
      return result;
    }
  }
}
