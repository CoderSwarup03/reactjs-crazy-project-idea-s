import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const mockFetchRecipes = () =>
    new Promise((res) =>
        setTimeout(
            () =>
                res([
                    {
                        id: 1,
                        title: 'Lutchi-Paneer',
                        image: 'https://i.ytimg.com/vi/53J5KYwLREY/maxresdefault.jpg',
                        ingredients: ['Luchi', 'Paneer', 'Oil'],
                        steps: ['Prepare luchi', 'Fry paneer', 'Serve hot'],
                        rating: 4,
                        ratingsCount: 3,
                        isSaved: false,
                    },
                ]),
            600
        )
    )

export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async () => {
    const data = await mockFetchRecipes()
    return data
})


const recipesSlice = createSlice({
    name: 'recipes',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        addRecipe(state, action) {
            state.items.unshift({
                id: Date.now(),
                rating: 0,
                ratingsCount: 0,
                isSaved: false,
                ...action.payload,
            })
        },
        editRecipe(state, action) {
            const { id, changes } = action.payload
            const idx = state.items.findIndex((r) => r.id === id)
            if (idx >= 0) state.items[idx] = { ...state.items[idx], ...changes }
        },
        deleteRecipe(state, action) {
            state.items = state.items.filter((r) => r.id !== action.payload)
        },
        toggleSave(state, action) {
            const id = action.payload
            const r = state.items.find((x) => x.id === id)
            if (r) r.isSaved = !r.isSaved
        },
        rateRecipe(state, action) {
            const { id, rating } = action.payload // rating: 1-5
            const r = state.items.find((x) => x.id === id)
            if (!r) return
            // simple average update
            const total = (r.rating || 0) * (r.ratingsCount || 0)
            r.ratingsCount = (r.ratingsCount || 0) + 1
            r.rating = (total + rating) / r.ratingsCount
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipes.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchRecipes.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.items = action.payload
            })
            .addCase(fetchRecipes.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    },
})


export const { addRecipe, editRecipe, deleteRecipe, toggleSave, rateRecipe } = recipesSlice.actions
export default recipesSlice.reducer