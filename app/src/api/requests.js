// 对axios二次封装
import axios from 'axios'
const requests=axios.create({
    timeout:5000,

})
// 对外暴露
export default requests