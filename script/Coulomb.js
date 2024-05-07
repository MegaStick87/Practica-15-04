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
    const k = 8.9875517873681764e9; // Constante de Coulomb
    document.getElementById('coulombForm').addEventListener('submit', function (e) {
        e.preventDefault();
        var carga1 = document.getElementById('carga1').value;
        var carga2 = document.getElementById('carga2').value;
        var distancia = document.getElementById('distancia').value;
        if(isNaN(carga1) || isNaN(carga2) || isNaN(distancia) || carga1 === '' || carga2 === '' || distancia === '') {
            alert("Solo puedes poner números, no letras u otros caracteres, inténtelo otra vez.");
        } else {
            var fuerza = k * Math.abs(carga1 * carga2) / (distancia * distancia);
            document.getElementById('resultadoCoulomb').textContent = fuerza.toFixed(2);
        }
    });
});