/*
 * @Description: description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2023-03-07 22:33:03
 * @LastEditTime: 2023-03-07 22:33:16
 */
import qs from "qs";

export const request = function request(
  url: string,
  config: Record<string, any> = {}
) {
  config == null || typeof config !== "object" ? (config = {}) : null; //确保config肯定是对象

  if (typeof url !== "string")
    throw new TypeError(` ${url} is not an string! `);

  const { method = "GET", data } = config;

  // 区分get请求和post请求传递参数
  delete config.data;
  if (method.toUpperCase() === "POST") {
    config.body = qs.stringify(data);
  } else {
    url = `url?${new URLSearchParams(data).toString()}`;
  }

  return new Promise((resolve, reject) => {
    fetch(url, config)
      .then(async (res) => {
        const response = await res.json();
        resolve(response);
      })
      .catch(reject);
  });
};
