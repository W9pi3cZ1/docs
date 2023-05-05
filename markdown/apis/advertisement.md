# advertisement

::: tip 提示
会返回MossFrp的广告，一般情况下不会是空数据，但也仅限于一般情况下。
:::

## 特殊返回码
无

## 参数
| 参数名 |类型|描述|
|:--- |:--- |:--- |
| type | String |请求类型|

## 示例
### 请求
```` json
{
  "type": "advertisement", #请求类型
}
````
### 响应
```` json
{
     "status": "200",
  "time": "123",
  "advertisementData": [
       {
         "ID": "1",
      "link": "https://www.xxx.top/xx.png",
      "jump": "https://www.xxx.top/"
    },
    {
         "ID": "2",
      "link": "https://www.aaaa.top/xxx.png",
      "jump": "https://www.aaaa.top/"
    }
  ]
}
````