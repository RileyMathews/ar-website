import React, { Component } from 'react'
import { Navbar, NavbarItem, NavbarBurger, NavbarBrand, NavbarMenu, NavbarEnd } from "bloomer";


/* 
    module to handle displaying and logic of using the navigation bar
    authors Riley Mathews
*/
class NavBar extends Component {

    // Storing session storage as an object in state named currentUser
    state = {
        isActive: false,
    }

    onClickNav = function (e) {
        this.setState({
            isActive: (!this.state.isActive)
        })
        const navTarget = e.target.id.split("_")[1]
        console.log(navTarget)

        if (navTarget) {
            const targetElement = document.getElementById(navTarget)
            targetElement.scrollIntoView({behavior: "smooth"})
        }
    }.bind(this)

    render() {
        return (
            <Navbar className="is-fixed-top">
                <NavbarBrand>
                    <NavbarItem isHidden="desktop">{this.props.gamertag}</NavbarItem>
                    <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
                </NavbarBrand>
                <NavbarMenu isActive={this.state.isActive}>
                    <NavbarItem onClick={this.onClickNav} id="nav_banner">Home</NavbarItem>
                    <NavbarItem onClick={this.onClickNav} id="nav_music">Music</NavbarItem>
                    <NavbarItem onClick={this.onClickNav} id="nav_calendar">Tour</NavbarItem>
                    <NavbarItem onClick={this.onClickNav} id="nav_social">Instagram</NavbarItem>
                    <NavbarItem onClick={this.onClickNav} id="nav_contact">Contact</NavbarItem>
                </NavbarMenu>
                <NavbarEnd>
                    <NavbarItem isHidden="touch">{this.props.gamertag}</NavbarItem>
                </NavbarEnd>
            </Navbar>
        )


    }
}

export default NavBar