import React from 'react'
import { NavLink } from 'react-router-dom'
const NASA_APOD_API_KEY = process.env.NASA_APOD_API_KEY || require('../../config').NASA_APOD_API_KEY

export default class PictureOfTheDay extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            picture: {}
        }
    }
    
    componentDidMount() {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_APOD_API_KEY}`)
            .then(response => response.json()) 
            .then((data) => {
                    this.setState({
                        isLoaded: true,
                        picture: data
                    })
                },
                // handle errors here instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log(error)
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    
    render() {
        const { error, picture } = this.state
        if (error) {
            return <div>Error: {error.message}</div>
        } else {
            return (
                <div className="potd-container">
                    <img src={picture.url} className="picture" alt="picture of the day" />
                    <div className="top-left boxed">
                        Pic of the Day
                    </div>
                    <div className="bottom-right boxed">
                        <div className="title">{picture.title}</div>
                        <div className="description module overflow">
                            <p>{picture.explanation}</p>
                        </div>
                        <div className="read-more">
                            <NavLink to="/pic-of-the-day" activeClassName="is-active">(read more)</NavLink>
                        </div> 
                    </div>
                </div>
            )
        }
    }
}