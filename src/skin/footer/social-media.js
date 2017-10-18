import React, { Component } from 'react'; 
import '../../App.css';

class Social extends Component {
  render() {
    return (
        <div className="banner social-media"> 
            <div className="container"> 
                <div className="row">
                    <div className="col-lg-6">
                        <h2>Connect with us </h2>
                    	<h3>{this.props.site_info.site_name}</h3>
                    </div>
                    <div className="col-lg-6">
                        <ul className="list-inline banner-social-buttons">
                           <li>
        	                        <a href={this.props.site_info.facebook} className="btn btn-default btn-lg facebook"><i className="fa fa-facebook fa-fw"></i> <span className="network-name">Facebook</span></a>
            	                </li>
                            	<li>
                                	<a href={this.props.site_info.instagram} className="btn btn-default btn-lg instagram"><i className="fa fa-instagram fa-fw"></i> <span className="network-name">Instagram</span></a>
                            	</li>
    	                        <li>
        	                        <a href={this.props.site_info.twitter} className="btn btn-default btn-lg twitter"><i className="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a>
            	                </li>  
                        </ul>
                    </div>
                </div>
    
            </div> 
        </div>
    );
  }
}

export default Social;

