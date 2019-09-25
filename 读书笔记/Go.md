#### 1.Hello world

```go
package main

import "fmt"

func main() {
   fmt.Println("Hello, World!")
}
```



#### 2. Go语言结构

Go 语言的基础组成有以下几个部分：包声明，引入包，函数，变量，语句 & 表达式，注释

数据类型的出现是为了把数据分成所需内存大小不同的数据，编程的时候需要用大数据的时候才需要申请大内存，就可以充分利用内存。

Go 语言按类别有以下几种数据类型：布尔型，数字类型，字符串类型，派生类型

Go 语言变量名由字母、数字、下划线组成，其中首个字符不能为数字。

变量没有初始化就成为0值

#### 3. 函数

```go
func function_name( [parameter list] ) [return_types] {
   函数体
}

such as
func max(num1, num2 int) int {
   /* 声明局部变量 */
   var result int

   if (num1 > num2) {
      result = num1
   } else {
      result = num2
   }
   return result
}
```

#### 4. 指针

