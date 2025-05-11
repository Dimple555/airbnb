import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeLongforData, getHomePlusData, getHomeRecommendData } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchdata",
  (payload,store) => {
    // 把每个请求的url做进一步封装
    getHomeGoodPriceData().then(res => {
      store.dispatch(changeGoodPriceInfoAction(res))
    })

    getHomeHighScoreData().then(res => {
      store.dispatch(changeHighScoreInfoAction(res))
    })

    getHomeDiscountData().then(res => {
      store.dispatch(changeDiscountInfoAction(res))
    })

    getHomeRecommendData().then(res => {
      store.dispatch(changeRecommendInfoAction(res))
    })

    getHomeLongforData().then(res => {
      store.dispatch(changeLongForInfoAction(res))
    })

    getHomePlusData().then(res => {
      store.dispatch(changePlusInfoAction(res))
    })
  }
)

const homeSlice = createSlice({
  name:"home",
  initialState:{
    goodPriceInfo:{},
    highScoreInfo:{},
    discountInfo:{},
    recommendInfo:{},
    longForInfo:{},
    plusInfo:{}
  },
  reducers:{
    changeGoodPriceInfoAction(state,action){
      state.goodPriceInfo = action.payload
    },
    changeHighScoreInfoAction(state,action) {
      state.highScoreInfo = action.payload
    },
    changeDiscountInfoAction(state,action) {
      state.discountInfo  = action.payload
    },
    changeRecommendInfoAction(state,action) {
      state.recommendInfo = action.payload
    },
    changeLongForInfoAction(state,action) {
      state.longForInfo = action.payload
    },
    changePlusInfoAction(state,action) {
      state.plusInfo = action.payload
    }
  },
  /* extraReducers:{
    [fetchHomeDataAction.fulfilled](state,{payload}) {
      state.goodPriceInfo = payload
    }
  } */
  // 将从异步获取到的数据存储到state中
  /* extraReducers:(builder) => {
    builder
      .addCase(fetchHomeDataAction.fulfilled,(state,action) => {
        state.goodPriceInfo = action.payload
      })
  } */
})

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction, 
  changeRecommendInfoAction,
  changeLongForInfoAction,
  changePlusInfoAction
} = homeSlice.actions
export default homeSlice.reducer
