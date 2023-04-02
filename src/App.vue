<script setup>
  import DeviceCardList from './components/DeviceCardList.vue';
  import {ref} from "vue";
  const image_list = ref([
    {
      url1: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      url2: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
    },
    {
      url1: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      url2: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
    },
    {
      url1: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      url2: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
    },
  ])
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="250px"  class="aside-menu-left">
      </el-aside>
      <el-container>
        <el-header class="main-header">项目项目项目</el-header>
        <el-main class="main-main">
          <device-card-list class="card-list" :image_list="image_list"></device-card-list>
        </el-main>
      </el-container>
      <el-aside width="250px"  class="aside-menu-right">
      </el-aside>
    </el-container>
  </div>
</template>



<style scoped>
  .aside-menu-left {
    border-right: solid 1px darkgray;
    height: 1000px;
    background-color: gray;
    color: white;
  }
  .aside-menu-right {
    border-left: solid 1px gray;
    background-color: darkgray;
    color: white;
  }
  .main-header {
    height: 150px;
    border-bottom: solid 1px gray;
    font-size: 100px;
    text-align: center;
  }

  .card-list {
    height: 300px
  }

</style>
