import { createSlice } from "@reduxjs/toolkit";

const jobSilce = createSlice({
    name:"job",
    initialState:{
        allJobs:[],
        singleJob:null
        
    },
    reducers:{
        setAllJobs:(state,action ) =>{                  
            state.allJobs = action.payload;
        },
        setSingleJob:(state,action)=>{
            state.singleJob = action.payload;
        }
    }
})
export const {setAllJobs,setSingleJob} = jobSilce.actions;
export default jobSilce.reducer;

export const selectAllJob = state=>state.job.allJobs

 