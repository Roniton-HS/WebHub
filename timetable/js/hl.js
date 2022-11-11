const inRange = function(i, low, high) {
  return i >= low && i <= high;
}

const getTableCell = function(t, day) {
  let cell;
  if      (inRange(t, 0800, 0959)) cell = 1
  else if (inRange(t, 1000, 1159)) cell = 2
  else if (inRange(t, 1200, 1359)) cell = 3
  else if (inRange(t, 1400, 1559)) cell = 4
  else if (inRange(t, 1600, 1759)) cell = 5;
  return `${day}${cell}`;
}

const markActive = function() {
  const date  = new Date();

  const day     = weekdays[date.getDay()].toLowerCase();
  const hour    = pad(date.getHours(), 2, 0);
  const minute  = pad(date.getMinutes(), 2, 0);
  const time    = `${hour}${minute}`;
  console.log(day + time)

  const target = document.getElementById(getTableCell(time, day));
  if (target) target.style.backgroundColor = '#3e3f5e';
}

window.onload = markActive();
setInterval(markActive, 60000);
