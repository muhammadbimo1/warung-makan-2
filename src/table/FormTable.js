//class 
import React, { Component } from 'react';
import withSend from '../WithSend';

class TableForm extends Component {

  //any handling logic is now being sent by our HOC (Withsend)

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
                <input type="text" name="status" id="name" placeholder="Status" onChange={this.props.change} /> <br />
              </div>
              <input type="button" className="btn btn-primary" value="submit" onClick={this.props.submit} />
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default withSend(TableForm);
