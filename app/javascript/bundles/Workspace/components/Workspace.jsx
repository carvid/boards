import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Boards from './boards';
import Board from '../containers/board.container';
import Menu from './menu';

export default class Workspace extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <div className="container main-container p-3">
            <Switch>
              <Route exact path="/app" render={() => (
                <Redirect to="/app/my-boards"/>
              )}/>
              <Route path="/app/my-boards" component={Boards} />
              <Route path="/app/board/:id" component={Board} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
