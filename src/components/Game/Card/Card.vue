<template>
    <div class="card">
      <div class="front">
          <div class="picture">
              <img :src="image" :alt="name">
              <label>{{name}}</label>
          </div>      
      </div>
      <div class="back">back</div>
    </div>
</template>

<script>
export default {
  props: ["image", "name"]
};
</script>

<style scoped>
.card {
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 5px 5px 10px black;
  margin: 5px;
  padding: 1px;
}

.card .picture {
  margin: 10px;
  background-color: orange;
  border: 1px solid orange;
}

.card div {
  /* position: absolute;
  height: 100%;
  width: 100%; */
  background: #fff;
  text-align: center;
  /* line-height: 200px; */
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 2px;
}

.card .back {
  background: #222;
  color: #fff;
  -webkit-transform: rotateX(180deg);
  transform: rotateX(180deg);
}

.picture img {
  padding: 5px;
  width: 100%;
  display: block;
  margin: 0 auto;
  box-sizing: border-box;
}

.picture label {
  width: 100%;
  text-align: center;
  display: inline-block;
  font-size: 10px;
}
</style>
