import React, { Component } from 'react'
import AuthenticationService from '../service/AuthenticationService.js'


class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: 'matien',
            password: 'sadat',

        }
        this.loginClicked = this.loginClicked.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
    }

    handleUsernameChange(event) {
        console.log(event.target.value);
        this.setState({ username: event.target.value })
    }

    handlePasswordChange(event) {
        console.log(event.target.value);
        this.setState({ password: event.target.value })
    }

    loginClicked() {
        console.log(this.state.username, this.state.password)
        if (this.state.username === 'matien' && this.state.password === 'sadat') {
            AuthenticationService.registerSuccesfulLogin(this.state.username, this.state.password)
            this.props.history.push('/Home')
        } else {
            alert("Login data are wrong!")
        }
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container loginform">

                    <div className="row justify-content-center align-items-center">
                        <div className="col-xs-2 mb-3">
                            <h1>YUM YUM</h1>
                        </div>
                    </div>


                    <div className="row justify-content-center align-items-center">
                        <div className="col-xs-2 mb-3">
                            <div class="typewriter">
                                <div class="typewriter-text">Beyond the Boundaries of Taste</div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center align-items-center">
                        <div className="col-xs-2 userfield">
                            <input type="text" class="form-control" placeholder="Username" name="username" value={this.setState.username} onChange={this.handleUsernameChange} />
                        </div>
                    </div>

                    <div className="row justify-content-center align-items-center">
                        <div className="col-xs-2 passfield">
                            <input type="password" class="form-control" placeholder="Password" name="password" value={this.setState.password} onChange={this.handlePasswordChange} />
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xs-2 logButton">
                            <button className="btn btn-outline-danger" onClick={this.loginClicked}>Login</button>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default LoginComponent