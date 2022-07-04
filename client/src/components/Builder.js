import React from 'react';
import Menu from './Menu';
import Avatar from './Avatar';

import './CSS/Builder.css'

export default function Builder() {
    return (
        <section>
            <div id="img-wrapper">
                <Avatar/>
            </div>
            <div id="menu-wrapper">
                <Menu/>
            </div>
        </section>
    );
}