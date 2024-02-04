function LerArquivo() {
    let arquivoConvertido="";
    
    let obterArquivoSelecionado = document.getElementById('arquivoSelecionado');

    if (obterArquivoSelecionado.files.length > 0) {
        let arquivo = obterArquivoSelecionado.files[0];
        alert("arquivo: " + arquivo.name); // Exemplo: Exibindo o nome do arquivo

        const reader = new FileReader();

        reader.onload = function (e) {
            alert("base 64: " + e.target.result);
            arquivoConvertido=ReconhecerOCR(e.target.result);


            
        }

        reader.readAsDataURL(arquivo); 
        
    } else {
        return null;
    }
    if(arquivoConvertido!=null)
    {
        return arquivoConvertido;

    }
}