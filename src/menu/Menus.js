//class 
import React, { Component } from 'react';
import MenuForm from './FormMenu';
import MenuList from './ListMenu';
import withPush from '../WithPush';

class Menu extends Component {
  // Notice that now we now only need to write the layout here.
  // All of the logic we get from the HOC is now being sent as props.
  // Therefore, We now call everything like this.
  render() {
    return (
      <>
      <h1>Menus</h1>
    {this.props.addForm? <MenuForm submit={this.props.handleSubmit}/> : <MenuList callback={this.props.handleClickMenu} menus={this.props.items}/>}
      </>
    );
  }
}

export default withPush(Menu);
