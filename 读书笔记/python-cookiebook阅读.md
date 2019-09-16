### Python - CookieBook 

### 第1 - 2章

#### 1、 *号表达式

```python
1. 前置
2. 后置
3. 中间
4. 星号表达式在迭代元素为可变长元组的序列时是很有用的

def sun(items):
    """使用分割语法巧妙实现递归算法"""
    head, *tail = items
    return head + sum(tail) if tail else head
```

#### 2. deque

使用 deque(maxlen=N) 构造函数会新建一个固定大小的队列。当新的元素加入并 

且这个队列已满的时候，最老的元素会自动被移除掉。 

在队列两端插入或删除元素时间复杂度都是 O(1) ，而在列表的开头插入或删除元 

素的时间复杂度为 O(N) 。

```python
from collections import deque
```



#### 3. 怎样从一个集合中获得最大或者最小的 N 个元素列表？

堆数据结构最重要的特征是 heap[0] 永远是最小的元素。并且剩余的元素可以很 

容易的通过调用 heapq.heappop() 方法得到，该方法会先将第一个元素弹出来，然后 

用下一个最小的元素来取代被弹出元素（这种操作时间复杂度仅仅是 O(log N)，N 是 

堆大小）。比如，如果想要查找最小的 3 个元素，

```python
import heapq
nums = [1, 8, 2, 23, 7, -4, 18, 23, 42, 37, 2]
print(heapq.nlargest(3, nums)) # Prints [42, 37, 23]
print(heapq.nsmallest(3, nums)) # Print
# 可用lambda表达式实现更加复杂的操作
```

### 第3章

#### 1. 数字四舍五入

```python
round(value, ndigits)
```

当一个值刚好在两个边界的中间的时候，round 函数返回离它最近的偶数

传给 round() 函数的 ndigits 参数可以是负数，这种情况下，舍入运算会作用在 

十位、百位、千位等上面

对于python 浮点数的问题， 如果不能容忍一点点误差。 就需要考虑使用decimal模块

decimal 模块的一个主要特征是允许你控制计算的每一方面，包括数字位数和四 

舍五入运算。

#### 2. 格式化输出单个数字

```python
x = 1112234.56789
print('The value is {:0,.2f}'.format(x))
```

#### 3. 二八十六进制整数

```python
x = 1234
print(bin(x))
print(oct(x))
print(hex(x))

print(format(x, 'b'))
print(format(x, 'o'))
print(format(x, 'x'))
```

#### 4. 分数运算

fractions 模块可以被用来执行包含分数的数学运算。

```python
from fractions import Fraction
a = Fraction(5, 4)
b = Fraction(7, 16)
print( a + b)
```

#### 5. 随机选择

random 模块有大量的函数用来产生随机数和随机选择元素。比如，要想从一个序 

列中随机的抽取一个元素，可以使用 random.choice() ：

为了提取出 N 个不同元素的样本用来做进一步的操作，可以使用 random.sample() 

```python
import random
values = [1, 2, 3, 4, 5, 6]
print(random.sample(values, 2))
```

### 第4章 迭代器与生成器

### 第5章 文件与IO

#### 1. 文件名的匹配

对于文件名的匹配，你可能会考虑使用 glob 或 fnmatch 模块。比如：

```python
import glob
pyfiles = glob.glob('somedir/*.py')
from fnmatch import fnmatch
pyfiles = [name for name in os.listdir('somedir')
if fnmatch(name, '*.py')]
```

### 第6章 数据编码和处理

### 第7章 函数

### 第8章 类与对象

#### 1、format

__format__() 方法给 Python 的字符串格式化功能提供了一个钩子。这里需要着 

重强调的是格式化代码的解析工作完全由类自己决定。

#### 2. 上下文管理

为了让一个对象兼容 with 语句，你需要实现 __enter__() 和 __exit__() 方法。 

例如，考虑如下的一个类，它能为我们创建一个网络连接：

#### 3. 你的程序要创建大量 (可能上百万) 的对象，导致占用很大的内存。

对于主要是用来当成简单的数据结构的类而言，你可以通过给类添加 __slots__ 

属性来极大的减少实例所占的内存。

```python
class Date:
__slots__ = ['year', 'month', 'day']
def __init__(self, year, month, day):
self.year = year
self.month = month
self.day = day
```

关于 __slots__ 的一个常见误区是它可以作为一个封装工具来防止用户给实例增 

加新的属性。尽管使用 slots 可以达到这样的目的，但是这个并不是它的初衷。__slots__ 

更多的是用来作为一个内存优化工

#### 4. 抽象基类

抽象类的一个特点是它不能直接被实例化，比如你想像下面这样做是不行的

