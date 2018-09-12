import React, { Component } from 'react';

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
        this.getUsersDetails();
    }

    // signOut = () => {
    //     this.setState({
    //         loggedIn: false,
    //     })
    // }
    getUsersList = () => {

    }


    listRes = () => {
        this.state.ResturantList.map((e) => {
            return <li>e.email</li>
        })
    }

    getUsersDetails = () => {
        NetworkHandler.sendRequest("GET", '/account/detail', null, true, null)
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
            

                <Feed listRes={this.listRes} statee={this.state} />

           

        )
    }
}

export default FeedContainer;