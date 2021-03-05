<template>
  <div id="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button class="btn1" @click="methods1">显示console</button>
    <button class="btn1" v-trigger>自动触发console</button>

    <el-menu>
      <MenuTree :data="menu_data"></MenuTree>
    </el-menu>
  </div>
</template>

<script>
import { test } from "../js/test.js";
import $ from "jquery";
import HelloWorld from "../components/HelloWorld.vue";
import MenuTree from "../components/MenuTree.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    MenuTree,
  },
  data() {
    return {
      menu_data: {},
    };
  },
  directives: {
    trigger: {
      inserted(el) {
        el.click(alert("haha"));
      },
    },
  },
  methods: {
    methods1: function () {
      test();
      $(".btn1").hide();
    },
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
                index: "1-2-1",
                name: "用户列表查询",
                children: [
                  {
                    index: "1-2-1-1",
                    name: "用户列表查询",
                    children: [
                      {
                        index: "1-2-1-1-1",
                        name: "用户列表查询",
                        children: [
                          {
                            index: "1-2-1-1-1-1",
                            name: "用户列表查询",
                          },
                        ],
                      },
                    ],
                  },
                ],
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

<style>
#home {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
