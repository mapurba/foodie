import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import LoginContainer from './../Login/LoginContainer'
import FeedContainer from './../Feed/FeedContainer'
import DashboardContainer from './../Dashboard/DashboardContainer'

export const Routing = () => (
    <Router>
        <div>
            <Route exact path="/" component={LoginContainer} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/home" component={DashboardContainer} />
        </div>
    </Router>
)

export const SeconderyRouting = () => (
    <Router>
        <div>
            <Route path="/home/feed" component={FeedContainer} />
        </div>
    </Router>
)
