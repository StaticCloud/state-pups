import React from 'react';

// placeholder
import fur_gold from '../components/Img/Fur/dog_body_golden.png'

import { useSelector, useDispatch } from 'react-redux';

export default function Avatar() {
    const character = useSelector(state => state.character);

    return (
        <div>
            <img src={character.fur}></img>
        </div>
    );
}