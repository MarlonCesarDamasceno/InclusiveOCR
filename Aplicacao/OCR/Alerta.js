
const srcFile="../Notificacao/";
function AlertaSonoro(nomeAlertaSonoro)
{
   
const sound=new Audio(srcFile+nomeAlertaSonoro+'.wav');
sound.play();
sound.loop=false;
sound.playbackRate=1;
//sound.pause();
}
