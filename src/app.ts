import { algorithm } from './algorithm'
import {
    getAllCountries,
    getCountryWithMostLanguagesAndGerman,
    countLanguages,
    getCountryWithMostLanguages,
    getMostCommonLanguage,
} from './countries'

const countriesAndLanguages = [
    {
        country: 'US',
        languages: ['en'],
    },
    {
        country: 'BE',
        languages: ['nl', 'fr', 'de'],
    },
    {
        country: 'NL',
        languages: ['nl', 'fy'],
    },
    {
        country: 'DE',
        languages: ['de'],
    },
    {
        country: 'ES',
        languages: ['es'],
    },
]

algorithm()

console.log(getAllCountries(countriesAndLanguages))
console.log(getCountryWithMostLanguagesAndGerman(countriesAndLanguages))
console.log(countLanguages(countriesAndLanguages))
console.log(getCountryWithMostLanguages(countriesAndLanguages))
console.log(getMostCommonLanguage(countriesAndLanguages))
