function JSClock(date) {
  const time = new Date(date);
  const hour = time.getHours();
  // const minute = time.getMinutes();
  // const second = time.getSeconds();
  // let temp = String(hour % 12);
  // if (temp === '0') {
  //   temp = '12';
  // }
  // temp += hour >= 12 ? ' P.M.' : ' A.M.';
  // temp += (minute < 10 ? ':0' : ':') + minute;
  // temp += (second < 10 ? ':0' : ':') + second;
  return hour;
}
console.log(JSClock('1980-05-08T12:50:00.000Z'));
