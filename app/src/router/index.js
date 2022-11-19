//配置路由
import Vue from  'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from './routes'
let originPush = VueRouter.prototype.push
let originReplace=VueRouter.prototype.replace
VueRouter.prototype.push=function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)

    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace=function(location,resolve,reject){
    if(resolve &&reject){
        originReplace.call(this,location,resolve,reject)

    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}
let router= new VueRouter({
    routes,
    scrollBehavior() {
        // 始终滚动到顶部
        return { top: 0 }
      },
})
export default router