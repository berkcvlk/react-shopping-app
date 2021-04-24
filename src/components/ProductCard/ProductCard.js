import './ProductCard';

function ProductCard(props) {
    return(
        <div class="product">
            <img src="" class="product__image"/>
            <div class="product__info">
                <span class="product__item"></span>
                <span class="product__item"></span>
                <span class="product__item product__item--icon product__item--like"></span>
                <span class="product__item product__item--icon product__item--basket"></span>
            </div>
        </div>
    )
}

export default ProductCard;