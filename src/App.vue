<template>
  <div id="app">
    <!-- <div>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </div> -->

    <el-row>
      <el-col :md="4">
        <div class="grid-content bg-purple-dark">后台管理系统</div>
      </el-col>
      <el-col :md="17">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :router="routerFlag" >
          <el-menu-item index="foo">处理中心</el-menu-item>
          <el-menu-item index="bar">我的工作台</el-menu-item>
          <el-menu-item index="head">订单管理</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :md="3">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :md="4">
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :md="20">
        <router-view :key="routerName"></router-view>
      </el-col>
    </el-row>



    <!-- <router-view :key="routerName"></router-view> -->

  </div>
</template>

<script>
import './mock/app.js';
export default {
  name: 'app',
  data() {
    return {
      routerFlag: true,
      activeIndex: 'foo',
      msg: 'Welcome to Your Vue.js App',
      routerName: '',
    };
  },
  methods: {
    getinit() {
      axios.get('api/member').then(res => {
        let data = res.data;
      });
    },
    getLoction(hash) {
      window.location.hash = hash;
    },
  },
  created() {
    // this.getinit();
  },
};
</script>

<style scoped>
.bg-purple-dark {
  background: #409eff;
}

.grid-content {
  /* border-radius: 4px; */
  min-height: 61px;
}
</style>
