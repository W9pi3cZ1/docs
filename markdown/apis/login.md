# login
::: tip
使用API必须的请求。<br/>
会返回一个token，后续都要使用。<br/>
<br/>
:::

## 特殊返回码
"404" 账号或密码错误

## 参数
| 参数名 |类型|描述|
|:--- |:--- |:--- |
| type | String |请求类型|
| loginType | String |登录方式，qq/email/userID|
| account | String |登录账号|
| password | String |登录密码，无encryption参数则为明文|
| encryption | Boolean |加密，可选参数，true则需password加密为sha-256后传参|

## 示例
### 请求
```` json
{
    "type": "login", #请求类型
    "loginType": "qq", #登录方式，qq/email/userID
    "account": "123456", #登录账号
    "password": "66666666", #登录密码，无encryption参数则为明文
    "encryption": "true" #加密，可选参数，true则需password加密为sha-256后传参
}
````
### 响应
```` json
{
    "status": "200", #返回码
    "time": "123", #响应时间
    "token": "xxx" #返回的token，应定义为全局变量，全程都要用
}