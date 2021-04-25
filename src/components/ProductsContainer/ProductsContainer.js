import ProductCard from '../ProductCard/ProductCard';
import './ProductsContainer.scss';

function Products(props) {
    return (
        <section className="products-container" >
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </section>
    )
}

export default Products;