import React from 'react';
import GameContainer from './game/Containers/GameContainer';
import EndGame from './game/Presentations/EndGame';
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
            <GameContainer />
        </Route>
        <Route path='/end-game'>
            <EndGame />
        </Route>
        </Switch>
    </BrowserRouter>

  );
};

export default App;
