import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from './components/Dashboard/dashboard'
class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Dashboard} />
                    <Route path="/dashboard" exact={true} component={Dashboard} />
                </Switch>
            </Router>
        )
    }
}
export default App;