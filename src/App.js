import './App.css';
import { Component } from 'react';
import LoginScreen from './login/Login';
import Home from './home/home';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      logged: true
    }
  }

  login = (params) => {
    console.log(params);
    if (params.email === "admin@example.com" && params.password === "12345678") {
      this.setState({
        logged: true
      })
    } else{
      alert("Incorrect email or password!")
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.logged ? <Home /> : <LoginScreen login={this.login} />}
      </div>
    );
  }
}

export default App;
