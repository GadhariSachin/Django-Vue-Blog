<template>
  <v-app> 
    <v-container>
      <v-app-bar 
        app 
        flat
        max-height="64"
        color="white"
      >
        <Header />  
      </v-app-bar>
      
      <v-content>
        <router-view></router-view>
      </v-content>
      
      <v-footer>
        <Footer />
      </v-footer>
    </v-container>  
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  data: () => ({
    greetings: "Good Morning"
  }),

  components: {
    Header,
    Footer
  }
};
</script>
