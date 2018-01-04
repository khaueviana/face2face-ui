<template>
<div class="dialogs">
    <h2 @click="visivel = !visivel">{{title}}</h2>
    <ul v-show="visivel">
        <slot></slot>
    </ul>
</div>  
</template>
<script>
export default {
  props: ["title"],
  data() {
    return {
      visivel: false
    };
  }
};
</script>
<style scoped>
.dialogs {
  position: absolute;
  background-color: orange;
  width: 10vw;
  box-shadow: 0px 0px 1em #666;
  border-radius: 5px;
  margin: 1vw;
}

.dialogs h2 {
  text-align: center;
  color: #fff;
  padding: 5px;
  margin: 2px;
  font-size: 1.5vw;
}

.dialogs ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.dialogs a {
  padding: 0.8vw;
  text-decoration: none;
  color: orange;
  border: 1px solid #fff;
  box-sizing: border-box;
  display: inline-block;
  width: 98%;
  border-radius: 0.2vw;
  margin: 0.1vw;
  box-shadow: 0px 0px 1em #666;
  background-color: #fff;
  font-weight: bold;
  font-size: 0.9vw;
}

.dialogs a:hover {
  background-color: orange;
  color: #fff;
}

.dialogs:hover {
  background-color: yellow;
}

.dialogs h2:hover {
  color: orange;
}
</style>


