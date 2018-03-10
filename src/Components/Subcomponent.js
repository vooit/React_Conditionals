/**
 * Created by Wojtek on 2018-03-10.
 */
import React from "react";
const SaveComponent = (props) => {
    return (
        <div>
            <p>
                <input
                    onChange={props.handleChange}
                    value={props.text}
                />
            </p>
            <button onClick={props.handleSave}>
                Save
            </button>
        </div>
    );
};

const EditComponent = (props) => {
    return (
        <button onClick={props.handleEdit}>
            Edit
        </button>
    );
};

export default class Subcomponent extends React.Component {
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
        this.setState({inputText: e.target.value});
    }

    handleSave() {
        this.setState({text: this.state.inputText, mode: 'view'});
    }

    handleEdit() {
        this.setState({mode: 'edit'});
    }

    render() {
        const view = this.state.mode === 'view';

        return (
            <div>
                <h2>SUBCOMPONENT</h2>
                <p>Text: {this.state.text}</p>

                {
                    view ? <EditComponent handleEdit={this.handleEdit}/> : (<SaveComponent
                        handleChange={this.handleChange}
                        handleSave={this.handleSave}
                        text={this.state.inputText}
                    />
                    )
                }
            </div>

        )
    }
}
