import '../styles/Products.css'

function Products() {
  const products = [
    { id: 1, name: 'Memory Foam Mattress', price: 'Rs. 24,999', category: 'Mattress', rating: '⭐⭐⭐⭐⭐' },
    { id: 2, name: 'Acoustic Foam Panels', price: 'Rs. 450 / sqft', category: 'Acoustics', rating: '⭐⭐⭐⭐' },
    { id: 3, name: 'Sofa Cushion Foam', price: 'Rs. 1,200', category: 'Cushioning', rating: '⭐⭐⭐⭐⭐' },
    { id: 4, name: 'Orthopedic Mattress', price: 'Rs. 29,999', category: 'Mattress', rating: '⭐⭐⭐⭐' },
    { id: 5, name: 'Packaging Foam Sheets', price: 'Rs. 350 / sheet', category: 'Packaging', rating: '⭐⭐⭐⭐⭐' },
    { id: 6, name: 'High Density Foam Sheet', price: 'Rs. 2,500', category: 'Sheets', rating: '⭐⭐⭐⭐' },
    { id: 7, name: 'Memory Foam Pillow', price: 'Rs. 3,499', category: 'Pillows', rating: '⭐⭐⭐⭐⭐' },
    { id: 8, name: 'Soundproofing Foam Block', price: 'Rs. 850', category: 'Acoustics', rating: '⭐⭐⭐⭐' },
  ]

  return (
    <section className="products" id="products">
      <div className="products-container">
        <h2>Our Products</h2>
        <p className="products-subtitle">Check out our latest collection</p>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image" style={{ backgroundColor: `hsl(${product.id * 40}, 70%, 60%)` }}></div>
              <h3>{product.name}</h3>
              <p className="product-category">{product.category}</p>
              <div className="product-rating">{product.rating}</div>
              <p className="product-price">{product.price}</p>
              <button className="btn btn-small">Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
