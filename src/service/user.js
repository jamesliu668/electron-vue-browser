import axios from '../libs/axios'

export function getIP(params) {
    return axios.request({
        url: `http://101.132.238.47/ip.php`,
        params,
    })
}