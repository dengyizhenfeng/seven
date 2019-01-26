// 处理联动数据
export function deep(targetObj, fullData) {
    if (targetObj.orgParentId === 0) {
      fullData.children.push(targetObj);
      return;
    }
    if (fullData.children === undefined) {
      fullData.children = [];
    }
    if (targetObj.orgParentId === fullData.orgId) {
      fullData.children.push(targetObj);
      return;
    }
  
    fullData.children.forEach(item => {
      deep(targetObj, item);
    });
    console.log(1)
  }