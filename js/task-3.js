document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('name-input');
    const output = document.getElementById('name-output');

    input.addEventListener('input', () => {
        const trimmedInput = input.value.trim();
        if (trimmedInput) {
            output.textContent = trimmedInput;
        } else {
            output.textContent = 'Anonymous';
        }

        console.log(`Current input value: "${input.value}"`);
        console.log(`Trimmed input value: "${trimmedInput}"`);
        console.log(`Displayed name: "${output.textContent}"`);
    });
});
