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


// 1.
//So let’s start by defining a function that takes two arguments, another function that will return a boolean value (the result of the conditional evaluation), and the component that will be returned if that value is true

//This function will return another function that will take the original component to return a new one:


const withEither = (conditionalRenderingFn, EitherComponent) => (Component) =>
    //The component (function) returned by this inner function will be the one you’ll use in your app, so it will take an object with all the properties that it will need to work:
    (props) =>
    conditionalRenderingFn(props)
        //The inner functions have access to the outer functions’ parameters, so now, based on the value returned by the function conditionalRenderingFn, you either return the EitherComponent or the original Component:
        ? <EitherComponent { ...props } />
        : <Component { ...props } />;

const isViewConditionFn = (props) => props.mode === 'view';



//This way, using the previously defined SaveComponent and EditComponent, you can create a withEditConditionalRendering HOC
const withEditContionalRendering = withEither(isViewConditionFn, EditComponent);
//and with this, create a EditSaveWithConditionalRendering component:
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