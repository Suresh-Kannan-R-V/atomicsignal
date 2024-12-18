import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: 1,
    signal: "Communication",
    cday: "08 Feb 2023",
    ctime: "04:40 PM",
    mday: "08 Feb 2023",
    mtime: "04:40 PM",
    status: true,
    active: false,
    dialog: false,
  },
  {
    id: 2,
    signal: "Efficiency",
    cday: "08 Feb 2023",
    ctime: "04:40 PM",
    mday: "08 Feb 2023",
    mtime: "04:40 PM",
    status: true,
    active: false,
    dialog: false,
  },
  {
    id: 3,
    signal: "Time Management",
    cday: "08 Feb 2023",
    ctime: "04:40 PM",
    mday: "08 Feb 2023",
    mtime: "04:40 PM",
    status: true,
    active: false,
    dialog: false,
  },
  {
    id: 4,
    signal: "Attitude",
    cday: "08 Feb 2023",
    ctime: "04:40 PM",
    mday: "08 Feb 2023",
    mtime: "04:40 PM",
    status: true,
    active: false,
    dialog: false,
  },
  {
    id: 5,
    signal: "Unavailable",
    cday: "08 Feb 2023",
    ctime: "04:40 PM",
    mday: "08 Feb 2023",
    mtime: "04:40 PM",
    status: true,
    active: false,
    dialog: false,
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
const DialogBox = {
  openDeactive: false,
  checked: false,
};

export const signalsSliceBody = createSlice({
  name: "signalsbody",
  initialState,
  reducers: {
    addSignalBody(state, action) {
      state.push(action.payload);
    },
    replaceSignalBody(state, action) {
      const { oldItem, newItem, day, time } = action.payload;
      console.log(state);
      return state.map((item) =>
        item.signal === oldItem
          ? { ...item, signal: newItem, mday: day, mtime: time }
          : item
      );
    },
    handleActiveButton(state, action) {
      const { oldItem, status, active, dialog } = action.payload;
      // console.log(state[4].id)
      if (dialog) {
        return state.map((item, index) =>
          item.id === oldItem
            ? { ...item, active: active, dialog: dialog }
            : item
        );
      } else {
        return state.map((item, index) =>
          item.id === oldItem
            ? { ...item, status: status, active: active }
            : item
        );
      }
    },

    handleDeactiveBox(state, action) {
      const { status, index, dialog } = action.payload;
      if (status === true) {
        return state.map((item) =>
          item.id === index ? { ...item, status: false, dialog: dialog } : item
        );
      } else if (status === false) {
        return state.map((item) =>
          item.id === index ? { ...item, status: true, dialog: dialog } : item
        );
      }
    },
  },
});

export const signalsSliceHead = createSlice({
  name: "signalshead",
  initialState: HeadDatas,
  reducers: {
    addSignalHead(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addSignalBody } = signalsSliceBody.actions;
export const { replaceSignalBody, handleActiveButton, handleDeactiveBox } =
  signalsSliceBody.actions;

export const { addSignalHead } = signalsSliceHead.actions;
export const signalsbodyReducer = signalsSliceBody.reducer;

export const signalsheadReducer = signalsSliceHead.reducer;
