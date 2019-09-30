import re
import requests
from lxml import etree

SUM = 0
nice = 0
for m in range(1, 1001):
    nice += 1
    print(f"current:{nice}")
    digists = []
    url = f"http://glidedsky.com/level/web/crawler-css-puzzle-1?page={m}"
    headers = dict(Cookie="Hm_lvt_020fbaad6104bcddd1db12d6b78812f6=1569547502; _ga=GA1.2.1066886167.1569547502; _gid=GA1.2.194337419.1569547502; footprints=eyJpdiI6ImZxYkZEYVhlTHZ1czJYKzZPYSthQUE9PSIsInZhbHVlIjoiTzh3WHdZSzkxVmxXNTVpcFdUblpobUhPR0VLUDZaXC9cLzhwVGZtenlScXV2TTJCUERWOTdubHk1Nzg0VHhEZ2NFIiwibWFjIjoiM2NmZTUyNGU4ZDg0NWFlNmE4ZGM2MGE5N2NmOTA5MGMwNWYxYjE2YzAxMjZiZGY3YjE2ZWE0M2E0MWUzYjRiYyJ9; XSRF-TOKEN=eyJpdiI6IkZBVWlTazJzRlwvZldya1h2QWtsNVpBPT0iLCJ2YWx1ZSI6IlFyalNJdHdMcko0aVwvVFd1WHdDVDdIUWdSWnRJalp6eWhLVFBZNHZpQzQ2d2QzV3ZtNllTSGRxb0JwVWtka1FJIiwibWFjIjoiZTliNmE4YTZhYTg2ZGMwZTUyMGU1OWRlZDgzYmIyNmFmNTNjYzQzODc2MDQ5Y2FlNDg2OWE4NzZhMTk1NTk5YSJ9; glidedsky_session=eyJpdiI6IlNBTE9VWGxxdnZcL0lYXC9uMkY2aGVHdz09IiwidmFsdWUiOiJjTUZaY0w4cjhDWStMUTdMa3drdkxMWSs2eVlhNkxQNzNEZGxJNW5lRGVUOCtvRFkzZVhUVlN3bklsUitESTQxIiwibWFjIjoiYjFkZGExNGM3MzJkNjg5MGI0NjQ2YWYyZjNlNWJkMTljYTVlNTE1YzQ0OTM4ZDFlN2JjYTRhZDk3NzAzMjJmMSJ9; Hm_lpvt_020fbaad6104bcddd1db12d6b78812f6=1569565842; _gat_gtag_UA_75859356_3=1")
    res = requests.get(url, headers=headers)
    response = etree.HTML(res.text)
    items = response.xpath("//div[@class='col-md-1']")
    for i in items:
        val = i.xpath("div[@class]/@class")
        if len(val) == 1 or len(val) == 2:
            # ::before
            pass
            value = re.findall(f"{val[-1]}.*content:\"(\d+)\"", res.text)[0]
            digists.append(value)
        elif len(val) == 3 or len(val):
            datas = {k:v for k, v in zip(i.xpath("div[@class]/@class"), i.xpath("div[@class]/text()"))}
            target = {}
            if len(val) == 3:
                slices = val
            else:
                slices = val[1:]
            for i in slices:
                value = re.findall(f"{i}.*left:(.*?)em", res.text)[0] if re.findall(f"{i}.*left:(.*?)em", res.text) else None

                target[i] = value

            # 建立映射关系并排序成正确方式, None值位置默认不变
            data1, data2 = {}, []
            count = 0
            for k, v in target.items():
                if v:
                    data1[k] = int(v)
                else:
                    data2.append({count: {k: v}})
                count += 1

            finall = [i[0] for i in sorted(data1.items(), key=lambda item:item[1])]
            for i in data2:
                for k, v in i.items():
                    finall.insert(k, list(v.keys())[0])
            finall_value = ''.join([datas[i] for i in finall])
            digists.append(finall_value)
    SUM += sum([int(i) for i in digists])
print("求和总数:{}".format(SUM))

