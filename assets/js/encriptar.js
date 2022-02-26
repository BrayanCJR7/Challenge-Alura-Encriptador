/* Capturando click en boton */
var btn__encriptar = document.querySelector("#btn-encriptar");


btn__encriptar.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.getElementById("input-encriptar").value;
    var encmsg = {
        a:"a14s",
        e:"e2rcv",
        i:"i8jx",
        o: "oñp",
        u: "uzfR",
    } 

    form = form.replace(/a|e|i|o|u/gi, function(matched){
        return encmsg[matched];        
    });
    
    document.getElementById("mensaje-encriptado").value = form;

});

var btn__desencriptar = document.querySelector("#btn-desencriptar");

btn__desencriptar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.getElementById("input-encriptar").value;
    var desencmsg = {
        a14s:"a",
        e2rcv:"e",
        i8jx:"i",
        oñp:"o",
        uzfR:"u",
    }

    form = form.replace(/a14s|e2rcv|i8jx|oñp|uzfR/gi, function(matched){
        return desencmsg[matched];        
    });
    
    document.getElementById("mensaje-encriptado").value = form;
    
});

var btn__desencriptar = document.querySelector("#btn-copiar");

btn__desencriptar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.getElementById("mensaje-encriptado");
    form.select();
    document.execCommand('copy');
    alert("Texto encriptado copiado");
});



