import { Component } from "react";
//Handles Form logic for both Tables and Menus
const withSend = (WrappedComponent) => {
    class WithSend extends Component {
        constructor(props) {
            super(props)
            this.state = {
                newItem:'',
            }
        }
        
        handleSubmit = (e) => {
            console.log("WITHSEND",this.props);
            e.preventDefault()
            this.props.submit(this.state.newItem)
            console.log(this.state);
          }

          handleChange = (e) => {
            //TODO:Validation
            this.setState({
                newItem: {
                    ...this.state.newItem,
                    [e.target.name]: e.target.value
                },
            })
            console.log(this.state);
        }
        
        render() {
            return (
                <WrappedComponent item={this.state.newItem} submit={this.handleSubmit} change={this.handleChange} />
            )
        }
    }
    return WithSend;
}

export default withSend;