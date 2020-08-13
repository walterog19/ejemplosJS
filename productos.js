var products = [
  { id: 1, name: "Leche", price: 120, categories: ["familiar", "comida"] },
  { id: 2, name: "Arroz", price: 80, categories: ["familiar", "comida"] },
  { id: 3, name: "Lavadora", price: 7800, categories: ["electrodomésticos"] }
];


for (var i=0; i < products.length; i++) {
    var product = products[i];
    console.log(product.name);
    console.log("  Id: " + product.id);
    console.log("  Precio: " + product.price);
    console.log("  Categorías: " + product.categories.join(", "));
  }

  recipe = {
    "leche en polvo": "1 litro",
    "chocolate en barra": "3 barras",
    azúcar: "30 gramos",
  }
  
  for (var key in recipe) {
    if (recipe.hasOwnProperty(key)) {
      console.log("Agrega " + recipe[key] + " de " + key);
    }
  }


  recipe = {
    "leche en polvo": "1 litro",
    "chocolate en barra": "3 barras",
    azúcar: "30 gramos",
  }
  
  recipe.mixIngredients = function() {
    return "Mezclando los ingredientes ..."
  }
  
  console.log(recipe.mixIngredients());
  
 