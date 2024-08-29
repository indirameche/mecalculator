function appendCharacter(character) {
    const display = document.getElementById('display');
    display.value += character === '^' ? '**' : character;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark');
    const themeButton = document.getElementById('theme-button');
    themeButton.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
}
