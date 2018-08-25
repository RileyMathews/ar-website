import React, { Component } from 'react'
import {Hero, HeroBody, Container, Title} from 'bloomer'
import EventsList from '../events/EventsList';
import './Calendar.css'


class Calendar extends Component {


    render() {
        return (
            <Hero isColor='dark' isSize='medium' id='banner__calendar'>
                <HeroBody className="banner">
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
