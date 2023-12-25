import { createSlice } from '@reduxjs/toolkit';

export const communitySlice=createSlice({
    name:"community",
    initialState:{
        scrollTo:0,
        listData:[],
        pageNumber:0,
        tag:"全部"
    },
    reducers:{
        Savelist:(state,action)=>{
            console.log(action)
            state.listData=action.payload.listData
            state.pageNumber=action.payload.PageNumber
            state.tag=action.payload.tag
        },
        Clearlist:(state)=>{
            state.scrollTo=0
            state.listData=[]
            state.pageNumber=0
            state.tag="全部"
        },
        SaveScroll:(state,action)=>{
            console.log(action)
            state.scrollTo=action.payload
        }
    }
})
export const{Savelist,Clearlist,SaveScroll}=communitySlice.actions
export default communitySlice.reducer