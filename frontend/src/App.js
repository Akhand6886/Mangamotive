import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EpisodesPage from './components/EpisodesPage';
import EpisodeDetails from './components/EpisodeDetails';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={EpisodesPage} />
        <Route path="/episodes/:id" component={EpisodeDetails} />
      </Switch>
    </Router>
  );
};

export default App;
