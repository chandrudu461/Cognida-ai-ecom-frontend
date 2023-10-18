import {Link, useHistory} from 'react-router-dom'
import historyProducts from '../HistoryPage/data/historyProducts'

import './index.css'

const ProductCard = props => {
  const {productData} = props
  const {title, brand, imageUrl, rating, price, id} = productData

  const history = useHistory()

  const handleProductClick = () => {
    // Create an object to represent the product
    const productToAdd = {
      id,
      title,
      brand,
      imageUrl,
      rating,
      price,
    }

    historyProducts.push(productToAdd)
  }

  return (
    <li className="product-item" onClick={handleProductClick}>
      <Link to={`/products/${id}`} className="link-item">
        <img src={imageUrl} alt="product" className="thumbnail" />
        <h1 className="title">{title}</h1>
        <p className="brand">by {brand}</p>
        <div className="product-details">
          <p className="price">Rs {price}/-</p>
          <div className="rating-container">
            <p className="rating">{rating}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="star"
            />
          </div>
        </div>
      </Link>
    </li>
  )
}
export default ProductCard
