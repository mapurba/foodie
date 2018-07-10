import React, {Component} from 'react';
import {Redirect} from 'react-router';

import Feed from './Feed';
import './Feed.css';
import NetworkHandler from "../api/NetworkHandler";

class FeedContainer extends Component {
    namesList = [];

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: true,
            ResturantList: []
        }
    }

    componentWillMount() {
        window.location.search = "";
        this.getUsersList();
    }

    // signOut = () => {
    //     this.setState({
    //         loggedIn: false,
    //     })
    // }
    getUsersList = () => {
        NetworkHandler.sendRequest("GET", '/api/restaurant/list', null, true, null)
            .then((response) => {
                this.state.ResturantList = response.data;
            })
            .catch((err) => {
                throw err;
            })
    }


    listRes = () => {
        this.state.ResturantList.map((e) => {
            return <li>e.email</li>
        })
    }

    getUsersDetails = () => {
        NetworkHandler.sendRequest("GET", '/api/users/details', null, true, null)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                throw err;
            })


    }
    statee = () => {
        return this.state;
    }


    render() {
        return (
            <div>

                        <Feed listRes={this.listRes} statee={this.state}/>

            </div>

        )
    }
}

export default FeedContainer;