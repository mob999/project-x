<script setup>
import UploadCard from '../components/UploadCard.vue';
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
const usr_image = ref({})
const upload_url = "http://123.125.240.150:29014/upload-image"
const store = useStore()
const options = computed(()=> store.state.models)
const settings = computed(()=> store.state.settings)
const upload_success = (res) => {
  usr_image.value = res
}

</script>

<template>
  <div class="common-layout">
    <upload-card :image="usr_image" class="device-card-demo"></upload-card>
    <el-upload :action="upload_url" method="post" :on-success="upload_success" :data="settings">
      <el-select style="margin-left: 100px;" v-model="model_name"  placeholder="选择模型">
        <el-option
          v-for="item in options"
          :key="item"
          :value="item"
        />
      </el-select>
      <el-button type="primary">上传图片</el-button>
    </el-upload>

  </div>
</template>

<style scoped>

</style>
