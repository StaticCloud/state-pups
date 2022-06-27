import React, { useState, useEffect } from 'react';
import './CSS/Menu.css'

import Eyes from '../utils/cosmetics/Eyes'
import Ears from '../utils/cosmetics/Ears'
import Fur from '../utils/cosmetics/Fur'
import Muzzle from '../utils/cosmetics/Muzzle'
import Extra from '../utils/cosmetics/Extra'

export default function Menu() {

    const categories = [ Eyes, Ears, Fur, Muzzle, Extra ]

    const [category, setCategory] = useState(Object.keys(categories[0])[0]);

    return (
        <>
            <nav>
                {categories.map((category, i) => 
                    <button key={i} onClick={() => setCategory(Object.keys(category)[0])}>
                        {/* displays object name as string */}
                        {Object.keys(category)}
                    </button>
                )}
            </nav>
            <div>
                {/* {categories[category].options.map((option, i) => 
                    <button key={i}>{option}</button>
                )} */}
            </div>
        </>
    );
}