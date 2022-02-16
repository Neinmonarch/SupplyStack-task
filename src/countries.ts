import { CountryLanguagesRecord } from './interfaces/countryLanguagesRecord-interface'

// Write a function in javascript that
// - returns the number of countries in the world
export function getAllCountries(countriesAndLanguages: CountryLanguagesRecord[]) {
    return countriesAndLanguages.length
}

// - finds the country with the most official languages, where they officially speak German (`de`).
export function getCountryWithMostLanguagesAndGerman(
    countriesAndLanguages: CountryLanguagesRecord[]
) {
    let currentCountry = null
    let currentMax = 0

    for (const { country, languages } of countriesAndLanguages) {
        if (languages.length > currentMax && languages.includes('de')) {
            currentMax = languages.length
            currentCountry = country
        }
    }

    return currentCountry
}

// - that counts all the official languages spoken in the listed countries.
export function countLanguages(countriesAndLanguages: CountryLanguagesRecord[]) {
    const languages = []
    countriesAndLanguages.forEach((el) => languages.push(...el.languages))
    return new Set(languages).size
}

// - to find the country with the highest number of official languages.
export function getCountryWithMostLanguages(countriesAndLanguages: CountryLanguagesRecord[]) {
    let currentCountry = null
    let currentMax = 0

    for (const { country, languages } of countriesAndLanguages) {
        if (languages.length > currentMax) {
            currentMax = languages.length
            currentCountry = country
        }
    }

    return currentCountry
}

// - to find the most common official language(s), of all countries
export function getMostCommonLanguage(countriesAndLanguages: CountryLanguagesRecord[]) {
    const languages = []
    const counts: Record<string, number> = {}
    const mostCommonLanguage = []
    countriesAndLanguages.forEach((el) => languages.push(...el.languages))
    languages.forEach((el) => {
        counts[el] = (counts[el] || 0) + 1
    })

    const usedTimes = Math.max(...Object.values(counts))
    Object.entries(counts).map(([key, value]) => {
        if (value === usedTimes) {
            mostCommonLanguage.push(key)
        }
    })

    return mostCommonLanguage
}
