import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: this.props.isLoggedIn
        }
    }



    logOut = () => {
        alert("You have logged out!");
        this.setState({
            
        })
    }

    logIn = () => {
        alert("You have logged in!");
    }

    render () {
        if (this.props.isLoggedIn === true) {
            return (
                <div >
                    <button onClick={this.logOut}>Log Out</button>
                </div>
            )
        } else {
            return (
                <div >
                    <button onClick={this.logIn}>Log In</button>
                </div>
            )
        }
    }
}

export default Profile;