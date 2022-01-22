function abrirDecoder(){  /* ABRIR DO MENU (IGNORE)*/
    document.getElementById('divDecoder').style.cssText = 'transform: scale(1);transition: all 0.4s;';
    document.getElementById('circle2').style.cssText = 'transform: translate(0, -50%) scale(1);transition: border-radius 0.4s,transform 0.4s; border-radius: 0%; background-color: #3964c0';
    timeout=setTimeout(function(){document.getElementById('imgDecoder').style.cssText="opacity: 1"}, 500);
}
function fecharDecoder(){
    document.getElementById('circle2').style.cssText = 'transform: translate(0, -50%) scale(0);transition: border-radius 0.4s,transform 0.4s; border-radius: 100%;background-color: #3964c0'
    document.getElementById('imgDecoder').style.cssText="opacity:0;transition: opacity 0s;"  
    document.getElementById('divDecoder').style.cssText = 'opacity: 0;transform: scale(0);transition: all 0.4s; transform-origin: 50% 50%)';
    clearTimeout(timeout);
}

var inputBox=""
var inputSplit=[]
var tabela=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var resultArray=[]
var codeNumBox=0
var decodeNumBox=0

/*CHECAR SE CESAR ESTA SELECIONADO*/

function codeCheck(){
    codeTipo=document.getElementById("codeTipo")
    sinal=document.getElementById("sinal")
    numBox=(document.getElementById("numBox"))
    codeBut=document.getElementById("codeBut")

    if (codeTipo.value==="cesar"){
        sinal.style.cssText="display:inline"
        numBox.style.cssText="display:inline"
        codeBut.style.cssText="width:235px; float:right; margin: 0 15px 15px 0;"
    } else {
        sinal.style.cssText="display:none"
        numBox.style.cssText="display:none"
        codeBut.style.cssText=""}
}

function decodeCheck(){
    decodeTipo=document.getElementById("decodeTipo")
    decoSinal=document.getElementById("decoSinal")
    decoNumBox=document.getElementById("decoNumBox")
    decodeBut=document.getElementById("decodeBut")

    if (decodeTipo.value==="cesar"){
        decoSinal.style.cssText="display:inline"
        decoNumBox.style.cssText="display:inline"
        decodeBut.style.cssText="width:235px; float:right; margin: 0 15px 15px 0;"
    } else {
        decoSinal.style.cssText="display:none"
        decoNumBox.style.cssText="display:none"
        decodeBut.style.cssText=""}
}

/*TROCAR O BOTÃO + POR - NO CLIQUE*/

function toggleCodeBut(){
    if (sinal.innerHTML==="+"){sinal.innerHTML="-"}
    else {sinal.innerHTML="+"}
}
function toggleDecodeBut(){
    if (decoSinal.innerHTML==="+"){decoSinal.innerHTML="-"}
    else {decoSinal.innerHTML="+"}
}

/*CODIFICAR
codetipo = caixa de seleção (cesar/base64)
numbox = número de incremento
codebox = caixa de texto
sinal = + ou -
codebut = botão para ativar a função
*/
function code(){
    codeNumBox=Number(document.getElementById("numBox").value)
    passCode=[]

    if (codeTipo.value==="cesar"){  /* VERIFICA SE O VALOR DA SELEÇÃO É CESAR */
        
        inputBox=document.getElementById("codeBox").value;  /* VAI ARMAZENAR O TEXTO DE CODIFICAÇÃO NUMA VARIAVEL */
        inputSplit=inputBox.split("");  /* VAI DIVIDIR CADA LETRA DO TEXTO EM UM ARRAY*/

            for (var i=0; i<inputSplit.length; i++){ /*LOOP*/
                if (inputSplit[i]===" "){resultArray.push(" ");continue}  /* SE O CARACTERE SELECIONADO FOR ESPAÇO, VAI IGNORAR E IR PARA O PRÓXIMO ELEMENTO*/
                else {
                    passCode[i]=tabela.indexOf(inputSplit[i]) /* SE NAO FOR ESPAÇO, VAI PROCURAR O CARACTERE SELECIONADO NA TABELA E ARMAZENAR SUA POSIÇÃO NUMA VARIAVEL*/
                    /*Mais*/
                if (sinal.innerHTML==="+"){  /* SE O SINAL FOR + */
                    if (passCode[i]+codeNumBox>25){inputSplit[i]=tabela[passCode[i]+codeNumBox-26]; continue} /* CASO O RESULTADO FOR MAIOR QUE 25, SUBTRAI 26 E CONTINUA O LOOP NORMALMENTE*/
                        else {inputSplit[i]=tabela[passCode[i]+codeNumBox]} /* VAI SUBSTITUIR O CARACTERE SELECIONADO ANTERIORMENTE PELA POSIÇÃO CORRESPONDENTE NA TABELA + O NUMERO DE INCREMENTO*/
                    }
                    /*Menos*/
                else if (sinal.innerHTML==="-"){ /*  SE O SINAL FOR - */
                    if (passCode[i]-codeNumBox<0){inputSplit[i]=tabela[passCode[i]-codeNumBox+26]; continue} /* CASO O RESULTADO FOR MENOR QUE 25, SOMA 26 E CONTINUA O LOOP NORMALMENTE*/
                        else {inputSplit[i]=tabela[passCode[i]-codeNumBox]}}}} /* VAI SUBSTITUIR O CARACTERE SELECIONADO ANTERIORMENTE PELA POSIÇÃO CORRESPONDENTE NA TABELA - O NUMERO DE INCREMENTO*/

            document.getElementById("decodeBox").value=inputSplit.join("") /* RETIRAR AS VIRGULAS DO ARRAY E JOGAR NA CAIXA OPOSTA*/
            document.getElementById("codeBox").value="" } 

    else if (codeTipo.value==="base64") {
        inputBox=document.getElementById("codeBox").value;        
        document.getElementById("decodeBox").value=btoa(inputBox)
        document.getElementById("codeBox").value="" } 

    else if (codeTipo.value==="binario") {
    inputBox=document.getElementById("codeBox").value;
    inputSplit=inputBox.split("");
        for (var i=0; i<inputSplit.length; i++){
            passCode[i]=inputSplit[i].charCodeAt()
            inputSplit[i]=(passCode[i].toString(2))
        
        if (inputSplit[i].length===6){inputSplit[i]="00"+inputSplit[i]}
        else if (inputSplit[i].length===7){inputSplit[i]="0"+inputSplit[i]}
        else if (inputSplit[i].length===8){continue}}

            document.getElementById("decodeBox").value=inputSplit.join(" ")
        }
    }
    
        


/*DECODIFICAR*/
function decode(){
    decodeNumBox=Number(document.getElementById("decoNumBox").value)
    passCode=[]

    if (decodeTipo.value==="cesar"){ 
        
        inputBox=document.getElementById("decodeBox").value;        
        inputSplit=inputBox.split(""); 

            for (var i=0; i<inputSplit.length; i++){
                if (inputSplit[i]===" "){resultArray.push(" ");continue} 
                else {
                    passCode[i]=tabela.indexOf(inputSplit[i])
                    /*Mais*/
                if (decoSinal.innerHTML==="+"){
                    if (passCode[i]+decodeNumBox>25){inputSplit[i]=tabela[passCode[i]+decodeNumBox-26]; continue}
                        else {inputSplit[i]=tabela[passCode[i]+decodeNumBox]}
                    }
                    /*Menos*/
                else if (decoSinal.innerHTML==="-"){
                    if (passCode[i]-decodeNumBox<0){inputSplit[i]=tabela[passCode[i]-decodeNumBox+26]; continue}
                        else {inputSplit[i]=tabela[passCode[i]-decodeNumBox]}}}}

            document.getElementById("codeBox").value=inputSplit.join("")
            document.getElementById("decodeBox").value="" }

    else if (document.getElementById("decodeTipo").value==="base64") {
        inputBox=document.getElementById("decodeBox").value;        
        document.getElementById("codeBox").value=atob(inputBox)
        document.getElementById("decodeBox").value="" }
    
    else if (document.getElementById("decodeTipo").value==="binario") {
        inputBox=document.getElementById("decodeBox").value.replace(/ /g, "")
        inputSplit=inputBox.match(/.{1,8}/g);
            for (var i=0; i<inputSplit.length; i++){
                inputSplit[i]=String.fromCharCode(parseInt(inputSplit[i], 2))
            }  
        document.getElementById("codeBox").value=inputSplit.join("")
        document.getElementById("decodeBox").value="" }
    }
    
    /* teste 1542220i3casaa MAcaco zéZé ][Ç>;´:+:_)@!""|:?:{:_ */