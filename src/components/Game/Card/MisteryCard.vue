<template>
    <div class="card">
        <div class="picture">
            <img :src="image" :alt="name">
            <label>{{name}}</label>
        </div>
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
  box-shadow: 5px 5px 10px rgba(10, 10, 10, 0.6);
  padding: 1px;
  position: absolute;
  left: 43%;
  bottom: 15px;
  margin: auto;
  width: 10vw;
  height: 20vh;
}

.card .picture {
  margin: 1vh;
  background-color: orange;
  border: 1px solid orange;
  width: 90%;
  height: 82%;
  margin: 0.5vw;
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
  font-size: 1vw;
}
</style>
