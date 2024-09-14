const myNums = [1, 2, 3]  // current value = 1
/*
const myTotal = myNums.reduce( function (acc, currval){
    console.log(`acc: ${acc} and carrval: ${currval}`);
    return acc + currval
}, 0) // accumulator value = 0 

console.log(myTotal);
*/
const myTotal = myNums.reduce( (acc, curr) => (acc+curr), 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999,
    }
    {
        itemName: "data science",
        price: 12999,
    }
    {
        itemName: "mobile dev",
        price: 5999,
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);