import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Cookie from "js-cookie";

Vue.use(Vuex);

axios.defaults.headers.common["X-CSRFToken"] = Cookie.get("csrftoken");

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("access_token") || null
  },
  getters: {
    loggedIn (state){
      return state.token !== null
    },
  },
  mutations: {
    userTokenMutation(state, response) {
      state.token = response;
    }
  },
  actions: {
    GetToken(context, postData) {
      axios
        .post("/api-auth-token/", postData)
        .then(function(response) {
          localStorage.setItem("access_token", response.data.token);
          context.commit("userTokenMutation", response.data.token);
        })
        .catch(function() {});
    }
  }
});
