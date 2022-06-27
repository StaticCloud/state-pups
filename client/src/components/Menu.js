import React, { useState, useEffect } from 'react';
import './CSS/Menu.css'

import Eyes from '../utils/cosmetics/Eyes'
import Ears from '../utils/cosmetics/Ears'
import Fur from '../utils/cosmetics/Fur'
import Muzzle from '../utils/cosmetics/Muzzle'
import Extra from '../utils/cosmetics/Extra'

export default function Menu() {

    const categories = [ Eyes, Ears, Fur, Muzzle, Extra ]

    const [currentCategory, setCategory] = useState(categories[0]);

    return (
        <>
            <nav>
                {categories.map((category, i) => 
                    <button key={i} onClick={() => setCategory(categories[i])}>
                        {/* displays object name as string */}
                        {i}
                    </button>
                )}
            </nav>
            <div>
                {/* map each cosmetic to a button */}
                {currentCategory.map((cosmetic, i) => 
                    <button key={i}>{cosmetic.text}</button>
                )}
            </div>
        </>
    );
}