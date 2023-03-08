/*
 * @Description: 请求方式
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2023-03-06 22:14:09
 * @LastEditTime: 2023-03-08 22:38:55
 */
import qs from "qs";

export const request = function request<T>(
  url: string,
  config: Record<string, any> = {}
) {
  if (typeof url !== "string")
    throw new TypeError(` ${url} is not an string! `);

  const { method = "GET", data } = config;

  // 区分get请求和post请求传递参数
  delete config.data;
  if (method.toUpperCase() === "POST") {
    config.body = qs.stringify(data);
  } else {
    url = `${url}?${new URLSearchParams(data).toString()}`;
  }

  return new Promise<T>((resolve, reject) => {
    fetch(url, config)
      .then(async (res) => {
        const response = await res.json();
        resolve(response);
      })
      .catch(reject);
  });
};
