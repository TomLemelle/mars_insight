import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from '../page/Home';


const CustomRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};

export default CustomRouter;