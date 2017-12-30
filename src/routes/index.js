import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Expenses from '../Expenses';
import Koala from '../Koala'

export default () => (
  <Router>
    <div>
    <Route exact path="/" component={Expenses} />
    <Route path="/expenses" component={Expenses} />
    <Route exact path="/koala-accounts" component={Koala} />
    </div>
  </Router>
);
