import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Component/Dashboard/Dashboard'

export default(
    <Switch><Route path='/dashboard' component={Dashboard}/></Switch>
)