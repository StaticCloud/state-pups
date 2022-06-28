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

    const categories = [ Eyes, Ears, Fur, Muzzle, Extra ]

    const [currentCategory, setCategory] = useState(categories[0]);

    return (
        <>
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
                    <button key={i}>{cosmetic.text}</button>
                )}
            </div>
        </>
    );
}