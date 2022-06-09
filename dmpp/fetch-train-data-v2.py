# -*- coding: utf-8 -*-

import json

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
    print(len(data))

    available = []
    for i in range(0, len(data)):
        item = data[i]
        # print(item['trainType'], item['courseName'], item['userId'])
        # if item['trainType'] != '5' and item['courseName'] != '年师带徒':
        if item['trainType'] in ['0', '1', '2']:
            # available.append(item)
            available.append({
                'userId': item['userId'],
                'title': item['']
            })
    print(len(available))
