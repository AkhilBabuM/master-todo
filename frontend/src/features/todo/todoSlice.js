import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  todos:[],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

const todoSlice = createSlice({
  name:'todo',
  initialState,
  reducers:{
    reset: (state)=>initialState
  }
})

export const {reset} = todoSlice.actions;
export default todoSlice.reducer