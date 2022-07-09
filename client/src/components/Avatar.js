import React from 'react';
import './CSS/Avatar.css'

import { useSelector } from 'react-redux';

export default function Avatar() {
    const character = useSelector(state => state.character);

    return (
        <div id="char-display">
            <img src={character.fur}></img>
            <img src={character.eyes}></img>
            <img src={character.extra}></img>
            <img src={character.ears}></img>
            <img src={character.muzzle}></img>
        </div>
    );
}