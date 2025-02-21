import { createSlice, current } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItem: (state,action)=>{
            //modifying the dstate here of cart slice
            console.log(current(state));
          state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearItem:(state)=>{
            state.items.length=0;
            //return {items:[]}
        },
    }
})

export const {addItem,removeItem,clearItem}=cartSlice.actions;
export default cartSlice.reducer;