<template>
    <div class="container">
        <h1 class="white-font">&#128512;欢迎使用自动驾驶恶意场景生成, 使用本软件请参考如下：</h1>
        <h1 class="white-font">
            <router-link class="router-link-active" to="/capture">1. 外部设备拍摄</router-link>
        </h1>
        <p class="white-font middle-size">使用我们的外部摄像头进行场景生成与评估，或提供你的设备url</p>
        <h1 class="white-font"><router-link class="router-link-active" to="/upload">2. 上传照片</router-link></h1>
        <p class="white-font middle-size">上传本机的照片，进行场景生成与评估</p>
        <h1 class="white-font"><router-link class="router-link-active" to="/settings">3. 设置</router-link></h1>
        <p class="white-font middle-size ">对场景输出进行设置</p>
        <h1 class="white-font"><router-link class="router-link-active" to="/help">4. 帮助</router-link></h1>
        <p class="white-font middle-size">更多说明，请参考帮助</p>
        <h1 class="white-font"><router-link class="router-link-active" to="/database">5. 数据库（测试版）</router-link></h1>
        <p class="white-font middle-size">查看并下载我们生成的恶意场景数据（测试中，功能并不完善）</p>
        <p class="white-font middle-size">&#128516;上述所有功能均在左侧应用列表中展出，便于你的快捷访问。你也可以通过左侧应用列表的“主页”重新返回本页面</p>
    </div>
</template>

<style scoped>
    h1 {
        font-size: 20px;
    }
    .white-font {
        color: white;
        font-weight: 800;

    }
    .container {
        margin-left: 20px;
    }
    
    .middle-size {
        font-size: 16px;
    }

    .router-link-active {
    text-decoration: none;
    color: orange;
    }
</style>