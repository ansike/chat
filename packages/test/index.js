/*
 * @Description: description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2023-03-07 00:38:49
 * @LastEditTime: 2023-03-08 21:50:37
 */
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/ansike";

MongoClient.connect(url).then(client=>{
  console.log(client);
  client.close();
}).catch(e=>{
  console.log(e);
})
