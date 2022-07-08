import React from 'react';

import { useSelector } from 'react-redux';

export default function Avatar() {
    const character = useSelector(state => state.character);


    return (
        <div>
            <img src={character.muzzle}></img>
            <img src={character.ears}></img>
            <img src={character.eyes}></img>
            <img src={character.fur}></img>
        </div>
    );
}