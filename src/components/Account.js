import React from 'react';
import SideLinks from './SideLinks';
import Ads from './Ads';

class Account extends React.Component {


  state = { user: {} }

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
              <p>This is where your account information will display if logged in.</p>

              {
                <p key={this.state.user.id}>{this.state.user.user_name}, {this.state.user.first_name}</p>
              }

            </div>
            <Ads/>
          </div>
        </div>
      </div>

    );
  }
}

export default Account;
