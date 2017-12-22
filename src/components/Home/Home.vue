<script>
export default {
  template: require("./Home.html"),
  data() {
    return {};
  },
  methods: {
    signout: function() {
      localStorage.setItem("token", null);
      this.$router.push({ name: "login" });
    }
  }
};
</script>
<style scoped>
@import url("./Home.css");
</style>

