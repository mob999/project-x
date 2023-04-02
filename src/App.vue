<script setup>
import { RouterView } from 'vue-router';
import logo from './assets/bjtu.svg'
import { onMounted } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
onMounted(()=>store.commit('fetch_models'))
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="250px" class="aside-menu-left">
        <div class="menu-options">
          <p style="font-size: 30px;">应用列表</p>
          <el-row>
            <el-col style="margin: 10px;"><router-link class="router-link-active" to="/">主页</router-link></el-col>
            <el-col style="margin: 10px;"><router-link class="router-link-active" to="/capture">外置设备拍摄</router-link></el-col>
            <el-col style="margin: 10px;"><router-link class="router-link-active" to="/upload">上传照片</router-link></el-col>
            <el-col style="margin: 10px;"><router-link class="router-link-active" to="/settings">设置</router-link></el-col>
            <el-col style="margin: 10px;"><router-link class="router-link-active" to="/help">帮助</router-link></el-col>
          </el-row>
        </div>
      </el-aside>
      <el-container>
        <el-header class="main-header">
          <el-image class="header-logo" :src="logo"></el-image>
          <div style="margin-left: 20px; font-weight: 900;">Malicious Autonomous Driving Scene Generation</div> 
          
        </el-header>
        <el-main class="main-main">
          <router-view></router-view>
        </el-main>
        <el-footer style="text-align: center; background-color:rgb(0,30, 54) ; color: white;">Powered By BJTU 2023</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.main-main {
  background:rgb(0,30, 54) no-repeat;
  background-size:100% 100%;
  background-attachment:fixed;
}

.router-link-active {
    text-decoration: none;
    color: orange;
  }

.menu-options {
  margin-left: 20px;
}

.aside-menu-left {
  border-right: solid 1px darkgray;
  height: 1000px;
  background-color: rgb(45, 42, 46);
  color: white;
}

.aside-menu-right {
  border-left: solid 1px gray;
  background-color: rgb(45, 42, 46);
  color: white;
}

.main-header {
  height: 50px;
  border-bottom: solid 1px gray;
  margin-left: 0;
  background-color: darkgray;
  display: flex;
  font-size: 20px;
  line-height: 50px;
}

.card-list {
  height: 300px;
  margin-bottom: 20px
}

.header-logo {
  height: 49px;    
}

</style>

