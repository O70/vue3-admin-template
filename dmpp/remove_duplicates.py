# -*- coding: utf-8 -*-

import pymysql
import remove_duplicates_cfg as cfg

# db_args = cfg.args_dev
# db_args = cfg.args_test
db_args = cfg.args_prod

# Rule 1: (name + credentials_no) 
def rule1():
    conn = pymysql.connect(**db_args, cursorclass = pymysql.cursors.DictCursor)
    with conn:
        with conn.cursor() as cursor:
            sql = '''
            select
                c.name,
                c.credentials_no,
                count(c.id) total
            from dmpp_pedestal.pedestal_citizen c
            where 1=1
            and c.credentials_no is not null
            and c.credentials_no <> ''
            group by c.name, c.credentials_no
            having count(c.id) > 1
            '''

            cursor.execute(sql)

            # Step 1
            print('[Rule-1] Step 1...')
            cardNos = []
            for it in cursor.fetchall():
                # print(it['name'], it['credentials_no'])
                print(it)
                cardNos.append(it['credentials_no'])
            # print(', '.join(cardNos))
            # python 2 
            # print(', '.join(map(lambda x: '%s', cardNos)))
            # python 3
            # print(', '.join(list(map(lambda x: '%s', cardNos))))
            args = ', '.join(list(map(lambda x: '%s', cardNos)))

            # Step 2
            print('\n[Rule-1] Step 2...')
            sql_query_basic = '''
            select
                c.id,
                c.name,
                c.credentials_no,
                # w.enabled
                if(w.enabled, 1, 0) enabled
                # case when w.enabled = true then 1 else 0 end enabled
            from dmpp_pedestal.pedestal_citizen c
            left join dmpp_pedestal.pedestal_worker w on w.cid = c.id
            where 1 = 1
            and c.credentials_no in (%s)
            order by c.name
            ''' % args
            cursor.execute(sql_query_basic, cardNos)

            kv = ['from', 'to']
            mappings = {}                
            for it in cursor.fetchall():
                print(it)
                key = '%s-%s' % (it['name'], it['credentials_no'])
                # mappings[key] = it['id']
                # try:
                #     mappings[key].append(it['id'])
                # except:
                #     mappings[key] = [it['id']]

                item = mappings.get(key, {})
                item[kv[it['enabled']]] = it
                mappings[key] = item
            
            print('\n[Rule-1] Step 3...')
            result = []
            for it in mappings:
                print(it)
                print(mappings[it]['from'])
                print(mappings[it]['to'])
                result.append(mappings[it])
            return result

# Rule 2: (name + mobile) only one 杨靖，所以手动调整
def rule2():
    conn = pymysql.connect(**db_args, cursorclass = pymysql.cursors.DictCursor)
    with conn:
        with conn.cursor() as cursor:
            args = ', '.join(list(map(lambda x: '%s', cfg.duplicates_names)))
            sql_query_basic = '''
            select
                c.id,
                c.name,
                c.mobile,
                if(w.enabled, 1, 0) enabled
            from dmpp_pedestal.pedestal_citizen c
                    left join dmpp_pedestal.pedestal_worker w on w.cid = c.id
            where 1 = 1
            and c.name in (%s)
                and c.credentials_no not in (
                    '110102195802212387'
                )
            order by c.name
            ''' % args
            size = cursor.execute(sql_query_basic, cfg.duplicates_names)

            print('[Rule-2] Step 1...')
            kv = ['from', 'to']
            mappings = {}   

            alls = cursor.fetchall()
            lb_key = '李斌'
            lb = [x for x in alls if x['name'] == lb_key]
            lb_pri = [x for x in lb if x['enabled'] == 1][0]
            # print(lb_pri)
            for ind, it in enumerate([x for x in lb if x['enabled'] == 0]):
                # print(ind, it)
                mappings['%s-%s' % (lb_key, ind)] = {
                    'from': it,
                    'to': lb_pri
                }
            
            # print(mappings)
            
            for it in alls:
                key = it['name']
                print(it)
                if key == '李斌': continue
                item = mappings.get(key, {})
                item[kv[it['enabled']]] = it
                mappings[key] = item

            print('\n[Rule-2] Step 2...')
            result = []
            for it in mappings:
                print(it)
                print(mappings[it]['from'])
                print(mappings[it]['to'])
                result.append(mappings[it])
            return result

res_rule1 = rule1()
res_rule2 = rule2()

print()
print('String...')
print(len(res_rule1), len(res_rule2), len(res_rule1) + len(res_rule2))

def exec_migrate(cursor, table, from_id, to_id):
    item_size = cursor.execute('select id from dmpp_pedestal.%s where cid = \'%s\'' % (table, from_id))
    print('%s size:' % table, item_size)
    items = cursor.fetchall()
    if len(items) > 0:
        item_ids = list(map(lambda x: x['id'], items))
        # print(item_ids)

        item_sql = '''
        update dmpp_pedestal.%s
        set modified_by = 'HANZO', modified_date = now(), cid = '%s'
        where id in (%s)
        ''' % (table, to_id, ', '.join(list(map(lambda x: '%s', item_ids))))
        # Exec migrate
        # print(item_sql)
        cursor.execute(item_sql, item_ids)

conn = pymysql.connect(**db_args, cursorclass = pymysql.cursors.DictCursor)
with conn:
    with conn.cursor() as cursor:
        for it in res_rule1 + res_rule2:
            print('**********************************************')
            print(it['from'])
            print(it['to'])
            from_id = it['from']['id']
            to_id = it['to']['id']

            sql_citizen = '''
            update dmpp_pedestal.pedestal_citizen
            set deleted = true, modified_by = 'HANZO', modified_date = now(), remark = 'REMOVE_DUPLICATES_BASIC-TO:%s'
            where id = '%s'
            ''' % (to_id, from_id)
            # Exec migrate
            # print(sql_citizen)
            cursor.execute(sql_citizen)

            exec_migrate(cursor, 'pedestal_car_plate', from_id, to_id)
            exec_migrate(cursor, 'pedestal_family', from_id, to_id)
            exec_migrate(cursor, 'pedestal_worker', from_id, to_id)
            exec_migrate(cursor, 'pedestal_contract', from_id, to_id)
            exec_migrate(cursor, 'pedestal_educational', from_id, to_id)
            exec_migrate(cursor, 'pedestal_work_experience', from_id, to_id)
            exec_migrate(cursor, 'pedestal_position', from_id, to_id)
            exec_migrate(cursor, 'pedestal_job_title', from_id, to_id)
            exec_migrate(cursor, 'pedestal_gang', from_id, to_id)
            exec_migrate(cursor, 'pedestal_gang_record', from_id, to_id)
            exec_migrate(cursor, 'pedestal_train_experience', from_id, to_id)
            exec_migrate(cursor, 'pedestal_research', from_id, to_id)
            exec_migrate(cursor, 'pedestal_patent', from_id, to_id)
            exec_migrate(cursor, 'pedestal_paper', from_id, to_id)
            exec_migrate(cursor, 'pedestal_secret', from_id, to_id)
            exec_migrate(cursor, 'pedestal_software', from_id, to_id)
            exec_migrate(cursor, 'pedestal_standard', from_id, to_id)
            exec_migrate(cursor, 'pedestal_honor', from_id, to_id)
            exec_migrate(cursor, 'pedestal_research_award', from_id, to_id)
            exec_migrate(cursor, 'pedestal_party_reward', from_id, to_id)
            exec_migrate(cursor, 'pedestal_science', from_id, to_id)
            exec_migrate(cursor, 'pedestal_evaluation_history', from_id, to_id)

            # car_size = cursor.execute('select id from dmpp_pedestal.pedestal_car_plate cp where cp.cid = %s', from_id)
            # print('Car size:', car_size)
            # cars = cursor.fetchall()
            # if len(cars) > 0:
            #     car_ids = list(map(lambda x: x['id'], cars))
            #     # print(car_ids)

            #     sql_car = '''
            #     update dmpp_pedestal.pedestal_car_plate
            #     set modified_by = 'HANZO', modified_date = now(), cid = '%s'
            #     where id in (%s)
            #     ''' % (to_id, ', '.join(list(map(lambda x: '%s', car_ids))))
            #     # Exec migrate
            #     # print(sql_car)
            #     cursor.execute(sql_car, car_ids)

            # cursor.execute('select id from dmpp_pedestal.pedestal_family cp where cp.cid = %s', from_id)
            # familys = cursor.fetchall()
            # if len(familys) > 0:
            #     family_ids = list(map(lambda x: x['id'], familys))
            #     # print(family_ids)

            #     # car_args = ', '.join(list(map(lambda x: '%s', family_ids)))
            #     family_sql = '''
            #     update dmpp_pedestal.pedestal_family
            #     set modified_by = 'HANZO', modified_date = now(), cid = '%s'
            #     where id in (%s)
            #     ''' % (to_id, ', '.join(list(map(lambda x: '%s', family_ids))))
            #     # Exec migrate
            #     # print(family_sql)
            #     cursor.execute(family_sql, family_ids)

            conn.commit()