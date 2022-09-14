
export const Bill=(arr)=>{

let amount=0
let total=0
let count=0

arr.forEach(e => {
    count++
    amount+= e.product_id.price*e.count
    total+= e.product_id.discount*e.count
});

return {count,total,discount:amount-total,amount}
 
}