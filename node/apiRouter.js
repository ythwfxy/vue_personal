const express=require('express')
const router=express.Router()
const mysql=require('mysql')

const db=mysql.createPool({
    host:'127.0.0.1',//数据库Ip
    user:'root',//数据库账号
    password:'admin123',//数据库密码
    database:'my_db_01',//指定操作那个数据库
})
var result
db.query('select con,time from our_node',(err,results)=>{
    if(err) return console.log(err.message)
    //如果select 结果为数组
    result=results
})

router.get('/thinking',(req,res)=>{
    const query=req.query
    res.send({
        status:0,//0成功  1失败
        msg:'GET 请求成功',
        data:result
    })
})
var totals
db.query('select count(*) as total from node_pic', (err, result) => {
    if (err) return console.log(err.message)
    //如果select 结果为数组
    totals = result[0].total
})
router.post('/pic', (req, res) => {
    const query = req.body
    console.log(req.body)
    let ye = Math.ceil(totals / query.pageSize);
    let start = (query.pageNo - 1) * query.pageSize
    db.query(`SELECT * FROM node_pic LIMIT ${query.pageSize} offset ${start}`, (err, result) => {
        if (err) return console.log(err.message)
        //如果select 结果为数组
        res.send({
            status: 0,//0成功  1失败
            msg: 'GET 请求成功',
            data: {pic:[result.slice(0,query.pageSize/2),result.slice(query.pageSize/2)],Info:{
                total:totals,
                pageNo:query.pageNo,
                pageSize:query.pageSize
            }}
        })
    })
    
})


module.exports=router