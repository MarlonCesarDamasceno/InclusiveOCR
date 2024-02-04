function LerArquivo() {

    let notificacaoErro = document.getElementById("notificacaoErro");
    let obterArquivoSelecionado = document.getElementById('arquivoSelecionado');

    if (obterArquivoSelecionado.files.length > 0) {
        let arquivo = obterArquivoSelecionado.files[0];

        const reader = new FileReader();

        reader.onload = function (e) {
            return arquivoConvertidoBase64 = e.target.result;
        }
    }
    else {
        notificacaoErro.innerHTML = "Erro: selecione o arquivo a ser reconhecido pelo OCR.";
    }
    return null;
}





