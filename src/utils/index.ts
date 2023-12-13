// 插件korofileheader
// 快捷键 ctrl+cmd+t
// import * as path from "path";
import * as fs from 'fs';
import * as crypto from 'crypto';
/**
 * @description: 判断是否是json
 * @param {string} str
 * @return {*}
 */
export const isJson = (str: string): boolean => {
  try {
    const obj = JSON.parse(str);
    if (Object.prototype.toString.call(obj).slice(8, -1) === 'Object') {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
};

/**
 * @description: 获取字符出现次数
 * @param {string} str 原字符串
 * @param {string} chart 字符
 * @return {*} 次数
 */
export const getChartNums = (str: string, chart: string): number => {
  return str.length - str.replace(new RegExp(chart, 'g'), '').length;
};

/**
 * @description: 格式化时间
 * @param {*} timestamp 时间戳
 * @param {*} cFormat 格式方式 如{y}-{m}-{d} {h}:{i}:{s}
 * @return {*}
 */
export const formatDate = (timestamp, cFormat) => {
  const stamp = +`${timestamp}`;
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  const date = new Date(stamp);
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const timeStr = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key];
    return value.toString().padStart(2, '0');
  });
  return timeStr;
};

/**
 * @description: 用于生成正确时间，在utc时间的基础上+8
 * @param {*} string
 * @return {*}
 */
export const getUTCEight = (): string => {
  const date = new Date();
  const utcMilliseconds = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getUTCMilliseconds(),
  );
  const dateTmp = new Date(utcMilliseconds);
  dateTmp.setHours(dateTmp.getHours() + 8);
  const dateStr: string = formatDate(
    +new Date(date),
    '{y}-{m}-{d} {h}:{i}:{s}',
  );
  return dateStr;
};
/**
 * @description: 用于生成正确时间 时间戳，在utc时间的基础上+8
 * @param {*} string
 * @return {*}
 */
export const getUTCEightTimeStamp = (): number => {
  const date = new Date();
  const utcMilliseconds = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getUTCMilliseconds(),
  );
  const timeStamp = +new Date(utcMilliseconds);
  return timeStamp;
};
