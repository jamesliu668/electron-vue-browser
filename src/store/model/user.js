import { getIP } from '../../service/user'

export default {
    namespaced: true,
    state: {
        userName: "James",
        ip: "127.0.0.1"
    },

    mutations: {
        setUserName(state, userName) {
            state.userName = userName
        },

        setIP(state, ip) {
            state.ip = ip.data
        }
    },

    actions: {
        init(context) {
            console.log('page init')
            context.commit("setUserName", "Henry")

        },

        getIP: async function (ctx) {
            return new Promise(resolve => {
                getIP().then(result => {
                    if (result) {
                        ctx.commit('setIP', result)
                        resolve(true)
                    } else {
                        resolve(false)
                    }
                }).catch(err => {
                    console.log('error ', err)
                    resolve(false)
                })
            })
        },
    }
}
