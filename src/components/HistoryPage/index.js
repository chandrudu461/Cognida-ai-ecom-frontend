import historyProducts from './data/historyProducts'
import ProductCard from '../ProductCard'
import './index.css';
import Header from '../Header';

const HistoryPage = () => 
   (
    <div className="history-page">
      <Header/>
      <h2>Previously Checked Products</h2>
      <ul className='history-page-ul'>
        {historyProducts.map((product) => (
          <ProductCard productData={product} key={product.id} />
        ))}
      </ul>
    </div>
  );

export default HistoryPage
