import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
import connectionReducer from "./connectionSlice";
import requestReducer from "./requestSlice";
import Requests from "../components/Requests";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    Feed: feedReducer,
    connections : connectionReducer,
    requests : requestReducer
  },
});

export default appStore;