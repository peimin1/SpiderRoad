import re
import base64
import requests
from lxml import etree

SUM = 0
count = 0
from PIL import Image


# 2812421
list_q = []
# 287214
for m in range(832, 833):
    count += 1
    print(f"current: {m}")
    url = f"http://glidedsky.com/level/web/crawler-sprite-image-1?page={m}"
    headers= dict(Cookie="_ga=GA1.2.1523881472.1569570598; _gid=GA1.2.1120403822.1569724158; footprints=eyJpdiI6IkpoaFhnU2JFTnloQ0NIOWUybHFSekE9PSIsInZhbHVlIjoiZm53OXRVQkJxMXJpdnNDRnFsTWJSc0JaTEYyaW81dVhPcVFoU0RMWDhhUGdXc3dqYXJmY1FvNUxuYmlvQWJyMyIsIm1hYyI6ImFlZDJhNDBhMThlNjk2NmU2MzNlMjQ1ZTllNWI0Njk2YzE1YTgzNmNkNWM2MTIyZThmNGUxNzllYWVmNDQwODgifQ%3D%3D; Hm_lvt_020fbaad6104bcddd1db12d6b78812f6=1569570417,1569571324,1569724156,1569822425; XSRF-TOKEN=eyJpdiI6InFlS3BLVk9pT2tOODg3SVpNYzFVeFE9PSIsInZhbHVlIjoiSHdRZTlVYTJRRkwrTlBFcHczcThnbDVqZldjXC9cL1dsaThHNGJ5OVFjZ3NTTmdsbU1OZXdLZ3k3aWpMWCs5QVJ0IiwibWFjIjoiZDNiOGU1MWE1Nzc4NzBiMTVmYTg2ZmIxYWJjMzEyMGQ5Mjc1Nzg5N2RhZjZhMzNkODE5MDdiYmRhNDliMDA3ZSJ9; glidedsky_session=eyJpdiI6IlgxTUhTWWJlcXhpb2dZZWlvWU8zRlE9PSIsInZhbHVlIjoiR0ZHNUhiWXZJTExxRHBEVWdcL2pjVlVLbmlLb1FUWDFiNG1hck8ybGR1b2NBSkRHcjd6ZFNYQVNIVFFoZ3E4VlYiLCJtYWMiOiI5Yzg5ZWFjYjA2YjgzYzI2ZDI4MzU4ZmIzZWM2ZDQwZTI4OWY4NDRiYTM5MWI5YzU5MDE5MjRmZGNjMWEwMGVhIn0%3D; Hm_lpvt_020fbaad6104bcddd1db12d6b78812f6=1569822465")

    res = requests.get(url, headers=headers)
    images = re.findall("data:image/png;base64,(.*?)\"\) }", res.text)[0]


    with open("1.png", "wb") as f:
        imgdata = base64.b64decode(images)
        f.write(imgdata)

    im = Image.open("1.png")  # 返回一个Image对象
    width, height = im.size[0], im.size[1]

    # region = im.crop((0, 2, 15, 0,))
    # region.save("2.png")

    # sep = int(width / 10)
    # seps = []
    # for i in range(10):
    #     seps.append(sep * i)




    response = etree.HTML(res.text)
    # 建立映射
    map_pos = re.findall("\.(.*?) { background-position-x:(.*?)px }", res.text)
    map_width = re.findall("\.(.*?) { width:(.*?)px }", res.text)
    data = {}
    for i in map_pos:
        data[i[0]] = i[1]

    data1 = {v: k for k, v in data.items()}
    list1 = sorted([int(i) for i in data1.keys()], reverse=True)
    print("")