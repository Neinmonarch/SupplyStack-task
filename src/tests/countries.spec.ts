import {
    getAllCountries,
    getCountryWithMostLanguagesAndGerman,
    countLanguages,
    getCountryWithMostLanguages,
    getMostCommonLanguage,
} from '../countries'

const dataSet = [
    {
        country: 'TestCountry 1',
        languages: ['en'],
    },
    {
        country: 'TestCountry 2 ',
        languages: ['nl', 'de'],
    },
    {
        country: 'TestCountry 3',
        languages: ['nl', 'fy', 'de'],
    },
    {
        country: 'TestCountry 4',
        languages: ['nl', 'en', 'ru', 'fy'],
    },
]

test('getAllCountries', () => {
    expect(getAllCountries(dataSet)).toBe(4)
})

test('getCountryWithMostLanguagesAndGerman', () => {
    expect(getCountryWithMostLanguagesAndGerman(dataSet)).toBe('TestCountry 3')
})

test('countLanguages', () => {
    expect(countLanguages(dataSet)).toBe(5)
})

test('getCountryWithMostLanguages', () => {
    expect(getCountryWithMostLanguages(dataSet)).toBe('TestCountry 4')
})

test('getMostCommonLanguage', () => {
    expect(getMostCommonLanguage(dataSet)).toStrictEqual(['nl'])
})
