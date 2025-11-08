import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: 'guest',
        name: 'Guest',
        savedIds: [],
    },
    reducers: {
        saveRecipe(state, action) {
            const id = action.payload
            if (!state.savedIds.includes(id)) state.savedIds.push(id)
        },
        unsaveRecipe(state, action) {
            const id = action.payload
            state.savedIds = state.savedIds.filter((x) => x !== id)
        },
    },
})


export const { saveRecipe, unsaveRecipe } = userSlice.actions
export default userSlice.reducer