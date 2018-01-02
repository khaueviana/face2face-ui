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
    
    this.misteryFace = {
      image: "https://facedetection.com/wp-content/uploads/m01-32_gr.jpg",
      name: "Example"
    };
    
    this.gameService
      .getQuestions()
      .then(response => this.questions = response, error => {
        alert('Ocorreu algo errado ao carregar as questões!');
        console.log(error);
      });

    
    this.gameService
      .startGame()
      .then(
        response => {
          this.game = response;
          console.log(response);
        }, 
        error => {
          console.log(error); 
        });
  },
  data() {
    return {
      misteryFace: {},      
      questions : [],
      game : {},
    };
  },
  methods : {
    sendQuestion(question){
      this.gameService.sendQuestion(question)
      .then(response => {
        console.log(response);
        alert((response.answer)? 'Yes' : 'No');
      }, 
      error => {
        console.log(error)
        alert('Ocorreu um erro ao enviar a questão.');
      });
    },
    
  }
};
</script>
<style scoped>
@import url("./Game.css");
</style>

