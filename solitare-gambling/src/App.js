import "./wdyr"
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ClockSolitare from "./Components/Solitare Components/clock-solitare.component";
import Agnes from "./Components/Solitare Components/agnes.component";
import PachinkoMachine from "./Components/pachinko Components/pachinko-machine.component";
import GenerationalWealth from "./Components/Generational Wealth/generational-wealth.component";
import { Provider } from "react-redux";
import clockReducers from "./Reducers/clockReducer";
import {createStore} from "redux";

const App = () => {

    const clockStore = createStore(clockReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return (

        <Router>  
        {/* Here instead of using the component, we use the render and then the component
            * we do this because the component cannot take in anything without using render
            * if you just want to route to a componet without passing anyting to it
            * <Route path="/" exact component={<component>} /> works*/}
        <Route path="/clock" exact render={(props) => (
            <Provider store = {clockStore}>
                <ClockSolitare/>
            </Provider>
        )}
        />
        
        <Route path="/agnes" exact render={(props) => (
            <>
                {<Agnes/>}
            </>
        )}
        />
    <Route path="/Wealth" exact render={(props) => (
            <>
                {<GenerationalWealth/>}
            </>
        )}
        />
    <Route path="/pachinko" exact render={(props) => (
            <>
                {<PachinkoMachine/>}
            </>
        )}
        />
        
        </Router>
    );
}

export default App;