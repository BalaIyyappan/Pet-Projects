
let date = new Date();
let year = date.getFullYear();
let mon = ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUUGUST','SEPTEMBER','NOVEMBER','DECEMBER'];
let monthNum = date.getMonth();
let month = mon[monthNum];
let week = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
console.log(year,month);
let m = document.getElementById('month');
function monyr(){
  m.innerHTML = month;
  let y = document.createElement('div');
  y.setAttribute('align','center');
  y.setAttribute('id',"year");
  y.textContent=year;
  m.appendChild(y);

  //DAYS OF WEEK
  for(w=0;w<7;w++){
    let wd = document.createElement('div');
    wd.innerHTML = week[w];
    wd.setAttribute('class','week');
    document.getElementById('days').appendChild(wd);
  }

  // DAYS div
  for(d=1;d<=31;d++){
    let dd = document.createElement('div');
    dd.setAttribute('class','date');
    da='date'+d;
    dd.setAttribute('id',da);
    dd.innerHTML=d;
    document.getElementById('date').appendChild(dd);
  }
}

// function left(){}
// function right(){}
