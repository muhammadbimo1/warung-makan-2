import { Component } from "react";
//Handles states for the parent for both tables and menus
const withPush = (WrappedComponent) => {
    class WithPush extends Component {
        state = {
            addForm:false,
            items:[],
          }
        
        handleClickMenu = () => {
          this.setState({
            addForm:true
          })
        }
        
        handleSubmit = (data) => {
          console.log(data);
          const items = this.state.items
          items.push(data)
          this.setState({
            addForm:false,
            items: items,
          })
        }
        
        render() {
            console.log("THIS",this);
            return (
                <WrappedComponent items={this.state.items} addForm={this.state.addForm} handleSubmit={this.handleSubmit} handleClickMenu={this.handleClickMenu} />
            )
        }
    }
    return WithPush;
}

export default withPush;