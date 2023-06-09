---
prev: false
next: ./login
---
# 前言
API 现已开放测试啦！ 欢迎各位大佬前来调试与二次开发捏！注意，由于加密格式的变更，需要私信机器人使用#更新信息指令重新设置密码才能登录成功！

数据返回格式均为JSON，使用GET方式请求。<br/>
请求格式也可使用POST，输入数据请使用JSON格式。<br/>
使用POST格式请在GET参数内加上void=post。<br/>
请严格参照请求格式，注意参数大小写等细节。<br/>
参数返回时http状态码均为200，实际状态码在status参数里面。<br/>
以下接收内容均为返回码为200的情况下才会返回的。<br/>
如果返回码为非200，基本只会有message参数解释。<br/>

API 调用地址：`https://https.ghs.wiki:7002/API?`

## 常用输入参数
"type" 请求类型，必需<br/>
"token" 请求token，相当于密钥，绑定IP与userID
除非示例里面没有用到token，其它情况下都得用

## 常用status返回码解析
"200" 请求成功<br/>
"400" 缺少type参数或该参数错误<br/>
"400" 参数错误或参数不足<br/>
"401" Token错误或缺失<br/>
"403" 无权限访问该内容<br/>
"423" 当前访问IP被限制为黑名单（出现多次非法请求或爆破等情况会自动拉黑）

::: warning
1. 由于WebAPI本身特性原因，有小概率会出现请求失败的情况，推荐如果请求失败的话，有延迟的重新请求2-3次。
2. 请勿快速请求同一个不需要经常更新的内容，会被视为DOS，我也会不定期翻看各第三方客户端的源码找此类问题
:::