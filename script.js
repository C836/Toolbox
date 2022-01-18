
function check(){if (operacao.length > 25){maxChar=false} else {maxChar=true}}

function abrirCalculadora(){
    document.getElementById('divCalculadora').style.cssText = 'transform: scale(1);transition: all 0.4s;';

    document.getElementById('circle').style.cssText = 'transform: translate(0, -50%) scale(1);transition: all 0.4s; border-radius: 0%';
}

var operacao = " "
var numEx = "0123456789"
var lastCh = NaN
var excep = false
var maxChar = true


    function addZero(){
        if (maxChar==true){operacao+="0"}}
    function addUm(){
        if (maxChar==true){operacao+="1"}}
    function addDois(){
        if (maxChar==true){operacao+="2"}}
    function addTres(){
        if (maxChar==true){operacao+="3"}}
    function addQuatro(){
        if (maxChar==true){operacao+="4"}}
    function addCinco(){
        if (maxChar==true){operacao+="5"}}
    function addSeis(){
        if (maxChar==true){operacao+="6"}}
    function addSete(){
        if (maxChar==true){operacao+="7"}}
    function addOito(){
        if (maxChar==true){operacao+="8"}}
    function addNove(){
        if (maxChar==true){operacao+="9"}}

        
    function addSoma(){if (excep==true && maxChar==false){operacao+="+"}; lastCh = operacao.charAt(operacao.length - 1)
        if (numEx.indexOf(lastCh)>-1 && maxChar==true){operacao+="+"} excep=false}

    function addSub(){if (excep==true && maxChar==true){operacao+="-"}; lastCh = operacao.charAt(operacao.length - 1)
        if (numEx.indexOf(lastCh)>-1 && maxChar==true){operacao+="-"} excep=false}

    function addMult(){if (excep==true && maxChar==true){operacao+="*"}; lastCh = operacao.charAt(operacao.length - 1)
        if (numEx.indexOf(lastCh)>-1 && maxChar==true){operacao+="*"} excep=false}

    function addDiv(){if (excep==true && maxChar==true){operacao+="/"} lastCh = operacao.charAt(operacao.length - 1)
        if (numEx.indexOf(lastCh)>-1 && maxChar==true){operacao+="/"} excep=false}

    function Clear(){operacao=" "}
        
    function Equal(){operacao=eval(operacao);excep=true}
    
function refresh(){document.getElementById('display').innerHTML=operacao; 
        if (operacao.length>9){document.getElementById('display').style.cssText=`font-size: ${210/operacao.length*2}px;`}
            else {document.getElementById('display').style.cssText=`font-size: 50px;`}}
        