import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        character: characterReducer,
        menu: menuReducer
    }
})

export default store;