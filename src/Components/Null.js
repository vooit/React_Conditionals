/**
 * Created by Wojtek on 2018-03-09.
 */
import React from "react";
export default class Null extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: '', inputText: '', mode:'view'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleChange(e) {
        this.setState({ inputText: e.target.value });
    }

    handleSave() {
        this.setState({text: this.state.inputText, mode: 'view'});
    }

    handleEdit() {
        this.setState({mode: 'edit'});
    }



    renderInputField() {
        if(this.state.mode === 'view') {
            return null;
        } else {
            return (
                <div>
                    <input
                        onChange={this.handleChange}
                        value={this.state.inputText}
                    />
                </div>
            );
        }
    }

    renderButton() {
        if(this.state.mode === 'view') {
            return (
                <button onClick={this.handleEdit}>
                    Edit
                </button>
            );
        } else {
            return (
                <button onClick={this.handleSave}>
                    Save
                </button>
            );
        }
    }


    render() {
        return (
            <div>
                <h2>NULL</h2>
                <p>Text: {this.state.text}</p>

                {this.renderInputField()}
                {this.renderButton()}
            </div>        )

    }
}