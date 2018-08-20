import React, { Component } from 'react'
import {Hero, HeroBody, Container, Title} from 'bloomer'


class Calendar extends Component {


    render() {
        return (
            <Hero isColor='dark' isSize='medium'>
                <HeroBody className="banner">
                    <Container className='has-text-centered'>
                        <Title>
                            Calendar
                        </Title>
                    </Container>
                </HeroBody>
            </Hero>
        )
    }
}

export default Calendar
