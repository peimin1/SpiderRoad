#### 1. 文章1 

https://blog.csdn.net/jiangwei0910410003/article/details/80372118

Xposed Substrate

因为Frida大致原理是手机端安装一个server程序，然后把手机端的端口转到PC端，PC端写python脚本进行通信，而python脚本中需要hook的代码采用javascript语言。

![image001](https://img2018.cnblogs.com/blog/1636218/201906/1636218-20190607111407190-1930725773.jpg)

![image003](https://img2018.cnblogs.com/blog/1636218/201906/1636218-20190607111409153-927661775.jpg)

说到逆向APP，很多人首先想到的都是反编译，但是单看反编译出来的代码很难得知某个函数在被调用时所传入的参数和它返回的值，极大地增加了逆向时的复杂度，有没有什么办法可以方便地知道被传入的参数和返回值呢？