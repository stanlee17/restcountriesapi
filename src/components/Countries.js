import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Countries extends Component {
  render() {
    const { darkMode } = this.props
    const { countriesFilter } = this.props
    const { filterCountriesByRegion } = this.props

    return filterCountriesByRegion ? (
      <div className="container all-countries">
        {filterCountriesByRegion.map((country) => {
          return (
            <div
              className={`country ${darkMode ? 'dark-mode-elements' : null}`}
              key={country.numericCode}
            >
              <Link
                to={`/country/${country.alpha3Code.toLowerCase()}/${country.name
                  .toLowerCase()
                  .replace(/ /g, '-')
                  .replace(/[^\w-]+/g, '')}`}
              >
                <div>
                  <img
                    className="country-flag"
                    src={country.flag}
                    alt={country.name}
                  />
                </div>
                <div className="country-info">
                  <h2>{country.name}</h2>
                  <h4>
                    <span>Population: </span>
                    {country.population.toLocaleString()}
                  </h4>
                  <h4>
                    <span>Region: </span>
                    {country.region}
                  </h4>
                  <h4>
                    <span>Capital: </span>
                    {country.capital}
                  </h4>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    ) : (
      <div className="container all-countries">
        {countriesFilter &&
          countriesFilter.map((country) => {
            return (
              <div
                className={`country ${darkMode ? 'dark-mode-elements' : null}`}
                key={country.numericCode}
              >
                <Link
                  to={`/country/${country.alpha3Code.toLowerCase()}/${country.name
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^\w-]+/g, '')}`}
                >
                  <div>
                    <img
                      className="country-flag"
                      src={country.flag}
                      alt={country.name}
                    />
                  </div>
                  <div className="country-info">
                    <h2>{country.name}</h2>
                    <h4>
                      <span>Population: </span>
                      {country.population.toLocaleString()}
                    </h4>
                    <h4>
                      <span>Region: </span>
                      {country.region}
                    </h4>
                    <h4>
                      <span>Capital: </span>
                      {country.capital}
                    </h4>
                  </div>
                </Link>
              </div>
            )
          })}
      </div>
    )
  }
}

export default Countries
