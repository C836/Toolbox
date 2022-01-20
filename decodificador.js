function abrirDecoder(){
    document.getElementById('divDecoder').style.cssText = 'transform: scale(1);transition: all 0.4s;';
    document.getElementById('circle').style.cssText = 'transform: translate(0, -50%) scale(1);transition: border-radius 0.4s,transform 0.4s; border-radius: 0%; background-color: #3964c0';
    setTimeout(() => {document.getElementById('imgcircle').style.cssText="opacity: 1"}, 1000);
}

/*DECLARAÇÃO DOS VALORES*/
var inputBox=""
var inputSplit=[]
var tabela=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var resultArray=[]
var codeNumBox=0
var decodeNumBox=0

/*CHECAR SE CESAR ESTA SELECIONADO*/

function codeCheck(){
    if (document.getElementById("codeTipo").value==="cesar"){
        document.getElementById("sinal").style.cssText="display:inline"
        document.getElementById("numBox").style.cssText="display:inline"
        document.getElementById("codeBut").style.cssText="width:235px; float:right; margin: 0 15px 15px 0;"
    } else {
        document.getElementById("sinal").style.cssText="display:none"
        document.getElementById("numBox").style.cssText="display:none"
        document.getElementById("codeBut").style.cssText=""}
}

function decodeCheck(){
    if (document.getElementById("decodeTipo").value==="cesar"){
        document.getElementById("decoSinal").style.cssText="display:inline"
        document.getElementById("decoNumBox").style.cssText="display:inline"
        document.getElementById("decodeBut").style.cssText="width:235px; float:right; margin: 0 15px 15px 0;"
    } else {
        document.getElementById("decoSinal").style.cssText="display:none"
        document.getElementById("decoNumBox").style.cssText="display:none"
        document.getElementById("decodeBut").style.cssText=""}
}

/*TROCAR O BOTÃO + POR - NO CLIQUE*/

function toggleCodeBut(){
    botao=document.getElementById("sinal")
    if (botao.innerHTML==="+"){botao.innerHTML="-"}
    else {botao.innerHTML="+"}
}
function toggleDecodeBut(){
    botao=document.getElementById("decoSinal")
    if (botao.innerHTML==="+"){botao.innerHTML="-"}
    else {botao.innerHTML="+"}
}

/*CODIFICAR
codetipo = caixa de seleção (cesar/base64)
numbox = número de incremento
codebox = caixa de texto
sinal = + ou -
codebut = botão para ativar a função
*/
function code(){
    var passCode=[] /*DECLARAR */

    if (document.getElementById("codeTipo").value==="cesar"){  /* VERIFICA SE O VALOR DA SELEÇÃO É CESAR */
        codeNumBox=Number(document.getElementById('numBox').value)  /*VAI PEGAR O NÚMERO DE INCREMENTO E ARMAZENAR NUMA VARIAVEL*/
        
        inputBox=document.getElementById("codeBox").value;  /* VAI ARMAZENAR O TEXTO DE CODIFICAÇÃO NUMA VARIAVEL */
        inputSplit=inputBox.split("");  /* VAI DIVIDIR CADA LETRA DO TEXTO EM UM ARRAY*/

            for (var i=0; i<inputSplit.length; i++){ /*LOOP*/
                if (inputSplit[i]===" "){resultArray.push(" ");continue}  /* SE O CARACTERE SELECIONADO FOR ESPAÇO, VAI IGNORAR E IR PARA O PRÓXIMO ELEMENTO*/
                else {
                    passCode[i]=tabela.indexOf(inputSplit[i]) /* SE NAO FOR ESPAÇO, VAI PROCURAR O CARACTERE SELECIONADO NA TABELA E ARMAZENAR SUA POSIÇÃO NUMA VARIAVEL*/
                    /*Mais*/
                if (document.getElementById("sinal").innerHTML==="+"){  /* SE O SINAL FOR + */
                    if (passCode[i]+codeNumBox>25){inputSplit[i]=tabela[passCode[i]+codeNumBox-26]; continue} /* CASO O RESULTADO FOR MAIOR QUE 25, SUBTRAI 26 E CONTINUA O LOOP NORMALMENTE*/
                        else {inputSplit[i]=tabela[passCode[i]+codeNumBox]} /* VAI SUBSTITUIR O CARACTERE SELECIONADO ANTERIORMENTE PELA POSIÇÃO CORRESPONDENTE NA TABELA + O NUMERO DE INCREMENTO*/
                    }
                    /*Menos*/
                else if (document.getElementById("sinal").innerHTML==="-"){ /*  SE O SINAL FOR - */
                    if (passCode[i]-codeNumBox<0){inputSplit[i]=tabela[passCode[i]-codeNumBox+26]; continue} /* CASO O RESULTADO FOR MENOR QUE 25, SOMA 26 E CONTINUA O LOOP NORMALMENTE*/
                        else {inputSplit[i]=tabela[passCode[i]-codeNumBox]}}}} /* VAI SUBSTITUIR O CARACTERE SELECIONADO ANTERIORMENTE PELA POSIÇÃO CORRESPONDENTE NA TABELA - O NUMERO DE INCREMENTO*/

            document.getElementById("decodeBox").value=inputSplit.join("") /* RETIRAR AS VIRGULAS DO ARRAY E JOGAR NA CAIXA OPOSTA*/
            document.getElementById("codeBox").value="" } 

    else if (document.getElementById("codeTipo").value==="base64") {
        inputBox=document.getElementById("codeBox").value;        
        document.getElementById("decodeBox").value=btoa(inputBox)
        document.getElementById("codeBox").value="" }
    }

/*DECODIFICAR*/
function decode(){
    var passCode=[]

    if (document.getElementById("decodeTipo").value==="cesar"){ 
        decodeNumBox=Number(document.getElementById('decoNumBox').value)
        
        inputBox=document.getElementById("decodeBox").value;        
        inputSplit=inputBox.split(""); 

            for (var i=0; i<inputSplit.length; i++){
                if (inputSplit[i]===" "){resultArray.push(" ");continue} 
                else {
                    passCode[i]=tabela.indexOf(inputSplit[i])
                    /*Mais*/
                if (document.getElementById("decoSinal").innerHTML==="+"){
                    if (passCode[i]+decodeNumBox>25){inputSplit[i]=tabela[passCode[i]+decodeNumBox-26]; continue}
                        else {inputSplit[i]=tabela[passCode[i]+decodeNumBox]}
                    }
                    /*Menos*/
                else if (document.getElementById("decoSinal").innerHTML==="-"){
                    if (passCode[i]-decodeNumBox<0){inputSplit[i]=tabela[passCode[i]-decodeNumBox+26]; continue}
                        else {inputSplit[i]=tabela[passCode[i]-decodeNumBox]}}}}

            document.getElementById("codeBox").value=inputSplit.join("")
            document.getElementById("decodeBox").value="" }

    else if (document.getElementById("decodeTipo").value==="base64") {
        inputBox=document.getElementById("decodeBox").value;        
        document.getElementById("codeBox").value=atob(inputBox)
        document.getElementById("decodeBox").value="" }
    }