# shop

::: tip
会返回MossFrp的充值链接等数据。
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
  "type": "shop", #请求类型
  "token": "xxx" #token，绑定用户的userID
}
````
### 响应
```` json
{
  "status": "200", #返回码
  "time": "123",  #响应时间
  "shopData": [ #商城数据
    {
      "name": "xxx", #商品名称
      "price": "xx", #商品价格，理论上全渠道一样
      "description": "xxx", #商品描述
      "alipay": "xxx", #支付宝链接，返回数据可能为null，即无法使用该渠道支付
      "qq": "xxx", #QQ支付链接，返回数据可能为null，即无法使用该渠道支付
      "wechat": "xxx" #微信支付链接，返回数据可能为null，即无法使用该渠道支付
    },
    {
      "name": "xxx", #商品名称
      "price": "xx", #商品价格，理论上全渠道一样
      "description": "xxx", #商品描述
      "alipay": "xxx", #支付宝链接，返回数据可能为null，即无法使用该渠道支付
      "qq": "xxx", #QQ支付链接，返回数据可能为null，即无法使用该渠道支付
      "wechat": "xxx" #微信支付链接，返回数据可能为null，即无法使用该渠道支付
    }
  ]
}
````