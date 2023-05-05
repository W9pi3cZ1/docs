# statistic

::: tip
会返回一些实时的统计信息。
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
  "type": "statistic", #请求类型
  "token": "xxx" #token，绑定用户的userID
}
````
### 响应
```` json
{
  "userCount": "xxx", #MossFrp用户总数
  "codeCount": "xxx", #MossFrp在线隧道总数
  "nodeCount": "xxx", #MossFrp可用节点总数
  "signInCount": "xxx", #MossFrp今日签到总数
  "userCodeCount": "xxx", #该用户在线穿透码总数
  "status": "200", #返回码
  "time": "123" #响应时间
}
````