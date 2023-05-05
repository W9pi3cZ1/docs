# allNode

::: tip
也是挺重要的，毕竟不指望用户会去背下来全部节点。<br/>
返回数据量有点大，你↗要↘忍↗一↘下↗。
:::

## 特殊返回码
"404" 账号或密码错误

## 参数
| 参数名 |类型|描述|
|:--- |:--- |:--- |
| type | String |请求类型|
| token | String |绑定用户的userID|
| getAsList | String |是否以List的形式获取数据|

## 示例
### 请求
```` json
{
  "type": "allNode", #请求类型
  "token": "xxx", #token，绑定用户的userID
  "getAsList": "true" #是否以List的形式获取数据，可选参数，默认false
}
````
### getAsList不为true响应
```` json
{
  "status": "200", #返回码
  "time": "123", #响应时间
  "nodeList": [ #节点列表
    "ab1",
    "ab2"
  ],
  "nodeData": {
    "ab1": { #节点编号
      "node": "ab1", #节点编号
      "address": "xxx", #地区以及网络类型
      "status": "xxx", #节点状态
      "name": "ab1-xxx", #节点显示名称
      "activity": "xxx", #是否为活动节点（活动节点所创建/续期/升配的穿透码都会变成活动穿透码）
      "load": "xxx%", #节点负载（只有一个的话，就说明是旧版节点，只显示理论负载）
      "price": "xxx", #价格，单位见coin
      "band-max-per": "xxx", #单穿透码最高带宽，不代表节点实际最大带宽
      "coin": "xxx", #购买类型（gold是只能金币购买，silver是只能银币购买，mixed是都可以）
      "uploadTotal": "xxx", #上传流量总量
      "downloadTotal": "xxx", #下载流量总量
      "uploadBand": "xxx", #上传实时带宽
      "downloadBand": "xxx", #下载实时带宽
      "CPUUsage": "xxx", #CPU占用
      "memoryUsed": "xxx", #内存占用
      "memoryTotal": "xxx", #内存总量
      "info": "xxx" #节点信息或备注
    }, #下面同上，只是表现返回多个节点时候的数据结构
    "ab2": {
      "node": "ab2",
      "address": "xxx",
      "status": "xxx",
      "name": "ab2-xxx",
      "activity": "xxx",
      "load": "xxx% | xxx%", #这里后面那个是实际上行带宽负载
      "price": "xxx",
      "band-max-per": "xxx",
      "coin": "xxx",
      "uploadTotal": "xxx",
      "downloadTotal": "xxx",
      "uploadBand": "xxx",
      "downloadBand": "xxx",
      "CPUUsage": "xxx",
      "memoryUsed": "xxx",
      "memoryTotal": "xxx",
      "info": "xxx"
    }
  }
}
````

### getAsList为true的响应
````json
{
  "status": "200", #返回码
  "time": "123", #响应时间
  "nodeData": [
    { #节点编号
      "node": "ab1", #节点编号
      "address": "xxx", #地区以及网络类型
      "status": "xxx",  #节点状态
      "name": "ab1-xxx", #节点显示名称
      "activity": "xxx", #是否为活动节点（活动节点所创建/续期/升配的穿透码都会变成活动穿透码）
      "load": "xxx%", #节点负载（只有一个的话，就说明是旧版节点，只显示理论负载）
      "price": "xxx", #价格，单位见coin
      "band-max-per": "xxx", #单穿透码最高带宽，不代表节点实际最大带宽
      "coin": "xxx", #购买类型（gold是只能金币购买，silver是只能银币购买，mixed是都可以）
      "uploadTotal": "xxx", #上传流量总量
      "downloadTotal": "xxx", #下载流量总量
      "uploadBand": "xxx", #上传实时带宽
      "downloadBand": "xxx", #下载实时带宽
      "CPUUsage": "xxx", #CPU占用
      "memoryUsed": "xxx", #内存占用
      "memoryTotal": "xxx", #内存总量
      "info": "xxx" #节点信息或备注
    },
    {
      "node": "ab2",
      "address": "xxx",
      "status": "xxx",
      "name": "ab2-xxx",
      "activity": "xxx",
      "load": "xxx% | xxx%", #这里后面那个是实际上行带宽负载
      "price": "xxx",
      "band-max-per": "xxx",
      "coin": "xxx",
      "uploadTotal": "xxx",
      "downloadTotal": "xxx",
      "uploadBand": "xxx",
      "downloadBand": "xxx",
      "CPUUsage": "xxx",
      "memoryUsed": "xxx",
      "memoryTotal": "xxx",
      "info": "xxx"
    }
  ]
}
````