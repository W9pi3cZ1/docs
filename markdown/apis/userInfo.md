# userInfo
::: tip
也是一个必需的请求。会返回用户所有的非隐私信息。 
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
  {
  "type": "userInfo", #请求类型
  "token": "xxx" #token，绑定用户的userID
  }
}
````
### 请求
```` json
{
  "status": "200", #返回码
  "time": "123", #响应时间
  "userInfo": { #返回的用户信息列表，为JSON信息
    "userID": "xxx", #用户编号
    "username": "xxx", #用户名称
    "email": "xxx", #邮箱
    "qq": "xxx", #QQ，可能为null
    "signIn": "xxx", #用户是否签到，布尔值
    "level": "xxx", #用户等级（admin站长、staff管理员、provider节点提供者、default普通用户、banned封禁用户）
    "gold": "xxx", #金币数量
    "silver": "xxx" #银币数量
  }
}
````