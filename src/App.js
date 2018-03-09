/**
 * Created by Wojtek on 2018-03-08.
 */
import React from "react";
import IfElse from './Components/IfElse';
import Null from './Components/Null';

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
            </div>
        );
    }
}
;
export default App;