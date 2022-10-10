let kgInput = document.getElementById("inputA");
let poundInput = document.getElementById("inputB");
let formula = document.getElementById("converter-formula")

kgInput.addEventListener('keyup', function(){
  poundInput.value = "";
  formula.innerHTML = "";
  poundInput.placeholder = (kgInput.value * 2.205).toFixed(3) +' lbs';
  kgInput.placeholder = kgInput.value;
  formula.innerHTML = 'For an approximate result, </br> multiply the mass value by 2,205';
});

poundInput.addEventListener('keyup', function(){
  kgInput.value = "";
  formula.innerHTML = "";
  kgInput.placeholder = (poundInput.value / 2.205).toFixed(3) + ' kg';
  poundInput.placeholder = poundInput.value;
  formula.innerHTML = 'For an approximate result, </br> divide the mass value by 2,205';
});
