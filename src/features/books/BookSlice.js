import { createSlice } from "@reduxjs/toolkit/dist/createSlice"
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
    }
})

export const {showBooks} = bookSlice.actions;
export default bookSlice.reducer;
