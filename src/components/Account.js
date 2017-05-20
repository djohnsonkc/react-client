import React from 'react';
import { Link } from 'react-router-dom';
import SideLinks from './SideLinks';
import Ads from './Ads';

class Account extends React.Component {


  componentDidMount() {
    fetch('https://djohnsonkc-identity-provider.herokuapp.com/api/v1/accounts', {  
      method: 'GET',
      headers: {
        'x-access-token': localStorage.getItem('x-access-token'),
        'Content-Type': 'application/json',
      }
    })
    .then(this.handleErrors)
    .then(response => response.json())
    .then(result => this.onAccountDetailsResult(result))
    .catch(function(error) {
        // catch errors thrown by handleErrors
        console.log("catch caught an error: " + error);
    });
  }

  handleErrors = (response) => {
      if (!response.ok) {
        // throw an error that will be caught by fetch.catch 
          throw Error(response.statusText);
      }
      return response;
  }

  onAccountDetailsResult = (result) => {
    console.log("account page: " + JSON.stringify(result, null, 2))

  }

  render() {
    return (

      <div>
        <div className="container-fluid text-center">    
          <div className="row content">
            <SideLinks/>
            <div className="col-sm-8 text-left"> 
              <h1>Account Info</h1>


              {!this.props.user.isLoggedIn ? (
                <div>
                  <p>Please login to view your account info</p>
                  <p><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></p>
                </div>
              ) : (
                <p>Welcome, {this.props.user.first_name}! <Link to="/logout"><span className="glyphicon glyphicon-log-out"></span>Logout</Link></p>
              )}



            </div>
            <Ads/>
          </div>
        </div>
      </div>

    );
  }
}

export default Account;
