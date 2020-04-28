import axios from 'axios'

class HttpRequest {
    constructor() {
        //this.baseUrl = baseUrl
        this.queue = {}
    }

    getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,
            headers: {
            },
        }
        return config
    }

    destroy(url) {
        delete this.queue[url]
        if (!Object.keys(this.queue).length) {
            //hide loading notification
        }
    }

    interceptors(instance, url) {
        instance.interceptors.request.use(
            config => {
                if (!Object.keys(this.queue).length) {
                    //show loading notification if needed
                }

                this.queue[url] = true
                return config
            },

            error => {
                return Promise.reject(error)
            }
        )

        instance.interceptors.response.use(
            res => {
                this.destroy(url)
                // todo
                // console.log('data', res.data)
                // if the data is json, we can JSON.parse before return
                return res.data
            },

            error => {
                this.destroy(url)

                let errorInfo = error.response
                if (!errorInfo) {
                    const {
                        request: { statusText, status },
                        config,
                    } = JSON.parse(JSON.stringify(error))

                    errorInfo = {
                        statusText,
                        status,
                        request: { responseURL: config.url },
                    }
                }

                return Promise.reject(error)
            }
        )
    }

    request(options) {
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance, options.url)
        return instance(options)
    }

}

const httpRequest = new HttpRequest()
export default httpRequest