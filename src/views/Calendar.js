import React, { Component } from 'react'
import {Hero, HeroBody, Container, Title} from 'bloomer'


class Calendar extends Component {


    render() {
        return (
            <Hero isColor='dark' isSize='medium'>
                <HeroBody className="banner" id="calendar">
                    <Container className='has-text-centered'>
                        <Title>
                            Calendar
                        </Title>
                        <a className="bit-widget-initializer" data-artist-name="Almanac Ridge" data-display-local-dates="false" data-display-past-dates="true" data-auto-style="false" data-text-color="#000000" data-link-color="#2F95DE" data-popup-background-color="#FFFFFF" data-background-color="#FFFFFF" data-display-limit="15" data-link-text-color="#FFFFFF"></a>
                    </Container>
                </HeroBody>
            </Hero>
        )
    }
}

export default Calendar
