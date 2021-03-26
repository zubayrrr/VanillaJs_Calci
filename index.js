function display(value) {
  document.getElementById("inputarea").value += value;
}

calculate = () => {
  var value = document.getElementById("inputarea").value;
  var ans = eval(value);
  document.getElementById("inputarea").value = ans;
};

clr = () => {
  document.getElementById("inputarea").value = "";
};
