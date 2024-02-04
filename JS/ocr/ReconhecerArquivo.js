function ReconhecerOCR(arquivo)
{
    let resultadoFinal=document.getElementById("resultadoFinalOCR");
    let resultadoConversaoExibirTela=document.getElementById("resultadoConversao");
    let arquivoConvertidoOcr="";
    alert("arquivo dentro do ocr recebido: "+arquivo);
    Tesseract.recognize(
        arquivo,
        'eng',
    ).then(({ data: { text } }) => {
        alert("Texto convertido: "+text);
        resultadoFinal.innerHTML=text;
        
        
        
        
    }).catch(error => {
        resultadoFinal.innerHTML=error;

        alert(error);
        console.error('Erro ao extrair texto da imagem:', error);
    });


    resultadoConversaoExibirTela.style.display="block";
    



}


