import axios from 'axios'

export function getIP(params) {
    var instance = axios.create()
    return instance.request({
        url: `http://101.132.238.47/ip.php`,
        params,
    })
}