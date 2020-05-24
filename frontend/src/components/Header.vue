<template>
  <v-container>
    <v-toolbar flat>
      <v-toolbar-title>
         <router-link to="/">
            <img 
              contain 
              transition 
              height="60" 
              alt="Vue logo" 
              src="../assets/logo.png" 
            />
         </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <div v-if="!loggedIn">
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on }">
            <v-btn small primary dark v-on="on">
              Sign In
            </v-btn>
          </template>

          <v-card class="mx-auto">
            <v-card-title>
              <h1 class="display-1 text-center">Sign In</h1>
            </v-card-title>

            <v-card-text>
              <v-form>
                <v-text-field
                  label="username"
                  v-model="username"
                  prepend-icon="mdi-account-circle"
                >
                </v-text-field>
                <v-text-field
                  :type="showPassword ? 'text' : 'password'"
                  label="password"
                  v-model="password"
                  prepend-icon="mdi-lock"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                >
                </v-text-field>
              </v-form>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn primary text @click="loginUser">
                Sign In
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <div v-else>
        <router-link to="/dashboard">Dashboard</router-link>
        <v-btn small primary dark v-on:click="logOut">
          Sign Out
        </v-btn>
      </div>
    </v-toolbar>
  </v-container>
</template>

<script>
import store from "@/store/index.js";

export default {
  name: "Header",

  data() {
    return {
      dialog: false,
      username: "",
      password: "",
      showPassword: false
    };
  },
  computed: {
    loggedIn: function() {
      return store.state.token;
    }
  },
  methods: {
    loginUser: function() {
      var vm = this;
      var postData = {
        username: this.username,
        password: this.password
      };

      store.dispatch("GetToken", postData).then(function() {
        vm.dialog = false;
      });
    },
    logOut: function() {
      localStorage.removeItem("access_token");
      store.commit("userTokenMutation", null);
    }
  }
};
</script>
