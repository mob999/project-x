<template>
    <div class="card">
        <div>
            <el-image :fit="contain" class="image-container" :src="image.url1">
            </el-image>
            <div class="desc-font">&#128517;原图</div>
        </div>
        <div>
            <el-image :fit="contain" class="image-container" :src="image.url2">
            </el-image>
            <div class="desc-font">&#128525;生成</div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['image'])
</script>

<style scoped>
.card {
    display: flex;
    border: solid 2px white;
    width: 1220px;
    margin: 20px;
    border-radius: 10px;
    margin-left: 100px;
}

.image-container {
    width: 600px;
    height: 600px;
    box-shadow: 2px 2px gray;
    margin: 5px;
}

.desc-font {
    text-align: center; 
    color: white; 
    font-weight: 900;
    font-size: 25px;
}
</style>