import React from 'react'

export default class ISSPosition extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            position: {}
        }
    }
    
    componentDidMount() {
        fetch("http://api.open-notify.org/iss-now.json")
            .then(response => response.json()) 
            .then((data) => {
                    this.setState({
                        isLoaded: true,
                        position: data.iss_position
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
        const { error, isLoaded, position } = this.state
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    <ul>
                        <li>longitude: {position.longitude}</li>
                        <li>latitude: {position.latitude}</li>
                    </ul>
                </div>
            )
        }
    }
}