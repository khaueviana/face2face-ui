<script>
import UserService from "./../../domain/userService";
export default {
  template: require("./Login.html"),
  data() {
    return {
      loader: false,
      infoError: false,
      messageError: "",
      username: "",
      password: ""
    };
  },
  created() {
    this.userService = new UserService(this.$resource);
  },
  methods: {
    login() {
      this.loader = true;
      this.infoError = false;
      this.userService
        .login({
          username: this.username,
          password: this.password
        })
        .then(
          res => {
            localStorage.setItem("token", res.token);
            this.$router.push({ name: "home" });
          },
          err => {
            this.infoError = true;
            this.loader = false;
            this.password = "";
            this.messageError = err.message;
          }
        );
    }
  }
};
</script>
<style scoped>
@import url("./Login.css");
</style>