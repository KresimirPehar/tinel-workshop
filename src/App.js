import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import { Container } from './App.style';
import Filters from './components/Filters';
import Workshops from './containers/Workshops';

function App() {
  return (
    <Layout>
      <Container>
        <Router>
          <Switch>
            <Route path='/'>
              <Filters />
              <Workshops />
            </Route>
          </Switch>
        </Router>
      </Container>
    </Layout>
  );
}

export default App;
