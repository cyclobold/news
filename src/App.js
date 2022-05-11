import React from "react"
import logo from './logo.svg';
import './App.css';
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

class App extends React.Component{

  constructor(){
    super()

    this.state = {
      current_page: 'login'
    }
  }

  loadRegisterPage = () => {

    this.setState({
      current_page: "register"
    })


  }

  loadLoginPage = () => {

    this.setState({
      current_page: "login"
    })


  }


  render(){
    let current_page = this.state.current_page

    let currentUserPage;
    switch(current_page){
      case "login":
        currentUserPage = <Login loadRegister={this.loadRegisterPage} />
        break
      
      case "register":
          currentUserPage = <Register loadLogin={this.loadLoginPage} />
          break
    }


    return (
      <div className="App">
      <header className="App-header">
       {currentUserPage}
      </header>
    </div>
      
    )

  }




}

export default App