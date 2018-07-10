import React from 'react';
import {Dropdown, Menu, Segment} from 'semantic-ui-react'
import {HashRouter as Router, Route} from 'react-router-dom'
import FeedContainer from "../Feed/FeedContainer";
import {SeconderyRouting} from "../route/route";

const options = [
    {key: 1, text: 'Logout', value: 1},

]

const Dashboard = ({toggelSideBar}) => (
    <div>
        <Menu>
            <Menu.Item header>
                <i className="bars icon" onClick={toggelSideBar}></i>
            </Menu.Item>
            <Menu.Item name='About Us'/>
            <Menu.Menu position='right'>
                <Dropdown item simple text='User Name' direction='right' options={options}/>
            </Menu.Menu>
        </Menu>
        <Segment raised>
            <SeconderyRouting/>
        </Segment>
    </div>
)

export default Dashboard;