let ubicacionPrincipal  = window.pageYOffset;
window.onscroll = function() {
    let Desplazamiento_Actual = window.pageYOffset;
    if(ubicacionPrincipal <= Desplazamiento_Actual){
        document.getElementById('navbar').style.display="none";
        document.getElementById('navbar').style.paddingBottom="0";
        document.getElementById('navbar').style.paddingTop="0";
        console.info("entro");
    }
    else{
        document.getElementById('navbar').style.display="flex";
        document.getElementById('navbar').style.paddingBottom="10px";
        document.getElementById('navbar').style.paddingTop="6px";
        console.info("salio")
    }
    ubicacionPrincipal = Desplazamiento_Actual;
}