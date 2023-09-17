// Define a class for a simple online store product
class Product {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  }
  
  // Initialize an array to store products
  const products = [];
  
  // Function to add a new product to the store
  function addProduct(name, price, quantity) {
    try {
      // Check input validity using a switch statement
      switch (true) {
        case typeof name !== 'string':
          throw new Error('Invalid name. Please provide a valid product name.');
        case typeof price !== 'number':
          throw new Error('Invalid price. Please provide a valid numeric price.');
        case typeof quantity !== 'number':
          throw new Error('Invalid quantity. Please provide a valid numeric quantity.');
        default:
          // If all inputs are valid, create a product object
          const product = new Product(name, price, quantity);
          products.push(product);
          updateProductList(); // Update the displayed products
      }
    } catch (error) {
      // Handle exceptions using try-catch
      console.error(error.message);
    } finally {
      // Add any necessary cleanup or finalization code here using finally
      clearInputFields(); // Call a function to clear input fields
    }
  }
  
  // Function to clear input fields
  function clearInputFields() {
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productQuantity').value = '';
  }
  
  // Function to display the available products
  function updateProductList() {
    const productDisplay = document.getElementById("productDisplay");
    productDisplay.innerHTML = ''; // Clear the existing list
  
    for (const product of products) {
      const listItem = document.createElement("li");
      listItem.textContent = `${product.name}: $${product.price} (Quantity: ${product.quantity})`;
      productDisplay.appendChild(listItem);
    }
  }
  
  // Function to handle form submission
  document.getElementById('addProductForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    const productName = document.getElementById('productName').value;
    const productPrice = parseFloat(document.getElementById('productPrice').value);
    const productQuantity = parseFloat(document.getElementById('productQuantity').value);
  
    addProduct(productName, productPrice, productQuantity);
  });
  
  // Simulate user interactions
  simulateUserInteraction();
  