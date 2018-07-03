import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import authAction from './../redux/actions/authAction';
import NetworkHandler from './../api/NetworkHandler';
import Login from './Login';
import './Login.css';

class LoginContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggingIn: false,
			loggedIn: false,
		}
	}
	componentDidMount() {
		if (window.location.search) {
			let code = window.location.search.split('?')[1].split('&')[0].split('=')[1];
			let baseQuery = `/handleauth?code=${code}`;
			NetworkHandler.sendRequest("GET", baseQuery, null, null, null)
				.then((response) => {
					this.props.authAction.LoginUser(response.data.user)
					this.setState({
						loggedIn: true
					})
				})
				.catch((err) => {
					throw err;
				})
		}
	}
	componentWillUnmount() {
		window.location.search = "";
	}
	signIn = () => {
		let baseQuery = "/authorize_user"
		NetworkHandler.sendRequest("GET", baseQuery, null, null, null)
			.then((response) => {
				window.location = response.request.responseURL;
				console.log(response);
				console.log("Yayy");
			})
			.catch((err) => {
				throw err;
			})
	}
	render() {
		return (
			<div>
				{
					this.state.loggedIn ?
						<Redirect to="/feed" />
						: <Login signIn={this.signIn} loggingIn={this.state.loggingIn} />
				}
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		authAction: bindActionCreators(authAction, dispatch),
	}
}

export default connect(null, mapDispatchToProps)(LoginContainer);