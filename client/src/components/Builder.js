import React from 'react';
import Menu from './Menu';

import './CSS/Builder.css'

export default function Builder() {
    return (
        <section>
            <div id="img-wrapper">
            </div>
            <div id="menu-wrapper">
                <Menu/>
            </div>
        </section>
    );
}