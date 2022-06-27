import { configureStore } from '@reduxjs/toolkit';

import characterReducer from '../state/characterReducer';
import menuReducer from '../state/menuReducer';

const store = configureStore({
    reducer: {
        character: characterReducer,
        menu: menuReducer
    }
})

export default store;