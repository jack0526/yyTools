// 根据某一节点id查找树并返回该节点
/**
* treeData  树结构数据
* nodeValue 要查找的节点值
* childrenProp 树结构的'children'字段
* keyProp  'nodeValue'对应的字段
* */
export function getNodeByValue (treeData, nodeValue, childrenProp, keyProp) {
  let result = null
  for (let i = 0; i < treeData.length; i++) {
    if (treeData[i][keyProp] === nodeValue) {
      result = treeData[i]
      break
    } if (treeData[i][childrenProp] && treeData[i][childrenProp].length) {
      result = getNodeByValue(treeData[i][childrenProp], nodeValue, childrenProp)
      if (result) break
    }
  }
  return result
}
