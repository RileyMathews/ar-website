import React, { Component } from 'react'
import {Hero, HeroBody, Container, Title} from 'bloomer'
import EventsList from '../events/EventsList';


class Calendar extends Component {


    render() {
        return (
            <Hero isColor='dark' isSize='medium'>
                <HeroBody className="banner" id="calendar">
                    <Container className='has-text-centered'>
                        <Title>
                            Calendar
                        </Title>
                        <EventsList 
                            events={this.props.events}
                        />
                    </Container>
                </HeroBody>
            </Hero>
        )
    }
}

export default Calendar
