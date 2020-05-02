import React from 'react'

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
        fetch("https://api.nasa.gov/planetary/apod?api_key=SerzrKw5hd87oFzkxlu6wSgVfcisVNI5ktdae7xu")
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
        const { error, isLoaded, picture } = this.state
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    <ul>
                        <li>title: {picture.title}</li>
                        <li>url: {picture.url}</li>
                    </ul>
                </div>
            )
        }
    }
}