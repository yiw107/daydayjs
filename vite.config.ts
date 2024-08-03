//引入依赖包
import {defineConfig} from 'vite'

// 定义 Vite 配置
export default defineConfig({
    server:{
        proxy:{
            '/api':{
              //target就是 要转发的地址
                target:'http://localhost:3000',
                changeOrigin:true//跨域
            }
        }
    }
})