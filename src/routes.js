import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import TodosProjetos from './pages/todosProjetos';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="todosprojetos" component={TodosProjetos} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;