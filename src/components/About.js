import React, { Component } from 'react';
import SideLinks from './SideLinks';
import Ads from './Ads';


class About extends Component {

  render() {
    return (
    	<div>
			<div className="container-fluid text-center">    
			  <div className="row content">
			    <SideLinks/>
			    <div className="col-sm-8 text-left"> 
			      <h1>About</h1>
			      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

			    </div>
			    <Ads/>
			  </div>
			</div>
    	</div>
    );
  }
}

export default About;