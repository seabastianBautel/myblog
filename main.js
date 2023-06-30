let ubicacionPrincipal  = window.pageYOffset;
window.onscroll = function() {
    let Desplazamiento_Actual = window.pageYOffset;
    if(ubicacionPrincipal <= Desplazamiento_Actual){
        document.getElementById('navbar-logo').style.display="none";
        document.getElementById('navbar-logo').style.paddingBottom="0";
        document.getElementById('navbar-logo').style.paddingTop="0";
        console.info("entro");
    }
    else{
        document.getElementById('navbar-logo').style.display="flex";
        document.getElementById('navbar-logo').style.paddingBottom="10px";
        document.getElementById('navbar-logo').style.paddingTop="6px";
        console.info("salio")
    }
    ubicacionPrincipal = Desplazamiento_Actual;
}