import React, { Component } from 'react'
import {Hero, HeroBody, Container, Title} from 'bloomer'
import './Music.css'

class Music extends Component {


    render() {
        return (
            <Hero isColor='light' isSize='medium'>
                <HeroBody className="banner" id="music">
                    <Container className='has-text-centered'>
                        <Title>
                            Music
                        </Title>
                    </Container>
                </HeroBody>
            </Hero>
        )
    }
}

export default Music
