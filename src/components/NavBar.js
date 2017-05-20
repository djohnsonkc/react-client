import React from 'react';
import { Link } from 'react-router-dom';



class NavBar extends React.Component {

// function UserGreeting(props) {
//   return Welcome, {this.props.email}!;
// }

// function GuestGreeting(props) {
//   return <Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login {this.props.firstName}</Link>;
// }
  render() {
    return (
    	<div>

			<nav className="navbar navbar-inverse">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>                        
			      </button>
			      <a className="navbar-brand" href="#">Logo</a>
			    </div>
			    <div className="collapse navbar-collapse" id="myNavbar">
			      <ul className="nav navbar-nav">
			        <li className="active"><Link to="/">Home</Link></li>
			        <li><Link to="/about">About</Link></li>
			        <li><Link to="/account">Account</Link></li>
			      </ul>
			      <ul className="nav navbar-nav navbar-right">
			      	{!this.props.user.isLoggedIn ? (
			        	<li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
			      	) : (
			      		<li><Link to="/logout"><span className="glyphicon glyphicon-log-out"></span>Welcome, {this.props.user.first_name}!</Link></li>
			      	)}

			      </ul>
			    </div>
			  </div>
			</nav>

		</div>
    );
  }
}

export default NavBar;

