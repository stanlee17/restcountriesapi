import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

// Components
import Home from './components/Home'
import Country from './components/Country'
import Header from './components/Header'

// Styling
import './App.css'

class App extends Component {
  state = {
    darkMode: false,
  }

  modeSwitch = () => {
    this.setState({
      darkMode: !this.state.darkMode,
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className={`App${this.state.darkMode ? ' dark-mode' : ''}`}>
          <Header darkMode={this.state.darkMode} modeSwitch={this.modeSwitch} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Home {...props} darkMode={this.state.darkMode} />
              )}
            />
            <Route
              path="/country/:alpha/:name"
              render={(props) => (
                <Country {...props} darkMode={this.state.darkMode} />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
