import React from 'react';
import Game from './game/Game';
import Round from './round/Round';
import {Switch, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import '../styles/index.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Switch>
        <Route path='/gameId=:gameId/round'>
            <Round />
        </Route>
        <Route path='/'>
            <Game />
        </Route>
        </Switch>
    </BrowserRouter>

  );
};

export default App;
