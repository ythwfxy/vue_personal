const express=require('express')

const app=express()
//配置解析表单数据的中间件
app.use(express.urlencoded({extended:false}))
app.use('/img', express.static('img'))
//跨域cors解决
const cors=require('cors')
app.use(cors())

//路由
const router=require('./apiRouter')
app.use('/api',router)

app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1')
})