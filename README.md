# chat

### 任务拆解
1. 项目搭建 
- [ ] 初始化项目（web+node）
  - [x] web项目
  - [ ] node 普通http服务
  - [ ] node ws服务
- [x] 安装连接monogo
- [ ] 使用graphql
2. UI界面编写
- [x] 分组列表
- [x] 聊天主页
- [ ] 聊天能力
  - 引用回复
  - @回复
3. model设计
- [ ] user
- [ ] group
- [ ] chat （存所有的聊天信息与group，user关联）
- [ ] 考虑不做登录前提下 用户的唯一标识
4. API接口
- [ ] 用户列表
- [ ] 用户详情
- [ ] 分组列表
- [ ] 分组详情（主要拿分组内用户）
- [ ] 聊天记录列表
- [ ] 用户加入分组
5. 单元测试
- [ ] web
- [ ] node