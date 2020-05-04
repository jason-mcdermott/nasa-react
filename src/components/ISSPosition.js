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
        const { error, position } = this.state
        const photo = getRandom(1, 5)
        const divStyle = {
            backgroundImage: `url(../../../iss_${photo}.jpg)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto'
            //backgroundImage: `http://localhost:8080/public/iss_${photo}.jpg`
          };
        if (error) {
            return <div>Error: {error.message}</div>
        } else {
            return (
                <div className="iss-container picture" style={divStyle}>
                    <div className="top-left boxed">
                        Where is the ISS?
                    </div>
                    <div className="bottom-right boxed">
                        <div className="title">
                            <ul>
                                <li className="label">latitude: {position.latitude}</li>
                                <li className="label">longitude: {position.longitude}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}