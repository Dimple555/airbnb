import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home"
import entireReducer from "./modules/entire"
import detailReducer from "./modules/detail"
import mainReduce from "./modules/main"


const store = configureStore({
  reducer:{
    main:mainReduce,
    home:homeReducer,
    entire:entireReducer,
    detail:detailReducer
  }
})

export default store