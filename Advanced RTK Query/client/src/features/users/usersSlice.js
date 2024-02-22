import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState =[
    {id: "1", name:"Leah"},
    {id: "2", name:"Leah2"},
    {id: "3", name:"Leah3"},
    {id: "4", name:"Leah4"},
    {id: "5", name:"Leah5"},
]
const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers:{
        addUser:{
            reducer(state, action){
                state.push(action.payload)
            },
            prepare(name){
                return{
                    payload: {
                        id: nanoid(),
                        name
                    }
                }
            }
        }
    }

})
export const selectAllUsers =(state)=> state.action;
