import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Projetos from './pages/projetos'
import Tarefas from './pages/tarefas';
import Arquivamento from './pages/arquivamento';
import Configuracoes from './pages/configuracoes';


const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/projetos" component={Projetos} />
                <Route path="/tarefas" component={Tarefas}/>
                <Route path="/arquivamento" component={Arquivamento}/>
                <Route path="/configuracoes" component={Configuracoes}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;