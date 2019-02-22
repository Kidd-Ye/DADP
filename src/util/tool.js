export default {
  getBrowserInfo() {
    const info = {};
    if (navigator.userAgent.toLowerCase().indexOf('msie') !== -1) { // IE
      info.name = 'IE';
      info.version = parseInt(navigator.userAgent.split(';')[1].replace(' ', '').split(' ')[1], 10);
    } else if (navigator.userAgent.toLowerCase().indexOf('wow64') !== -1) { // Edge
      info.name = 'Edge';
      info.version = parseInt(navigator.userAgent.split(';')[2].replace(' ', '').split('/')[1], 10);
    } else if (navigator.userAgent.toLowerCase().indexOf('chrome') !== -1) {
      //
    } else if (navigator.userAgent.toLowerCase().indexOf('firefox') !== -1) {
      //
    }
    return info;
  },
  // 转换为百分比
  transformPercent(num) {
    return (num * 100).toFixed(2) + '%';
  },
  // 检查给定的值是否为“空”
  isEmpty(value) {
    const valueType = Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
    let empty = false;
    switch (valueType) {
      case 'null':
      case 'undefined':
        empty = true;
        break;
      case 'string':
        empty = !value.trim();
        break;
      case 'array':
        empty = !value.length;
        break;
      case 'object':
        empty = !Object.getOwnPropertyNames(value).length;
        break;
      default:
        break;
    }
    return empty;
  },
  formatDate(date) {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    return year + '-' + month + '-' + day;
  },
  formatDateTo(date) {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    return year + '-' + month + '-' + day + '-' + date.getHours() + '-' + date.getMinutes();
  },
  getLastMonthDate(date) {
    const year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    return year + '-' + month + '-' + day;
  },
  // 增加千分符  例如：10,000,000
  toThousands(num){
    let result = '';
    let signal = "";
    if (num < 0) {
      signal = "-";
      num = Math.abs(num);
    }
    num = num.toString();
    let numlist = [];
    if (num.includes(".")) {
      numlist = num.split(".");
      while (numlist[0].length > 3) {
        result = ',' + numlist[0].slice(-3) + result;
        numlist[0] = numlist[0].slice(0, numlist[0].length - 3);
      }
      result = signal + numlist[0] + result + "." + numlist[1];
    }else{
      while (num.length > 3) {
        result = ',' + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
      }
      result = signal + num + result;
    }
    return result;
  }
};
