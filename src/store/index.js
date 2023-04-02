import { createStore } from 'vuex'
import Server from '../../server'

const store = createStore({
  state () {
    return {
      models: [],
      settings: {
        brightness: 0,
        size: 0,
        adjust: false,
        url: 'default'
      }
    }
  },
  mutations: {
    fetch_models(state) {
        Server.fetchModels().then((res)=>{
            state.models = res.data
        })
    },
    update_settings(state, param) {
       const { brightness, size, adjust, url } = param
       state.settings = {
        brightness,size,adjust,url
       }
    }
  }
})

export default store