import ProductCard from '../ProductCard/ProductCard';
import './ProductsContainer.scss';
import { useContext } from "react";

import { ProductContext } from "../../context/ProductContext";

function ProductsContainer(props) {
    const productContext = useContext(ProductContext);

    function filterData(filter) {
        let products;
        if(filter === "isPopular" || filter === "isFavourite") {
            products = productContext.products.filter((product) => product[filter] === true)
        }else {
            products = productContext.products.filter((product) => product.category === filter.toLowerCase())
        } 
        
        
        return products;
    }

    let datas = filterData(props.filter);
    return (
        <section className="products-container" >
            {
                datas.map(element => {
                    return <ProductCard key={element.id} data={element}  />
                })
            }
        </section>
    )
}

export default ProductsContainer;