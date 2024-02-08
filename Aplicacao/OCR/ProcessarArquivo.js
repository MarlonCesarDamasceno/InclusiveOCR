function LerArquivo() {
    let obterArquivoSelecionado = document.getElementById('arquivoSelecionado');

    if (obterArquivoSelecionado.files.length > 0) {
        let arquivo = obterArquivoSelecionado.files[0];


        const reader = new FileReader();

        reader.onload = function (e) {

            ReconhecerOCR(e.target.result);



        }

        reader.readAsDataURL(arquivo);

    } else {
        return null;
    }
    if (arquivoConvertido != null) {
        return arquivoConvertido;

    }
}



function ReconhecerOCR(arquivo) {
    let resultadoFinal = document.getElementById("resultadoFinalOCR");
    let resultadoConversaoExibirTela = document.getElementById("resultadoConversao");
    let arquivoConvertidoOcr = "";
    let notificacao = document.getElementById("notificacao");
    notificacao.innerHTML = "Aguarde, reconhecendo documento...";
    AlertaSonoro("Ring02");

    setTimeout(function () {

        notificacao.innerHTML = "";

    }, 4000);

    Tesseract.recognize(
        arquivo,
        'eng',
    ).then(({ data: { text } }) => {

        resultadoFinal.innerHTML = NormalizaTexto(text);
        notificacao.innerHTML = "Arquivo convertido!";
        AlertaSonoro("Windows Notify Messaging");

        setTimeout(function () {

            notificacao.innerHTML = "";

        }, 4000);





    }).catch(error => {
        resultadoFinal.innerHTML = error;

        alert(error);
        console.error('Erro ao extrair texto da imagem:', error);
    });


    resultadoConversaoExibirTela.style.display = "block";
}


function NormalizaTexto(textoGerado) {
    const numeroCaractereLinha = 100;

    const regex = new RegExp(`.{1,${numeroCaractereLinha}}`, 'g');
    return textoGerado.match(regex).join('\n');


}
