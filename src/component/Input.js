import React, {Component} from 'react';

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        }
    }

    addList = () => {
        const {input} = this.state;
        if (input) {
            this.props.addList(input);
            this.setState({ input: '' });
        }
    }

    handleEnter = event => {
        if (event.key === 'Enter') this.addList();
    };

    inputChange = (event) => {
        this.setState({input: event.target.value})
    }

    render() {
        const {input} = this.state;

        return (
            <div>
                <input
                    onKeyPress={this.handleEnter}
                    onChange={this.inputChange}
                    value={input}
                ></input>
                <button onClick={this.addList}>ADD</button>
            </div>
        );
    }
}

export default Input;