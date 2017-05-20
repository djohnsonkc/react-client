import React from 'react';
import { Link } from 'react-router-dom';
import SideLinks from './SideLinks';
import Ads from './Ads';

class Account extends React.Component {


  // state = { user: {} }

  // componentDidMount() {
  //   fetch('/api/accounts')
  //     .then(res => res.json())
  //     .then(user => this.setState({ user }));
  // }


  /*

  state = {users: []}

  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

              {this.state.users.map(user =>
                <p key={user.id}>{user.username}</p>
              )}
  */

  render() {
    return (

      <div>
        <div className="container-fluid text-center">    
          <div className="row content">
            <SideLinks/>
            <div className="col-sm-8 text-left"> 
              <h1>Account Info</h1>


              {!this.props.all.isLoggedIn ? (
                <div>
                  <p>Please login to view your account info</p>
                  <p><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></p>
                </div>
              ) : (
                <p>Welcome, {this.props.all.email}! <Link to="/logout"><span className="glyphicon glyphicon-log-out"></span>Logout</Link></p>
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
