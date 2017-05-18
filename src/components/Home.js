import React from 'react';
import SideLinks from './SideLinks';
import Ads from './Ads';

class Home extends React.Component {

  render() {
    return (
    	<div>
			<div className="container-fluid text-center">    
			  <div className="row content">
			    <SideLinks/>
			    <div className="col-sm-8 text-left"> 
			      <h1>Welcome</h1>
			      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
			      <hr/>
			      <h3>Test</h3>
			      <p>Lorem ipsum...</p>
			    </div>
			    <Ads/>
			  </div>
			</div>
    	</div>
    );
  }
}

export default Home;