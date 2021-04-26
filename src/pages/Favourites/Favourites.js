import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";

function Favourites(props) {
    return (
        <main className="main">
            <ProductsContainer filter="isFavourite" />
        </main>
    )
}

export default Favourites;