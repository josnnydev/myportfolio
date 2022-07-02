 const nombre = document.getElementById("nombre");
 const correo = document.getElementById("correo");
 const enviar = document.getElementById("input");
 const parrafo = document.getElementById("alert");

 enviar.addEventListener("click",event=>{
    event.preventDefault();
     let regexCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
     parrafo.innerHTML = "";
     let entrar = false;
     let alert = ""
    if(nombre.value.length < 3){
        alert += "nombre corto <br>";
        entrar = true;
    }

    
    if(!regexCorreo.test(correo.value)){
        alert += "email invalido <br>";
        entrar = true;
       
    }

    if(entrar){
        parrafo.innerHTML = alert;

    }else{
        parrafo.innerHTML = "SEND"
    }


     
 })
