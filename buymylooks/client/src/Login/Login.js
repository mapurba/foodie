import React from 'react';

const Login = ({ signIn,signInAsResturant }) => (
  <div className="ui center aligned grid">
		<div className="sixteen wide column">
			<div className="loginContainer">
				<div className="ui button loginButton" onClick={signIn}>
					<i className="google icon"></i>
					Login with Google as User
				</div>
			</div>
		</div>
      <div className="sixteen wide column">
			<div className="loginContainer">
				<div className="ui button loginButton" onClick={signInAsResturant}>
					<i className="google icon"></i>
					Login with Google as Resturant
				</div>
			</div>
		</div>
	</div>
)

export default Login;