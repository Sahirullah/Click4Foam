import '../styles/Products.css'
import product from '../assets/product.jpeg'
import product1 from '../assets/product1.jpeg'
import product2 from '../assets/product2.jpeg'
import product3 from '../assets/product3.jpeg'
import product4 from '../assets/product4.jpeg'
import product5 from '../assets/product5.jpeg'
import product6 from '../assets/product6.jpeg'
import product7 from '../assets/product7.jpeg'
import product8 from '../assets/product8.jpeg'
import product9 from '../assets/product9.jpeg'
import product10 from '../assets/product10.jpeg'
import product11 from '../assets/product11.jpeg'

function Products() {
  const products = [
    { id: 1, name: 'Memory Foam Mattress', price: 'Rs. 24,999', category: 'Mattress', rating: '⭐⭐⭐⭐⭐', image: product },
    { id: 2, name: 'Acoustic Foam Panels', price: 'Rs. 450 / sqft', category: 'Acoustics', rating: '⭐⭐⭐⭐', image: product1 },
    { id: 3, name: 'Sofa Cushion Foam', price: 'Rs. 1,200', category: 'Cushioning', rating: '⭐⭐⭐⭐⭐', image: product2 },
    { id: 4, name: 'Orthopedic Mattress', price: 'Rs. 29,999', category: 'Mattress', rating: '⭐⭐⭐⭐', image: product3 },
    { id: 5, name: 'Packaging Foam Sheets', price: 'Rs. 350 / sheet', category: 'Packaging', rating: '⭐⭐⭐⭐⭐', image: product4 },
    { id: 6, name: 'High Density Foam Sheet', price: 'Rs. 2,500', category: 'Sheets', rating: '⭐⭐⭐⭐', image: product5 },
    { id: 7, name: 'Memory Foam Pillow', price: 'Rs. 3,499', category: 'Pillows', rating: '⭐⭐⭐⭐⭐', image: product6 },
    { id: 8, name: 'Soundproofing Foam Block', price: 'Rs. 850', category: 'Acoustics', rating: '⭐⭐⭐⭐', image: product7 },
    { id: 9, name: 'Latex Foam Mattress', price: 'Rs. 34,999', category: 'Mattress', rating: '⭐⭐⭐⭐⭐', image: product8 },
    { id: 10, name: 'Polyether Foam', price: 'Rs. 1,800', category: 'Sheets', rating: '⭐⭐⭐⭐', image: product9 },
    { id: 11, name: 'EVA Foam Sheets', price: 'Rs. 2,200', category: 'Packaging', rating: '⭐⭐⭐⭐⭐', image: product10 },
    { id: 12, name: 'Convoluted Foam', price: 'Rs. 1,500', category: 'Acoustics', rating: '⭐⭐⭐⭐', image: product11 },
  ]

  return (
    <section className="products" id="products">
      <div className="products-container">
        <h2>Our Products</h2>
        <p className="products-subtitle">Check out our latest collection</p>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}></div>
              <h3>{product.name}</h3>
              <p className="product-category">{product.category}</p>
              <div className="product-rating">{product.rating}</div>
              <p className="product-discount">Get 30% Discount</p>
              <button className="btn btn-small">Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
