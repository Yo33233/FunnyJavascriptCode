let arr=["浙江省/宁波市/海曙区/学校1","浙江省/宁波市/海曙区/学校2","甘肃省/武威市/凉州区/食堂1","甘肃省/武威市/城关区/食堂1"]
arr=arr.map(r=>r.split('/'))
function distinct(data){
    return [...new Set(data)]
}
// 初始i=0
function filter(data,i,threshhold){
    if(i==threshhold) return null
    let result=distinct(data.map(r=>r[i])).map(r=>{
      let item={
        name:r,
        level:i+1
      }
    //需要对data数组进行处理
      let filtered=data.filter((item)=>(item[i]==r))
    //r:"浙江省"   data:["浙江省/宁波市/海曙区/学校1","浙江省/宁波市/海曙区/学校2"]
      let children=filter(filtered,i+1,threshhold)
      if(children){item.children=children}
      return item
    })
    return result;
    // [{name:'浙江省',level:1,children:[]},{name:"甘肃省",level:1,children:[]}]
}
console.log(filter(arr,0,4))