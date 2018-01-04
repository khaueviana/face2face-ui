<template>
  <label>
      <input type="checkbox" id="flipped" />
      <div class="card">
        <div class="front">
            <div class="picture">
              <img :src="image" :alt="name">
            </div>
            <label class="label">{{name}}</label>
        </div>
        <div class="back">
            <div class="picture">
              <img src="../../../assets/static/backCard.jpg">
            </div>
            <label class="label"></label>            
        </div>
      </div>
  </label>
</template>

<script>
export default {
  props: ["image", "name"]
};
</script>

<style lang="scss" scoped>
label {
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.card {
  box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.2);
  position: relative;
  height: 100%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: all 600ms;
  transition: all 600ms;
  z-index: 20;
  border-color: white;
  border-width: 1px;
  border-style: solid;
}

.card .picture {  
  background-color: orange;
  border: 1px solid orange;
  position: absolute;
  width: 90%;
  height: 75%;
  margin: 0.5vw;
}

.card .label {
  position: absolute;
  bottom: 0;
  font-size: 1vw;
}

.card div {
  background: #fff;
  text-align: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 2px;
}

.card .back {
  color: #fff;
  -webkit-transform: rotateX(180deg);
  transform: rotateX(180deg);
  height: 100%;
}

.card .back img {
  display: none;
  margin: 0 auto;
  box-sizing: border-box;
}

:checked + .card {
  transform: rotateX(180deg);
  -webkit-transform: rotateX(180deg);
  box-shadow: 5px -5px 5px rgba(50, 50, 50, 0.2);
}

:checked + .card .back img {
  display: block;
  width: 100%;
}

:checked + .card .front {
  display: none;
}

label:hover .card {
  -webkit-transform: rotateX(10deg);
  transform: rotateX(10deg);
  box-shadow: 0 10px 10px rgba(50, 50, 50, 0.2);
}

label:hover :checked + .card {
  transform: rotateX(170deg);
  -webkit-transform: rotateX(170deg);
  box-shadow: 0 -10px 10px rgba(50, 50, 50, 0.2);
}

.picture img {
  width: 100%;
  height: 100%;
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

input[type="checkbox"] {
  display: none;
}
</style>