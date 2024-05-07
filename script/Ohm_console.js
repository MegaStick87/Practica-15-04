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


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calcularOhm = () => {
    rl.question("Elija qué calcular:\n1. Resistencia (R)\n2. Corriente (I)\n3. Voltaje (V)\nIngrese 1, 2 o 3: ", (opcion) => {
        switch (opcion) {
            case '1':  // Calcular resistencia R = V / I
                rl.question("Ingrese el voltaje (V): ", (voltajeR) => {
                    rl.question("Ingrese la corriente (I): ", (corrienteR) => {
                        voltajeR = parseFloat(voltajeR);
                        corrienteR = parseFloat(corrienteR);
                        if (!isNaN(voltajeR) && !isNaN(corrienteR) && corrienteR !== 0) {
                            console.log(`La resistencia es ${voltajeR / corrienteR} ohmios.`);
                        } else {
                            console.log("Datos no válidos.");
                        }
                        rl.close();
                    });
                });
                break;
            case '2':  // Calcular corriente I = V / R
                rl.question("Ingrese el voltaje (V): ", (voltajeI) => {
                    rl.question("Ingrese la resistencia (R): ", (resistenciaI) => {
                        voltajeI = parseFloat(voltajeI);
                        resistenciaI = parseFloat(resistenciaI);
                        if (!isNaN(voltajeI) && !isNaN(resistenciaI) && resistenciaI !== 0) {
                            console.log(`La corriente es ${voltajeI / resistenciaI} amperios.`);
                        } else {
                            console.log("Datos no válidos.");
                        }
                        rl.close();
                    });
                });
                break;
            case '3':  // Calcular voltaje V = I * R
                rl.question("Ingrese la corriente (I): ", (corrienteV) => {
                    rl.question("Ingrese la resistencia (R): ", (resistenciaV) => {
                        corrienteV = parseFloat(corrienteV);
                        resistenciaV = parseFloat(resistenciaV);
                        if (!isNaN(corrienteV) && !isNaN(resistenciaV)) {
                            console.log(`El voltaje es ${corrienteV * resistenciaV} voltios.`);
                        } else {
                            console.log("Datos no válidos.");
                        }
                        rl.close();
                    });
                });
                break;
            default:
                console.log("Opción no válida. Por favor, ingrese 1, 2 o 3.");
                rl.close();
                break;
        }
    });
}

calcularOhm();