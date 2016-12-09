function clock() {
  var time;
  time = Date(year, month, hours, minutes, seconds);
  body.document.getById('time').innerHTML = time;
