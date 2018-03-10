/**
 * Created by Wojtek on 2018-03-10.
 */
import React from 'react';

export default class ElementVariable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: '', inputText: '', mode: 'view'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleChange(e) {
        this.setState({inputText: e.target.value});
    }

    handleSave() {
        this.setState({text: this.state.inputText, mode: 'view'});
    }

    handleEdit() {
        this.setState({mode: 'edit'});
    }

    renderInputField() {
        let input;

        if (this.state.mode !== 'view') {
            input =
                <p>
                    <input
                        onChange={this.handleChange}
                        value={this.state.inputText}/>
                </p>;
        }

        return input;
    }

    renderButton() {
        let button;

        if (this.state.mode === 'view') {
            button =
                <button onClick={this.handleEdit}>
                    Edit
                </button>;
        } else {
            button =
                <button onClick={this.handleSave}>
                    Save
                </button>;
        }

        return button;
    }

    render() {
        return (
            <div>
                <h2>Element variable</h2>
                <p>Text: {this.state.text}</p>
                {this.renderInputField()}
                {this.renderButton()}
            </div>
        );
    }
}