function getAge() {
  day = new Date().getTime();
  age = Math.floor((day-844300800000)/31557600000);
  document.getElementById("age").innerHTML = age + " years old.";
}
