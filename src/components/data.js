function extractData(setTheState) {
    let item={};
    for(let i = 0 ; i < localStorage.length ; ++i) {
        item[localStorage.key(i)]=localStorage.getItem(localStorage.key(i));
      }
      return item
}

export {extractData}