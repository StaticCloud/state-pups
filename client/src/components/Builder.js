import React from 'react';
import Menu from './Menu';

import './CSS/Builder.css'

import Head from './Img/Head.png'
import Eyes from './Img/Eyes.png'
import Mouth from './Img/Mouth/Mouth_1.png'
import Nose from './Img/Nose/Nose_1.png'
import Hat from './Img/Hat/Hat_1.png'

export default function Builder() {
    return (
        <section>
            <div id="img-wrapper">
                <img src={Head}></img>
                <img src={Eyes}></img>
                <img src={Nose}></img>
                <img src={Mouth}></img>
                <img src={Hat}></img>
            </div>
            <div id="menu-wrapper">
                <Menu/>
            </div>
        </section>
    );
}