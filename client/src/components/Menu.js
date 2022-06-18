import React, { useState } from 'react';
import './CSS/Menu.css'

export default function Menu() {

    const [category, setCategory] = useState(0);

    const categories = [
        {
            name: 'Eyes',
            options: [1]
        },
        {
            name: 'Mouth',
            options: [1,2]
        },
        {
            name: 'Hat',
            options: [1,2,3]
        },
        {
            name: 'Nose',
            options: [1,2,3,4]
        },
        {
            name: 'Extra',
            options: [1,2,3,4,5]
        },
    ];

    return (
        <>
            <nav>
                {categories.map(({ name }, i) => 
                    <button key={i} onClick={() => setCategory(i)}>
                        {name}
                    </button>
                )}
            </nav>
            <div>
                {categories[category].options.map((option) => 
                    <button>{option}</button>
                )}
            </div>
        </>
    );
}