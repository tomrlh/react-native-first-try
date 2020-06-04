import axios from 'axios'

const api = axios.create({
    // localhost shoud be mapped correctly to Android emulator (search adb reverse)
    baseURL: 'https://api.thecatapi.com/v1'
})

export default api