const epochInput = document.querySelector('#epoch-input');
const dateOutput = document.querySelector('#date-output');
const dateOutputUtc = document.querySelector('#date-output-utc');

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };

epochInput.oninput = function() {
  const d = new Date(0);
  d.setUTCSeconds(parseInt(epochInput.value, 10));
  dateOutput.textContent = d.toLocaleDateString("hi-IN", options);
  d.setMinutes(d.getMinutes() + d.getTimezoneOffset());
  dateOutputUtc.textContent = d.toLocaleDateString("en-US", options)
};
