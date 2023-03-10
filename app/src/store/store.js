import Vue from 'vue'
import Vuex from 'vuex'

import {reqOnetalk,reqWeather} from '@/api'
import { reqThinking,reqInfo, reqStudy } from '../api'
Vue.use(Vuex)
const state={

    oneTalk:[],
    weaTher:[],
    thinking:[],
    pic:[],
    Info:[],
    study:[]
}
const mutations={
    ONETALK(state,data){
        state.oneTalk=data
    },
    WEATHER(state,data){

        state.weaTher=data
    },
    THINKING(state,data){

        state.thinking=data.data
    },
    PICINFO(state,data){

        state.pic=data.data.pic
        state.Info=data.data.Info
    },
    STUDY(state,data){
        state.study=data.data
    }
}
const actions={
    //通过API接口函数调用 向服务器发请求获取数据
    async Onetalk({commit}){
        let result=await reqOnetalk()
        if(result.status===200){
            commit('ONETALK',result.data)
        }
    },
    //获取天气
    async Weather({commit}){
        let result=await reqWeather()
        if(result.status===200){
            
            commit('WEATHER',result.data)
        }
    },
    //获取说说
    async Thinking({commit}){
        let result=await reqThinking()
        if(result.status===200){
            
            commit('THINKING',result.data)
        }
    },
    //获取图片
    async PicInfo({commit},params){
        let result=await reqInfo(params)
        console.log(result)
        if(result.status===200){
            
            commit('PICINFO',result.data)
        }
    },
    // 获取学习内容
    async Study({commit}){
        let result=await reqStudy()
        if(result.status===200){
            
            commit('STUDY',result.data)
        }
    }
}
const getters={}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})