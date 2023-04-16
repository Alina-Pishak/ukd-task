const fs = require('fs');


const file = 'shopping-list.csv';

// Додавання продукту у список
function Add(product) {
  fs.appendFileSync(file, `${product.id},${product.name},${product.price}\n`);
  console.log(`${product.name} has been added to our list`);
}


// Отримання продукту за його унікальним ідентифікатором
  function Get(id) {
    const FileData = fs.readFileSync(file, 'utf8');
    const Products = FileData.split('\n');
    for (const Product of Products) {
      const [ProdId, name, price] = Product.split(',');
      if (ProdId === id) {
        return { id: ProdId, name, price };
      } 
    }
    return null;
  }


// Функція для видалення продукту зі списку за його унікальним ідентифікатором
function Delete(id) {
  const FileData = fs.readFileSync(file, 'utf8');
  const Products = FileData.split('\n');
  let UpdatedProducts = '';
  for (const Product of Products) {
    const [ProdId] = Product.split(',');
    if (ProdId !== id) {
      UpdatedProducts += `${Product}\n`;
    }
  }
  fs.writeFileSync(file, UpdatedProducts);
  console.log("Deleted ")
}

// Функція для зміни продукту за його унікальним ідентифікатором
function Update(id, updatedProduct) {
  const FileData = fs.readFileSync(file, 'utf8');
  const Products = FileData.split('\n');
  let UpdatedProd = '';
  for (const Product of Products) {
    const [ProdId] = Product.split(',');
    if (ProdId === id) {
      UpdatedProd += `${updatedProduct.id},${updatedProduct.name},${updatedProduct.price}\n`;
    } else {
      UpdatedProd += `${Product}\n`;
    }
  }
  fs.writeFileSync(file, UpdatedProd);
  console.log(` ${updatedProduct.name} the Batboy is in the list`)
}


Add({id:"Id:1", name:"Product: Bread", price:"Price: 24"})
Update("Id:1", {id:"Id:1",name:"Product: Dress", price: "Price: 5000"})
Add({id:"Id:2", name:"Product: Meat", price:"Price: 200"})
Add({id:"Id:3", name:"Product: Salat", price:"Price: 255"})
Delete("Id:1")
console.log(Get("Id:3"))

