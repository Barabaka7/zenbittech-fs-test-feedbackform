import { configureStore } from "@reduxjs/toolkit";
import formFeedbackReducer from "../features/form/formSlice";

export const store = configureStore({
  reducer: {
    feedback: formFeedbackReducer,
  },
});
