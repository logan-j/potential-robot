import React from 'react';

class Clock extends React.Component {
    constructor() {
        super()
        this.state = {
            time: null
        }
    }
    render() {
        return (
            <div>
                <p>{this.state.time}</p>
                <button onClick={() => {this.updateTime()}}>
                    Hit Me
                </button>
            </div>
        )
    }

    componentDidMount() {
        this.updateTime();
    }

    updateTime() {
        fetch('http://localhost:8000/api/timestamp')
            .then(response => response.json())
            .then(
                (parsed) => {this.setState({
                        time: parsed.currentTime
                    })
                },
                (error) => {console.log(error)}
            )
    }
}

export default Clock;