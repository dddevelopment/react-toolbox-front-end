import React, { Component } from 'react'; 
import '../skin.css';
import Social from './social-media';

class Footer extends Component {
  render() {
    return ( 
    <div>
    <Social site_info={this.props.site_info} />
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <ul className="list-inline">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li className="footer-menu-divider">⋅</li>
                        <li>
                            <a href="/about">About</a>
                        </li> 
                        <li className="footer-menu-divider">⋅</li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li> 
                    </ul>
                    <p className="copyright text-muted small"> © {this.props.site_info.site_year}  ⋅&nbsp; 
                        <span>{this.props.site_info.site_name}</span>&nbsp;⋅&nbsp;
                        <span>{this.props.site_info.site_address}</span>&nbsp;
                        <span>{this.props.site_info.site_city}</span>&nbsp;⋅&nbsp; 
                        <span>{this.props.site_info.site_phone}</span>
                    </p>
                </div>
            </div>
        </div>
    </footer>
    </div>
    );
  }
}

export default Footer;
