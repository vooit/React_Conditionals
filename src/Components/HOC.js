/**
 * Created by Wojtek on 2018-03-11.
 */
import React, {Component} from "react";

//a higher-order component is a function that takes a component and returns a new component. !!

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


//The inner functions have access to the outer functions’ parameters, so now, based on the value returned by the function conditionalRenderingFn, you either return the EitherComponent or the original Component:
const withEither = (conditionalRenderingFn, EitherComponent) => (Component) => (props) =>
    conditionalRenderingFn(props)
        ? <EitherComponent { ...props } />
        : <Component { ...props } />;

const isViewConditionFn = (props) => props.mode === 'view';




const withEditContionalRendering = withEither(isViewConditionFn, EditComponent);
const EditSaveWithConditionalRendering = withEditContionalRendering(SaveComponent);





export default class HigherOrderComponent extends React.Component {
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

    render() {
        return (
            <div>
                <h2>Higher Order Component</h2>
                <p>Text: {this.state.text}</p>
                <EditSaveWithConditionalRendering
                    mode={this.state.mode}
                    handleEdit={this.handleEdit}
                    handleChange={this.handleChange}
                    handleSave={this.handleSave}
                    text={this.state.inputText}
                />
            </div>
        );
    }
}