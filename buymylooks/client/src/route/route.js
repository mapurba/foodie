import React from 'react'
import {
	HashRouter as Router,
	Route
} from 'react-router-dom'

import LoginContainer from './../Login/LoginContainer'
import FeedContainer from './../Feed/FeedContainer'
import DashboardContainer from './../Dashboard/DashboardContainer'
import AdminContainer from './../Admin/AdminContainer'

const Routing = () => (
	<Router>
		<div>
			<Route exact path="/" component={LoginContainer} />
			<Route path="/login" component={LoginContainer} />
			<Route path="/feed" component={FeedContainer} />
			<Route path="/dashboard" component={DashboardContainer} />
			<Route path="/admin" component={AdminContainer} />
		</div>
	</Router>
)

export default Routing;