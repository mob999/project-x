<script setup>
import DeviceCardList from '../components/DeviceCardList.vue';
import server from '../../server/index'
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import { useStore } from 'vuex';
const image_list = ref([])
const model_name = ref()

const image_info_list = ref([
  {
    name: 'no.1',
    model: 'snow',
    rank: 100
  },
  {
    name: 'no.2',
    model: 'snow',
    rank: 100
  },
  {
    name: 'no.3',
    model: 'snow',
    rank: 100
  },
])
const store = useStore()
const options = computed(()=> store.state.models)

server.getDeviceImages().then((res) => {
  image_list.value = res.data.reverse()
})

const settings = computed(()=> store.state.settings)
console.log(settings.value)
const capture = () => {
  server.capture(settings.value).then(() => {
    server.getNewestImage().then((res) => {
      image_list.value.unshift(res.data)
    })
  })
}

const rowStyle = "\
  background: gray;\
  color: black;\
  font-weight: 900\
  "

const headerRowStyle = "\
  background: gray;\
  color: black;\
"


</script>

<template>
  <div>
    <device-card-list class="card-list" :image_list="image_list"></device-card-list>
    <div class="option-box">
      <el-select v-model="model_name"  placeholder="选择模型">
        <el-option
          v-for="item in options"
          :key="item"
          :value="item"
        />
      </el-select>
      <el-button type="primary" @click="capture">拍摄</el-button>
    </div>
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
.card-list {
  height: 300px;
  margin-bottom: 20px;
  border: solid 1px white;
  background-color: gray;
}

.cell {
  background-color: gray;
}

</style>
