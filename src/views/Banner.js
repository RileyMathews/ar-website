import React, { Component } from 'react'
import {Hero, HeroBody, Container, Title} from 'bloomer'
import './Banner.css'


class Banner extends Component {


    render() {
        return (
            <Hero isSize='medium' id='banner__main'>
                <HeroBody id="home">
                    <Container className='has-text-centered'>
                        <Title hasTextColor="white" isSize={1}>
                            Alamanac Ridge
                        </Title>
                    </Container>
                </HeroBody>
            </Hero>
        )
    }
}

export default Banner
