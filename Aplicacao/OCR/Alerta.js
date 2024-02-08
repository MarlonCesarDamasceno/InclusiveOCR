
const srcFile = "./Aplicacao/Notificacao/";

function AlertaSonoro(nomeAlertaSonoro, ligaAlerta) {
    const sound = new Audio(srcFile + nomeAlertaSonoro + '.wav');


    
    sound.play();
    sound.loop = true;
    sound.playbackRate = 1;

if(ligaAlerta) {
    setTimeout(function (){
        sound.pause();        
        
    },11000)
}
else {
    setTimeout(function (){
        sound.pause();        
        
    },2000)

}
}
