function abrirDecoder(){
    document.getElementById('divDecoder').style.cssText = 'transform: scale(1);transition: all 0.4s;';
    document.getElementById('circle').style.cssText = 'transform: translate(0, -50%) scale(1);transition: border-radius 0.4s,transform 0.4s; border-radius: 0%; background-color: #3964c0';
    setTimeout(() => {document.getElementById('imgcircle').style.cssText="opacity: 1"}, 1000);
}

var inputBox=""
var inputSplit=[]
var tabela=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var resultArray=[]
var codeNumBox=0
var decodeNumBox=0

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

function code(){
    var passCode=[]

    if (document.getElementById("codeTipo").value==="cesar"){ 
        codeNumBox=Number(document.getElementById('numBox').value)
        
        inputBox=document.getElementById("codeBox").value;        
        inputSplit=inputBox.split(""); 

            for (var i=0; i<inputSplit.length; i++){
                if (inputSplit[i]===" "){resultArray.push(" ");continue} 
                else {
                    passCode[i]=tabela.indexOf(inputSplit[i])
                    /*Mais*/
                if (document.getElementById("sinal").innerHTML==="+"){
                    if (passCode[i]+codeNumBox>25){inputSplit[i]=tabela[passCode[i]+codeNumBox-26]; continue}
                        else {inputSplit[i]=tabela[passCode[i]+codeNumBox]}
                    }
                    /*Menos*/
                else if (document.getElementById("sinal").innerHTML==="-"){
                    if (passCode[i]-codeNumBox<0){inputSplit[i]=tabela[passCode[i]-codeNumBox+26]; continue}
                        else {inputSplit[i]=tabela[passCode[i]-codeNumBox]}}}}

            document.getElementById("decodeBox").value=inputSplit.join("")
            document.getElementById("codeBox").value="" }

    else if (document.getElementById("codeTipo").value==="base64") {
        inputBox=document.getElementById("codeBox").value;        
        document.getElementById("decodeBox").value=btoa(inputBox)
        document.getElementById("codeBox").value="" }
    }

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