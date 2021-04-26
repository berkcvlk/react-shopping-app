function Categories(props) {

    return (
        <div className="categories">
            <button className="categories__button" onClick={() => { props.categoryHandler("Technology") }}>Technology</button>
            <button className="categories__button" onClick={() => { props.categoryHandler("Clothes") }}>Clothes</button>
            <button className="categories__button" onClick={() => { props.categoryHandler("Furniture") }}>Furniture</button>
        </div>
    )
}

export default Categories;