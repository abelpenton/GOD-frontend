import React from 'react';
import GameContainer from './Game/components/Containers/GameContainer';
import RoundContainer from './Round/components/Containers/RoundContainer';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import '../styles/index.css';
import { GameProvider } from './Game/context';
import { RoundProvider } from './Round/context';

const App: React.FC = () => {
  return (
    <GameProvider>
      <BrowserRouter>
        <Switch>
          <Route path='/round'>
            <RoundProvider>
              <RoundContainer />
            </RoundProvider>
          </Route>
          <Route path='/'>
            <GameContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </GameProvider>
  );
};

export default App;
