# download

::: tip
会返回MossFrp的下载链接等数据。
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
  "type": "download", #请求类型
  "token": "xxx" #token，绑定用户的userID
}
````

```` json
{
  "status": "200", #返回码
  "time": "123", #响应时间
  "downloadData": { #客户端下载数据
    "xxx": { #版本ID
      "name": "xxx", #版本名称
      "version": "xxx", #该客户端版本的版本号
      "description": "xxx", #该客户端的简介
      "update": "xxx", #更新日志
      "links": { #链接列表
        "xxx": { #链接名称
          "type": "xxx", #链接类型
          "description": "xxx", #链接描述
          "link": "xxx" #链接
        }
      }
    },
    "xx": {
      "name": "xxx",
      "version": "xxx",
      "description": "xxx",
      "update": "xxx",
      "links": {
        "github": {
          "description": "xxx",
          "link": "xxx"
        }
      }
    }
  }
}
 ````