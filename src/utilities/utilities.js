
const getStoredReadList =()=>{
  const storedListStr= localStorage.getItem("read-list");
  if(storedListStr){
    const storedList= JSON.parse(storedListStr);
    return storedList
  }else{
      return []
  }
}

//to add
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



  // for delete
const deleteFormLs =(id,idx)=>{
  const readList = getStoredReadList();
  // Remove the item with value  from the array
  const storedReadList = readList.filter(item => Number(item) !== id);
  
  // Update the local storage with the modified array
  localStorage.setItem('read-list', JSON.stringify(storedReadList));
  
  
  // for wishlist
  const wishList = getStoredWishList();
  // Remove the item with value  from the array
  const storedwishList = wishList.filter(item => Number(item) !==idx);
  
  // Update the local storage with the modified array
  localStorage.setItem('wish-list', JSON.stringify(storedwishList));
  }
  

export {addToStoredReadList,addToStoredWishList,getStoredReadList,getStoredWishList,deleteFormLs}