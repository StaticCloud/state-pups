import { createSlice } from '@reduxjs/toolkit';

const characterSlice = createSlice({
    name: 'character',
    initialState: {
        fur: 0,
        eyes: 0,
        ears: 0,
        muzzle: 0,
        extra: 0
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
        }
    }
})

export const { setFur, setEyes, setEars, setMuzzle, setExtra } = characterSlice.actions;
export default characterSlice.reducer;