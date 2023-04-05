<script setup>
import Server from '../../server/index.js'
import { ref, computed, onMounted } from 'vue';
let database_src = {}
let page_size = {}
const models = ref([])
const current_page = ref(1)
const tab_name = ref()


onMounted(()=>Server.fetchImageDataBase().then(res => {
    database_src = res.data
    Object.keys(database_src).forEach(key => {
        models.value.push(key)
        page_size[key] = database_src[key].length
    })
}))

const cur_images = computed(()=>{
    return database_src[tab_name.value]
})




</script>

<template>
    <div id="database">
        <el-container>
            <el-header>
                <el-tabs v-model="tab_name" >
                    <el-tab-pane v-for="model in models" :label="model" :name="model">
                    </el-tab-pane>
                </el-tabs>
                <el-button>下载全部</el-button>
                
            </el-header>
            <el-main>
                <el-image style="margin-top: 10px;margin-right: 15px; height: 100px;" v-for="image in cur_images" :src="image"></el-image>
            </el-main>
            <el-footer>
                <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="100"
                    v-model:current-page="current_page" />
            </el-footer>
        </el-container>


    </div>
</template>

<style scoped>
#database {
    background-color: white;
    height: 900px;
    margin: 0;
    padding: 0;
}
</style>