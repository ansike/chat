# chat

### 任务拆解
1. 项目搭建 
- [x] 初始化项目（web+node）
  - [x] web项目
  - [x] node 普通http服务
  - [x] node ws服务
- [x] 安装连接monogo
- [x] 使用graphql
2. UI界面编写
- [x] 分组列表
- [x] 聊天主页
- [] 聊天能力
  - [x] 多人同时聊天
  - [ ] 引用回复
  - [ ] @回复
3. model设计
- [x] user
- [x] group
- [x] message （存所有的聊天信息与group，user关联）
- [ ] 考虑不做登录前提下 用户的唯一标识
4. API接口
- [x] 用户列表
- [x] 用户详情
- [ ] 分组列表 (写死)
- [ ] 分组详情（主要拿分组内用户）(写死)
- [ ] 聊天记录列表
- [ ] 用户加入分组
5. 单元测试
- [ ] web
- [ ] node

### 使用流程
1. 前提
依赖 mongodb community@5.0
安装：https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/
确保db起在端口是27017，不是的话需要修改node代码，之后可以做到环境变量中

2. 安装项目依赖
分开启动可以看到过程有无错误，没有错可以继续向下
```shell
# 启动node
yarn node-dev

# 启动web
yarn node-dev
```

3. 访问页面
web服务启动在3000端口，node启动了两个服务5000（普通的graphql服务），50001（websocket服务）。

访问页面： http://localhost:3000/
左侧有两个菜单

页面说明：
chat：聊天页面，打开后无法直接聊天，必须使用任意一个小组+用户ID才能加入聊天室（eg: http://localhost:3000/chat/1?uid=6409e8df5b1bee16ec3bc85c）
forum：用户临时demo页，可查看，创建用户，提高用户id给聊天室使用。

数据说明：
聊天小组的数据是在服务层写死的，用户数据和聊天数据是动态创建的。

接口说明：
页面接口：userList，groupList，creatUser等是用的graphql。
聊天数据：首次进入聊天室拉取信息，发布信息及服务同步信息用的是websocket。




