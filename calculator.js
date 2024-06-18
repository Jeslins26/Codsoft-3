
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.querySelectorAll('.btn'));
    const clearButton = document.getElementById('clear');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.dataset.value === '=') {
                try {
                    display.textContent = eval(display.textContent);
                } catch {
                    display.textContent = 'Error';
                }
            } else {
                if (display.textContent === '0') {
                    display.textContent = button.dataset.value;
                } else {
                    display.textContent += button.dataset.value;
                }
            }
        });
    });

    clearButton.addEventListener('click', () => {
        display.textContent = '0';
    });
});
