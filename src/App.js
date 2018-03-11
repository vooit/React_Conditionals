/**
 * Created by Wojtek on 2018-03-08.
 */
import React from "react";
import IfElse from './Components/IfElse';
import Null from './Components/Null';
import ElementVariable from './Components/ElementVariable';
import TernaryOperator from './Components/TernaryOperator';
import Subcomponent from './Components/Subcomponent';
import HigherOrderComponent from './Components/HOC';


class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
              <IfElse/>
                <hr/>
                <Null/>
                <hr/>
                <ElementVariable/>
                <hr/>
                <TernaryOperator/>
                <hr/>
                <Subcomponent/>
                <hr/>
                <HigherOrderComponent/>
            </div>
        );
    }
}
;
export default App;