<template>
    <div class="card">
        <div>
            <el-image :fit="contain" class="image-container" :src="image.url1"></el-image>
            <div style="text-align: center; color: white;">原图</div>
        </div>
        <div>
            <el-image :fit="contain" class="image-container" :src="image.url2"></el-image>
            <div style="text-align: center; color: white;">生成</div>
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
        width: 420px;
        margin: 20px;
        border-radius: 10px;
    }
    .image-container {
        width: 200px;
        height: 200px;
        box-shadow: 2px 2px gray;
        margin: 5px;
    }
</style>