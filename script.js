const epochInput = document.querySelector('#epoch-input');
const dateOutput = document.querySelector('#date-output');
const dateOutputUtc = document.querySelector('#date-output-utc');
const ct = document.querySelector('#ct');

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };

// To display current time
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

function copyDivToClipboard() {
    var range = document.createRange();
    var copyText = document.getElementById("ct");
    range.selectNode(copyText);
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied";
}
