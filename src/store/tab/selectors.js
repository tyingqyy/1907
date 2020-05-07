/*
 * @描述: 
 * @创建者: 张莹
 * @Date: 2020-05-05 13:19:15
 * @修改者: 张莹
 * @LastEditTime: 2020-05-05 13:19:16
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
export  const getTabList = (state)=>{
    const result = state.tabList.result ;
    const tabList = result.map(v=>{
        const positionName =  v.materialVOList.find(v1=>v1.key==="positionName");
        const mainImg =  v.materialVOList.find(v1=>v1.key==="mainImg");
        return {
            positionName:positionName.value,
            mainImg:mainImg.value
        }
    });
    return tabList;
}
