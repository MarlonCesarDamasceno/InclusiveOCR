function IniciarOCR()
{
    
    
    alert("iniciando");
    let notificacao = document.getElementById("notificacao");
    let oCR="";
    let arquivoLido=LerArquivo();

    alert("Resultado do arquivo lido: "+arquivoLido)
    if(arquivoLido==null)
    {
        
        notificacao.innerHTML="<span color='red'>Erro ao ler o arquivo. Selecione o mesmo e posteriormente acione o botão Reconhecer com OCR</span>";

    }
    
}