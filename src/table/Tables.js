//class 
import React, { Component } from 'react';
import FormTable from './FormTable';
import TableList from './ListTable';
import withPush from '../WithPush';


class Tables extends Component {
  // See, We now use WithPush for both Tables and Menus.
  // Notice that now we now only need to write the layout here.
  // All of the logic we get from the HOC is now being sent as props.
  // Therefore, We now call everything like this.
  render() {
    return (
      <>
      <h1>Tables</h1>
    {this.props.addForm? <FormTable submit={this.props.handleSubmit}/> : <TableList callback={this.props.handleClickMenu} tables={this.props.items}/>}
      </>
    );
  }
}

export default withPush(Tables);
