import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        //tbd
    },
    reducers: {
        setMenu: (state, action) => {
            return {
                ...state
            }
        }
    }

})

export const { setMenu } = menuSlice.actions;
export default menuSlice.reducer;