# userCode
::: tip
也是一个必需的请求。会返回用户所有的穿透码及其完整信息。
:::

## 特殊返回码
无

## 参数

| 参数名 |类型|描述|
|:--- |:--- |:--- |
| type | String |请求类型|
| token | String |绑定用户的userID|
| getAsList | Boolean |是否以List的形式获取数据|

## 示例

### 请求
```` json
{
  "type": "userCode", #请求类型
  "token": "xxx", #token，绑定用户的userID
  "getAsList": "true" #是否以List的形式获取数据，可选参数，默认false
}
````

### getAsList不等于true情况下的响应
```` json
{
  "status": "200", #返回码
  "time": "123", #响应时间
  "codeList": [ #穿透码key列表
    "1",
    "2"
  ],
  "codeData": { #返回的穿透码列表，为JSON形式
    "1": { #数据编号，一般从1开始，顺序向下排，便于读取
      "node": "xxx", #节点编号
      "number": "xxx", #穿透码编号，用于操作穿透码
      "code": "xxx", #穿透码
      "activity": "xxx", #是否为活动穿透码（是的话无法删除）
      "stop": "xxx", #到期时间
      "port": "xxx", #服务端口，可用端口为顺序后9个
      "start": "xxx", #创建时间
      "warning": "xxx", #是否发送到期警告
      "ID": "xxx", #穿透码编号，仅为区分穿透码使用
      "band": "xxx", #带宽，单位Mbps
      "user": "xxx", #用户userID
      "status": "xxx" #穿透码状态，run为正常运行，outdated为到期，banned为封禁
    }, #下面同上，只是表现多个穿透码时候的数据结构
    "2": {
      "node": "xxx",
      "number": "xxx",
      "code": "xxx",
      "activity": "xxx",
      "stop": "xxx",
      "port": "xxx",
      "start": "xxx",
      "warning": "xxx",
      "ID": "xxx",
      "band": "xxx",
      "user": "xxx",
      "status": "xxx"
    }
  }
}
````
### getAsList=true情况下的响应
```` json
{
  "status": "200", #返回码
  "time": "123", #响应时间
  "codeData": [ #返回的穿透码列表，为JSON形式
    { #数据编号，一般从1开始，顺序向下排，便于读取
      "node": "xxx", #节点编号
      "number": "xxx", #穿透码编号，用于操作穿透码
      "code": "xxx", #穿透码
      "activity": "xxx", #是否为活动穿透码（是的话无法删除）
      "stop": "xxx", #到期时间
      "port": "xxx", #服务端口，可用端口为顺序后9个
      "start": "xxx", #创建时间
      "warning": "xxx", #是否发送到期警告
      "ID": "xxx", #穿透码编号，仅为区分穿透码使用
      "band": "xxx", #带宽，单位Mbps
      "user": "xxx", #用户userID
      "status": "xxx" #穿透码状态，run为正常运行，outdated为到期，banned为封禁
    },  #下面同上，只是表现多个穿透码时候的数据结构
    {
      "node": "xxx",
      "number": "xxx",
      "code": "xxx",
      "activity": "xxx",
      "stop": "xxx",
      "port": "xxx",
      "start": "xxx",
      "warning": "xxx",
      "ID": "xxx",
      "band": "xxx",
      "user": "xxx",
      "status": "xxx"
    }
  ]
}
````