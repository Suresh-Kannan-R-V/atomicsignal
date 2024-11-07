import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: 1,
    signal: "Communication",
    day: "08 Feb 2023",
    time: "04:40 PM",
    status: 1,
  },
  {
    id: 2,
    signal: "Efficiency",
    day: "08 Feb 2023",
    time: "04:40 PM",
    status: 1,
  },
  {
    id: 3,
    signal: "Time Management",
    day: "08 Feb 2023",
    time: "04:40 PM",
    status: 1,
  },
  {
    id: 4,
    signal: "Attitude",
    day: "08 Feb 2023",
    time: "04:40 PM",
    status: 1,
  },
  {
    id: 5,
    signal: "Unavailable",
    day: "08 Feb 2023",
    time: "04:40 PM",
    status: 1,
  },
];
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
