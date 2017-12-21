<template>
  <div id="app">
     <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Login from "./components/Login/Login.vue";

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  created() {
    var token = localStorage.getItem("token");
    if (!token) {
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style>
body {
  background-color: #87ceeb;
  font-family: Arial, Helvetica, sans-serif;
}

* {
  box-sizing: border-box;
}
</style>
