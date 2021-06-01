function addcharc(i){
    document.getElementById('inpcharc').value += i;
}
function cclear(){
    document.getElementById('inpcharc').value = '';
    document.getElementById('inpcharc1').value = '';
}
function backspace()
{
    var prevalue= document.getElementById('inpcharc').value;
    document.getElementById('inpcharc').value =prevalue.substr(0,prevalue.length-1);

}


/*function mod(){
    var oper1 = document.getElementById('inpcharc').value;
    document.getElementById('inpcharc1').value = Math.mod(oper1);
} */

function sinclicked(i){
    
    var oper1 = document.getElementById('inpcharc').value;
    
    document.getElementById('inpcharc1').value = Math.sin(oper1);
    document.getElementById('inpcharc').value += i
}
function cosclicked(i){
    var oper1 = document.getElementById('inpcharc').value;
    document.getElementById('inpcharc').value += i
    document.getElementById('inpcharc1').value = Math.cos(oper1);
}
function tanclicked(i){
    var oper1 = document.getElementById('inpcharc').value;
    document.getElementById('inpcharc').value += i
    document.getElementById('inpcharc1').value = Math.tan(oper1);
}
function pow(i)
{
    var oper2 = document.getElementById('inpcharc').value;
    document.getElementById('inpcharc').value += i
    var oper3=document.getElementById('inpcharc').value;
    document.getElementById('inpcharc1').value = Math.pow(oper2,oper3);
}

function cube(i)
{
    var oper2 = document.getElementById('inpcharc').value;
    document.getElementById('inpcharc').value += i
    document.getElementById('inpcharc1').value = Math.pow(oper2,3);
}

function square(i)
{
    var oper2 = document.getElementById('inpcharc').value;
    document.getElementById('inpcharc').value += i
    document.getElementById('inpcharc1').value = Math.pow(oper2,2);
}

function sinhclicked(i){
    var oper1 = document.getElementById('inpcharc').value;
    document.getElementById('inpcharc').value += i
    document.getElementById('inpcharc1').value = Math.sinh(oper1);
}

function coshclicked(i){
    var oper1 = document.getElementById('inpcharc').value;
    document.getElementById('inpcharc').value += i
    document.getElementById('inpcharc1').value = Math.cosh(oper1);
}

function tanhclicked(i){
    var oper1 = document.getElementById('inpcharc').value;
    document.getElementById('inpcharc').value += i
    document.getElementById('inpcharc1').value = Math.tanh(oper1);
}

function exp(i){
    var oper1 = document.getElementById('inpcharc').value;
    document.getElementById('inpcharc').value += i
    document.getElementById('inpcharc1').value = Math.exp(oper1);
}
function rt(i)
{
    var oper3 = document.getElementById('inpcharc').value;
    document.getElementById('inpcharc').value += i
    document.getElementById('inpcharc1').value = Math.sqrt(oper3);
}

function invsinhclicked(i){
    var oper1 = document.getElementById('inpcharc').value;
    document.getElementById('inpcharc').value += i
    document.getElementById('inpcharc1').value = Math.asinh(oper1);
}

function invcoshclicked(i){
    var oper1 = document.getElementById('inpcharc').value;
    document.getElementById('inpcharc').value += i
    document.getElementById('inpcharc1').value = Math.acosh(oper1);
}

function invtanhclicked(i){
    var oper1 = document.getElementById('inpcharc').value;
    document.getElementById('inpcharc').value += i
    document.getElementById('inpcharc1').value = Math.atanh(oper1);
}

function log2(i){
    var oper1 = document.getElementById('inpcharc').value;
    document.getElementById('inpcharc').value += i
    document.getElementById('inpcharc1').value = Math.log2(oper1);
}

function ln(i){
    var oper1 = document.getElementById('inpcharc').value;
    document.getElementById('inpcharc').value += i
    document.getElementById('inpcharc1').value = Math.log10(oper1);
}

function log(i){
    var oper1 = document.getElementById('inpcharc').value;
    document.getElementById('inpcharc').value += i
    document.getElementById('inpcharc1').value = Math.log(oper1);
}

function pi(i){
    document.getElementById('inpcharc').value += i
    document.getElementById('inpcharc1').value = Math.PI;
}

function Ee(i){
    document.getElementById('inpcharc').value += i
    document.getElementById('inpcharc1').value = Math.E;
}

//function fact()
{
   // var oper1 = document.getElementById('inpcharc').value;
    //document.getElementById('inpcharc1').value = (n > 1) ?  n * fact(n - 1) : 1;
   // document.getElementById('inpcharc1').value = Math.fact(oper1);
}//

function exp(i){
    var oper1 = document.getElementById('inpcharc').value;
    document.getElementById('inpcharc').value += i
    document.getElementById('inpcharc1').value = Math.exp(oper1);
}

function ten(i)
{
    var oper2 = document.getElementById('inpcharc').value;
    document.getElementById('inpcharc').value += i
    document.getElementById('inpcharc1').value = Math.pow(10,oper2);
}

/*function logxy(base,number){
    document.getElementById('inpcharc').value += (base,number);
    document.getElementById('inpcharc').value += i
    document.getElementById('inpcharc1').value = Math.log(number)/Math.log(base);  
}*/

function log(i)
{
    var x;
    var y;
    //var z= x,y;
     document.getElementById('inpcharc').value=x,y;
     document.getElementById('inpcharc').value += i
    document.getElementById('inpcharc1').value = Math.log(y)/Math.log(x);


}

function div(i){
    var oper1 = document.getElementById('inpcharc').value;
    oper2=1/oper1;
    document.getElementById('inpcharc').value += i
    document.getElementById('inpcharc1').value = eval(oper2);//1/x
}

function invsinclicked(i){
    var oper1 = document.getElementById('inpcharc').value;
    document.getElementById('inpcharc').value += i
    document.getElementById('inpcharc1').value = Math.asin(oper1);
}

function invcosclicked(i){
    var oper1 = document.getElementById('inpcharc').value;
    document.getElementById('inpcharc').value += i
    document.getElementById('inpcharc1').value = Math.acos(oper1);
}
function invtanclicked(i){
    var oper1 = document.getElementById('inpcharc').value;
    document.getElementById('inpcharc').value += i
    document.getElementById('inpcharc1').value = Math.atan(oper1);
}

//function cubert()
{
    //var oper3 = document.getElementById('inpcharc').value;
   // document.getElementById('inpcharc1').value = Math.cubert(oper3,3);
}//

function absolute(i){
    var oper1 = document.getElementById('inpcharc').value;
    document.getElementById('inpcharc').value += i
    document.getElementById('inpcharc1').value = Math.abs(oper1);
    
}

function calciequals(){
    var oper = document.getElementById('inpcharc').value;
    oper=oper.replace(' − ',' - ');
    //document.getElementById('inpcharc1').value = eval(oper);
    
   if(Number.isInteger(eval(oper))){
        document.getElementById('inpcharc1').value = eval(oper);
      }
        document.getElementById('inpcharc1').value= parseFloat(eval(oper)).toFixed(3);
     
}
