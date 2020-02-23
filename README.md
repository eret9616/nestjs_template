## 项目结构

```
     |-- src ---- common      错误处理/日志/参数校验/数据库连接/redis服务
              |
              |-- middleware  第三方中间件
              |
              |-- router      路由地址
              |
              |-- tasks       定时任务
              |
              |-- static      存放静态文件
```

## 安装依赖

```bash 
$ npm run INSTALL
```

## 脚本

```bash
# 本地测试环境
$ npm run start:dev

# 在测试机环境部署
$ npm run start:test

# 在测试及重新部署
$ npm run RESTART

# 在线上生产环境部署
$ npm run start:prod
```