export default function ({ $axios, app, store }) {
    let token = localStorage.getItem("auth")
    console.log(token);
    // debugger
    if (token) {
        $axios.onRequest(config => {                   
            config.headers.common['Authorization'] =`Bearer ${token}`
        })

        $axios.get('/auth/user').then(res=> {
            store.state.user = res.data
            store.state.auth = true
        })

    }
}