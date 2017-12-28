<script>
import Menu from "./Menu/Menu.vue";
import Board from "./Board/Board.vue";
import Card from "./Card/Card.vue";
import Timer from "./Timer/Timer.vue";

import GameService from "./../../domain/gameService";

export default {
  template: require("./Game.html"),
  components: {
    "my-menu": Menu,
    "my-board": Board,
    "my-card": Card,
    "my-timer": Timer
  },
  created() {
    this.gameService = new GameService(this.$resource);
    this.card = {
      image: "https://facedetection.com/wp-content/uploads/m01-32_gr.jpg",
      name: "Example"
    };
    
    this.gameService.getQuestions().then(response => {
      this.questions = response;
    }, error => {
      alert('Ocorreu um erro!');
      console.log(error);
    });

  },
  data() {
    return {
      card: {},
      cards: [],
      questions : [],
    };
  }
};
</script>
<style scoped>
@import url("./Game.css");
</style>

