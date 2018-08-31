import React, { Component } from 'react'
import { Media, MediaContent, Content, } from 'bloomer'
import { Button } from 'bloomer/lib/elements/Button';


class Event extends Component {

    state = {
        year: "",
        month: "",
        day: "",
        dayOfWeek: "",
        hour: "",
        minute: "",
        sideOfDay: "",
        fullTime: "",
    }

    componentDidMount() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const eventDate = new Date(this.props.event.datetime)
        let hour = eventDate.getHours()
        let minutes = eventDate.getMinutes()
        let sideOfDay = "AM"
        if (hour > 12) {
            hour -= 12
            sideOfDay = "PM"
        }
        if (minutes === 0) {
            minutes = "00"
        }
        const month = months[eventDate.getMonth()]
        const day = days[eventDate.getDay()]
        const fullTime = `${hour}:${minutes} ${sideOfDay}`
        this.setState({
            year: eventDate.getFullYear(),
            month: month,
            dayOfWeek: day,
            day: eventDate.getDate(),
            hour: hour,
            minute: minutes,
            sideOfDay: sideOfDay,
            fullTime: fullTime
        })
    }


    render() {
        return (
            <Media>
                <MediaContent>
                    <Content>
                        <p>
                            {this.props.event.venue.name} in {this.props.event.venue.city} {this.props.event.venue.region} {this.state.dayOfWeek} {this.state.month}, {this.state.day} {this.state.year}. {this.state.fullTime}
                        </p>
                        <Button href={this.props.event.url} target="blank">More Info</Button>
                    </Content>
                </MediaContent>
            </Media>
        )
    }
}

export default Event
