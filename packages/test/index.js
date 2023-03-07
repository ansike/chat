/*
 * @Description: description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2023-03-07 00:38:49
 * @LastEditTime: 2023-03-07 00:38:51
 */
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/ansike";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log("数据库已创建!");
  db.close();
});
