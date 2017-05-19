import React from 'react';

class Login extends React.Component {

	constructor() {
		super();
		this.state = {
			user_name: 'djohnsonkc',
			password: '1234',
			auth: null
		};
	}

	handleUserNameChange = (evt) => {
		this.setState({ user_name: evt.target.value });
	}

	handlePasswordChange = (evt) => {
		this.setState({ password: evt.target.value });
	}

	handleSubmit = (evt) => {
		evt.preventDefault();
		//alert('Signed in as: ${this.state.user_name}');
		this.postLoginRequest()
	}


  	postLoginRequest = () => {
		fetch('https://djohnsonkc-identity-provider.herokuapp.com/api/v1/accounts/' + this.state.user_name, {  
		  method: 'POST',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
		    user_name: this.state.user_name,
		    password: this.state.password,
		  })
		})
		.then(this.handleErrors)
		.then(response => response.json())
      	.then(result => this.onLoginResult(result))
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

	onLoginResult = (result) => {
		console.log(JSON.stringify(result, null, 2))
		console.log('setting local storage...' + result.access_token)
		localStorage.setItem('x-access-token', result.access_token);
		this.setState({ auth: {
			access_token: result.access_token,
			expires: result.expires_in
		} });

		this.props.history.push('/account');

	}


  	render() {
	    return (

	    	<div>

				<div className="container">

					<div className="row">
						<div className="col-sm-4 col-sm-offset-4">

							<div className="text-center">
								<h1>Login</h1>
							</div>

							<form onSubmit={this.handleSubmit}>
								<div className="form-group">
									<input type="text" name="username" id="username" tabIndex="1" className="form-control" placeholder="Username"  value={this.state.user_name} onChange={this.handleUserNameChange} />
								</div>
								<div className="form-group">
									<input type="password" name="password" id="password" tabIndex="2" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
								</div>
								<div className="form-group text-center">
									<input type="checkbox" tabIndex="3" className="" name="remember" id="remember" />
									<label htmlFor="remember"> Remember Me</label>
								</div>
								<div className="form-group">
									<div className="row">
										<div className="col-sm-6 col-sm-offset-3">
											<input type="submit" name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-primary" value="Log In" />
										</div>
									</div>
								</div>
								<div className="form-group">
									<div className="row">
										<div className="col-lg-12">
											<div className="text-center">
												<a href="" tabIndex="5" className="forgot-password">Forgot Password?</a>
												<a href="" tabIndex="6" className="forgot-password">Already have an account?</a>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>

				</div>

	    	</div>
	    );
  }
}


export default Login;