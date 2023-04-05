<script setup>
import UploadCard from '../components/UploadCard.vue';
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import server from '../../server';
const usr_image = ref({})
const upload_url = "http://123.125.240.150:29014/upload-image"
const store = useStore()
const options = computed(()=> store.state.models)
const settings = computed(()=> store.state.settings)
const model_name = ref(store.state.default_model)
const image_info_list = ref([])
const image_id = ref(1)
const upload_success = (res) => {
  usr_image.value = res
  server.fetchScore(model_name.value).then(res=>{
        image_info_list.value.unshift({
          name: image_id,
          model: res.data.model,
          rank: res.data.standard_score
        })
        image_id += 1
      })
}
const headerRowStyle = "\
  background: gray;\
  color: black;\
"
</script>

<template>
  <div class="common-layout">
    <upload-card :image="usr_image" class="device-card-demo"></upload-card>
    <el-upload :action="upload_url" method="post" :on-success="upload_success" :data="{...settings, model_name}">
      <el-select style="margin-left: 100px;" v-model="model_name"  placeholder="选择模型">
        <el-option
          v-for="item in options"
          :key="item"
          :value="item"
        />
      </el-select>
      <el-button type="primary">上传图片</el-button>
    </el-upload>
    <div style="margin-top: 20px;">
        <el-table :header-row-style="headerRowStyle" :row-style="rowStyle" :data="image_info_list">
          <el-table-column  prop="name" label="图片名称"></el-table-column>
          <el-table-column prop="model" label="使用模型"></el-table-column>
          <el-table-column prop="rank" label="评分"></el-table-column>
        </el-table>
    </div>
  </div>
</template>

<style scoped>

</style>
