import React, { Component } from 'react'
import {Hero, HeroBody, Container, Title} from 'bloomer'
import './Music.css'

class Music extends Component {


    render() {
        return (
            <Hero isColor='light' isSize='medium' id='banner__music'>
                <HeroBody className="banner" id="music">
                    <Container className='has-text-centered'>
                        <Title hasTextColor="white" isSize={2}>
                            Music
                        </Title>
                        <iframe title="soundcloud" width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/511451817&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                    </Container>
                </HeroBody>
            </Hero>
        )
    }
}

export default Music
