window.addEventListener('load', function(){
    let btnCalcularPrestamo = document.getElementById("btnCalcular");
    btnCalcularPrestamo.addEventListener("click",function(){
    /*Almacenando la varible 
        los datos de pantalla nombre
    */
    let varNombre = document.getElementById("pantalla").value;
    let datosPersona = varNombre.split(" ");
    let datosPersonaNombre = datosPersona[0]
    let datosPersonaApellido = datosPersona[1]
    /* Almacenando en una variable
        los datos de pantalla monto
    */
    let varMonto = document.getElementById("pantalla2").value;
    /*======================================================*/
    let varInteres = document.getElementById("interes").value;
    /* HACIENDO OPERACIONES */
    const interes = varInteres/100;
    const dias = 24;
    let ganancia = varMonto * interes
    let pagoFinal = parseFloat(varMonto) + parseFloat(ganancia)
    let pagoDiario = pagoFinal/dias
    console.log("NOMBRE: "+ varNombre)
    console.log("Dinero Prestado: "+ varMonto)
    console.log("Interes: "+ interes)
    console.log("Dias: "+ dias)
    console.log("Monto x Interes: "+ ganancia)
    console.log("Pago Final: "+ pagoFinal)
    console.log("Diario pagara: "+ pagoDiario)

    /* MOSTRAMOS LOS RESULTADOS DENTRO DEL HTML*/
    let cajaResultado = document.getElementById("cajaResultado")
    cajaResultado.innerHTML = `<td>${datosPersonaNombre}</td>
                                <td>${datosPersonaApellido}</td>
                                <td>${varMonto}</td>
                                <td>${varInteres}</td>
                                <td>${pagoDiario}</td>
                                <td>${dias}</td>
                                <td>${pagoFinal}</td>
                                `




    });
});

