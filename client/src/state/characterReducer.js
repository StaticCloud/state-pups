import { createSlice } from '@reduxjs/toolkit';

const characterSlice = createSlice({
    name: 'character',
    initialState: {
        fur: 0,
        eyes: 0,
        ears: 0,
        muzzle: 0,
        extra: 0,
        background: 0
    },
    reducers: {
        setFur: (state, action) => {
            return {
                ...state,
                fur: action.payload.fur
            }
        },
        setEyes: (state, action) => {
            return {
                ...state,
                eyes: action.payload.eyes
            }
        },
        setEars: (state, action) => {
            return {
                ...state,
                ears: action.payload.ears
            }
        },
        setMuzzle: (state, action) => {
            return {
                ...state,
                muzzle: action.payload.muzzle
            }
        },
        setExtra: (state, action) => {
            return {
                ...state,
                extra: action.payload.extra
            }
        },
        setBackground: (state, action) => {
            return {
                ...state,
                background: action.payload.background
            }
        }
    }
})

export const { setFur, setEyes, setEars, setMuzzle, setExtra, setBackground } = characterSlice.actions;
export default characterSlice.reducer;