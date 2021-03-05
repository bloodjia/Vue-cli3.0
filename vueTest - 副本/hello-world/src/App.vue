<template>
  <div id="app">
    <!-- <div class="menu">
      router-link 相当于就是超链 to 相当于就是 href  
      <router-link to="/home">欢迎页</router-link>
      <router-link to="/Vcrud">增删查改演示</router-link>
    </div> -->

    <el-container style="height: 100%; border: 1px solid #eee">
      <el-header
        style="
          text-align: right;
          font-size: 12px;
          background-color: #41b883;
          height: 4vw;
        "
      >
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-container>
        <el-aside
          width="200px"
          style="background-color: rgb(238, 241, 246); height: auto"
        >
          <el-menu router>
            <MenuTree :data="this.menu_data"></MenuTree>
          </el-menu>
        </el-aside>

        <el-main style="height: 42vw">
          <router-view />
          <!-- <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table> -->
        </el-main>
      </el-container>
    </el-container>

    <!-- <router-view/>  -->
  </div>
</template>

<script>
import $ from "jquery";
import Vue from "vue";
import MenuTree from "./components/MenuTree.vue";

export default {
  name: "App",
  components: {
    MenuTree,
  },
  data() {
    return {
      menu_data: {},
    };
  },
  mounted() {
    this.menu_data = [
      {
        index: "1",
        name: "用户管理",
        children: [
          {
            index: "1-2",
            name: "用户列表",
            children: [
              {
                index: "/pages/home",
                name: "主页",
              },
              {
                index: "/pages/Vcrud",
                name: "副页",
              },
            ],
          },
        ],
      },
      // {
      // 	"index": "2",
      // 	"name": "角色管理2"
      // }, {
      // 	"index": "3",
      // 	"name": "用户管理3"
      // }, {
      // 	"index": "4",
      // 	"name": "角色管理4"
      // }
    ];
  },
};
</script>

<style scoped>
@import "./css/vue-cureCss.css";
@import "./css/luyou.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
</style>
