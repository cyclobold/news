import React from "react"

class Login extends React.Component{

    constructor(props){
        super(props)

        this.props = props

    }

    render(){
        return (
            <div>
                <form className="form">
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control"/>
                    </div>

                    <div className="form-group mt-2">
                        <button className="btn btn-lg btn-primary">Log in</button>
                    </div>
                </form>

                <h6 className="mt-2">Not registered? <strong onClick={() => this.props.loadRegister()}>Register</strong> now</h6>
            </div>

        )   

    }



}

export default Login