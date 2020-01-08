import React from 'react';
import GameContainer from './Game/components/Containers/GameContainer';
import RoundContainer from './Round/components/Containers/RoundContainer';
import {Switch, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import '../styles/index.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Switch>
        <Route path='/gameId=:gameId/round'>
            <RoundContainer />
        </Route>
        <Route path='/'>
            <GameContainer />
        </Route>
        </Switch>
    </BrowserRouter>

  );
};

export default App;
