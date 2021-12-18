const epochInput = document.querySelector('#epoch-input');
const dateOutput = document.querySelector('#date-output');
const dateOutputUtc = document.querySelector('#date-output-utc');
const dateOutputNow = document.querySelector('#date-now');

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };

function display_c(){
  let refresh = 1000;
  mytime = setTimeout('display_ct()',refresh)
}

function display_ct() {
  let x = Date.now()
  document.getElementById('ct').innerHTML = x;
  display_c();
}

epochInput.oninput = function() {
  const d = new Date(0);
  d.setUTCSeconds(parseInt(epochInput.value/1000, 10));
  dateOutput.textContent = d.toLocaleDateString("hi-IN", options);
  d.setMinutes(d.getMinutes() + d.getTimezoneOffset());
  dateOutputUtc.textContent = d.toLocaleDateString("en-US", options)
};
