import React from 'react'
import List from './_list'
import Show from './_show'
import { Redirect, Switch, Route, useRouteMatch } from 'react-router'

export default function App () {
  let match = useRouteMatch()

  return (
    <Switch>
        <Route path={`${match.path}/:id`} component={Show} />
        <Route exact path={match.path} component={List} />

        <Redirect to='/' />
    </Switch>
  )
}