import React, {Component} from 'react';
import {Dropdown, Icon, Menu, Segment, Sidebar,Container} from 'semantic-ui-react'
import Routing from '../route/route';

export default class Headera extends Component {
    state = {visible: false};
    options = [
        {key: 1, text: 'Logout', value: 2},
        {key: 2, text: 'Help', value: 3},
    ]
    handleButtonClick = () => this.setState({visible: !this.state.visible})

    handleSidebarHide = () => this.setState({visible: false})

    render() {
        const {visible} = this.state;

        return (
            <div>

                <Menu>
                    <Menu.Item name='browse' onClick={this.handleButtonClick}>
                        <i className="sidebar icon"></i>
                        Menu
                    </Menu.Item>
                    <Menu.Menu compact position='right'>
                        <Dropdown text='User Name' options={this.options} simple item/>
                    </Menu.Menu>
                </Menu>

                <Sidebar.Pushable as={Segment} className='sidebar-container'>
                    <Sidebar
                        as={Menu}
                        animation={'push'}
                        icon='labeled'
                        inverted
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={visible}
                        width='thin'
                    >
                        <Menu.Item as='a'>
                            <Icon name='home'/>
                            DashBoard
                        </Menu.Item>

                    </Sidebar>

                    <Sidebar.Pusher >
                            {/*<Routing/>*/}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>

        )
    }
}

