import React from 'react';
import Game from './game/Game';
import EndGame from './game/EndGame';
import Round from './round/Round';
import {Switch, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import '../styles/index.css';
import { END_GAME } from '../store/actions/action_types';

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
        <Route path='/end-game'>
            <EndGame />
        </Route>
        </Switch>
    </BrowserRouter>

  );
};

export default App;
