# luck
::: tip
返回用户的今日人品。
:::

## 特殊返回码
无

## 参数
| 参数名 |类型|描述|
|:--- |:--- |:--- |
| type | String |请求类型|
| token | String |绑定用户的userID|

## 示例
### 请求
```` json
{
  "type": "luck", #请求类型
  "token": "xxx" #token，绑定用户的userID
}
````
### 响应
```` json
{
  "first": "xxx", #是否用户今日第一次获取今日人品，布尔值
  "luck": "xxx", #用户今日人品数值
  "luckMessage": "xxx", #用户今日人品信息
  "status": "200", #返回码
  "time": "123" #响应时间
}
````