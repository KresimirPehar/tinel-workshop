import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Container from './App.style';
import Filters from './components/Filters';
import Workshops from './containers/Workshops';
import WorkshopDetails from './containers/WorkshopDetails';
import Footer from './components/Footer';

const App = () => {
  return (
    <Layout>
      <Container>
        <Switch>
          <Route exact path='/'>
            <Filters />
            <Workshops />
          </Route>
          <Route path='/workshops/:id' component={WorkshopDetails} />
        </Switch>
        <Footer />
      </Container>
    </Layout>
  );
};

export default App;
