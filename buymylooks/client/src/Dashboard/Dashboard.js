import React from 'react';
import { Dropdown, Menu, Segment, Container,Icon ,} from 'semantic-ui-react'
import { HashRouter as Router, Route } from 'react-router-dom'
import FeedContainer from "../Feed/FeedContainer";
import { SeconderyRouting } from "../route/route";

const options = [
    { key: 1, text: 'Logout', value: 1 },

]

const Dashboard = ({ toggelSideBar }) => (
    <div>
        
        <Menu >
        <Container > 
        <Menu.Item>
          <img onClick={toggelSideBar} src='https://react.semantic-ui.com/logo.png' />
          
          &nbsp; BuyMyLooks
        </Menu.Item>

        

        <Menu.Item position='right'
          name='testimonials'
          active={false}
          onClick={this.handleItemClick}
        >
         <Icon link name='user outline' size='large' />
          
        </Menu.Item>

        </Container>
      </Menu>
      
        <Container text>
            <Segment vertical >
                <SeconderyRouting />
            </Segment>
        </Container>
    </div>
)

export default Dashboard;