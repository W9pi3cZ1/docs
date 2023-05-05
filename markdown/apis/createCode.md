# createCode

::: tip
通过请求自动创建穿透码，创建完成后需要一定时间给节点响应。<br/>
后端不会提供确认机制，发了请求就直接创建了。 
:::

## 特殊返回码：
"403" 各种错误原因，详见message参数

## 参数
| 参数名 |类型|描述|
|:--- |:--- |:--- |
| type | String |请求类型|
| token | String |绑定用户的userID|
| node | String |该穿透码的节点|
| date | Int |穿透码时长，单位：天|
| band | Int |穿透码带宽，单位：Mbps|

## 示例

### 请求
```` json
{
  "type": "createCode", #请求类型
  "token": "xxx", #token，绑定用户的userID
  "node": "xxx", #该穿透码的节点
  "date": "xxx", #穿透码时长，单位：天
  "band": "xxx" #穿透码带宽，单位：Mbps
}
````

### 响应

```` json
{
  "status": "200", #返回码
  "time": "123", #响应时间
  "coin": "xxx", #创建该穿透码所消耗的银币
  "type": "xxx" #所使用的货币类型（MIXED混合，GOLD金币，SILVER银币）
}
````