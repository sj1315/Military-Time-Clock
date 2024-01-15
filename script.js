var daysOfWeek = ['sun','mon','tue','wed','thur','fri','sat'];
var month = ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];

function clock(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = h<11 ? "AM" : "PM";
    var dayToday = today.getDay();
    var date = today.getDate();
    var mon = today.getMonth();
    var year = today.getFullYear();


h = h < 10 ? '0' + h : h;
m = m < 10 ? '0' + m : m;
s = s < 10 ? '0' + s : s;

document.getElementById('hours').innerHTML = h;
document.getElementById('min').innerHTML = m;
document.getElementById('sec').innerHTML = s;
document.getElementById('time').innerHTML = day;
document.getElementById(''+daysOfWeek[dayToday]+'').style.color = "#fff";
document.getElementById('day').innerHTML = date;
document.getElementById('month').innerHTML = month[mon];
document.getElementById('year').innerHTML = year;
}

var inter = setInterval(clock,400)