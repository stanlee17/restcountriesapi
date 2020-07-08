import React, { Component } from 'react'

class Header extends Component {
  render() {
    const { darkMode } = this.props
    const { modeSwitch } = this.props

    return (
      <header className={`header ${darkMode ? 'dark-mode-elements' : null}`}>
        <div className="container header-text">
          <h1 className="header-h1">Where in the world?</h1>
          <div className="mode-switch" onClick={modeSwitch}>
            <ion-icon
              name={darkMode ? 'moon-outline' : 'sunny-outline'}
            ></ion-icon>
            <h4 className="header-mode-switch">
              {darkMode ? 'Dark Mode' : 'Light Mode'}
            </h4>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
