<template>
  <div class="MenuTree">
    <label v-for="menu in data" :key="menu.index">
      <el-submenu :index="menu.index" v-if="menu.children">
        <template slot="title">
          <span>{{ menu.name }}</span>
        </template>
        <label>
          <MenuTree :data="menu.children"></MenuTree>
        </label>
      </el-submenu>
      <el-menu-item key="index" v-else :index="menu.index">
        <span slot="title">{{ menu.name }}</span>
      </el-menu-item>

    </label>
  </div>
</template>

<script>
import MenuTree from "./MenuTree.vue";
export default {
  name: "MenuTree",
  data() {
    return {
      menu_data: {},
    };
  },
  components: {
    MenuTree,
  },
  props: ["data"],
};
</script>
