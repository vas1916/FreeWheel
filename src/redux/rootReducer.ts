import { combineReducers } from "redux";


import servicesReducer from './Services/reducer'
import searchReducer from './Search/reducer'

const rootReducer = combineReducers({
  services: servicesReducer,
  search: searchReducer
});

export default rootReducer;
