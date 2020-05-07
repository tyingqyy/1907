/*
 * @描述: 封装的axios
 * @创建者: 张莹
 * @Date: 2020-04-27 21:04:17
 * @修改者: 张莹
 * @LastEditTime: 2020-04-27 21:06:01
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import axios from 'axios';
axios.interceptors.request.use(config => {
    return config;
})
axios.interceptors.response.use((res) => {
    const {data, status} = res;
    if(status >= 200 && status < 300){
        return data;
    }
    handleError(res)
    return Promise.reject(res);
});


function handleError(err){
    console.error(err)
}

const instance = axios.create({
    baseURL: '/api',
})

export const get = async (url, params = {}) => {
    return await instance.get(url, {params})
}
// export const post = async (url, data = {}) => {``
//     return await instance.post(url, data)
// }
// export const put = async (url, data = {}) => {
//     return await instance.put(url, data)
// }
// export const del = async (url, data = {}) => {
//     return await instance.delete(url, data)
// }