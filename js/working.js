var tbcal = "";
const useinp = document.getElementById('useinp');
const compinp = document.getElementById('compout');

function calcad(value){
  tbcal += value;
  useinp.value = tbcal;
}

function msg(){
  if(tbcal.length == 0 || tbcal == ""){
    alert("The calculator needs an input!");
    return;
  }
  try{
    ans = eval(tbcal);
    compinp.value = ans;
  }
  catch(err){
    alert("Please enter a valid input!");
  }
}

function reset(){
  useinp.value = "";
  compinp.value = "";
  tbcal = "";
}

function removeLast(){
  tbcal = tbcal.substring(0, tbcal.length - 1);
  useinp.value = tbcal;
}
