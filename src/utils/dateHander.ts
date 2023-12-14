const getCurDate = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  return `${year}年${month}月${day}日`;
};
const getWeek = (): string => {
  const now = new Date();
  const day = now.getDay();
  let week = '';
  switch (day) {
    case 1:
      week = '星期一';
      break;
    case 2:
      week = '星期二';
      break;
    case 3:
      week = '星期三';
      break;
    case 4:
      week = '星期四';
      break;
    case 5:
      week = '星期五';
      break;
    case 6:
      week = '星期六';
      break;
    case 0:
      week = '星期日';
      break;
    default:
      week = '';
      break;
  }
  return week;
};
const getCountDays = (): number => {
  const now = new Date();
  const curMonth = now.getMonth();
  now.setMonth(curMonth + 1);
  now.setDate(0);
  return now.getDate();
};
/**
 * @description: 距离几号
 * @param {*} val
 * @return {*}
 */
const distanceDay = (val): number => {
  const now = new Date();
  const day = now.getDate();
  const countDays = getCountDays();
  if (val < day) {
    return countDays - day + val;
  }
  return val - day;
};
/**
 * @description: 距离周末
 * @param {*} number
 * @return {*}
 */
const distanceWeek = (): number => {
  const now = new Date();
  const day = now.getDay();
  return 6 - day;
};
/**
 * @description: 距离元旦
 * @param {*} number
 * @return {*}
 */
const getDistancNewYearDay = (): number => {
  const now = +new Date();
  const nowTmp = new Date();
  const year = nowTmp.getFullYear() + 1;
  const newYear = +new Date(`${year}/01/01 00:00:00`);
  const t = newYear - now;
  const d = Math.floor(t / 1000 / 60 / 60 / 24);
  return d;
};
/**
 * @description: 距离春节
 * @param {*} number
 * @return {*}
 */
const getDistancSpringFestivalDay = (): number => {
  const now = +new Date();
  const newYear = +new Date('2024/02/10 00:00:00');
  const t = newYear - now;
  const d = Math.floor(t / 1000 / 60 / 60 / 24);
  return d;
};

const getTetire = (retireDay: number): any => {
  const now = new Date();
  const year: number = now.getFullYear();
  return function (born: number) {
    const result: number = (retireDay - (year - born)) * 365;
    return result;
  };
};

export const getResult = (): string => {
  const date = getCurDate();
  const week = getWeek();
  const sixDay = distanceWeek();
  const newYearDay = getDistancNewYearDay();
  const springFestivalDay = getDistancSpringFestivalDay();
  const tetire55 = getTetire(55);
  const tetire65 = getTetire(65);
  const t9060 = tetire55(1990);
  const t9560 = tetire55(1995);
  const t9065 = tetire65(1990);
  const t9565 = tetire65(1995);

  const result = `
      【摸鱼办】提醒您：😏
      今天是${date}，${week}，你好摸鱼人！工作再忙，一定不要忘记摸鱼哦！有事没事起身去茶水间，去厕所、走走，去找同事聊聊八卦别老在工位上坐着，钱是老板的，但命是自己的！
      温馨提示：
      距离【5号发工资】：${distanceDay(5)}天
      距离【10号发工资】：${distanceDay(10)}天
      距离【15号发工资】：${distanceDay(15)}天
      距离【20号发工资】：${distanceDay(20)}天
      距离【25号发工资】：${distanceDay(25)}天
      距离【28号发工资】：${distanceDay(28)}天
      距离【30号发工资】：${distanceDay(30)}天
      距离【周六】还有：${sixDay}天
      距离【元旦】还有：${newYearDay}天
      距离【春节】还有：${springFestivalDay}天
      距离【退休】还有：
        90年55岁退休：${t9060}天
        95年55岁退休：${t9560}天
        90年65岁退休：${t9065}天
        95年65岁退休：${t9565}天
      
      愿早日退休！！！愿房贷早日还完！！！愿各位摸鱼人安好！！！
      摸鱼是一门学问，是属于上班族的浪漫！最后，
      祝愿天下所有摸鱼人，都能愉快的渡过每一天.

      物业电话：89898388
      开暖气电话：15690169293
      维修电话（张峰）：13028631808
    `;
  return result;
};
