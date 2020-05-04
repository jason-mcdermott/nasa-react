import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from '../components/App'
import Header from '../components/Header'
import ISSPosition from '../components/ISSPosition'
import NotFound from '../components/NotFound'
import PictureOfTheDay from '../components/PictureOfTheDay'
import SpaceFacts from '../components/SpaceFacts'

const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" component={App} exact={true} />
            <Route path="/pic-of-the-day" component={PictureOfTheDay} />
            <Route path="/iss-position" component={ISSPosition} />
            <Route path="/space-facts" component={SpaceFacts} />
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default AppRouter