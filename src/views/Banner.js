import React, { Component } from 'react'
import {Hero, HeroBody, Container, Title} from 'bloomer'
import './Banner.css'


class Banner extends Component {


    render() {
        return (
            <Hero isColor='dark' isSize='medium'>
                <HeroBody className="banner" id="banner">
                    <Container className='has-text-centered'>
                        <Title>
                            Alamanac Ridge
                        </Title>
                    </Container>
                </HeroBody>
            </Hero>
        )
    }
}

export default Banner
