/**
 * Created by Wojtek on 2018-03-10.
 */
import React from "react";
export default class TernaryOperator extends React.Component {
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
                <h2>Ternary Operator</h2>
                <p>Text: {this.state.text}</p>
                {
                    view ? null : (
                        <p>
                            <input
                                onChange={this.handleChange}
                                value={this.state.inputText}/>
                        </p>
                    )
                }
                <button
                onClick={
                    view ? this.handleEdit : this.handleSave
                }>
                    {view ? 'Edit' : 'Save'}
                </button>

            </div>
        )
    }


}