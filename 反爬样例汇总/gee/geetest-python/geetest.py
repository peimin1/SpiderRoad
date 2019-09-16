import os
import re
import time
import random
import execjs
import requests
from PIL import Image


def time13():
    param = time.time()
    return str(param).replace(".", '')[: 13]


def ImageRe(path):
    """修复图片"""
    img = Image.open(path)
    width, height = img.size
    located = [39, 38, 48, 49, 41, 40, 46, 47, 35, 34, 50, 51, 33, 32, 28, 29, 27, 26, 36, 37, 31, 30, 44, 45, 43, 42,
               12, 13, 23, 22, 14, 15, 21, 20, 8, 9, 25, 24, 6, 7, 3, 2, 0, 1, 11, 10, 4, 5, 19, 18, 16, 17]
    result = Image.new("RGB", (260, height))
    for i, j in enumerate(located):
        x = j % 26 * 12 + 1
        y = 80 if j > 25 else 0
        x_ = i % 26 * 10
        y_ = 80 if i > 25 else 0
        axis = img.crop((x, y, x + 12, y + 80))
        result.paste(axis, (x_, y_, x_ + 12, y_ + 80))
    result.save(path)


class ImgProcess:
    """识别图片距离"""
    def is_px_equal(self, img1, img2, x, y):
            pix1 = img1.load()[x, y]
            pix2 = img2.load()[x, y]
            threshold = 65
            if abs(pix1[0] - pix2[0]) < threshold and abs(pix1[1] - pix2[1]) < threshold and abs(pix1[2] - pix2[2]) < threshold:
                return True
            else:
                return False

    def get_gap(self, img1, img2):
        """
        :param img1: 不带缺口图片
        :param img2: 带缺口图片
        :return:
        """
        left = 0
        for i in range(left, img1.size[0]):
            for j in range(img1.size[1]):
                if not self.is_px_equal(img1, img2, i, j):
                    left = i
                    return left
        return left


# 指定node环境, 有的需要在node环境下调用
os.environ["NODE_PATH"] = os.getcwd()+"/node_modules"


def get_validate(gt, challenge):
    # 读取js文件
    with open('green_slide_main.js', encoding='utf-8') as f:
        js = f.read()
    docjs = execjs.compile(js)
    ss = requests.Session()
    headers = {
        'Referer': 'http://localhost:9977/slide.html',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36'
    }

    # 步骤1： 获取gt + challenge; 如果 提供gt和challenge， 则忽略此步骤。
    # ss.get("http://localhost:9977/slide.html", headers=headers)
    # url_1 = "http://localhost:9977/gt/register-slide?t={}".format(time13())
    # res1 = ss.get(url_1, headers=headers)
    # gt = res1.json()['gt']
    # challenge = res1.json()['challenge']
    # print(gt)
    # print(challenge)


    # # 步骤2：初次加载提交内容
    # w = input("请输入第一次w: ")
    w1 = docjs.call("w1", gt, challenge)
    aes_key = w1[0]; w = w1[1]

    url_try = "http://api.geetest.com/get.php?gt={}&challenge={}&lang=zh-cn&pt=0&w={}&callback=geetest_{}".format(gt, challenge, w, time13())
    res_try = ss.get(url_try, headers=headers)
    s = re.findall('"s": "(.*?)"', res_try.text)[0]
    # print(s)


    # 步骤3: 点击成功/失败，获取滑块slide
    # w = input("请输入第二次w: ")
    w = docjs.call("w2", gt, challenge, s, aes_key)
    url_2 = "http://api.geetest.com/ajax.php?gt={}&challenge={}&lang=zh-cn&pt=0" \
            "&w={}&callback=geetest_{}".format(gt, challenge, w, time13())
    res2 = ss.get(url_2, headers=headers)


    # 步骤4：获取滑块相关信息: image, c, s等
    url3 = "http://api.geetest.com/get.php?is_next=true&type=slide3&gt={}&challenge={}&lang=zh-cn&https=false&protocol=" \
           "http%3A%2F%2F&offline=false&product=" \
           "embed&api_server=api.geetest.com&isPC=true&width=100%25&callback=geetest_{}".format(gt, challenge, time13())
    res3 = ss.get(url3, headers=headers)

    c = [12, 58, 98, 36, 43, 95, 62, 15, 12]   # c可能是可变的
    s = re.findall('"s": "(.*?)"', res3.text)[0]
    fullbg = re.findall('"fullbg": "(.*?)"', res3.text)[0]
    bg = re.findall('"bg": "(.*?)"', res3.text)[0]
    fullbg_url = "http://static.geetest.com/{}".format(fullbg)
    bg_url = "http://static.geetest.com/{}".format(bg)
    challenge = re.findall('"challenge": "(.*?)"', res3.text)[0]

    # print(res3.text)
    # print(fullbg_url)
    # print(bg_url)

    # 步骤5: 获取图片并还原图片
    fullbg_img = ss.get(fullbg_url, headers=headers)
    bg_img = ss.get(bg_url, headers=headers)
    with open("fullbg_img.jpg", "wb+") as f:
        f.write(fullbg_img.content)
    with open("bg_img.jpg", "wb+") as f:
        f.write(bg_img.content)
    ImageRe("fullbg_img.jpg")
    ImageRe("bg_img.jpg")

    # 步骤6, 获取缺口距离
    t = ImgProcess()
    distance = t.get_gap(Image.open("fullbg_img.jpg"),  Image.open("bg_img.jpg"))
    # print(gt)
    # print(challenge)
    # print(s)
    # print(distance)

    # # 步骤7: 提交参数
    # w = input("请输入w参数:")
    w = docjs.call("w3", gt, challenge
                   , s, distance-random.choice([4, 5, 6]))
    url_4 = "http://api.geetest.com/ajax.php?gt={}&challenge={}&lang=zh-cn&pt=0&w={}&callback=geetest_{}".format(gt, challenge, w, time13())
    res4 = ss.get(url_4, headers=headers)
    return re.findall('"validate": "(.*?)"', res4.text)[0], challenge


