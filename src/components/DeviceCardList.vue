<template>
    <el-scrollbar>
        <div class="cards">
            <DeviceCard class="scroll-item" v-for="image in image_list" :image="image"></DeviceCard>
        </div>
    </el-scrollbar>
</template>

<script setup>
    import DeviceCard from './DeviceCard.vue';
    const props  = defineProps(['image_list'])
   

</script>

<style scoped>
    .cards {
        display: flex;
    }
</style>