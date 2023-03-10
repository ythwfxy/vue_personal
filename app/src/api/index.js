// 所有API接口统一管理
import requests from "./requests";

import Qs from 'qs'
export const reqOnetalk=()=>{
    //发请求
    return requests({url:'https://v1.hitokoto.cn?max_length=24',method:'get'}
    )
}
export const reqWeather=()=>{
    //发请求
    return requests({url:'https://www.yiketianqi.com/free/day?appid=27518395&appsecret=MvuKDWs1&unescape=1',method:'get'}
    )
}
export const reqThinking=()=>{
    return requests({url:'http://127.0.0.1:80/api/thinking'})
}
export const reqInfo=(params)=>{
    return requests({url:'http://127.0.0.1:80/api/pic',method:'post',data:Qs.stringify(params)})
}
export const reqStudy=()=>{
    return requests({url:'http://127.0.0.1:80/api/study'})
}