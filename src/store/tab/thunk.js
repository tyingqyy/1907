import {updateTab} from "./actions";
import {fetchTabData} from "../../utils/api";
export const getTabData = ()=>(
    (dispatch)=>{
        fetchTabData().then(res =>{
            // console.log(res.data);
        dispatch(updateTab(res.data.data.goldenAds[0].adVOList))
        }).catch(err =>{
            console.log("err", err);
        })
    }

)