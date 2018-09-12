import React, { Component } from 'react'
import {Sidebar,  Menu, Segment} from 'semantic-ui-react'

import './Dashboard.css';
import Dashboard from "./Dashboard";

class DashboardContainer extends Component {
    state = {
        log: [],
        logCount: 0,
    }

    clearLog = () => this.setState({ log: [], logCount: 0 })

    handleButtonClick = () => this.setState({ visible: !this.state.visible })

    handleSidebarHide = () => this.setState({ visible: false })

    updateLog = eventName => () =>
        this.setState({
            log: [`${new Date().toLocaleTimeString()}: ${eventName}`, ...this.state.log].slice(0, 20),
            logCount: this.state.logCount + 1,
        });
	render() {
        const {  visible } = this.state
		return (
		    <div>
            <Sidebar.Pushable as={Segment} className='fullheight' >
                <Sidebar
                    as={Menu}
                    animation='push'
                    icon='labeled'
                    inverted
                    onHidden={this.updateLog('onHidden')}
                    onHide={() => {
                        this.handleSidebarHide()
                    }}
                    onShow={this.updateLog('onShow')}
                    onVisible={this.updateLog('onVisible')}
                    vertical
                    visible={visible}
                    width='thin'
                >
                    <Menu.Item as='a'>Home</Menu.Item>
                    <Menu.Item as='a'>Games</Menu.Item>
                    <Menu.Item as='a'>Channels</Menu.Item>
                </Sidebar>

                <Sidebar.Pusher >
                    
                        <Dashboard toggelSideBar={this.handleButtonClick}/>
                    
                </Sidebar.Pusher>
            </Sidebar.Pushable>
</div>
        )
	}
}

export default DashboardContainer;