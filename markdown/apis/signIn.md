# signIn

::: tip
返回用户的签到数据。 
:::

## 特殊返回码
无

| 参数名 |类型|描述|
|:--- |:--- |:--- |
| type | String |请求类型|
| token | String |绑定用户的userID|

## 示例

### 请求
```` json
{
  "type": "signIn", #请求类型
  "token": "xxx" #token，绑定用户的userID
}
````
### 响应
```` json
{
  "first": "xxx", #是否用户今日第一次签到，布尔值
  "luck": "xxx", #用户今日人品数值
  "luckMessage": "xxx", #用户今日人品信息
  "coin": "xxx", #用户签到获取的银币
  "signInMessage": "xxx", #用户签到的返回信息
  "status": "200", #返回码
  "time": "123" #响应时间
}
````