function descendingOrder(n){
    let array = n.toString().split("").sort((a, b) => a - b).reverse().join("")
    return Number(array)
  }
  
  console.log(descendingOrder(1210))