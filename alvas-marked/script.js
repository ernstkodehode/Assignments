// Alvas Marked - array methods

const products = [
  { name: "Smartphone", price: 800, category: "electronics" },
  { name: "Headphones", price: 150, category: "electronics" },
  { name: "Coffee Maker", price: 100, category: "home appliances" },
  { name: "Blender", price: 250, category: "home appliances" },
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "T-shirt", price: 50, category: "clothing" },
  { name: "Sneakers", price: 300, category: "clothing" },
];

// 1. products cheaper than 200
const cheapProducts = products.filter((product) => product.price < 200)


// 2. only the product names
const productNames = products.map((product) => product.name)


 // 3. names of electronics products only
const electronicsNames = products
  // keep only electronics
  .filter((product) => product.category === "electronics")
  // just write the names
  .map((product) => product.name)


 // 4. true if any product costs 1000 or more
const hasExpensiveProduct = products.some((product) => product.price >= 1000)


// 5. total cost of all products
const totalCost = products.reduce(
  (sum, product) => sum + product.price, 0
)


console.log(cheapProducts);
console.log(productNames);
console.log(electronicsNames);
console.log(hasExpensiveProduct);
console.log(totalCost);
