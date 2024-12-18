import { createSlice } from "@reduxjs/toolkit";

const datas = [
  {
    value: 1,
    chartDesc: "Completely away",
  },
  {
    value: 2,
    chartDesc: "Need to improve a lot",
  },
  {
    value: 3,
    chartDesc: "Need to improve",
  },
  {
    value: 4,
    chartDesc: "Good",
  },
  {
    value: 5,
    chartDesc: "Very good",
  },
  {
    value: 6,
    chartDesc: "Spectacular",
  },
  {
    value: 7,
    chartDesc: "Impactful",
  },
];

export const FeedBackSlice = createSlice({
  name: "feedback",
  initialState: datas,
  reducers: {
    removeFeedBackType(state, action) {
      const DeleteIndex = action.payload;
      return state.filter((element, index) => index !== DeleteIndex);
    },
  },
});

export const { removeFeedBackType } = FeedBackSlice.actions;
export const feedBackReducer = FeedBackSlice.reducer;
