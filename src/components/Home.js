import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllCountries } from '../actions/index'
import { ALL_COUNTRIES_URL } from '../apis/index'
import Select from 'react-select'

// Components
import Countries from './Countries'

// Dropdown options
const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'Americas' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
]

class Home extends Component {
  // Initialize state
  state = {
    search: '',
    filter: null,
  }

  handleChangeSearch = (e) => {
    this.setState({
      search: e.target.value,
    })
  }

  handleChangeFilter = (filter) => {
    this.setState({
      filter: filter.value,
    })
  }

  componentDidMount() {
    // Fetch all countries
    this.props.allCountries(ALL_COUNTRIES_URL)
  }

  render() {
    const { search } = this.state
    const { filter } = this.state

    // From route
    const { darkMode } = this.props

    // From mapStateToProps
    const { countries } = this.props

    // Filter countries when searching
    const countriesFilter = countries.filter(
      (country) =>
        country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        country.alpha3Code.toLowerCase().indexOf(search.toLowerCase()) !== -1,
    )

    // Filter countries by region
    const filterByRegion = countries.filter(
      (country) => country.region === filter,
    )

    const regions = filterByRegion

    // Search filter countries by region
    const filterCountriesByRegion = regions.length
      ? regions.filter(
          (region) =>
            region.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
            region.alpha3Code.toLowerCase().indexOf(search.toLowerCase()) !==
              -1,
        )
      : null

    return (
      <div className={darkMode ? 'dark-mode' : ''}>
        <div className="searchbar-filter container">
          <form className={`form ${darkMode ? ' dark-mode-elements' : ''}`}>
            <ion-icon name="search-outline"></ion-icon>
            <input
              className={`searchbar ${darkMode ? 'dark-mode-elements' : ''}`}
              value={this.state.search}
              onChange={this.handleChangeSearch}
              placeholder="Search for a country..."
            />
          </form>
          <Select
            value={options.value}
            onChange={this.handleChangeFilter}
            placeholder="Filter by Region"
            options={options}
            className={`select-options ${darkMode ? 'dark-mode-elements' : ''}`}
          />
        </div>
        <Countries
          countriesFilter={countriesFilter}
          filterCountriesByRegion={filterCountriesByRegion}
          darkMode={darkMode}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const countries = state.countries
  return {
    countries,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    allCountries: (url) => dispatch(fetchAllCountries(url)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
