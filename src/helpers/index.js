export function convertDate (date) {
    const dateConverted = new Date(date);
    return dateConverted.toLocaleDateString('fr-FR');
}
