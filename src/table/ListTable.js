//class 
import React, { Component } from 'react';

class TableList extends Component {

  render() {
    return (
      <>
      <button className="btn btn-primary" onClick={this.props.callback}>Add Table</button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.tables.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{item.id}</td>
                                <td style={item.status==='Available' ? {color:"blue"}:{color:"red"}}>{item.status}</td>
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

export default TableList;
