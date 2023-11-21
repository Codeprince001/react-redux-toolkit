import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {id: nanoid(), name: "Lewandowki"},
  {id: nanoid(), name: "Ronaldo"},
  {id: nanoid(), name: "MEssi"},
]

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {}
})

export const selectAllUsers = state => state.users

export default userSlice.reducer