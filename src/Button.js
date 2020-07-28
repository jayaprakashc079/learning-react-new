import React from 'react';

class Button extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    onClick = () => {
        this.setState({
            counter: this.state.counter + 1,
        });
         debugger;
        console.log("hello world!!!");
    }

    render() {
        return (
            <div>
                <button onClick={this.onClick}>{this.props.label} - {this.state.counter}</button>
            </div>
        )
    }
}

export default Button;
