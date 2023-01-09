import React from 'react'
import List from './_list'
import Show from './_show'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { Redirect, Switch, Route, useRouteMatch } from 'react-router'

export default function App () {
  let match = useRouteMatch()
  const context = useDocusaurusContext();

  const layoutProps = {
    title: context.siteConfig.title,
    description: "Um Sistema de RPG onde Goblins dominam o mundo e humanos não existem."
  }

  return (
    <Layout {...layoutProps}>
      <Switch>
        <Route path={`${match.path}/:id`} component={Show} />
        <Route exact path={match.path} component={List} />

        <Redirect to='/' />
      </Switch>
    </Layout>
  )
}