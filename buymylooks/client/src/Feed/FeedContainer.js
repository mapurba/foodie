import React, { Component } from 'react';
import { Redirect } from 'react-router';

import Feed from './Feed';
import './Feed.css';

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
	render() {
		return (
			<div>
				{
					this.state.loggedIn ?
						<Feed signOut={this.signOut} />
						: <Redirect to="/login" />
				}
			</div>

		)
	}
}

export default FeedContainer;