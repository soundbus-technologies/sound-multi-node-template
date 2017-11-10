import errConfig from '../config/error.config';

/**
 * 渲染页面的方法
 * @param viewPath 页面路径
 * @param data  页面所需首屏数据
 */
export function baseRender(viewPath: string, data?: any) {
  const p = 'public';
  console.log(`+++ node/libs/util.js - viewPath +++ ${p}/views/${viewPath}`);
  console.log(`+++ node/libs/util.js - data +++ ${JSON.stringify(data)}`);

  if (Object.keys(errConfig).indexOf(String(this.statusCode)) > -1) {
    this.render(`${p}/views/${viewPath}`, data);
  } else {
    this.render(`${p}/views/${viewPath}`, {state: JSON.stringify(data)});
  }
}



/**
 * 首字母大写的方法
 * @param str 需要大写的字符串
 */
export function UpperFirstLetter(str: string) {
    var str = str.toLowerCase();
    str = str.replace(/\b\w+\b/g, function(word){
        return word.substring(0,1).toUpperCase()+word.substring(1);
    });
    return str;
}
