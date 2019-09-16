### websocket 抓取示例

#### 1. 什么是Websocket

```
WebSocket是一种在单个TCP连接上进行全双工通讯的协议。WebSocket通信协议于2011年被IETF定为标准RFC 6455，并由RFC7936补充规范。WebSocket API也被W3C定为标准。
WebSocket使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。在WebSocket API中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。

应用场景: 直播平台的弹幕， 实时聊天，股票金融的实时显示
```

#### python 连接websocket

```模板
import time
import json
import pandas as pd
import requests
import websocket
from requests.adapters import HTTPAdapter
import time

try:
    import thread
except ImportError:
    import _thread as thread


class websocket_class :
    def __init__(self):
       pass
    
    #这里就是websocket爬虫的核心，发送请求，接收数据并做最后处理，
    def on_message(self,ws, message):
        pass

    def on_error(self,ws, error):
        print(error)
    #关闭websocket长连接
    def on_close(self,ws):
        print("关闭连接")

	#程序运行第一步
    def on_open(self,ws):
        def run(*args):
          	#这里面就是写大家倒退出来页面请求第一步的代码
          	pass
        thread.start_new_thread(run, ())


if __name__ == "__main__":
    header = {
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh;q=0.9,',
        'Cache-Control': 'no-cache',
        'Connection': 'Upgrade',
        'Cookie': cookie,
        'Host': 'ws-nextbi.yushanfang.com',
        'Origin': 'https://nextbi.yushanfang.com',
        'Pragma': 'no-cache',
        'Sec-WebSocket-Extensions': 'permessage-deflate; client_max_window_bits',
        #这个参数要进行实时修改
        'Sec-WebSocket-Key': 'QBn6rnK29DZL6BC6+O2TRA==',
        'Sec-WebSocket-Version': '13',
        'Upgrade': 'websocket',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36'
    }

    websocket.enableTrace(True)
    websocket_obj = websocket_class(cookie, appId, cateId,filename)
    ws = websocket.WebSocketApp("wss://ws-nextbi.yushanfang.com/",
                                on_message = websocket_obj.on_message,
                                on_error = websocket_obj.on_error,
                                on_close = websocket_obj.on_close,
                                header=header)

    ws.on_open = websocket_obj.on_open
    ws.run_forever()
```

#### 测试地址

```
websocket 测试样例:  http://demos.kaazing.com/echo/index.html
```

2. 龙珠直播

   ```
   import websocket
   import time
   
   url = "wss://idc-cn-xs-ssl.longzhu.com/?room_id=2039583"
   header = {
   'Accept-Encoding':'gzip, deflate, br',
   'Accept-Language':'zh-CN,zh;q=0.9',
   'Cache-Control':'no-cache',
   'Connection':'Upgrade',
   'Cookie':'UM_distinctid=16ae540873e470-0d597b772607a4-7b1e3b-100200-16ae540873f314; __mtmc=2.1880898868.1558624376; pluguest=58033C95E9743798A60B1F26AF46530A579C537E047F40BC28184CB32C624E06D058025CEB29DF4880B14257F089E3DF2525EF675045997F; _ma=OREN.2.1076191956.1558624376; __mtmb=2.258913357.1558624376',
   'Host':'idc-cn-sj-ssl.longzhu.com',
   'Origin':'http://m.longzhu.com',
   'Pragma':'no-cache',
   'Sec-WebSocket-Extensions':'permessage-deflate; client_max_window_bits',
   'Sec-WebSocket-Key':'8eEXoYw8/5jRILqtkIWmkg==',
   'Sec-WebSocket-Version':'13',
   'Upgrade':'websocket',
   'User-Agent':'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.62 Mobile Safari/537.36'
   }
   
   # 龙珠的Websocket
   ws = websocket.create_connection(url=url, header=header, timeout=15)
   while True:
   	time.sleep(0.5)
   	print("================")
   	data = ws.recv()
   	print(data)
   # ws.send("2probe")
   # print(ws.recv())
   # ws.send("5")
   # print(ws.recv())
   #
   # time.sleep(5)
   # print(ws.recv())
   
   # ws.send_frame("以帧形式发送数据")
   # ws.recv_data_frame()
   #
   # ws.send_binary("以二进制形式发送数据".encode())
   ```

   