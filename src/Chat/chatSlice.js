import { createSlice } from '@reduxjs/toolkit'

export const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        countOfMessages: 0,
        lastmMssageText: "",
        messagesArray: [],
        status: false,
    },
    reducers: {

        addMessage: (state, action) => {
            state.messagesArray.push(action.payload)
        },

        checkbox: (state, action) => {
            state.status = action.payload
        },
    }
})

export const { addMessage, checkbox } = chatSlice.actions

export default chatSlice.reducer