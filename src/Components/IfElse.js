/**
 * Created by Wojtek on 2018-03-08.
 */
import React from "react";
export default class IfElse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',//text wyswietlony w <p>
            inputText: '',//text w inpucie
            mode: 'view'//edit or view mode
        };
        //    bindowanie w construktorze;
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


    render () {
        if(this.state.mode === 'view') {
            return (
                <div>
                    <p>Text: {this.state.text}</p>
                    <button onClick={this.handleEdit}>
                        Edit
                    </button>
                </div>
            );
        } else {
            return (
                <div>
                    <p>Text: {this.state.text}</p>
                    <input
                        onChange={this.handleChange}
                        value={this.state.inputText}
                    />
                    <button onClick={this.handleSave}>
                        Save
                    </button>
                </div>
            );
        }
    }
}