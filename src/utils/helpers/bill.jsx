
export const Bill=(arr)=>{

let amount=0
let total=0
let count=0

arr.forEach(e => {
    count++
    amount+= e.product_id.price
    total+= e.product_id.discount
});

return {count,total,discount:amount-total}
 
}