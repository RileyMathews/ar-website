import React, { Component } from 'react'
import {Hero, HeroBody, Container} from 'bloomer'
import './Banner.css'



class Banner extends Component {


    render() {
        return (
            <Hero isSize='medium' id='banner__main'>
                <HeroBody id="home">
                    <Container className='has-text-centered'>
                        {/* <Title hasTextColor="white" isSize={1}>
                            Alamanac Ridge
                        </Title> */}
                        {/* <img className="logo" src={logo} alt=""/> */}
                    </Container>
                </HeroBody>
            </Hero>
        )
    }
}

export default Banner
