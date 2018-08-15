var numArray = [1, 3, 5, 7, 9];

var objArray = [
  { product: 'tennis ball', price: 3 },
  { product: 'baseball', price: 5 },
  { product: 'basketball', price: 10 },
  { product: 'volleyball', price: 15 },
  { product: 'football', price: 20 },
]


// Write a FOR loop that:
  // iterates through numArray
  // console.logs current value

for (var i = 0; i < numArray.length; i++) {
  console.log(numArray[i])
}

// Write a FOR loop that:
  // iterates through numArray
  // console.logs current value multiplied by 3
  for (var i = 0; i < numArray.length; i++) {
    console.log(numArray[i] * 3)
  }


// Write a FOR loop that:
  // iterates through objArray
  // console.logs product name

  for (var i = 0; i < objArray.length; i++) {
    console.log(objArray[i])
  }

// Write a FOR loop that:
  // iterates through objArray
  // construct a sentence: console.log product name followed by its price
  // SAMPLE: "football costs 20 dollars"

for (var i = 0; i < objArray.length; i++) {
    obj = objArray[i]
    product = obj['product']
    price = obj['price']
    console.log(`${product} costs ${price} dollars`)
  }

// Write a FOR loop that:
  // iterates through objArray
  // only console.logs product names of products that have a price greater than 10

for (var i = 0; i < objArray.length; i++) {
  obj = objArray[i]
  product = obj['product']
  price = obj['price']
  if (price > 10){
    console.log(`${product} costs ${price} dollars`)
  }
}

// Write a FOR loop that:
  // iterates BACKWARDS through numArray
  // console.logs current value

for (var i = numArray.length - 1; i >= 0; i--){
  console.log(numArray[i])
}