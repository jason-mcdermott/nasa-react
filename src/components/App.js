import React from 'react'
import PictureOfTheDay from './PictureOfTheDay'
import SpaceFacts from './SpaceFacts'
import ISSPosition from './ISSPosition'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <PictureOfTheDay />
                <SpaceFacts />
                <ISSPosition />
            </div>
        );
    }
}