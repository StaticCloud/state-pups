import { configureStore } from '@reduxjs/toolkit';

import characterReducer from './characterReducer';
import menuReducer from './menuReducer';

const store = configureStore({
    reducer: {
        character: characterReducer,
        menu: menuReducer
    }
})

export default store;