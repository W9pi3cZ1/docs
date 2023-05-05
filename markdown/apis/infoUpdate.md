# infoUpdate

::: tip
需要先发送verification请求向邮箱发送验证码才可以操作。<br/>
此方法为敏感方法，发现异常会被立刻阻断，客户端需要自备人机验证，API后续开发会提供人机验证。<br/>
当更新邮件的时候，需要向两个邮箱（新旧）同时发送infoUpdate验证码，客户端需要判定俩邮箱是否一致。<br/>
QQ参数只能在QQ机器人那里解绑绑定。<br/>
注意，此方法是验证码通过在前，信息检查在后，故一旦信息合法，需要获取新的验证码（冷却不重置）
:::
## 特殊返回码
"403" 信息有误，详见message参数。<br/>
"404" 验证码错误。

## 参数
| 参数名 |类型|描述|
|:--- |:--- |:--- |
| type | String |请求类型|
| token | String |绑定用户的userID|
| key | String |更新的目标参数（username用户名称，email邮箱，password密码）|
| value | String |对应参数的信息|
| code | String |发送verification请求后获得的验证码，verification请求的key参数：infoUpdate|
| code2 | String |只有在更新email的时候才会用到，平时不需要加，作为新邮箱的验证码|

## 示例
### 请求
```` json
{
  "type": "infoUpdate", #请求类型
  "token": "xxx", #token，绑定用户的userID
  "key": "xxx", #更新的目标参数（username用户名称，email邮箱，password密码）
  "value": "xxx", #对应参数的信息
  "code": "xxx", #发送verification请求后获得的验证码，verification请求的key参数：infoUpdate
  "code2": "xxx" #只有在更新email的时候才会用到，平时不需要加，作为新邮箱的验证码
}
````
### 响应
```` json
{
  "status": "200", #返回码
  "time": "123" #响应时间
}
````