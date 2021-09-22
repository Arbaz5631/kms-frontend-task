import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
//initial state of the whole app.
const initialKmsState = {
    email: "",
    password: "",
    isLoggedIn: false
}

const reducerState = createSlice({
    name: "kmsStore",
    initialState: initialKmsState,
    reducers: {
        email(state, action) {
            state.email = action.payload
        },
        password(state, action) {
            state.password = action.payload
        },
        isLoggedIn(state, action) {
            state.isLoggedIn = action.payload
        },
    }
})

// const store = configureStore({ reducer: reducerState })
const store = configureStore({
    reducer: {
        kmsStore: reducerState.reducer
    }
  })
export const KmsAction=reducerState.actions;
// export RootState = store.getState
export default store;