import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  message: "",
};

// Slice Object
///////////////////////////////////////
export const formFeedbackSlice = createSlice({
  name: "formFeedback",
  initialState: initialState,
  reducers: {
    setFeedback: (state, action) => {
      state.feedback = action.payload;
    },
  },
});

// Selectors
///////////////////////////////////////
export const selectFormFeedback = (state) => state.feedback;

// Exports
///////////////////////////////////////
export const { setFeedback } = formFeedbackSlice.actions;

export default formFeedbackSlice.reducer;
