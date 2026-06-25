function verificaMail(mail){
    if(mail!=null){
    if(mail.includes("@")&&mail !==""){
        return true;
    }else{
        return false;
    }
    }else{
        return false;
    }
}
module.exports= {verificaMail}