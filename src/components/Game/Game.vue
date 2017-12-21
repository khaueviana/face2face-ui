<script>
import Menu from "./Menu/Menu.vue";
import Board from "./Board/Board.vue";
import Card from "./Card/Card.vue";
import Timer from "./Timer/Timer.vue";
export default {
  template: require("./Game.html"),
  components: {
    "my-menu": Menu,
    "my-board": Board,
    "my-card": Card,
    "my-timer": Timer
  },
  created() {
    this.card = {
      image: "https://facedetection.com/wp-content/uploads/m01-32_gr.jpg",
      name: "Example"
    };
  },
  data() {
    return {
      card: {},
      cards: []
    };
  }
};
</script>
<style scoped>
@import url("./Game.css");
</style>

