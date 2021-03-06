import React from 'react';
import './Clock.css';

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
                <p>This is a janky UTC clock that requires motivation to work</p>
                <p>The more you hit it the more accurate it is</p>
                <div className="clock">{this.state.time}</div>
                <button onClick={() => {this.updateTime()}}>
                    Hit Me
                </button>
            </div>
        )
    }

    componentDidMount() {
        this.updateTime();
    }

    async updateTime() {
        await fetch('http://localhost:8000/api/timestamp')
            .then(response => response.json())
            .then(
                (parsed) => {this.setState({
                        time: parsed.currentTime
                    })
                },
                () => {}
            )
    }
}

export default Clock;