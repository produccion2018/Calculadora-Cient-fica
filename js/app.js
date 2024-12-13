// Función para agregar valores al display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Función para limpiar la pantalla
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Función para calcular el resultado
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Evalúa la expresión matemática
    } catch (e) {
        display.value = 'Error'; // Muestra error si la expresión es inválida
    }
}
