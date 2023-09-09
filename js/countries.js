// console.log('countries')
const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    // console.log(countries);
    // for(const country of countries){
    //     console.log(country);
    // }
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        // console.log(country);
        const countriesDiv = document.createElement('div');
        countriesDiv.classList.add('country');
        countriesDiv.innerHTML = `
            <h3>Country: ${country.name.common}</h3>
            <p>Capital City: ${country.capital ? country.capital[0] : 'No Capital'}</p>
            <p>Continents: ${country.continents}</p>
            <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
        `;
        countriesContainer.appendChild(countriesDiv);
    });
}

const loadCountryDetail = (code) => {
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('get country details', code)
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country => {
    // console.log(country);
    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML = `
        <h2>Details: ${country.name.common}</h2>
        <img src ="${country.flags.png}">
    `;

}

loadCountries();