import React, { Component } from 'react'


class Event extends Component {


    render() {
        return (
            <React.Fragment>
                <p>{this.props.event.venue.name}</p>
            </React.Fragment>
        )
    }
}

export default Event
