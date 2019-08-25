import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from './pages/Search'
import QuestionDetail from './pages/QuestionDetail'

export default function Routes() {
    return(
        <Router>
        <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/question/:id" exact component={QuestionDetail} />
        </Switch>
        </Router>
    )
}