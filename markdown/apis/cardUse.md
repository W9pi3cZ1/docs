# cardUse
::: tip
使用卡密，此方法为敏感方法，使用错误的卡密会计入三次BadRequest。
:::

## 参数
| 参数名 |类型|描述|
|:--- |:--- |:--- |
| type | String |请求类型|
| card | String |卡密|
| token | String |绑定用户的userID|

## 示例

### 请求
```` json
{
  "type": "cardUse", #请求类型
  "card": "xxx", #卡密
  "token": "xxx" #token，绑定用户的userID
}
````
### 响应

```` json
{
  "success": "xxx", #是否使用成功，布尔值
  "message": "xxx", #对应返回信息，可直接显示输出
  "status": "200", #返回码
  "time": "123" #响应时间
}
````