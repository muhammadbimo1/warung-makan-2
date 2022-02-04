//class 
import React, { Component } from 'react';
import withSend from '../WithSend';

class MenuForm extends Component {

  render() {

    return (
      <>
        <div>
          <div>
            <form>
              <div className="form-group">
                <input type="number" name="id" id="id" placeholder="ID" onChange={this.props.change} /> <br />
              </div>
              <div className="form-group">
                <input type="text" name="name" id="name" placeholder="Name" onChange={this.props.change} /> <br />
              </div>
              <div className="form-group">
                <input type="number" name="price" id="price" placeholder="Price" onChange={this.props.change} /> <br />
              </div>
              <input type="button" className="btn btn-primary" value="submit" onClick={this.props.submit} />
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default withSend(MenuForm);
