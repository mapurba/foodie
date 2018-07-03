import React from 'react';

const Login = ({ signIn }) => (
  <div className="ui center aligned grid">
		<div className="sixteen wide column">
			<div className="loginContainer">
				<div className="ui button loginButton" onClick={signIn}>
					<i className="instagram icon"></i>
					Login with Instagram
				</div>
			</div>
		</div>
	</div>
)

export default Login;