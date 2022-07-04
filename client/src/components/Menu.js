import React, { useState, useEffect } from 'react';
import './CSS/Menu.css'

import { useSelector, useDispatch } from 'react-redux';

import { setFur, setEyes, setEars, setMuzzle, setExtra } from '../state/characterReducer'

import Eyes from '../utils/cosmetics/Eyes'
import Ears from '../utils/cosmetics/Ears'
import Fur from '../utils/cosmetics/Fur'
import Muzzle from '../utils/cosmetics/Muzzle'
import Extra from '../utils/cosmetics/Extra'

export default function Menu() {
    //! REVIEW: use useSelectro from react-redux to access reducers in your store
    const character = useSelector(state => state.character);
    const dispatch = useDispatch();

    const categories = [ Eyes, Ears, Fur, Muzzle, Extra ]

    const [currentCategory, setCategory] = useState(categories[0]);

    // update the character reducer in our store given the category
    function setCosmetics(text) {
        switch (currentCategory.name) {
            case 'Eyes':
                dispatch(setEyes({ eyes: text }))
                break;
            case 'Ears':
                dispatch(setEars({ ears: text }))
                break;
            case 'Muzzle':
                dispatch(setMuzzle({ muzzle: text }))
                break;
            case 'Fur':
                dispatch(setFur({ fur: text }))
                break;
            case 'Extra': 
                dispatch(setExtra({ extra: text }))
                break;
        }
    }

    useEffect(() => {
        console.log(character)
    }, [setCosmetics])

    return (
        <>
            <h1>Select {currentCategory.name}</h1>
            <nav>
                {categories.map((category, i) => 
                    <button key={i} onClick={() => setCategory(categories[i])}>
                        {/* displays object name as string */}
                        {category.name}
                    </button>
                )}
            </nav>
            <div>
                {/* map each cosmetic to a button */}
                {currentCategory.cosmetics.map((cosmetic, i) => 
                    <button key={i} onClick={() => setCosmetics(cosmetic.file)}>{cosmetic.text}</button>
                )}
            </div>
        </>
    );
}