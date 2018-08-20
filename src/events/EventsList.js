import React, { Component } from 'react'
import Event from './Event'


class EventsList extends Component {


    render() {
        return (
            <React.Fragment>
                {this.props.events.map(event => (
                    <Event key={event.id} event={event}/>
                ))}
            </React.Fragment>
        )
    }
}

export default EventsList
