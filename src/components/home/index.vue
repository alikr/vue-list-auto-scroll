<template>
  <div class="box">
    <table class="table">
      <tr v-for="(item,index) in data">
        <td v-for="(t,key) in item">
          <template v-if="key=='name' && index==current">
            <div class="sel"></div>
          </template>
          {{t}}
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import Vue from 'vue';
export default {
  components: {},
  data() {
    return {
      current: 0,
      data: [
			{name:'title_' + 1,value:1},
			{name:'title_' + 2,value:2},
			{name:'title_' + 3,value:3},
			{name:'title_' + 4,value:4},
			{name:'title_' + 5,value:5},
			{name:'title_' + 6,value:6},
			{name:'title_' + 7,value:7},
			{name:'title_' + 8,value:8},
			{name:'title_' + 9,value:9},
			{name:'title_' + 10,value:10}
		]
    }
  },
  mounted() {
    var box = this.$el;
    var table = box.querySelector('.table');
    var boxH = box.offsetHeight;
    var itemH = table.offsetHeight / this.data.length;
    var itemSize = Math.ceil(boxH / itemH);
    //修正高度
    var fixH = (1 - boxH / (itemH * itemSize)) * boxH;
    setInterval(() => {
      var total = this.data.length;
      var preC = this.current;
      var current = this.current = preC < total - 1 ? preC + 1 : 0;
      box.scrollTop = current == 0 ? (this.current = 0, 0) : current >=
        itemSize && current < total ? (current - itemSize + 1) * itemH +
        fixH : 0;
    }, 1000);
  }
}
</script>
<style type="text/css">
.box {
  width: 500px;
  height: 120px;
  overflow: hidden;
  overflow-y: auto;
  border: 1px solid #fff;
  border-left: none;
  border-right: none;
}

.sel {
  height: 100%;
  width: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  background: rgba(255, 255, 0, 0.2);
}

.table {
  width: 100%;
  table-layout: fixed;
}

.table td {
  line-height: 46px;
  border: 1px solid #fff;
  padding: 0 10px;
  position: relative;
}

.table td:first-child,
.table td:last-child {
  border-top: none;
}
</style>
