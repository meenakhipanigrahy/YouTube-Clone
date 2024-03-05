import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "../features/sidebar/sidebarSlice";

const store = configureStore({
    reducer: {
        sidebar: sidebarSlice,
    }
});

export default store;