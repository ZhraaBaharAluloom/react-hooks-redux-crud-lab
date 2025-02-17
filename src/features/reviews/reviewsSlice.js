import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const reviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    entities: [],
  },
  reducers: {
    reviewAdded(state, action) {
      state.entities.push({ id: uuid(), ...action.payload });
    },
    reviewRemoved(state, action) {
      return {
        ...state,
        entities: state.entities.filter(
          (review) => review.id !== action.payload
        ),
      };
    },
  },
});

export const { reviewAdded, reviewRemoved } = reviewsSlice.actions;
export default reviewsSlice.reducer;
