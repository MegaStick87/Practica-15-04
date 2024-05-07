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


function updateFields() {
    const variable = document.getElementById('variable').value;
    const labels = document.getElementsByTagName('label');
    if (variable === 'fuerza') {
        labels[1].textContent = "Masa (kilogramos):";
        labels[2].textContent = "Aceleración (metros por segundo cuadrado):";
    } else if (variable === 'masa') {
        labels[1].textContent = "Fuerza (newtons):";
        labels[2].textContent = "Aceleración (metros por segundo cuadrado):";
    } else if (variable === 'aceleracion') {
        labels[1].textContent = "Fuerza (newtons):";
        labels[2].textContent = "Masa (kilogramos):";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('newtonForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const variable = document.getElementById('variable').value;
        var input1 = parseFloat(document.getElementById('input1').value);
        var input2 = parseFloat(document.getElementById('input2').value);
        if(isNaN(input1) || isNaN(input2)) {
            alert("Solo puedes poner números, no letras u otros caracteres, y no puedes dejar campos vacíos.");
        } else {
            let resultado;
            if (variable === 'fuerza') {
                resultado = input1 * input2; // m * a
            } else if (variable === 'masa') {
                resultado = input1 / input2; // F / a
            } else if (variable === 'aceleracion') {
                resultado = input1 / input2; // F / m
            }
            document.getElementById('resultadoNewton').textContent = resultado.toFixed(2);
        }
    });
});