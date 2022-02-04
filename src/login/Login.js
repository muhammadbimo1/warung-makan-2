//class 
import React, { Component } from 'react';
// class App extends React.Component{
import 'bootstrap'
// }

class LoginScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    }
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  }

  handleChangeEmail = (event) => {
    this.setState = ({
      email: event.target.value
    })
    console.log(this.state);
  }

  handleChangePassword = (e) => {
    this.setState = ({
      password: e.target.value
    })
  }

  render() {
    return (
      <div>
        <div className="video-background-holder">
          <div className="video-background-overlay"></div>
          <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
            <source src="https://mdbootstrap.com/img/video/Lines.mp4" type="video/mp4" />
          </video>
          <div className="video-background-content container h-100">
            <div className="d-inline-flex h-100 align-items-center">
              <div className="card" style={{ opacity: "80%", backdropFilter: "blur(14px)", backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                <div className='card-body text-white'>
                  <h5>Login</h5>
                  <form className='mb-2'>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' placeholder="Enter email" onChange={this.handleChangeEmail} /> </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input type="password" className="form-control" id="password" placeholder="Password" name="password" onChange={this.handleChangePassword} />
                      <p style={{ color: "red" }}>{this.state.error}</p>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2 " disabled={this.state.isDisabled} onClick={this.handleLogin}>Login</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginScreen;
