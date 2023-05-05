# register

::: tip 
需要先发送verification请求向邮箱发送验证码才可以注册。<br/>
此方法为敏感方法，发现异常会被立刻阻断，客户端需要自备人机验证，API后续开发会提供人机验证。<br/>
对于QQ这一些非必要参数，可以通过更新信息的API进行补充。<br/>
:::
::: warning
此方法是验证码通过在前，信息检查在后，故一旦信息不合法，需要获取新的验证码（冷却不重置）
:::

## 特殊返回码：
"403" 信息有误，详见message参数。<br/>
"404" 验证码错误。

## 参数
| 参数名 |类型|描述|
|:--- |:--- |:--- |
| type | String |请求类型|
| email | String |用户的邮箱|
| username | String |用户名称）|
| password | String |用户密码|
| code | String |发送verification请求后获得的验证码，verification请求的key参数：register|

## 示例
### 请求
```` json
{
  "type": "register", #请求类型
  "email": "xxx", #用户的邮箱
  "username": "xxx", #用户名称
  "password": "xxx", #用户密码
  "code": "xxx" #发送verification请求后获得的验证码，verification请求的key参数：register
}
````
### 响应
```` json
{
  "status": "200", #返回码
  "time": "123" #响应时间
}
````
