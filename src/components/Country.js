import React, { Component } from 'react'
import { connect } from 'react-redux'
import { countriesByAlpha } from '../actions'
import { COUNTRIES_BY_ALPHA_URL } from '../apis/index'
import { Link } from 'react-router-dom'

class Country extends Component {
  componentDidMount() {
    const { alpha } = this.props.match.params
    this.props.countriesByAlpha(COUNTRIES_BY_ALPHA_URL + alpha)
  }

  render() {
    const { country } = this.props
    const { darkMode } = this.props

    return Object.keys(country).length ? (
      <div className="container" style={{ paddingTop: '3rem' }}>
        <Link to="/">
          <button className={`back ${darkMode ? 'dark-mode-elements' : ''}`}>
            <ion-icon name="arrow-back-outline"></ion-icon>Back
          </button>
        </Link>
        <div className="country-more">
          <img
            className="country-more-image"
            src={country.flag}
            alt={country.name}
          />
          <div className="country-more-info-box container">
            <h1 className="country-more-info-h1">{country.name}</h1>
            <div className="country-more-info">
              <div className="country-more-info-1">
                <h4>
                  <span>Native Name: </span>
                  {country.nativeName}
                </h4>
                <h4>
                  <span>Population: </span>
                  {country.population.toLocaleString()}
                </h4>
                <h4>
                  <span>Region: </span>
                  {country.region}
                </h4>
                <h4>
                  <span>Sub Region: </span>
                  {country.subregion}
                </h4>
                <h4>
                  <span>Capital: </span>
                  {country.capital}
                </h4>
              </div>
              <div className="country-more-info-2">
                <h4>
                  <span>Top Level Domain: </span>
                  {country.topLevelDomain}
                </h4>
                <h4>
                  <span>Currencies: </span>
                  {country.currencies.map((currency) => `${currency.name}`)}
                </h4>
                <h4>
                  <span>Languages: </span>
                  {country.languages.map(
                    (language, index) => (index ? ', ' : '') + language.name,
                  )}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div>Loading...</div>
    )
  }
}

const mapStateToProps = (state) => {
  const country = state.country
  return {
    country,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    countriesByAlpha: (url) => dispatch(countriesByAlpha(url)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Country)
