<template>
   <div class="timer">
        <span>{{time}}</span>
        <!-- <img src="./alarmclock.png" alt="alarm"> -->
    </div>
</template>

<script>
export default {
  created() {
    setInterval(() => {
      this.timeCount++;
    }, 1000);
  },
  data() {
    return {
      timeCount: 0
    };
  },
  computed: {
    time: function() {
      var sec_num = this.timeCount;
      var hours = Math.floor(sec_num / 3600);
      var minutes = Math.floor((sec_num - hours * 3600) / 60);
      var seconds = sec_num - hours * 3600 - minutes * 60;

      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      return hours + ":" + minutes + ":" + seconds;
    }
  }
};
</script>
<style scoped>
.timer {
  position: absolute;
  right: 0;
  background-color: #fff;
  width: 300px;
  box-shadow: 0px 0px 1em #666;
  padding: 10px;
  margin: 0px;
  border-radius: 40px 0 0 10px;
  bottom: 60px;
  margin: 1px;
  font-size: 20px;
  font-weight: 900;
  display: inline-block;
  text-align: center;
}

.timer img {
  width: 10%;
  left: 0;
}
</style>

