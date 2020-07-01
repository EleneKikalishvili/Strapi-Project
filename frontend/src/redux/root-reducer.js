import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import dropdownReducer from "./dropdown/dropdown.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["dropdown"],
};

const rootReducer = combineReducers({
  dropdown: dropdownReducer,
});

export default persistReducer(persistConfig, rootReducer);
