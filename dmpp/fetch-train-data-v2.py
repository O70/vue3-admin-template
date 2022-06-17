# -*- coding: utf-8 -*-

import json
from datetime import datetime

train_type = {
    # '集团': 'DICT_PX_TYPE_JTGSJ',
    '1': 'DICT_PX_TYPE_JTGSJ',
    # '院级': 'DICT_PX_TYPE_YJ',
    '0': 'DICT_PX_TYPE_YJ',
    # '处所级': 'DICT_PX_TYPE_SJ'
    '2': 'DICT_PX_TYPE_SJ'
}

with open('./train-all-local.json') as f:
    result = json.load(f, strict = False)

    data = result['data']
    # 83884
    # 82191
    print(len(data))

    fr = '%Y-%m-%d'
    available = []
    for i in range(0, len(data)):
        item = data[i]
        # print(item['trainType'], item['courseName'], item['userId'])
        # if item['trainType'] != '5' and item['courseName'] != '年师带徒':
        userId = item['userId']
        title = item['courseName']
        type = item['trainType']
        if type in ['0', '1', '2'] and title:
            # print(count, train_type.get(type, 'DICT_PX_TYPE_QT'), userId, '=>', title)
            tt = None
            try:
                tt = datetime.strptime(item['startDate'], fr)
                tt = datetime.strftime(tt, fr)
            except:
                pass
            # print(count, item['year'], tt, userId, '=>', title)
            available.append({
                'userId': userId,
                'title': title,
                'trainTime': tt,
                'type': train_type.get(type, 'DICT_PX_TYPE_QT'),
                'year': item['year']
            })
    # 81568        
    print(len(available))
    with open('train-local.json', 'w', encoding = 'UTF-8') as f:
        json.dump(available, f, sort_keys = False, indent = 2, ensure_ascii = False)
