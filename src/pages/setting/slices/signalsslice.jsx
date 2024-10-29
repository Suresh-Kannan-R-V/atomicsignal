import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const HeadDatas = [
  { HeadLabel: "S.No", LabelAlign: "left" },
  { HeadLabel: "Signal name", LabelAlign: "left" },
  { HeadLabel: "Created on", LabelAlign: "left" },
  { HeadLabel: "Modified on", LabelAlign: "left" },
  { HeadLabel: "Status", LabelAlign: "left" },
  { HeadLabel: "Action", LabelAlign: "center" },
];

export const signalsSliceBody = createSlice({
  name: "signalsbody",
  initialState,
  reducers: {
    addSignalBody(state, action) {
      state.push(action.payload);
    },
  },
});

export const signalsSliceHead = createSlice({
  name: "signalshead",
  initialState: HeadDatas,
  reducer: {
    addSignalHead(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addSignalBody } = signalsSliceBody.actions;
export const { addSignalHead } = signalsSliceHead.actions;
export const signalsbodyReducer = signalsSliceBody.reducer;

export const signalsheadReducer = signalsSliceHead.reducer;
