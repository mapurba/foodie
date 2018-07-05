import React, { Component } from 'react';
import { Redirect } from 'react-router';

import Feed from './Feed';
import './Feed.css';
import NetworkHandler from "../api/NetworkHandler";

class FeedContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: true,
		}
	}
	componentWillMount() {
		window.location.search = "";
	}
	signOut = () => {
		this.setState({
			loggedIn: false,
		})
	}
	getUsersList =() =>{
        NetworkHandler.sendRequest("GET", '/users/list', null, null, null)
            .then((response) => {
                console.log(response);
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
						<Feed signOut={this.signOut} getUsersList={this.getUsersList} />
						: <Redirect to="/login" />
				}
			</div>

		)
	}
}

export default FeedContainer;