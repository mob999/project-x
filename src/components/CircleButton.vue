<template>
    <div class="container">
        <div class="circle">{{ content }}</div>
    </div>
</template>

<script setup>
    defineProps({
        content: String
    })
</script>

<style scoped>
    .circle {
        border-radius: 50%;
        border: solid 2px gray;
        height: 200px;
        width: 200px;
        text-align: center;
        line-height: 200px;
        margin-right: 100px;
    }
    .circle:hover {
        
    }   
</style>