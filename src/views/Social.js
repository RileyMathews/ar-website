import React, { Component } from 'react'
import {Hero, HeroBody, Container, Title} from 'bloomer'


class Social extends Component {


    render() {
        return (
            <Hero isColor='light' isSize='medium'>
                <HeroBody className="banner" id="social">
                    <Container className='has-text-centered'>
                        <Title>
                            Social
                        </Title>
                    </Container>
                </HeroBody>
            </Hero>
        )
    }
}

export default Social
