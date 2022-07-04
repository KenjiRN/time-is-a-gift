function calcular(conversor_idade) {
    var idade = document.calcform.idade.value


if(conversor_idade == "dias")
{
    var res= parseFloat(idade) * 365;

}else if(conversor_idade == "horas"){

    var res = parseFloat(idade) * 8760;

}else if(conversor_idade == "minutos"){
    var res = parseFloat(idade) * 	525600;


}else if(conversor_idade == "segundos"){

    var res = parseFloat(idade) * 31536000;

}
document.calcform.res.value=res.toFixed();
}