<script>

import GameService from "../../domain/gameService";


export default {
  template: require("./Home.html"),

  created(){
    this.gameService = new GameService(this.$resource);
  },
  data() {
    return {};
  },
  methods: {

    startGame : function(){
      try{
        this.gameService
        .startGame()
          .then(game => {
            localStorage.setItem('gameId', game.gameId);
            this.$router.push({ name: "game" });
          }, error =>{
            alert('Não foi possível iniciar o jogo!');
            console.log(error);
          });

      }catch(error){
        alert('Ocorreu um erro ao iniciar o jogo!');
        console.log(error);
      }
    },

    signout: function() {
      
      localStorage.removeItem("token");
      localStorage.removeItem("gameId");

      this.$router.push({ name: "login" });
    }
  }
};
</script>
<style scoped>
@import url("./Home.css");
</style>

