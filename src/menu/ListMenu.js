//class 
import React, { Component } from 'react';

class MenuList extends Component {

  render() {
    return (
      <>
      <button className="btn btn-primary" onClick={this.props.callback}>Add Menu</button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.menus.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                            </tr>
                        )
                            ;
                    })}
                </tbody>
            </table>
      </>
    );
  }
}

export default MenuList;
