import React from 'react';



class Login extends React.Component {

  render() {
    return (
    	<div>


			<div className="container">



				<div className="row">
					<div className="col-sm-4 col-sm-offset-4">

						<div className="text-center">
							<h1>Login</h1>
						</div>


						<form id="login-form" action="http://phpoll.com/login/process" method="post" role="form">
							<div className="form-group">
								<input type="text" name="username" id="username" tabIndex="1" className="form-control" placeholder="Username" value="" />
							</div>
							<div className="form-group">
								<input type="password" name="password" id="password" tabIndex="2" className="form-control" placeholder="Password" />
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