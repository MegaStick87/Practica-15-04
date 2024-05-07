// Programado por MegaStick.


// _____ ______   _______   ________  ________  ________  _________  ___  ________  ___  __       
// |\   _ \  _   \|\  ___ \ |\   ____\|\   __  \|\   ____\|\___   ___\\  \|\   ____\|\  \|\  \     
// \ \  \\\__\ \  \ \   __/|\ \  \___|\ \  \|\  \ \  \___|\|___ \  \_\ \  \ \  \___|\ \  \/  /|_   
// \ \  \\|__| \  \ \  \_|/_\ \  \  __\ \   __  \ \_____  \   \ \  \ \ \  \ \  \    \ \   ___  \  
//  \ \  \    \ \  \ \  \_|\ \ \  \|\  \ \  \ \  \|____|\  \   \ \  \ \ \  \ \  \____\ \  \\ \  \ 
//   \ \__\    \ \__\ \_______\ \_______\ \__\ \__\____\_\  \   \ \__\ \ \__\ \_______\ \__\\ \__\
//    \|__|     \|__|\|_______|\|_______|\|__|\|__|\_________\   \|__|  \|__|\|_______|\|__| \|__|
//                                                \|_________|                                    

//                                             ARCHIVO JS.

// Ingeniería TIC'S.


document.addEventListener('DOMContentLoaded', function () {
    function validateAndCalculate(form, input1, input2, resultSpan, calculationFunction) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var value1 = document.getElementById(input1).value;
            var value2 = document.getElementById(input2).value;
            if(isNaN(value1) || isNaN(value2) || value1 === '' || value2 === '') {
                alert("Solo puedes poner números, no letras u otros caracteres, inténtelo otra vez.");
            } else {
                var result = calculationFunction(parseFloat(value1), parseFloat(value2));
                document.getElementById(resultSpan).textContent = result.toFixed(2);
            }
        });
    }

    validateAndCalculate(document.getElementById('resistenciaForm'), 'corriente', 'voltaje', 'resultadoResistencia', (i, v) => v / i);
    validateAndCalculate(document.getElementById('corrienteForm'), 'voltajeCorriente', 'resistenciaCorriente', 'resultadoCorriente', (v, r) => v / r);
    validateAndCalculate(document.getElementById('voltajeForm'), 'corrienteVoltaje', 'resistenciaVoltaje', 'resultadoVoltaje', (i, r) => i * r);
});
