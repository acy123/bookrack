import Vue from 'vue'
import App from './App'
import router from './router';
import axios from 'axios'
import './css/common.css'
import './font/iconfont.css';
import './font1/iconfont.css';
import 'swiper/dist/css/swiper.min.css';
import Vuelazy from 'vue-lazyload';
Vue.config.productionTip = false
Vue.use(Vuelazy, {
    loading: 'http://img.zcool.cn/community/01799d5a113d80a801204a0e277a58.gif'
})
Vue.prototype.$ajax = axios;

Vue.component('MyHeader', () =>
    import ('@/components/header.vue'))

Vue.component('DlList', () =>
        import ('@/components/dllist.vue'))
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})