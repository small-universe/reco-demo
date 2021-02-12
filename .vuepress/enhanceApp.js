/**
 * 扩展 VuePress 应用
 */

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

export default ({
                    Vue,
                }) => {
    // ...做一些其他的应用级别的优化
    Vue.use(Element);

}
