## websocket

典型握手:

```sh
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
Origin: http://example.com
```

其中, 

1. ```shell
   Upgrade: websocket
   Connection: Upgrade
   # 告诉 Apache 、 Nginx 等服务器：发起的是Websocket协议
   ```

2. ```sh
   
   Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
   Sec-WebSocket-Protocol: chat, superchat
   Sec-WebSocket-Version: 13
   
   # Sec-WebSocket-Key 是一个 Base64 encode 的值，这个是浏览器随机生成的，告诉服务器：泥煤，不要忽悠窝，我要验证尼是不是真的是Websocket助理
   
   # Sec_WebSocket-Protocol 是一个用户定义的字符串，用来区分同URL下，不同的服务所需要的协议。简单理解：今晚我要服务A，别搞错啦~
   
   # 是告诉服务器所使用的 Websocket Draft （协议版本），在最初的时候，Websocket协议还在 Draft 阶段，各种奇奇怪怪的协议都有，而且还有很多期奇奇怪怪不同的东西，什么Firefox和Chrome用的不是一个版本之类的，当初Websocket协议太多可是一个大难题。。不过现在还好，已经定下来啦~大家都使用的一个东西~ 脱水： 服务员，我要的是13岁的噢→_→
   
   ```

服务器返回成功， 表示以及接受请求

```sh

HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=
Sec-WebSocket-Protocol: chat

# Upgrade: websocket, Connection: Upgrade 表示成功切换协议
# Sec-WebSocket-Accept 这个则是经过服务器确认，并且加密过后的 Sec-WebSocket-Key
#  Sec-WebSocket-Protocol 则是表示最终使用的协议。
```

### 一、初识WebSocket

**一、什么是WebSocket**

WebSocket是一个允许Web应用程序(通常指浏览器)与服务器进行双向通信的协议。HTML5的WebSocket API主要是为浏览器端提供了一个基于TCP协议实现全双工通信的方法。

**二、优点**

1.全双工通信
在传统的Web应用中，浏览器与服务器交互都是半双工通信(但并不完全是半双工通信,服务器无法主动向浏览器推送)。即同一时间内数据流向是单一的，浏览器向服务器发送请求后需要等待服务器返回数据。
而在WebSocket中，浏览器和服务器之间可随时进行通信，不必等待对方传送完毕，浏览器接收到服务器的数据后会自动触发onmessage事件。
2.实时性
传统的Web应用很难做到实时通信，通常是用长连接或轮询的方式进行。对于服务器来说，轮询法是被动传输数据，即使数据有更新，但浏览器还未发送请求，则消息无法进行实时推送。
3.更少的数据传输及更少的请求数
传统Web应用中浏览器与服务器进行数据交互通常需要经过以下几个步骤：

1. DNS查询
2. TCP三次握手
3. 传送HTTP请求头
4. 传送HTTP请求体(如果有)
5. 服务器处理后传送响应头
6. 服务器传送响应体
7. 断开TCP连接

在WebSocket中进行交互通常为以下几个步骤：

1. DNS查询
2. TCP三次握手
3. WebSocket握手
4. 浏览器发送请求
5. 服务器发送响应
6. 断开TCP连接

从上面可以看到如果仅是一次通信，二者差异并不是很大，甚至WebSocket比普通方式还要多一次握手。但在需要频繁交互数据时，WebSocket的优势就显露出来了。
例如，当有10次数据交互时，前者要建立10个TCP连接(HTTP 1.0需要建立10次,HTTP 1.1可以通过长连接keep-alive复用TCP连接)，然后要发送10次请求头(包含Cookie等信息,可能会达到K级别)，接收的响应信息可能才几个字节(如某些心跳包)，这样会极大的浪费带宽等资源。试想，如果你在做一个聊天应用，想要获取当前在线人数，你需要向服务器发送你的全部cookie(至少要几百个字节)，除此之外HTTP头中还要包含其他信息，如URL、host等，这些都是必不可少的。最后服务器返回了几百个字节，但其中真正需要用到的只有不到10字节(只需要知道在线人数，其他信息都是无用的)。通过WebSocket，浏览器可以向服务器发送1~2字节的请求(不需要带上cookie验证身份，可以在握手时进行认证，一旦TCP连接建立，则在连接上的通信都是认证过身份的数据，这也是它的好处之一：便于服务端识别客户端的状态)，这个请求仅包含一个特定的控制码(由开发者实现的应用层协议指定)，服务器只需返回特定的返回码及数据即可，一切无用的字节都被省去。

**三、应用场景**
1.数据传输实时性要求较高
Web聊天室、贴吧直播贴、微博话题墙、专题讨论、[实时网络攻击展示(已应用)](http://map.ipviking.com/)等
2.推送类应用
网站消息通知、邮箱新邮件提醒
3.监控在线状态、精确统计在线时长
统计用户行为
4.远程调试代码、云指令系统
部分移动端调试工具是基于WebSocket开发(此处为WebSocket协议而非WebSocket API)
5.其他用途
[网络(包括内网)嗅探(端口扫描)](http://www.andlabs.org/tools/jsrecon.html)、僵尸网络及后门(云指令系统)



### 二、WebSocket握手协议之浏览器请求

目前WebSocket协议版本已更新到13，本系列文章均以WebSocket 13版本为例。

一、通过WebSocket API与服务器进行握手

WebSocket的构造方法中有两个参数，其原型如下：WebSocket(url, [protocols]),url为需要连接的地址。WebSocket的协议头的写法有2个，一个是ws://，另一个是wss://,它们的区别就是后者相当于https，是加密的。如果url没有加端口号，当协议头为ws时默认为80端口，当协议头为wss时默认为443端口。如果需要连接其他端口，则需要向http协议一样，加上端口号，如ws://localhost:12345。url其他部分与标准URL一致，以下URL是合法的：ws://localhost:12345/path/?queryString=queryString。具体URL标准将在下面协议详解中详细说明。
第二个参数protocols为可选参数，代表WebSocket协议的子协议(可以是用户自定义的)。你可能已经注意到了第二个参数起名为protocols最后有个s,它可以是一个字符串亦可以是一个数组，如果protocols是一个字符串，则它等价于一个单一值的数组。例如，
WebSocket('ws://localhost','subprotocol')
等价于
WebSocket('ws://localhost',['subprotocol'])

二、WebSocket URL解析

以下内容部分翻译自W3C规范

WebSocket URL解析组件解析URL步骤如下，这些步骤会返回一个主机名、端口号、资源名和一个安全标识符否则返回失败：

如果URL不是一个绝对URL，算法失败
将URL字符串转化为UTF-8格式
如果URL的模式不是ws或wss，则算法失败
如果解析的URL结果中存在非空的片段，则算法失败
如果是ws模式的URL，则将安全标识符设为假，如果是wss模式的URL则将安全标示符置为真
解析host名
如果为显示的声明端口号，则认为端口号是隐式声明的
如果端口号是隐式声明的，当安全标示符为真时，端口号是443，否则为80
如果资源名是非空的，则将其设置到结果中，否则将/作为资源名
如果URL请求字符串非空，则将请求字符串加入结果中，并使用?拼接(同HTTP中URL的请求字符串写法)
将主机名、端口号、资源名和安全标示符返回
三、浏览器发送握手包

通过本文第一部分我们可知，浏览器端发送握手请求的API非常简单，只需要new出一个WebSocket的对象，最少情况只需要带一个参数，如var ws = new WebSocket('ws://localhost');
我们在http://dev.w3.org中打开控制台使用var ws = new WebSocket('ws://localhost','test');浏览器会发出类似如下请求(注意：这里不会存在跨域问题，不需要在同域下即可，因为WebSocket是在TCP层面上传输数据，而”域”的概念在应用层):

GET ws://localhost/ HTTP/1.1
Host: localhost
Connection: Upgrade
Pragma: no-cache
Cache-Control: no-cache
Upgrade: websocket
Origin: http://dev.w3.org
Sec-WebSocket-Version: 13
Sec-WebSocket-Protocol:test
User-Agent: Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.122 Safari/537.36
Accept-Encoding: gzip,deflate,sdch
Accept-Language: zh-CN,zh;q=0.8,en-US;q=0.6,en;q=0.4
Sec-WebSocket-Key: 32pdAhmqFrFZik/MP7fU8A==
Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits

其实这个就是一个标准的HTTP协议，WebSocket协议中的握手过程是HTTP协议，而一旦握手成功后，就不在是HTTP协议，而是直接通过TCP传输数据。
请求头中大部分内容与HTTP协议一致，这里不再解释，只解释那些不曾出现在普通请求的请求头。
Connection: Upgrade是固定的，表示需要转换为其他协议
Upgrade: websocket是固定的，说明要转换成的协议时WebSocket
Sec-WebSocket-Version: 13代表WebSocket的版本，目前版本是13
Sec-WebSocket-Key: 32pdAhmqFrFZik/MP7fU8A==这个是握手的认证串，服务端需要将此key进行一定处理后返回，再由浏览器验证有效性，必须符合算法结果才可正常建立连接(类似交换证书，但实际上只是简单的哈希计算)
Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits代表客户端支持的扩展类型
Sec-WebSocket-Protocol:test为子协议，是否存在取决于构造方法的第二个参数，如果第二个参数是个数组，则此处的值为数组按一个逗号和一个空格分隔，相当于[].join(', ');
其中Sec-WebSocket-Key是非常重要的请求头，我们会在服务端处理这个请求头，只有处理正确，浏览器才会正确的与服务器建立连接。

### 三、WebSocket握手协议之服务器响应

本文主要介绍服务端应用在接收到WebSocket握手后，如何构造正确的响应包。本文部分翻译自[rfc6455](http://tools.ietf.org/html/rfc6455)。

**一、响应包Sec-WebSocket-Accept字段值的计算**

上篇说道浏览器发送的最重要的一个请求头是Sec-WebSocket-Key，服务端程序需要根据RFC6455中的算法计算Sec-WebSocket-Accept的值。我们以浏览器发送了Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==为例，介绍如何计算响应值。
首先服务端程序要将Sec-WebSocket-Key的值与一个魔法字符串”258EAFA5-E914-47DA-95CA-C5AB0DC85B11″拼接到一起，得到”dGhlIHNhbXBsZSBub25jZQ==258EAFA5-E914-47DA-95CA-C5AB0DC85B11″，关于魔法字符串的来历，有兴趣的同学可以看一下[RFC4122](http://tools.ietf.org/html/rfc4122)(实际是一个GUID)。
第二步，将上一步中合并的字符串使用sha1计算sha1值，这里如果使用PHP的[sha1](http://www.w3cschool.cn/func_string_sha1.html)函数进行计算，要注意sha1的第二个参数必须显式的给出true值，否则sha1的结果是一个16进制的字符串，而不是二进制数值，其他语言如果有类似的情况也要注意，求出的结果是二进制，而不是转换后的16进制值。
第三步，将第二步中的二进制值使用base64进行编码，使用PHP计算方法如下：
`base64_encode(sha1($secWebSocketKey."258EAFA5-E914-47DA-95CA-C5AB0DC85B11",true));`
最后得出的结果为”s3pPLMBiTxaQ9kYGzzhZRbK+xOo=”，将这个结果作为Sec-WebSocket-Accept的值，放入响应头中。

**二、响应头的构成**

1.HTTP状态码
握手响应的HTTP状态码为101 Switching Protocols，代表协议转换，如HTTP/1.1 101 Switching Protocols
2.Upgrade字段
Upgrade: websocket固定，代表转换为WebSocket协议，同浏览器请求头
3.Connection字段
Connection: Upgrade固定，同浏览器请求头
4.Sec-WebSocket-Accept
通过上面的方法计算出的值
5.Sec-WebSocket-Protocol
可选返回头，根据浏览器发送的子协议返回。如果浏览器发送了多个子协议，这里可以选择一个或多个进行返回，此处是子协议协商的过程

**三、服务端响应步骤**

1. 判断Origin是否可信，上一篇中说到，WebSocket不存在跨域问题，在任何域中都可以与其他域建立WebSocket连接。但出于某些原因，我们不希望一些其他的网站连接服务器，这时可以验证Origin是否在访问源白名单中。
2. 通过Cookie验证身份，由于WebSocket的握手协议仍是通过HTTP协议进行的，它会向服务端发送目标域下(当前运行的WebSocket服务器)的cookie。服务端程序可以通过cookie将该socket与用户身份绑定到一起，就不需要在以后传输身份信息
3. 读取Sec-WebSocket-Version的值判断协议版本，如果不是13，则需要用其他方法解析(本系列只介绍13版本，其他版本的握手及通信不在介绍范围内)
4. 通过Sec-WebSocket-Key计算Sec-WebSocket-Accept的值
5. 读取Sec-WebSocket-Protocol，根据服务器实现情况返回支持的一个或多个子协议名，使用半角逗号分隔
6. 将第二节中的响应头发送给浏览器

**四、关于Sec-WebSocket-Extensions**

在WebSocket的请求和响应头中，还有一个可选的字段Sec-WebSocket-Extensions，目前很少使用，现将RFC6455内容翻译如下：
“Sec-WebSocket-Extensions”字段仅用在WebSocket连接握手阶段。它先由客户端(浏览器)发送到服务器，然后再由服务器传回客户端，以便协商连接过程中的协议层扩展集。
“Sec-WebSocket-Extensions”字段可能在HTTP请求中出现多次(等价于出现一次，但有多个值)，但是最多只能在HTTP响应中出现一次。

**五、握手阶段的错误处理**

WebSocket协议中并未明确规定当服务器遇到错误(伪造)的握手请求该如何处理，你可以直接断开客户端的连接，但这样并不是比较好的方法，推荐使用下面的做法(浏览器会忽略出101之外的状态码,返回非101状态码浏览器会自动切断连接)：
1.当客户端请求中缺少host、Upgrade、Connection、Sec-WebSocket-Key、Sec-WebSocket-Version时返回状态码400(语法格式错误)
2.当Origin不在可信源中时，返回403(权限)
3.当身份验证(cookie)出错时，返回401或403
4.当version或protocol不支持时，返回501(尚未实现)

### 四、WebSocket握手协议之通信建立与错误处理

本篇主要介绍浏览器在服务器返回的握手协议有问题时如何进行处理。注：本文介绍的内容已在浏览器内部实现，不需要做任何编码工作，以下内容只介绍原理和协议本身。

一、连接异常的情况

以下情况，客户端必须停止握手并断开连接：

服务器域名不能解析
数据包不能成功的传递到服务器
服务器指定端口禁止连接
服务器TLS传输失败，例如服务器证书无法验证
服务器无法完成握手协议，例如目标服务器不是WebSocket服务器(返回了200或其他非101状态码)
服务器握手成功，但一些选项引起客户端放弃连接(如服务器提供了客户端无法识别子协议)
服务器在完成握手协议后意外关闭了连接
以上所有的情况都会使WebSocket以1006(连接意外断开)的退出码断开连接。

二、握手成功后浏览器的工作

当整个握手阶段无任何异常时，服务器与浏览器已经建立连接，此时浏览器会完成一些初始化工作。
首先将readyState属性设置为OPEN(WebSocket的常量，值为1)，readyState是WebSocket的一个属性，代表连接的状态，包含CONNECTING、OPEN、CLOSING、CLOSED等4个状态。其中OPEN即连接已建立，可以进行数据通信了。
如果extensions非空，则设置此属性的值。
如果protocol的值非空，则设置此属性的值。
如果返回了cookie设置的响应头，则需要将指定的cookie设置到WebSocket构造函数的第二个参数URL下。
最后触发WebSocket的onopen事件处理函数。

三、WebSocket对象的属性及方法介绍

调用WebSocket构造方法后，会返回一个WebSocket对象，类似如下:

URL: "ws://localhost/"
binaryType: "blob"
bufferedAmount: 0
extensions: ""
onclose: null
onerror: null
onmessage: null
onopen: null
protocol: ""
readyState: 3
url: "ws://localhost/"
CLOSED: 3
CLOSING: 2
CONNECTING: 0
OPEN: 1
close: function close() { [native code] }
send: function send() { [native code] }

binaryType为二进制使用哪种类型的数据结构，取值可以是blob或arraybuffer.
bufferedAmount为缓存中剩余的字节数，有时数据并不是准备好才传输到网络上，而是一边生成一边传递，这时需要将数据缓存到一定大小再发送，并且需要定时将缓存中剩余的内容发送出去。bufferedAmount就记录了send函数中的应用数据(UTF-8的字符串或二进制的数据)队列中还未被发送到网络的字节数。如果连接关闭，该属性值会在send方法被调用时增长(一旦连接关闭，该属性值就不会重置为0)
onclose在连接关闭时触发
onerror在发生错误时触发
onmessage在浏览器接到服务器发来的数据时触发
onopen在连接建立时触发
readyState连接状态，上文中已介绍
CLOSED连接已经关闭
CLOSING连接关闭中，此时处于半关闭状态，浏览器已经发送了关闭指令，但此时服务器还未响应关闭指令。浏览器不能再收发数据了。
CONNECTING正在连接中，浏览器已经发送了握手请求，等待服务器返回握手响应。
OPEN已建立连接，可以传输数据。
close方法用于浏览器主动关闭连接，它会发送操作码8到服务器，它接受2个可选参数，关闭码和关闭原因。有关close的详细用法将在以后的文章中详细介绍。
send方法用于浏览器向服务器发送数据，它支持多种数据类型的传输，send的用法也会在后面的文章中详细介绍。

### 五、WebSocket协议帧结构详解

**一、帧结构图及含义**

```
0                   1                   2                   3
0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-------+-+-------------+-------------------------------+
|F|R|R|R| opcode|M| Payload len |    Extended payload length    |
|I|S|S|S|  (4)  |A|     (7)     |            (16/64)            |
|N|V|V|V|       |S|             |   (if payload len==126/127)   |
| |1|2|3|       |K|             |                               |
+-+-+-+-+-------+-+-------------+ - - - - - - - - - - - - - - - +
|    Extended payload length continued, if payload len == 127   |
+ - - - - - - - - - - - - - - - +-------------------------------+
|                               | Masking-key, if MASK set to 1 |
+-------------------------------+-------------------------------+
|    Masking-key (continued)    |          Payload Data         |
+-------------------------------- - - - - - - - - - - - - - - - +
:                   Payload Data continued ...                  :
+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
|                   Payload Data continued ...                  |
+---------------------------------------------------------------+
```

0Bit：
FIN 结束标识位，如果FIN为1，代表该帧为结束帧（如果一条消息过长可以将其拆分为多个帧，这时候FIN可以置为0，表示后面还有数据帧，服务器需要将该帧内容缓存起来，待所有帧都接收后再拼接到一起。控制帧不可拆分为多帧）。

1~3Bit：
RSV1~RSV3 保留标识位，以后做协议扩展时才会用到，目前该3位都为0

4~7Bit：
opcode 操作码，用于标识该帧负载的类型，如果收到了未知的操作码，则根据协议，需要断开WebSocket连接。操作码含义如下：
0x00 连续帧，浏览器的WebSocket API一般不会收到该类型的操作码
0x01 文本帧，最常用到的数据帧类别之一，表示该帧的负载是一段文本(UTF-8字符流)
0x02 二进制帧，较常用到的数据帧类别之一，表示该帧的负载是二进制数据
0x03-0x07 保留帧，留作未来非控制帧扩展使用
0x08 关闭连接控制帧，表示要断开WebSocket连接，浏览器端调用close方法会发送0x08控制帧
0x09 ping帧，用于检测端点是否可用，暂未发现浏览器可以通过何种方法发送该帧
0x0A pong帧，用于回复ping帧，暂未发现浏览器可以发送此种类型的控制帧
0x0B-0x0F 保留帧，留作未来控制帧扩展使用

8Bit：
MASK 掩码标识位，用来表明负载是否经过掩码处理，浏览器发送的数据都是经过掩码处理(浏览器自动处理，无需开发者编码)，服务器发送的帧必须不经过掩码处理。所以此处浏览器发送的帧必为1，服务器发送的帧必为0，否则应断开WebSocket连接

9~15Bit：
payload length 负载长度，单位字节如果负载长度0~125字节，则此处就是负载长度的字节数，如果负载长度在126~65535之间，则此处的值为126，16~32Bit表示负载的真实长度。如果负载长度在65536~2的64次方-1时，16~80Bit表示负载的真实长度。其中负载长度包括应用数据长度和扩展数据的长度

payload length 后面4个字节可能是掩码的key(如果掩码位是1则有这4个字节的key，否则没有)，掩码计算方法将在后面给出。

接下来就是负载的数据了，他们可能需要根据掩码的key进行编码（仅浏览器需要掩码），如果存在扩展数据，需要放在应用数据之前

**二、掩码计算**

如果你只需要做浏览器端的编程，可以忽略以下内容，浏览器会自动计算掩码。如果你需要做服务端编程，则需要详细阅读下面内容，你必须根据掩码计算的方法将浏览器发送的数据帧进行解码操作。
掩码的key值是一个由客户端随机选择的32比特值。首先，浏览器必须从掩码可用的key值中选择一个值，用于封装数据帧。掩码的key必须是一个不可预测的值(例如从一个健壮的熵值中获取)，并且必须使服务器或代理不能简单的预测出接下来的key值，以防止有人使用恶意的应用通过监听网络选择key值。
掩码操作不会影响负载的长度，通过下面的算法可以进行编码和解码，编码和解码的步骤完全一样：

1. 将负载和掩码分成8位位组(分割成字节)
2. 将负载每一个字节与掩码的每个字节做循环位异或操作
3. 将结果得到的每一个字节拼接到一起即为掩码计算后的数据

使用PHP计算代码如下：
`function parseMask($source, $mask){$len = strlen($source);$dest = '';for($i=0; $i<$len; $i++){ $dest .= chr(ord($source[$i]) ^ ord($mask[$i%4])); } return $dest; }`

### 六、WebSocket协议控制帧结构详解

目前，WebSocket控制帧有3种：Close(关闭帧)、Ping以及Pong。本篇文章主要对RFC6455的5.5节进行翻译及介绍。

**一、控制帧**

控制帧是由操作码上的位值置为1来定义的。目前，控制帧的操作码定义了0x08(关闭帧)、0x09(Ping帧)、0x0A(Pong帧)。0x0B-0x0F是为那些将来可能定义而目前尚未定义的控制帧预留的。
控制帧用于WebSocket协议交换状态信息，控制帧可以插在消息片段之间。
注意：所有的控制帧的负载长度务必不大于125字节，并且禁止对控制帧进行分片处理。

**二、关闭帧**

关闭帧的操作码是0x08。
关闭帧可能包含数据部分（应用数据帧），该部分表明了关闭的原因，例如端点关闭、端点接收帧过大或端点收到的帧不符合预期。如果有数据部分，则数据的前两个字节必须是一个无符号整数（网络字节序），该无符号整数表示了一个状态码，具体定义哪些关闭码将在后面的文章中介绍。在无符号整数后面，可能还有一个UTF-8编码的数据，表示关闭原因，关闭原因由开发者自行定义（可选），并无规范。关闭原因并不一定是对人可读的，但会对调试或传递相关信息起到一定的作用。由于数据不能保证人类可读，所以客户端一定不能将其显示给用户（会在关闭事件onclose中）。
客户端发送给服务器的关闭帧必须掩码处理。
应用程序在发送了一个关闭帧后，禁止再发送任何数据（此时处于CLOSING状态）。
如果端点（客户端或服务器）收到了一个关闭帧，并且之前没有发送过关闭帧，则端点必须发送一个关闭帧作为响应。（当端点发送一个关闭帧回应时，通常会显示它收到的状态码。）当端点可以发送关闭响应时应尽快发送关闭响应。一个端点可以延迟发送响应直到它的当前消息发送完毕（例如，已经发送了大多数的消息片段，则端点可能会在发送关闭响应帧前先将剩下的消息帧发送出去）。但不能保证对方在已经发送了关闭帧后还能够继续处理这些数据。
在双方都以发送并接收了关闭帧后，端点需要断掉WebSocket连接并且必须关闭底层的TCP连接。服务器必须立即切断底层TCP连接，客户端最好等待服务器断开连接，但也可以在发送并接收了关闭帧后任何时候断开连接，例如在一段时间内服务器仍没有断开TCP连接。
如果服务器和客户端同时发送了关闭帧，两端都会接收关闭帧，并且都需要断开TCP连接。

**三、PING帧**

Ping帧的操作码为0x09。
Ping帧可以包含应用数据。
一旦接到了一个Ping帧，端点必须返回一个Pong帧作为响应，除非它收到了一个关闭帧。它应在可以发送时尽快发送Pong帧响应。
端点可以在连接建立后一直到连接关闭前任何时候发送Ping帧。
提示：Ping帧既可用于保持活动状态也可用于验证远端仍可响应数据。

**四、PONG帧**
Pong帧的操作码为0x0A。
Pong帧必须与Ping帧拥有相同的应用数据部分。
如果端点收到了多个Ping帧，但还没来的及全部回应，可以只回应最后一个Ping帧。
Pong帧可以在未收到Ping帧时就被发送，用作单向心跳包。
对未被请求的Pong帧（对方主动发送的Pong帧）进行回应是不需要的。

### 七、WebSocket协议关闭帧

本篇介绍WebSocket协议的关闭帧，包括客户端及服务器如何发送并处理关闭帧、关闭帧错误码及错误处理方法。本篇内容主要翻译自RFC 6455 第7节，大部分介绍的是原理，如果仅需要了解应用方法可略过此篇。

**一、关闭WebSocket连接**

要断开WebSocket连接，需要一个端点断开底层的TCP连接。端点需要通过某种方式来完全关闭TCP连接，例如TLS会话，并适当的丢弃未接收完毕的数据。端点也在必要时可以通过一些有效的方式断开连接，如在受到攻击时。
在一般情况下，底层TCP连接应先被服务端断开，以便保持TIME_WAIT状态。这是为了防止其在2个最大分节生命期（1~4分钟，Windows操作系统为4分钟）之内重新打开，否则可能会由于接到一个高序列的SYN包而重新打开连接。在一些异常的情况下（如在一段时间内未收到服务器端TCP关闭帧），客户端可以关闭TCP连接。如果服务器发出关闭指令，则它需要立即关闭连接。而客户端发出关闭指令需要等待服务器发送的TCP关闭帧。

**二、关闭握手阶段**

关闭握手阶段需要一个状态码和一个可选的关闭原因，端点必须发送一个关闭控制帧，并设置状态码和关闭原因。一旦端点发送并接收了关闭帧，就需要按上节中的方法关闭WebSocket连接。

**三、关闭握手阶段开始**

当接收或发送关闭帧后，代表关闭握手阶段开始，此时WebSocket连接进入到CLOSING状态。

**四、关闭WebSocket连接结束**

当底层TCP连接关闭时，代表WebSocket连接已关闭，此时WebSocket连接状态改为CLOSED。如果TCP连接在WebSocket关闭握手结束后断开，则此次WebSocket为一次完整的（cleanly）关闭。
如果WebSocket连接未能建立，它仍叫做连接关闭，但不是完整的。

**五、关闭码**

关闭帧可以包含一个关闭码和一个关闭原因。关闭帧可以由任何一方发起，也可以双方同时发起。若关闭帧没有指明关闭码，则认为关闭码为1005，如果WebSocket连接断开，而没有任何关闭帧（如底层传输时丢帧），则认为关闭码为1006。
注意：双方发送的关闭码可能不一致。举个栗子，对方发送了一个关闭帧，但本地程序还没有将数据及关闭帧从socket接收缓存中读取出来，然后本地程序决定发送一个关闭帧，双方都会发送并接收到一个关闭帧并不会再次发送关闭帧（即只进行一次收发，即使不是发过关闭帧后收到的帧）。

**六、关闭原因**

关闭原因是可选的，跟在关闭码后面，为UTF-8编码的数据，并未对其内容做详细的定义。如果没有设置关闭原因，则关闭原因是一个空的字符串。
注意：同关闭码一样，双方发送的关闭原因可能不一致。

**七、强制关闭连接**

一些情况会引起强制关闭连接，当情况发生时，客户端需要关闭连接并将错误返回给用户（如控制台中报错等），同样，服务器需要关闭连接并将问题记录在日志中。
如果WebSocket连接建立在端点需要强制关闭连接之前，端点需要在处理关闭帧之前发送关闭帧并发送正确的关闭码。当强制关闭连接后，端点不能再次尝试向对方发送任何数据（包括关闭帧）。
除了上述情况或指定的应用层协议（如WebSocket API）外，客户端不应该断开连接。

**八、关闭码**

1000 正常关闭
1001 端点丢失，如服务器宕机或浏览器切换其他页面
1002 协议错误
1003 数据类型错误（例如端点只能处理文本，但传来了二进制消息）
1004 保留
1005 保留，禁止由端点发送此类型关闭帧，它是用来当端点没有表明关闭码时的默认关闭码。
1006 保留，禁止由端点发送此类型关闭帧，它是用来当端点未发送关闭帧，连接异常断开时使用。
1007 数据内容错误（如在text帧中非utf-8编码的数据）
1008 端点已接收消息，但违反其策略。当没有更好的关闭码（1003或1009）的时候用此关闭码或者不希望显示错误细节。
1009 内容过长
1010 客户端期望服务器协商一个或多个扩展，但这些扩展并未在WebSocket握手响应中返回。
1011 遇到未知情况无法执行请求
1015 保留，禁止由端点发送此类型关闭帧，它会在TLS握手失败（如证书验证失败）时返回。
保留关闭码
0-999 尚未使用
1000-2999 协议保留，用于未来版本、扩展等
3000-3999 为库、框架、应用程序保留，这些状态码可在IANA中注册，这些状态码并未在此协议中实现。
4000-4999 私有保留，不可被注册。用于开发者自定义关闭码。