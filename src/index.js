 // index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'; 

import App from './App'; 
import Header from './skin/header/header';
import Footer from './skin/footer/footer'; 

import About from './views/about/about';
import Contact from './views/contact/contact';

import NotFound from './views/404';


const site_info = {
    site_name:"Lorem ipsum dolor sit amet",
    site_title:"Lorem ipsum",
    site_sub_title:"Welcome to Lorem ipsum dolor sit amet", 
    site_address:"123 Street Name Rd.",
    site_city:"City, St 12345",
    site_phone:"(555) 555-5555",
    site_year:"2017",
    facebook:"https://www.facebook.com/Damesworth",
    instagram:"https://www.instagram.com/mr_damesworth/",
    twitter:"https://twitter.com/mr_damesworth",
    redirect:"https://elgoog.im/"
};

ReactDOM.render(
  <Router>
    <div> 
        <Header site_info={site_info} />
        <div className="App-body"> 
            <Switch>
                <Route exact path='/' 
                    render={(props) => <App {...props}  site_info={site_info}  />} /> 
                <Route path='/about' component={About} />
                <Route exact path="/contact"
                    render={(props) => <Contact {...props} site_info={site_info}/>} />
                <Route component={NotFound} />
            </Switch>
        </div>
        <Footer site_info={site_info} />
    </div>
  </Router>,
  document.getElementById('root')
);