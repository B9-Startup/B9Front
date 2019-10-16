import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Projetos from './pages/projetos'


const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/projetos" component={Projetos} />>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;