import {updateCelebrity} from "./actions";
import {fetchCelebrity} from "../../utils/api";
export const getCelebrityData = ()=>(
    (dispatch)=>{
        fetchCelebrity().then(res =>{
            console.log(res.data.data);
        dispatch(updateCelebrity(res.data.data))
        }).catch(err =>{
            console.log("err", err);
        })
    }

)