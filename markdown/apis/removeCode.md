# removeCode 

:::tip
一个有一定风险的请求，请在客户端做好确认机制。后端不会提供确认机制，发了请求就直接删除了。 
:::
## 特殊返回码：
 "403" 各种错误原因，详见message参数。
## 参数
| 参数名 |类型|描述|
|:--- |:--- |:--- |
| type | String |请求类型|
| token | String |绑定用户的userID|
| node | String |该穿透码的节点|
| number | Int |该穿透码的七位数字编号|

## 示例
### 请求
```` json
{
  "type": "removeCode", #请求类型
  "token": "xxx", #token，绑定用户的userID
  "node": "xxx", #该穿透码的节点
  "number": "xxx" #该穿透码的七位数字编号
}
````
### 响应
```` json
{
  "status": "200", #返回码
  "time": "123", #响应时间
  "coin": "xxx" #删除该穿透码所返还的银币（一般是扣除当天）
}
````
