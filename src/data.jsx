// src/data.jsx
export default [
    {
        nom: 'Lion',
        nomScientifique: 'Panthera leo',
        taille: 140,
        alimentation: ['viande'],
    },
    {
        nom: 'Gorille',
        nomScientifique: 'Gorilla beringei',
        taille: 205,
        alimentation: ['plantes', 'insectes'],
        additional: {
            notes: 'Ceci est le gorille de l\'Est. Il y a aussi un gorille de l\'Ouest qui est une espèce différente.'
        }
    },
    {
        nom: 'Zèbre',
        nomScientifique: 'Equus quagga',
        taille: 322,
        alimentation: ['plantes'],
        additional: {
            notes: 'Il existe trois espèces différentes de zèbre.',
            lien: 'https://fr.wikipedia.org/wiki/Zèbre'
        }
    }
]
