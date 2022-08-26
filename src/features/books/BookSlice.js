import { createSlice } from "@reduxjs/toolkit";
const initialStateObj  = {
    books : [
        {id:1,title:"A Golden Age", author:"Tahmima Anam",publication:"Goodreads publication"},
        {id:2,title:"The Newlyweds",author:"Nell Freudenberger",publication:"Batir Alo prokashony"},
    ]
}
const bookSlice = createSlice({
    name:'bdbooks',
    initialState:initialStateObj,
    reducers:{
        showBooks:(state) =>state,
        addBooks:(state,action)=>{
            state.books.push(action.payload)
        },
        deleteBooks:(state,action)=>{
            // state.books - action.payload
        }
    }
})

export const {showBooks,addBooks} = bookSlice.actions;
export default bookSlice.reducer;
