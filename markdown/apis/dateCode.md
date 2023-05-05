# dateCode

::: tip
通过请求自动续期穿透码。后端不会提供确认机制，发了请求就直接续期了。 
:::

## 特殊返回码
"403" 各种创建失败原因，详见message参数。

## 参数
| 参数名 |类型|描述|
|:--- |:--- |:--- |
| type | String |请求类型|
| token | String |绑定用户的userID|
| node | String |该穿透码的节点|
| number | Int |该穿透码的7位编号|
| date | Int |穿透码时长，单位：天|

## 示例

### 请求
``` json
{
  "type": "dateCode", #请求类型
  "token": "xxx", #token，绑定用户的userID
  "node": "xxx", #该穿透码的节点
  "number": "xxx", #该穿透码的7位编号
  "date": "xxx" #穿透码续期时长，单位：天
}
````

```` json
{
  "status": "200", #返回码
  "time": "123", #响应时间
  "coin": "xxx", #续期该穿透码所消耗的银币
  "type": "xxx" #所使用的货币类型（MIXED混合，GOLD金币，SILVER银币）
}
````