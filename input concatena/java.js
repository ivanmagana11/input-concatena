function captura(){
    var nombreest=document.getElementById("nomest").value 
    var celuest=document.getElementById("celest").value

if(nombreest=="") {
alert("El nombre es obligatorio");
document.getElementById("nomest").focus();
}else{
    if (celuest=="") {
        alert("el numero de celular es obligatorio teclearlo");
        document.getElementById("celest").focus();
    }else{
        console.log(nombreest +" "+celuest);
        document.getElementById("nomest").value="";
        document.getElementById("celest").value="";
        document.getElementById("nomest").focus();
       
       
       
           


    }
}
}
