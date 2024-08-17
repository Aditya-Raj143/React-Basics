import { configureStore, createSlice, PayloadAction, } from "@reduxjs/toolkit";

interface userStateValue {
    username: string;
}

interface userState {
    value: userStateValue;
}

const initialState =  { value: { username: "" } } as userState

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state: userState, action: PayloadAction<userStateValue>) => {
            state.value = action.payload;
        },

        logout: (state) => {
            state.value =  initialState.value
        }
    }

})

// const counterSlice = createSlice({
//     name: "counter",
//     initialState:  {value: 0},
//     reducers: {
//         increase: (data, action) => {
//             data.value += action.payload
//         },

//         decrease: (data, action) => {
//             data.value += action.payload
//         },

//         reset: (data) => {
//             data.value = initialState.value
//         }
//     }
// })

export const { login, logout } = userSlice.actions;

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    },
})