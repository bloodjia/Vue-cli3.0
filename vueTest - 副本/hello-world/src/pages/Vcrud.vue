<template>
<div id="div1">
  <table align="center" id="numbeltable" v-if="show">
    		<thead>
    		<tr>
    			<td>姓名</td>
    			<td>战斗力</td>
    			<td>操作</td>
    		</tr>
    		</thead>
    		<tbody>
    		<tr v-for="hero in heros">
    			<td>{{hero.name}}</td>
    			<td>{{hero.sate}}</td>
    			<td>
    			<button type="button" @click="toupdate(hero)">编辑</button>
    			<button type="button" @click="delect(hero.name)">删除</button>
    			</td>
    		</tr>
    		<tr>
    			<td colspan="3">
	    			英雄名:<input type="text" v-model="addhero.name"></input><br>
	    			战斗力:<input type="number"  v-model="addhero.sate"></input><br>
	    			<button type="button" v-on:click="add">添加</button>
    			</td>
    		</tr>
    	</tbody>
  </table>

        <table align="center" id="updatePage" v-else>
    		<thead>
    			<tr>
    				<td colspan="2"> 编辑</td>
    			</tr>
    		</thead>
    		<tbody>
    			<tr>
    				<td>
    				英雄名:<input type="text" v-model="updatehero.name"></input><br>
	    			战斗力:<input type="number" v-model="updatehero.sate"></input>
	    			</td>
    				<td>
    				<button type="button" @click="update">修改</button>
    				<button type="button" @click="cencel">取消</button>
    				</td>   			
    			</tr>		
    		</tbody>
    	
    	
    	</table>
		<button type="button" @click="myajax">点击</button>
		<div class="content-wrap">
		    <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="Tooltip on left">Tooltip on left</button>
		    <button type="button" class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top</button>
		    <button type="button" class="btn btn-warning" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>
		    <button type="button" class="btn btn-danger" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>
		  </div>

	<div>
    <el-button @click="show = !show">Click Me</el-button>
		<div style="display: flex; margin-top: 20px; height: 100px;">
		<transition name="el-fade-in-linear">
			<div v-show="show" class="transition-box">.el-fade-in-linear</div>
		</transition>
		<transition name="el-fade-in">
			<div v-show="show" class="transition-box">.el-fade-in</div>
		</transition>
		</div>
  	</div>
		
</div>
</template>
 
<script>
import $ from "jquery";

export default {
  name: "Vcrud",
  data() {
    return {
      fatchs: [],
      heros: [
        { name: "勇者", sate: 45 },
        { name: "芙蓉", sate: 415 },
        { name: "单皇子", sate: 352 },
        { name: "臭弟弟", sate: 765 },
      ],
      addhero: { name: "", sate: "" },
      updatehero: { name: "", sate: "" },
      show: true,
    };
  },
  methods: {
    mounted: function () {
      //在页面加载完毕后初始化 tooltip， 相当于$(function(){ $('[data-toggle="tooltip"]').tooltip(); }
      $('[data-toggle="tooltip"]').tooltip();
    },

    myajax: function () {
      this.$http({
        method: "get",
        url: "/api/jsons.txt",
        data: {},
      }).then(
        (response) => {
          console.log("请求成功");
          console.log(response);
        },
        (response) => {
          console.log("请求失败");
          console.log(response);
        }
      );
    },

    add: function () {
      this.heros.push(this.addhero);
      this.hero4Add = { id: 0, name: "", hp: "0" };
    },
    delect: function (name) {
      for (var i = 0; i <= this.heros.length; i++) {
        if (this.heros[i].name == name) {
          this.heros.splice(i, 1);
          break;
        }
      }
    },
    toupdate: function (hero) {
      this.show = !this.show;
      this.updatehero = hero;
    },
    update: function () {
      this.show = !this.show;
    },
    cencel: function () {
      this.show = !this.show;
    },
  },
};
</script>
 
<style scoped>
td {
  border: 1px solid gray;
}

table {
  border-collapse: collapse;
}

div#app {
  margin: 20px auto;
  width: 400px;
  padding: 20px;
}
#div1 {
  margin-top: 50px;
}
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>