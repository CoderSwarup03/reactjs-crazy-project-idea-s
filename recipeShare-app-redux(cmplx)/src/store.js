import { configureStore } from '@reduxjs/toolkit'
import recipesReducer from './features/recipes/recipesSlice'
import userReducer from './features/user/userSlice'


const store = configureStore({
    reducer: {
        recipes: recipesReducer,
        user: userReducer,
    },
})


export default store 