# -*- coding: utf-8 -*-

import requests, json
from datetime import datetime

base_url = 'http://localhost'
token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiI5YVFkUmVkZFdGd1laVnp6UERkeEZBQnNwVHkzdnBVWDJzaU4rUDNld0p0c1pGbmMwQU5kKzl2Z3owZThPd3Y2WnNyK0RmVENNa0ZQXG5xZnlnVitsUGdhVk1mSHloMFNMajVtUEZtSTZOdzRJPSIsInN1YiI6ImFkbWluIiwiZXhwIjoxNjUzNjQ2MTI1LCJpYXQiOnsieWVhciI6MjAyMiwibW9udGhWYWx1ZSI6NSwibW9udGgiOiJNQVkiLCJkYXlPZk1vbnRoIjoyNywiZGF5T2ZZZWFyIjoxNDcsImRheU9mV2VlayI6IkZSSURBWSIsImhvdXIiOjEzLCJtaW51dGUiOjgsInNlY29uZCI6NDUsIm5hbm8iOjg4NzAwMDAwMCwiY2hyb25vbG9neSI6eyJjYWxlbmRhclR5cGUiOiJpc284NjAxIiwiaWQiOiJJU08ifX0sImp0aSI6ImRmYjBiNTRmLWU0ZDMtNDIyMy05OGFjLTA3YzQ3NTlmZmUzNSJ9.N-nwUVz7HM0M8_RC9ozj2uBmitMtsATniPkex1bc662NFRX9IX0Pl5ayx5Ue9OhNUWM73nxyilFVWm0IP1qQAA'
base_year = 2010

def getUids():
    uids = []
    url = 'http://10.30.227.251:30002/api/admin/user/list?page=1&limit=5000'
    res = requests.get(url, headers = { 'ESP-TOKEN': token })

    for i in res.json()['data']: uids.append(i['id'])

    return uids

# {
#             "name": "集团公司级",
#             "code": "DICT_PX_TYPE_JTGSJ"
#           },
#           {
#             "name": "院级",
#             "code": "DICT_PX_TYPE_YJ"
#           },
#           {
#             "name": "所级",
#             "code": "DICT_PX_TYPE_SJ"
#           },
#           {
#             "name": "其他",
#             "code": "DICT_PX_TYPE_QT"
#           }

train_type = {
    # '集团': 'DICT_PX_TYPE_JTGSJ',
    '1': 'DICT_PX_TYPE_JTGSJ',
    # '院级': 'DICT_PX_TYPE_YJ',
    '0': 'DICT_PX_TYPE_YJ',
    # '处所级': 'DICT_PX_TYPE_SJ'
    '2': 'DICT_PX_TYPE_SJ'
}

uids = [
    'c868c9e79357441d8c5fc71691111be2',
    'a6693e05e9654195906b641835e03912',
    'a4845af1-8760-4d87-9fbf-b6186a1ad72a',
    '3ab42b6ba6b747c2ae3c4a44b94cd041',
    '9bb97b3b-ed13-4e51-bf4d-25042edb1cf4',
    '28e79ce5-73de-4660-bb32-401cb02629ce',
    '7e900972afe1499fb5b96ed45d67a742',
    '7840',
    '29139159-788e-4c11-97d3-8d1c3aa4fae0',
    '21',
    '3248',
    '6',
    '93',
    '16',
    '1164',
    '3170',
    '1211',
    '1155',
    '7792',
    '08b7ca97c658421ca286d078177d1a97',
    'f3a7c29d-471d-40e4-bfd0-702d6eca0b1d',
    'd31f21f7-cf04-4a7e-8e5f-ad6b24c05316',
    '7788',
    'f0bb862d-1fbf-4ea5-bd17-8e11de12e231',
    '7786',
    'e8e89edf-f8cc-4454-a1a7-a87dfabe0a5e',
    '7528',
    '8e0ecec1-4cac-4a1a-ae65-a42eda407842',
    '3ec158f06c8947cd9edafbd784f730f4',
    'e6710636504c4299abba1453eca2ee5b',
    '8d57aed835d14f5681bcbb33de3d943e',
    '5ba34633-4673-403f-b03c-22cc156faadd',
    '43ecac54-f438-4466-8286-579508cb24ee',
    '792acdb1-07c8-469c-ad2c-5c8b5bc87455',
    '7802',
    'fbdb81f8444f458295d4b2f5bb86eab3',
    '2d925f99e2f4470e905c0ffc4a452e40',
    'f8297b0e4b574dd493854facf5e71746',
    'e6043f2c28004a4f930b1ffde30302a5',
    'f4da8c5b-a177-4497-bf13-c8d138e1aafd',
    'e072900a-10a2-4f1b-afd1-89574d7700e3',
    '3161'
]

def fetch():
    # uids = getUids()
    print(len(uids))
    results = []
    for uid in uids:
        print(uid)
        for i in range(14):
            year = base_year + i
            url = '%s/%s/%s' % (base_url, uid, year)
            print(url)
            res = requests.get('%s/%s/%s' % (base_url, uid, year), headers = { 'ESP-TOKEN': token })
            print(res)
            data = res.json()['data']
            for d in data:
                 d['userId'] = uid
                 d['year'] = year

            results.extend(data)

    print(len(results))

    finals = []
    fr = '%Y-%m-%d'
    for it in results:
        tt = None
        try:
            tt = datetime.strptime(it['startDate'], fr)
            tt = datetime.strftime(tt, fr)
        except:
            pass

        finals.append({
            'userId': it['userId'],
            'title': it['courseName'],
            'trainTime': tt,
            'type': train_type.get(it['trainType'], 'DICT_PX_TYPE_QT'),
            'year': it['year']
        })

    with open('train-local.json', 'w', encoding = 'UTF-8') as f:
        json.dump(finals, f, sort_keys = False, indent = 2, ensure_ascii = False)

fetch()
