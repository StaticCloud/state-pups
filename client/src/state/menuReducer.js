import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        currentMenu: 'N/A'
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