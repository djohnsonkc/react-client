import React from 'react';

class StateOwner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: 'djohnsonkc',
      firstName: '',
      auth: null
    };

    this.handleAuth = this.handleAuth.bind(this);

  }

  handleAuth(results) {
    this.setState({
      firstName: results.first_name,
      auth: results.access_token
    });
  }

  render() {
    return (
    	<div>
    	</div>
    );
  }

}

export default StateOwner;