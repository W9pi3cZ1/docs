# bandCode

::: tip
通过请求自动升配穿透码。后端不会提供确认机制，发了请求就直接升配了。 
:::
## 特殊返回码：
"403" 各种创建失败原因，详见message参数。

## 参数
| 参数名 |类型|描述|
|:--- |:--- |:--- |
| type | String |请求类型|
| token | String |绑定用户的userID|
| node | String |该穿透码的节点|
| number | Int |该穿透码的7位编号|
| band | Int |穿透码增加带宽（注意不是”增加到“是”增加“），单位：Mbps|

## 示例

### 请求
```` json
{
  "type": "bandCode", #请求类型
  "token": "xxx", #token，绑定用户的userID
  "node": "xxx", #该穿透码的节点
  "number": "xxx", #该穿透码的7位编号
  "band": "xxx" #穿透码增加带宽（注意不是”增加到“是”增加“），单位：Mbps
}
````

### 响应
```` json
{
  "status": "200", #返回码
  "time": "123", #响应时间
  "coin": "xxx", #续期该穿透码所消耗的银币
  "type": "xxx" #所使用的货币类型（MIXED混合，GOLD金币，SILVER银币）
}
````