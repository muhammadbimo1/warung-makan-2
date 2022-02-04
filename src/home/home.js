//class 
import React, { Component } from 'react';
import Menu from '../menu/Menus';
import Tables from '../table/Tables';
import Dashboard from './dashboard'
// class App extends React.Component{

// }

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      menus:[
        {
          id:"1",
          name:"name",
          price:"1500"
        }
      ],
      navbar: ""
    }
  }

  handleNavbar = (nav) => {
    console.log(this.state);
    this.setState({
      navbar: nav
    })
  }

  addDataMenus = (data) => {
    console.log("data",data);
    this.setState({
      menus: [...this.state.menus, data]
    })
  }


  render() {
    let showMenu = ""
    if (this.state.navbar==="menus") {
      showMenu = <Menu menus={this.state.menus} submitMenu={this.addDataMenus}/>
    } else if(this.state.navbar==="tables"){
      showMenu = <Tables/>
    }
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Bakari</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <button className="nav-item nav-link" onClick={() => this.handleNavbar("tables")}>Tables</button>
            <button className="nav-item nav-link" onClick={() => this.handleNavbar("menus")}>Menus</button>
            <button className="bton btn-danger" onClick={() => this.handleNavbar("logout")}>Logout</button>
          </div>
        </div>
      </nav>
      {showMenu}
      </div>
    );
  }
}

export default Home;
