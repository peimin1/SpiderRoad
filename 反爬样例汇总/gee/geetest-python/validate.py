# 采用蘑菇代理验证登录
import requests
from geetest import get_validate, time13


def login(username, password):
    """蘑菇代理登录"""
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
                      '(KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36'
    }
    ss = requests.Session()
    init_url = "http://www.moguproxy.com/proxy/validateCode/startCaptcha?{}".format(time13())
    res = ss.get(init_url, headers=headers).json()
    gt = res['msg']['gt']
    challenge = res['msg']['challenge']
    valid, challenge = get_validate(gt, challenge)

    login_url = "http://www.moguproxy.com/proxy/user/login"
    params = {
        'mobile': username,
        'password': password,
        'geetest_challenge': challenge,
        'geetest_validate': valid,
        'geetest_seccode': '{}|jordan'.format(valid)
    }
    response = ss.get(login_url, headers=headers, params=params)
    print(response.text)

    resing = ss.get("http://www.moguproxy.com/", headers=headers)
    resing.encoding = "utf-8"
    print(resing.text)


# 输入用户名， 密码
login("", "")
