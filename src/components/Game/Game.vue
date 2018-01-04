<script>
import Menu from "./Menu/Menu.vue";
import Board from "./Board/Board.vue";
import Card from "./Card/Card.vue";
import MisteryCard from "./Card/MisteryCard.vue";
import Timer from "./Timer/Timer.vue";

import GameService from "./../../domain/gameService";

export default {
  template: require("./Game.html"),
  components: {
    "my-menu": Menu,
    "my-board": Board,
    "my-card": Card,
    "my-mistery-card": MisteryCard,
    "my-timer": Timer
  },
  created() {
    this.gameService = new GameService(this.$resource);

    this.misteryFace = {
      image: "https://facedetection.com/wp-content/uploads/m01-32_gr.jpg",
      name: "Example"
    };

    this.gameService.getQuestions().then(
      response => (this.questions = response),
      error => {
        alert("Ocorreu algo errado ao carregar as questões!");
        console.log(error);
      }
    );

    var gameId = localStorage.getItem("gameId");

    this.gameService.getGame(gameId).then(
      response => {
        this.game = response;
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  },
  data() {
    return {
      misteryFace: {},
      questions: [],
      game: {
        board: {
          characterFrames: []
        }
      }
    };
  },
  methods: {
    sendQuestion(question) {
      var gameId = localStorage.getItem('gameId');
      this.gameService.sendQuestion(gameId, question).then(
        response => {
          console.log(response);
          alert(response.answer ? "Yes" : "No");
        },
        error => {
          console.log(error);
          alert(error.body.message);
        }
      );
    },
    sendTipOff(characterId) {
      this.gameService.sendTipOff(characterId).then(
        response => {
          console.log(response);
          alert(response.answer ? "You Win!" : "You Lose!");
        },
        error => {
          console.log(error);
          alert(error.body.message);
        }
      );
    }
  }
};
</script>
<style scoped>
@import url("./Game.css");
</style>

