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
  width: 200px;
  box-shadow: 0px 0px 1em #666;
  border-radius: 5px;
  padding: 0 10px 10px 10px;
  margin: 10px;
}

.dialogs h2 {
  text-align: center;
  color: #fff;
  padding: 5px;
  margin: 2px;
}

.dialogs ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.dialogs a {
  padding: 10px;
  text-decoration: none;
  color: orange;
  border: 1px solid #fff;
  box-sizing: border-box;
  display: inline-block;
  width: 100%;
  border-radius: 5px;
  margin: 2px;
  box-shadow: 0px 0px 1em #666;
  background-color: #fff;
  font-weight: bold;
}

.dialogs a:hover {
  background-color: orange;
  color: #fff;
}
</style>


