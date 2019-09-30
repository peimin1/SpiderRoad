from hashlib import sha1

import requests
from lxml import etree

SUM = 0
count = 0
for i in range(1, 1001):
    count += 1
    print(f"current:{count}")
    ss = requests.Session()
    headers = dict(Cookie="footprints=eyJpdiI6Im5VT3dhMGtsT2xVQTNqUURNRFwvdWFBPT0iLCJ2YWx1ZSI6ImpFQjNjcDM4RmFtdHRqU2M0OGZJUUNtSTdyc1VJTVBpUnExVm5vTkVXMEw2MzlhRXJicm1HVE9BRlpSUTBTMFIiLCJtYWMiOiIzOGY5ODM5NWE2Y2Q0NDM5MmE1OWJkNzdmYjFiMzQyMjA3YmYzMWMwYTRlYjQyMWU4YjYzMDQ1ZGZiNGNkMTFkIn0%3D; Hm_lvt_020fbaad6104bcddd1db12d6b78812f6=1569547502,1569570417; _ga=GA1.2.1523881472.1569570598; _gid=GA1.2.448730406.1569570598; _gat_gtag_UA_75859356_3=1; Hm_lpvt_020fbaad6104bcddd1db12d6b78812f6=1569570782; XSRF-TOKEN=eyJpdiI6Im1IUWpSUHNRZDZneVBPQzk5bnQ5M2c9PSIsInZhbHVlIjoiT0o4VE9UblZkais4QStlXC9EdTJpTTBVTVpvRnRxY29XVGZ4ZXZxcnp3VitmR0xtMThvQzI5ZFh0czkxUHUwUjkiLCJtYWMiOiI4NjI3YzYwZjI5YWIwOGY3NjQ4MTIzYzRjYjZjZTQ0NmEwYjdiMTgyNzVhYWYyYzM4Y2M2ZmI1ZTI2NmVhYTMyIn0%3D; glidedsky_session=eyJpdiI6IkxEWm9GVlloYUVoQ0pFV0ZyNjRWXC9RPT0iLCJ2YWx1ZSI6IlBaZ2VyejdHQ0E3VVBNOVdwbENHaVJhQ2hjXC9DVzhxc1JOVzUyY0RLQkw5b2J4cWdXVW5BZ2pJeXhqb1RvOWZ0IiwibWFjIjoiZDljMThhYjhlZjQyZTNkMzFlYTZhMTViOGJhYmM2YThkMzFjNmQzMGZjMzllZDI5NzdhOTM3MGM3ZmE0NDg2OSJ9")
    url = f"http://glidedsky.com/level/web/crawler-javascript-obfuscation-1?page={i}"
    res = ss.get(url, headers=headers)
    response = etree.HTML(res.text)
    p = response.xpath("//div[@p]/@p")[0]
    t = response.xpath("//div[@t]/@t")[0]
    t = str(int((int(t)-99)/99))

    hash_str = 'Xr0Z-javascript-obfuscation-1' + t
    sign = sha1(hash_str.encode("utf-8")).hexdigest()

    url = "http://glidedsky.com/api/level/web/crawler-javascript-obfuscation-1/items?page=" + p + "&t=" + t + "&sign=" + sign
    res = ss.get(url, headers=headers)
    response = res.json()
    val = response['items']
    SUM += sum(val)
    print(SUM)
    ss.close()
print("求和总数:", SUM)
