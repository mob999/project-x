<script setup>
import { useRouter } from 'vue-router';

    const version = "v0.1.0"
    const doc = "xxx.com"

    const router = useRouter()
    const home = ()=> {
        router.push("/")
    }
    const docs = ()=> {
        router.push("/docs")
    }
</script>

<template>
    <div class="my-font">
        <div class="title-container">
            <div class="title-head">Autonomous driving </div>
            <div class="title-foot">Adversarial Scene Generation</div>
        </div>
        <h1 class="center">自动驾驶恶意场景生成帮助文档
            <span><a href="#" class="version">{{ version }}</a></span>
            &#128526;
        </h1>
        <p class="center"><span>帮助文档只展示软件的基础用法，详细说明请移步<a :herf="doc" class="version">{{ doc }}</a> </span></p>
        <p class="center"><span>本页面可通过左侧应用列表访问，或者通过主页的访问指南中访问本页</span></p>
        <p class="center">
            <el-button @click="docs" type="success" round style="margin-top: 30px; color:black; font-weight: 900;">
                <p>查看文档</p>
            </el-button>
            <el-button @click="home" type="info" round style="margin-top: 30px; color:black; font-weight: 900;">
                <p>主页</p>
            </el-button>
        </p>
    </div>
</template>

<style scoped>
    .title-container {
        text-align: center;
        margin-bottom: 100px;
    }

    .title-head {
        font-size: 50px;
        background-image:-webkit-linear-gradient(top, #08bc80,#10d7a2,#474741);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
    }

    .title-foot {
        font-size: 50px;
        background-image:-webkit-linear-gradient(top, #08bc80,#10d7a2,#474741);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
    }
    .my-font {
        color: white;
        font-weight: 600;
    }
    h1 {
        font-size: 30px;
    }

    p {
        font-size: 20px
    }

    .center {
        text-align: center;
    }

    .version {
        color: greenyellow  ;
        text-decoration: none;
    }
</style>

