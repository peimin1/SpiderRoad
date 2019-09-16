此文档录入一些经常使用的命令，函数等， 用于查阅

##### Mongodb 导出excel

```
mongoexport -d myDB -c user -f _id,name,password,adress --csv -o ./user.csv
```

```
# 注意不能使用单引号，会报错
mongoexport -d etcn -c simple -f company_name_cn,linkman_cn,tel,email,province,direction,address --query="{\"province\":\"江苏省\"}" --limit=500 --type=csv -o C:\Users\zf100\Desktop\simple_sichuang.csv



mongoexport -d CrossBorder -c Alibaba_Base_Company -f _id,company_nameEN,company_url,transactions,total_amount,business_type,province,country,main_products,number_of_employees,main_markets,addressEN,city,Goods,Markets,crawl_timestamp --query="{\"city\" : {\"$regex\" : \"^zhongshan$\", \"$options\":\"i\"}}" --type=csv -o C:\Users\zf100\Desktop\zhongshan.csv

```



##### MongoDB忽略大小写查询

```
db.getCollection('Alibaba_Base_Company').find({"city" : { "$regex" : "^zhongshan$", '$options':"i"}})
```



##### MongoDb 导出json

```
mongoimport -d database  -c table --file file.json --type json
```

##### MongoDb 导出的时候追加验证

```
mongoimport  --authenticationDatabase admin -u username -p password  -d database  -c table --file file.json --type json
```

##### Mongodb 去重统计数据

```
db.getCollection('Data_Company_Infoation_Company').aggregate([
{"$match": {"email": ""}},
{"$project": {"company_name_cn": true}},
{"$group": {"_id": "$company_name_cn"}},
])

db.getCollection('Alibaba_Category').aggregate([
{'$match':{"CountryOrRegion" : "China (Mainland)"}},
{'$project':{"company_url":true}}, 
{'$group':{'_id':"$company_url"}}, 
{'$group':{'_id': null,'count':{'$sum':1}}}])


db.getCollection('Alibaba_Base_Company').aggregate([
{'$group':{'_id':"$company_url"}}, 
{'$group':{'_id': null,'count':{'$sum':1}}}])

db.getCollection('Alibaba_Base_Goods').aggregate([
{'$group':{'_id':"$product_url"}}, 
{'$group':{'_id': null,'count':{'$sum':1}}}],{allowDiskUse: true})

```

##### MongoDb 添加删除字段

```
# 添加字段
db.url.update({}, {$set: {content:""}}, {multi: 1})
# 删除字段
db.url.update({},{$unset:{'content':''}},false, true)

```

##### MongoDb 查询某个字段是否存在

```
db.getCollection('tableName').find({"RouteInfo":{"$exists":true}})
```







##### MySql 修改数据类型

```
alter table user modify column field varchar(2048);
```

##### MySql 修改自增id

```
ALTER TABLE D_global_company_information AUTO_INCREMENT=1
```

##### MySql 自增id重新排序

```python
alter table category drop cid;
alter table category add cid int(3) not null first;
alter table category modify column cid int( 3 ) not null auto_increment,add primary key(cid);
select * from category  order by cid  ;
```

##### MySql 多表联合查询

```
select DISTINCT(product_category), direction from 
(select b.* from (select * from D_CUS_ITCProduct_code6 where hs6_code="521159" ORDER BY product_category) as a cross join
(select * from F_CUS_global_country_company_product where country="China") as b 
on a.product_category=b.product_category) as c where c.direction="出口" ORDER BY product_category
```

##### MySql 增加表字段

```
alter table 表名 add 字段 类型 其他
```

##### MySql 添加索引

```python
ALTER TABLE `table_name` ADD INDEX index_name ( `column` ) 
```

##### MySql 删除值

```
delete from D_global_company_information where source='market'
```

##### MySql 修改表的值

```
# 修改表的值
UPDATE D_global_company_information SET source = "www.trademap.org" where source is null and city is not null;
# 复制表的值
UPDATE D_global_company_information SET  company_nameEN=company_name  where id >= 109668
```

##### MySql distinct 多个字段

##### recaptcha验证码



```

```

##### 云立方

```
curl -x 127.0.0.1:8080 httpbin.org/get
/etc/init.d/shadowsocks restart
 systemctl restart  tinyproxy.service
vi /etc/tinyproxy/tinyproxy.conf

```

##### 踩坑

```
mysql 是忽略大小写，当具有大小写的区别的时候， 需要额外注意。踩坑一天，吐血
```

##### ShadowSocks相关命令

```
查看配置文件: cat /etc/shadowsocks.json
修改配置: vi /etc/shadowsocks.json
重启ss: service shadowsocks restart
```

