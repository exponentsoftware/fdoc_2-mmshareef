//get array of countries
const countries = [
  'ALBANIA',
  'BOLIVIA',
  'CANADA',
  'DENMARK',
  'ETHIOPIA',
  'FINLAND',
  'GERMANY',
  'HUNGARY',
  'IRELAND',
  'JAPAN',
  'KENYA'
]




var arrCountries = countries.map(eachCountry => [
    //convert all to lower case 
    eachCountry.toLowerCase(),
//then get first three letters
    eachCountry.substring(0, 3),
//then count number of letters
    eachCountry.length])
console.log(arrCountries);