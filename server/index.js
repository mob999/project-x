import axios from "axios"

const server_url = "http://123.125.240.150:29014/"
const camera_url = "http://192.168.137.39:8000/api/"

const server = axios.create({
    baseURL: server_url,
    timeout: 60000,
})

const camera = axios.create({
    baseURL: camera_url,
    timeout: 60000
})

const getDeviceImages = () => {
    return server({
        url: '/device-images',
        method: 'get'
    })
}

const getNewestImage = () => {
    return server({
        url: '/get-newest',
        method: 'get'
    })
}

const capture = (settings) => {
    return camera({
        url: '/get-image',
        method: 'get',
        params: settings
    })
}

const postImage = (image) => {
    return server({
        url: '/post-image',
        method: 'post',
        params: image
    })
}

const fetchModels = () => {
    return server({
        url: '/get-models',
        method: 'get'
    })
}

const fetchScore = (model) => {
    return server({
        url: '/get-score?model='+model,
        method: 'get',
    })
}

const fetchImageDataBase = (start, size) => {
    return server({
        url: '/database/get-images',
        method: 'get',
        params: {'start': start, 'size': size}
    })
}

export default {
    getDeviceImages, postImage, capture, getNewestImage, fetchModels, fetchScore, fetchImageDataBase
}