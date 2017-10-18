import React, { Component } from 'react';
import logo from '../../logo.svg';
import CustomNav from './nav/nav'
import '../../App.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <CustomNav site_name={this.props.site_info.site_name}/>
        <header className="App-header"> 
          <h1>{this.props.site_info.site_title}</h1>
          <h2>{this.props.site_info.site_sub_title}</h2>
        </header>
      </div>
    );
  }
}

export default Header;
