import React, { Component } from 'react'
import { register } from './UserFunctions'

class Register extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            name: '',
            breed: '',
            password: '',
            lastSeen: '',
        }
    }

    onChange =(e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit =(e) =>{
        e.preventDefault()
        
        const user = {
            username: this.state.username,
            name: this.state.name,
            breed: this.state.breed,
            password: this.state.password,
            lastSeen: this.state.lastSeen,
        }
        register(user).then(res => {
            if (res) {
                this.props.history.push(`/login`)
            }
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weght-normal">Register Now, It's Free</h1>
                            <div className="form-group">
                                <label htmlFor="name">name</label>
                                <input type="name" className="form-control" 
                                name="name"
                                placeholder="name"
                                value={this.state.name}
                                onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="username" className="form-control" 
                                name="username"
                                placeholder="username"
                                value={this.state.username}
                                onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="breed">breed</label>
                                <input type="breed" className="form-control" 
                                name="breed"
                                placeholder="breed"
                                value={this.state.breed}
                                onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastSeen">Last Seen</label>
                                <input type="lastSeen" className="form-control" 
                                name="lastSeen"
                                placeholder="2019-04-14"
                                value={this.state.lastSeen}
                                onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" 
                                name="password"
                                placeholder="password"
                                value={this.state.password}
                                onChange={this.onChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;
