import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const HeadDatas = [
  {
    HeadLabel: "S.No",
    LabelAlign: "left",
    Position: "realtive",
    Right: "none",
    zindex: "0",
  },
  {
    HeadLabel: "Signal name",
    LabelAlign: "left",
    Position: "relative",
    Right: "none",
    zindex: "0",
  },
  {
    HeadLabel: "Created on",
    LabelAlign: "left",
    Position: "relative",
    Right: "none",
    zindex: "0",
  },
  {
    HeadLabel: "Modified on",
    LabelAlign: "left",
    Position: "relative",
    Right: "none",
    zindex: "0",
  },
  {
    HeadLabel: "Status",
    LabelAlign: "left",
    Position: "relative",
    Right: "none",
    zindex: "0",
  },
  {
    HeadLabel: "Action",
    LabelAlign: "center",
    Position: "sticky",
    Right: 0,
    zindex: 1,
  },
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
