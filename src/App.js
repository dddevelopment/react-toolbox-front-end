import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Click <a href="/about">here</a> to learn more.
        </p>
        <p>This app is under contruction for <a href={this.props.site_info.redirect}>{this.props.site_info.site_name}</a>.</p>
      </div>
    );
  }
}

export default App;
