const moment = require('moment');
moment.locale('uz-latn');
const dateNow = moment().format('MMMM Do YYYY, h:mm:ss a')
const dateNowFormatDDDD = moment().format('dddd');
const escaped = moment().format('YYYY [nimadir] h:mm:ss');

console.log(dateNow, dateNowFormatDDDD, escaped);

const hhmmss = moment().format('LTS');
const yymmdd = moment().format('LL')
console.log(yymmdd, 'yil', hhmmss);

// years ago
const createdAt = 102200;
const ago = moment(`${createdAt}`, "hhmmss").fromNow()
console.log(ago);

// hours ago 
const created = 20210810;
const agoHours = moment().endOf('day').fromNow();
console.log(agoHours);

// calendar time
const calendar = moment().subtract(7, 'days').calendar()
console.log(calendar);

// add days

const addCalendar = moment().add(02, 'days').calendar();
console.log(addCalendar);