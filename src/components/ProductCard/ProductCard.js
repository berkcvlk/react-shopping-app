import Heart from "../Heart/Heart";
import Basket from "../Basket/Basket";

import "./ProductCard.scss";

function ProductCard(props) {
  return (
    <div className="product">
      <img
        src="https://picsum.photos/200/300"
        className="product__image"
        alt="Resim"
      />
      <div className="product__info">
        <span className="product__item product__item--text product__item--name">
          Test
        </span>
        <span className="product__item product__item--text product__item--price">
          1$
        </span>
        <span className="product__item product__item--icon product__item--like">
          <Heart />
        </span>
        <span className="product__item product__item--icon product__item--basket">
          <Basket />
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
