/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/




const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];



function getUniqueProductCount(arr){
    var Unique_Count={};
    for(let i=0;i<arr.length;i++){
            if(Unique_Count[arr[i]["productName"]]) 
            {
        Unique_Count[arr[i]["productName"]]+=1
        }
        else Unique_Count[arr[i]["productName"]]=1
    }
    return Unique_Count
    }
    
    // console.log(getUniqueProductCount(listOfProducts))   => output: { TV: 2, AC: 2, FAN: 1 }





function getUniquePrducts(arr){
    var Unique_Products={};
    for(let i=0;i<arr.length;i++){
        if(Unique_Products[arr[i]["productName"]]){
            Unique_Products[arr[i]["productName"]].quantity+=arr[i].quantity
        }
        else Unique_Products[arr[i]["productName"]]=arr[i]
    }
    let result= Object.values(Unique_Products)
    return result
}
// console.log(getUniquePrducts(listOfProducts)); =>output: [ { productName: 'TV', quantity: 20, description: 'television' },      { productName: 'AC', quantity: 10, description: 'air conditioner' }, { productName: 'FAN', quantity: 10, description: 'Ceiling Fan' }]