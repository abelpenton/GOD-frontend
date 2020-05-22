import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import GameContainer from '@app/Game/components/Containers/GameContainer';
import RoundContainer from '@app/Round/components/Containers/RoundContainer';
import { GameProvider } from '@app/Game/context';
import { RoundProvider } from '@app/Round/context';

const App: React.FC = () => {
  return (
    <GameProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <GameContainer />
          </Route>
          <Route path='/round'>
            <RoundProvider>
              <RoundContainer />
            </RoundProvider>
          </Route>
        </Switch>
      </BrowserRouter>
    </GameProvider>
  );
};

export default App;
