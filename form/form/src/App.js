import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [product, setProduct] = useState({
    id: '',
    title: '',
    price: '',
    rating: '',
    description: ''
  });

  const [products, setProducts] = useState([]);

  // Simulate fetching products
  useEffect(() => {
    // Here you would fetch products from your backend
    // For demonstration, we're using static data
    const fetchedProducts = [
      { id: '1', title: 'Product 1', price: '100', rating: '5', description: 'A great product' },
      // Add more static products if needed
    ];
    setProducts(fetchedProducts);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adding the new product to the products list
    setProducts(prevProducts => [...prevProducts, { ...product }]);
    // Reset form
    setProduct({
      id: '',
      title: '',
      price: '',
      rating: '',
      description: ''
    });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <div>
        <label>
          ID:
          <input
            name="id"
            value={product.id}
            type="text" // Changed to text to simplify for demonstration
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Title:
          <input
            name="title"
            value={product.title}
            type="text"
            onChange={handleChange}
          />
        </label>
        </div>
        <div>
        <label>
          Price:
          <input
            name="price"
            value={product.price}
            type="text" // Assuming text for simplicity
            onChange={handleChange}
          />
        </label>
        </div>
        <div>
        <label>
          Rating:
          <input
            name="rating"
            value={product.rating}
            type="text" // Assuming text for simplicity
            onChange={handleChange}
          />
        </label>
        </div>
        <label>
          Description:
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      <div>
        {products.map((product) => (
          <div key={product.id}>
            <p>Title: {product.title}</p>
            <p>Description: {product.description}</p>
            <p>Rating: {product.rating}</p>
            <p>Price: {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
