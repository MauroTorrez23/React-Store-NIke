import { ConfigureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice.js";

const Store = ConfigureStore({
    reducer: {
        cart: CartSlice,
    }
});

export default Store;