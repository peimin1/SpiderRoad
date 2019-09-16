import 

```python
__import__() 函数用于动态加载类和函数 。
如果一个模块经常变化就可以使用 __import__() 来动态载入。
```

hasattr

```python
if hasattr(d, 'items'):
	d = d.items()
```

doc

```
__doc__ :类的文档字符串urlpa
```

```python
url='http://user:pwd@domain:80/path;params?query=queryarg#fragment'
ParseResult(scheme='http', netloc='user:pwd@domain:80', path='/path', params='params', query='query=queryarg', fragment='fragment')
```

get_attr

```python
getattr(resp, 'status', None)
```

CaseInsensitiveDict

```python
 CaseInsensitiveDict(getattr(resp, 'headers', {}))
```

all

all() 函数用于判断给定的可迭代参数 iterable 中的所有元素是否都为 TRUE，如果是返回 True，否则返回 False。

```python
all([
    self.username == getattr(other, 'username', None),
    self.password == getattr(other, 'password', None)])
```

