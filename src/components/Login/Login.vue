<script>
export default {
  template: require("./Login.html"),
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      var user = {
        email: this.username,
        password: this.password
      };
      console.log("User", user);
      this.$router.push({ name: "home" });
    }
  }
};
</script>
<style scoped>
@import url("./Login.css");
</style>