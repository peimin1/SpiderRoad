import re
import base64
import requests
from lxml import etree

SUM = 0
count = 800
from PIL import Image


# 2812421
list_q = []
# 287214
for m in range(800, 851):
    count += 1
    print(f"current: {m}")
    url = f"http://glidedsky.com/level/web/crawler-sprite-image-1?page={m}"
    headers= dict(Cookie="_ga=GA1.2.1523881472.1569570598; _gid=GA1.2.1120403822.1569724158; footprints=eyJpdiI6IkpoaFhnU2JFTnloQ0NIOWUybHFSekE9PSIsInZhbHVlIjoiZm53OXRVQkJxMXJpdnNDRnFsTWJSc0JaTEYyaW81dVhPcVFoU0RMWDhhUGdXc3dqYXJmY1FvNUxuYmlvQWJyMyIsIm1hYyI6ImFlZDJhNDBhMThlNjk2NmU2MzNlMjQ1ZTllNWI0Njk2YzE1YTgzNmNkNWM2MTIyZThmNGUxNzllYWVmNDQwODgifQ%3D%3D; Hm_lvt_020fbaad6104bcddd1db12d6b78812f6=1569570417,1569571324,1569724156,1569822425; XSRF-TOKEN=eyJpdiI6InFlS3BLVk9pT2tOODg3SVpNYzFVeFE9PSIsInZhbHVlIjoiSHdRZTlVYTJRRkwrTlBFcHczcThnbDVqZldjXC9cL1dsaThHNGJ5OVFjZ3NTTmdsbU1OZXdLZ3k3aWpMWCs5QVJ0IiwibWFjIjoiZDNiOGU1MWE1Nzc4NzBiMTVmYTg2ZmIxYWJjMzEyMGQ5Mjc1Nzg5N2RhZjZhMzNkODE5MDdiYmRhNDliMDA3ZSJ9; glidedsky_session=eyJpdiI6IlgxTUhTWWJlcXhpb2dZZWlvWU8zRlE9PSIsInZhbHVlIjoiR0ZHNUhiWXZJTExxRHBEVWdcL2pjVlVLbmlLb1FUWDFiNG1hck8ybGR1b2NBSkRHcjd6ZFNYQVNIVFFoZ3E4VlYiLCJtYWMiOiI5Yzg5ZWFjYjA2YjgzYzI2ZDI4MzU4ZmIzZWM2ZDQwZTI4OWY4NDRiYTM5MWI5YzU5MDE5MjRmZGNjMWEwMGVhIn0%3D; Hm_lpvt_020fbaad6104bcddd1db12d6b78812f6=1569822465")

    res = requests.get(url, headers=headers)
    images = re.findall("data:image/png;base64,(.*?)\"\) }", res.text)[0]

    #
    # with open("1.png", "wb") as f:
    #     imgdata = base64.b64decode(images)
    #     f.write(imgdata)
    #
    # im = Image.open("1.png")  # 返回一个Image对象
    # width, height = im.size[0], im.size[1]
    # sep = int(width / 10)
    # seps = []
    # for i in range(10):
    #     seps.append(sep * i)




    response = etree.HTML(res.text)
    # 建立映射
    mappings = re.findall("\.(.*?) { background-position-x:(.*?)px }", res.text)
    data = {}
    for i in mappings:
        data[i[0]] = i[1]

    data1 = {v: k for k, v in data.items()}
    list1 = sorted([int(i) for i in data1.keys()], reverse=True)

    #
    if len(list1) < 9:
        list_q.append(count)
    if len(list1) < 10:
        # 判定缺失值是多少

        if list1[0] != 0 and len(list1) == 9:
            list1.insert(0, 0)
        else:

            if list1[0] != 0:
                list1.insert(0, 0)
            print(list1)
            for k, v in enumerate(list1):
                if k == len(list1) - 1:
                    if len(list1) != 10:
                        list1.insert(k + 1, abs(int(v)) + 15)
                    else:
                        break
                if (abs(int(list1[k + 1])) - abs(int(list1[k]))) > 19:
                    print('-----', (abs(int(list1[k + 1])) - abs(int(list1[k]))))
                    list1.insert(k+1, abs(int(v)) + 15)
                if len(list1) == 10:
                    break
    # print(list1)

    data2 = {}
    for i, j in enumerate(list1):
        data2[str(j)] = i

    items = response.xpath("//div[@class='col-md-1']")
    valuess = []
    for i in items:
        item = [i.split(" ")[0] for i in i.xpath("div[@class]/@class")]
        gg = []
        for j in item:
            val = data[j]
            # 第二种方式
            value = str(data2[val])
            gg.append(value)
        valuess.append(int(''.join(gg)))
    print(valuess)
    SUM += sum(valuess)
    print(SUM)
print(list_q)
print("求和总数: ", SUM)


# 1-101   279385
# 101-201 278706
# 201-301 281327
# 301-401 279915
# 401-501 283728
# 501 601 282446
# 601-701 287214
# 701-801 280350
# 801-901 275428
# 901-1000 283922