import '../styles/Reviews.css'

function Reviews() {
  const reviews = [
    { id: 1, author: 'Bilal Khan', role: 'Verified Buyer (Lahore)', rating: '⭐⭐⭐⭐⭐', text: 'Excellent orthopedic mattress! The quality matches high-end international brands, and the delivery to Lahore was super fast.' },
    { id: 2, author: 'Ayesha Ahmed', role: 'Regular Customer (Karachi)', rating: '⭐⭐⭐⭐⭐', text: 'Ordered custom cut acoustic foam for my studio in Karachi. Extremely precise cuts and great sound dampening.' },
    { id: 3, author: 'Muhammad Usman', role: 'VIP Member (Islamabad)', rating: '⭐⭐⭐⭐⭐', text: 'Best wholesale rates for sofa cushioning foam. Highly satisfied with the density and customer support!' },
  ]

  return (
    <section className="reviews">
      <div className="reviews-container">
        <h2>Client Reviews</h2>
        <p className="reviews-subtitle">What our customers say</p>
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="reviewer-avatar">👤</div>
                <div>
                  <h4>{review.author}</h4>
                  <p className="reviewer-role">{review.role}</p>
                </div>
              </div>
              <div className="review-rating">{review.rating}</div>
              <p className="review-text">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
