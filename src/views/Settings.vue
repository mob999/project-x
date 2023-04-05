<template>
    <div style="color: white; font-size: 20px;">
        <el-row>
            <el-col>
                <div style="display: flex;">场景输出亮度<el-slider style="width: 300px;margin-left: 30px;"
                        v-model="properties.brightness" /></div>
            </el-col>
            <el-divider />
            <el-col>
                <div style="display: flex;">场景输出尺寸<el-slider style="width: 300px;margin-left: 30px;"
                        v-model="properties.size" /></div>
            </el-col>
            <el-divider />
            <el-col>
                <div>过曝光优化
                    <el-switch style="width: 300px;margin-left: 35px;" v-model="properties.adjust">
                    </el-switch>
                </div>
            </el-col>
            <el-divider />
            <el-col>
                <div>设备url
                    <el-input style="width: 500px;margin-left: 60px;" placeholder="请输入您设备的url，若留空，将使用我们默认的设备"
                        v-model="properties.device_url"></el-input>
                </div>
            </el-col>
            <el-divider />
            <el-col>
                <div>默认模型
                    <el-select style="width: 200px;margin-left: 45px;" v-model="default_model" placeholder="选择模型">
                        <el-option v-for="item in options" :key="item" :value="item" />
                    </el-select>
                </div>
            </el-col>
            <el-divider />
        </el-row>
        <span>
            <el-button @click="saveSettings" type="primary">保存设置</el-button>
            <el-button type="danger">恢复默认</el-button>
        </span>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { ref } from 'vue';
const store = useStore()
const properties = store.state.settings
const options = store.state.models
const default_model = ref(store.state.default_model)
const saveSettings = () => {
    store.commit('update_settings', properties)
    store.commit('update_default_model', default_model)
}

</script>