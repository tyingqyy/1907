/*
 * @描述: 请求接口数据的
 * @创建者: 张莹
 * @Date: 2020-04-27 21:04:04
 * @修改者: 张莹
 * @LastEditTime: 2020-04-28 09:37:31
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import {get} from "./request";
export const fetchTabData = async () =>{
    return  await get("/maoyansh/myshow/ajax/ad/detail?uuid=ijsudgml7jm4f4tqji03s9l8vfnyv2zzvxivmuppqn5xjfowdtxn3b9xzmcua85f&clientType=1&os=1&sellChannel=13&cityId=1&lng=-95.7129&lat=37.0902&token=HIQ_gLDeDvR9cO9h8Anj3-e6S58AAAAAxwkAAOv_wA7cmj-fgBjotXhZ6FtTxXxmn5xN71AsdJ0r6rnY-YroD-dMlcS9PM3lRc4SRA",{

    })
}

export const fetchCelebrity = async () =>{
    return  await get("/maoyansh/myshow/ajax/celebrityBasicList/query?uuid=ijsudgml7jm4f4tqji03s9l8vfnyv2zzvxivmuppqn5xjfowdtxn3b9xzmcua85f&clientType=1&os=1&sellChannel=13&cityId=1&lng=-95.7129&lat=37.0902&token=HIQ_gLDeDvR9cO9h8Anj3-e6S58AAAAAxwkAAOv_wA7cmj-fgBjotXhZ6FtTxXxmn5xN71AsdJ0r6rnY-YroD-dMlcS9PM3lRc4SRA",{

    })
}