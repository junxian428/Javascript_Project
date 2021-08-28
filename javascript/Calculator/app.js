var tsum = 0;
var secsum = "";
var operator = "+";
var principle = tsum.toString();
var calculate = 0;
var solution = 0;
document.getElementById("answer").innerHTML = tsum;


function one(){
   if(calculate % 2 != 0){
   var num = 1;
   var n = num.toString();
   secsum = secsum.concat(n);
   document.getElementById("answer").innerHTML = secsum;


   }else{
   var num = 1;
   var n = num.toString();
   principle = principle.concat(n);
   document.getElementById("answer").innerHTML = principle;
   }

}
function two(){
   if(calculate % 2 != 0){
   var num = 2;
   var n = num.toString();
   secsum = secsum.concat(n);
   document.getElementById("answer").innerHTML = secsum;


   }else{
   var num = 2;
   var n = num.toString();
   principle = principle.concat(n);
   document.getElementById("answer").innerHTML = principle;
   }

}

function three(){
   if(calculate % 2 != 0){
   var num = 3;
   var n = num.toString();
   secsum = secsum.concat(n);
   document.getElementById("answer").innerHTML = secsum;


   }else{
   var num = 3;
   var n = num.toString();
   principle = principle.concat(n);
   document.getElementById("answer").innerHTML = principle;
   }

}
function four(){
   if(calculate % 2 != 0){
   var num = 4;
   var n = num.toString();
   secsum = secsum.concat(n);
   document.getElementById("answer").innerHTML = secsum;


   }else{
   var num = 4;
   var n = num.toString();
   principle = principle.concat(n);
   document.getElementById("answer").innerHTML = principle;
   }

}
function five(){
   if(calculate % 2 != 0){
   var num = 5;
   var n = num.toString();
   secsum = secsum.concat(n);
   document.getElementById("answer").innerHTML = secsum;


   }else{
   var num = 5;
   var n = num.toString();
   principle = principle.concat(n);
   document.getElementById("answer").innerHTML = principle;
   }

}

function six(){
   if(calculate % 2 != 0){
   var num = 6;
   var n = num.toString();
   secsum = secsum.concat(n);
   document.getElementById("answer").innerHTML = secsum;


   }else{
   var num = 6;
   var n = num.toString();
   principle = principle.concat(n);
   document.getElementById("answer").innerHTML = principle;
   }

}

function seven(){
   if(calculate % 2 != 0){
   var num = 7;
   var n = num.toString();
   secsum = secsum.concat(n);
   document.getElementById("answer").innerHTML = secsum;


   }else{
   var num = 7;
   var n = num.toString();
   principle = principle.concat(n);
   document.getElementById("answer").innerHTML = principle;
   }

}

function eight(){
   if(calculate % 2 != 0){
   var num = 8;
   var n = num.toString();
   secsum = secsum.concat(n);
   document.getElementById("answer").innerHTML = secsum;


   }else{
   var num = 8;
   var n = num.toString();
   principle = principle.concat(n);
   document.getElementById("answer").innerHTML = principle;
   }

}

function nine(){
   if(calculate % 2 != 0){
   var num = 9;
   var n = num.toString();
   secsum = secsum.concat(n);
   document.getElementById("answer").innerHTML = secsum;


   }else{
   var num = 9;
   var n = num.toString();
   principle = principle.concat(n);
   document.getElementById("answer").innerHTML = principle;
   }

}

function zero(){
   if(calculate % 2 != 0){
   var num = 0;
   var n = num.toString();
   secsum = secsum.concat(n);
   document.getElementById("answer").innerHTML = secsum;


   }else{
   var num = 0;
   var n = num.toString();
   principle = principle.concat(n);
   document.getElementById("answer").innerHTML = principle;
   }

}



function delete1(){
   var n = principle.length;
   principle = principle.replace(principle[n-1],"")
   document.getElementById("answer").innerHTML = principle;

}
function plus(){
  
   operator = "+";
document.getElementById("answer").innerHTML = operator;
calculate += 1;
}
function minus(){
   operator = "-";
document.getElementById("answer").innerHTML = operator;
calculate += 1;
}

function multi(){
   operator = "*";
document.getElementById("answer").innerHTML = operator;
calculate += 1;
}

function div(){
   operator = "/";
document.getElementById("answer").innerHTML = operator;
calculate += 1;
}

function equal(){

	switch(operator){
 
	case "+":
		solution = parseFloat(tsum) + parseFloat(secsum);
		document.getElementById("answer").innerHTML = parseFloat(solution);
		calculate +=1;
		solution = 0;
		break;
	case "-":
		solution = parseFloat(tsum) - parseFloat(secsum);
		document.getElementById("answer").innerHTML = parseFloat(solution);
		calculate +=1;
		solution = 0;
		break;
	case "*":
		solution = parseFloat(tsum) * parseFloat(secsum);
		document.getElementById("answer").innerHTML = parseFloat(solution);
		calculate +=1;
		solution = 0;
		break;
	case "/":
		solution = parseFloat(tsum) / parseFloat(secsum);
		document.getElementById("answer").innerHTML = parseFloat(solution);
		calculate +=1;
		solution = 0;
		break;

	default:
		alert("Invalid Syntax!");
		break;


	}


}






