function salarioNeto (salarioBruto, descuentos) {
    return salarioBruto - ((salarioBruto*descuentos)/100);
}
alert("A continuación, podrá conocer su salario neto de los últimos tres meses");
let acumulado = 0;
for (let i = 0; i < 3; i++) {
    let mes = prompt("Ingrese nombre del mes");
    let resultado = salarioNeto (parseFloat(prompt("Ingrese el salario bruto percibido durante "+mes)),
                    parseFloat(prompt("Ingrese el porcentaje de retenciones durante dicho mes")));
    alert("Salario neto percibido de "+ mes +": \n AR$ "+resultado);
    acumulado = acumulado + resultado;
}
alert("Salario neto acumulado en el último trimestre: \n AR$ "+acumulado);