import React from "react"

class Register extends React.Component{
    constructor(){
        super()
    }

    render(){
        return ( <div>
            <form className="form">

            <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control"/>
                </div>

                <div className="form-group mt-2">
                    <button className="btn btn-lg btn-primary">Register</button>
                </div>
            </form>

            <h6 className="mt-2">Already registered? <strong onClick={() => this.props.loadLogin()}>Log in</strong> instead</h6>
        </div>)

    }


}

export default Register