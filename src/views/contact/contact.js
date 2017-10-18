import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';

class Contact extends Component {
  render() {
    return (
      <div>
            <h3>{this.props.site_info.site_name}</h3>
            <p>{this.props.site_info.site_address}</p>
            <p>{this.props.site_info.site_city}</p>
            <p>{this.props.site_info.site_phone}</p>
      </div>
    );
  }
}

export default Contact;
