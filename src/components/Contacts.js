import React, { Component } from 'react';
import SideLinks from './SideLinks';
import Ads from './Ads';

class Contacts extends Component {


  state = {users: []}

  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (

      <div>
        <div className="container-fluid text-center">    
          <div className="row content">
            <SideLinks/>
            <div className="col-sm-8 text-left"> 
              <h1>Users</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

              {this.state.users.map(user =>
                <p key={user.id}>{user.username}</p>
              )}

            </div>
            <Ads/>
          </div>
        </div>
      </div>

    );
  }
}

export default Contacts;
