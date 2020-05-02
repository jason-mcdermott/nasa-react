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
        <div>
            <Header />
            <Switch>
                <Route path="/" component={App} exact={true} />
                <Route path="/potd" component={PictureOfTheDay} />
                <Route path="/iss" component={ISSPosition} />
                <Route path="/sf" component={SpaceFacts} />
                <Route component={NotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter