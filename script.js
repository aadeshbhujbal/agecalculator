function age() {
  var date1 = document.getElementById("date").value;
  var month1 = document.getElementById("month").value;
  var year1 = document.getElementById("year").value;
  var date = new Date();
  var date2 = date.getDate();
  var month2 = 1 + date.getMonth();
  var year2 = date.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (date1 > date2) {
    date2 = date2 + month[month2 - 1];
    month2 = month2 - 1;
  }
  if (month1 > month2) {
    month2 = month2 + 12;
    year2 = year2 - 1;
  }
  var date = date2 - date1;
  var m = month2 - month1;
  var year = year2 - year1;
  document.getElementById("sub").innerHTML =
    "Your Age is " + year + " Years " + m + " Months " + date + " Days";
}
