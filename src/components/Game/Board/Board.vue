<template>
    <div class="board">
      <div v-for="card in cards" :key="card.character.id">
        <my-card :image="'/dist/' + card.image" :name="card.character.name" :id="card.character.id"></my-card>
      </div>
    </div>  
</template>

<script>
import Card from "../Card/Card.vue";
export default {
  props: ["cards"],

  components: {
    "my-card": Card
  },

  created() {
    const pathToCats = require.context("../../../assets", true);
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.board {
  position: absolute;
    top: 10%;
    right: 0;
    bottom: 30%;
    left: 0;
    width: 59%;
    border-radius: 0.5vh;
    padding: 0.5vh;
    margin: auto;
    box-shadow: 0px 0px 1em #666;
    background-color: #fff;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: 5px;
}
</style>

