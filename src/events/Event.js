import React, { Component } from 'react'


class Event extends Component {


    render() {
        return (
            <React.Fragment>
                <p>{this.props.event.venue.name} {this.props.event.datetime}</p>
            </React.Fragment>
        )
    }
}

export default Event
