
$(document).ready(function() {

    var path = window.location.pathname;
    var pagename = path;



    $('.close').click(function(e) {  
            var url = $('#trailer').attr('src');
            $('#trailer').attr('src', '');
            $('#trailer').attr('src', url);
      });
    
    
  
        //change color transparent to solid

        if($(this).scrollTop() > 10) { 
            $('.navbar').addClass('solid-nav');
            $('.navbar-brand').css('color','#333');
            $('.nav-link').css('color','#333'); 
            $('.fa.fa-navicon').css('color','#333');
            
           
           

        } else {
            $('.navbar').removeClass('solid-nav');
            $('.navbar-brand').css('color','#fff');
            $('.nav-link').css('color','#fff'); 
            $('.fa.fa-navicon').css('color','#fff');

          
        }

        $(window).scroll(function() {

            if($(this).scrollTop() > 10) { 
                $('.navbar').addClass('solid-nav');
                $('.navbar-brand').css('color','#333');
                $('.nav-link').css('color','#333'); 
                $('.fa.fa-navicon').css('color','#333');
 

            } else {
                $('.navbar').removeClass('solid-nav');
                $('.navbar-brand').css('color','#fff');
                $('.nav-link').css('color','#fff'); 
                $('.fa.fa-navicon').css('color','#fff');             
            }
        

        });
    
});


$("#cotizar-btn").click(function(){
    validar();
  });


function validar() {

   
    var rut = $("#rut").val();
    var rutSymbol = $("#rutSymbol").val();
    var rutCompleto = rut + "-" + rutSymbol;
    
    var email = $("#emailCotizar").val();


    validarCelular();
    validarEmail();
    
    if(validarRut(rutCompleto) == true){
        $("#rut").css("border","1px solid green");
        $("#rutSymbol").css("border","1px solid green");

    }else{
        $("#rut").css("border","1px solid red");
        $("#rutSymbol").css("border","1px solid red");
        document.getElementById("rut").placeholder='Ingrese un RUT valido';
    }

    if(validarRut(rutCompleto) == true && validarCelular() == true && validarEmail() == true){
        $('#exampleModalCenter').modal('toggle');
        alert("Enviado correctamente");
    }


   
}

function validarCelular(){

    var celular = $("#celular").val();

    if(celular.length > 9 || celular.length < 9){
        $("#celular").css("border","1px solid red");
        document.getElementById("celular").placeholder='Ingrese un numero valido';
    }else{
        $("#celular").css("border","1px solid green");
        return true;
    }
}

function validarEmail(){

    var email = $("#emailCotizar").val();

    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(regex.test(email) == false){
        $("#emailCotizar").css("border","1px solid red");
        document.getElementById("emailCotizar").placeholder='Ingrese un correo valido';
    }else{
        $("#emailCotizar").css("border","1px solid green");
        return true;
    }

}

function validarRut(cRut) {
 
    cRut = cRut.replace(/[\.-]/g, "");
    cRut = cRut.toUpperCase();
    var patt = /^\d{1,8}[0-9K]$/;
    var ok = patt.test(cRut);
    var cStr = cRut.slice(0, -1);
    var cDig = cRut.slice(-1);
    var nSum = 0;
    var nVal = 0;
    var cVal = "";
 
    if (ok) {
        for (nMul = 2; cStr != ""; nMul = (nMul == 7) ? 2 : nMul + 1) {
            nSum += Number(cStr.slice(-1)) * nMul;
            cStr = cStr.slice(0, -1);
        }
        nVal = 11 - (nSum % 11);
        switch (nVal) {
            case 11:
                cVal = "0";
                break;
            case 10:
                cVal = "K";
                break;
            default:
                cVal = nVal.toString();
        }
        ok = cVal == cDig;


    }else{

    }

    return ok;
}
 
    