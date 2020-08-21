import React from 'react';
import { Router, Switch, Route} from 'react-router'
import Dashboard from './pages/Dashboard'
import Enter from './pages/Enter'
import PublicDashboard from './pages/PublicDashboard'
import NotFound from './pages/NotFound'
import { createBrowserHistory } from 'history'

const Routes = () => (
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route component={Enter} exact path="/Enter"/>
            <Route component={Dashboard} exact path="/dashboard"/>
            <Route component={PublicDashboard} exact path="/" />
            <Route component={NotFound} />
        </Switch>
    </Router>
)

export default Routes