export function validateNumber(input) {
    let number = Number(input);
    if (Number.isNaN(number)) {
        throw new Error('Bitte eine gültige Zahl eingeben!');
    }
    number = Number(number.toFixed(2));

    return number;
}
