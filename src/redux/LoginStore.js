import {configureStore,createSlice} from '@reduxjs/toolkit'


const initialVal = {login : false}
const Login = createSlice({
    name : 'login',
    initialState: initialVal,
    reducers:{
        login(state) {
         state.login = true;
        },
        logout(state){
            state.login = false;
        }
    }
    
})

//Action
export const createAction = Login.actions

//Reducer Function
const store = configureStore({
    reducer : Login.reducer
})

export default store