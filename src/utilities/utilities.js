

const getStoredReadList =()=>{
  const storedListStr= localStorage.getItem("read-list");
  if(storedListStr){
    const storedList=JSON.parse(storedListStr);
    return storedList
  }else{
      return []
  }
}

const addToStoredReadList =(id)=>{
     const storedList = getStoredReadList(id);
     if(storedList.includes(id)){
         console.log("data already exits")
     }else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem("read-list", storedListStr)
     }
}

// for wish list
const getStoredWishList =()=>{
    const storedListStr= localStorage.getItem("wish-list");
    if(storedListStr){
      const storedList=JSON.parse(storedListStr);
      return storedList
    }else{
        return []
    }
  }
  
  const addToStoredWishList =(id)=>{
       const storedList = getStoredWishList(id);
       if(storedList.includes(id)){
           console.log("data already exits")
       }else{
          storedList.push(id)
          const storedListStr = JSON.stringify(storedList);
          localStorage.setItem("wish-list", storedListStr)
       }
  }

export {addToStoredReadList,addToStoredWishList}