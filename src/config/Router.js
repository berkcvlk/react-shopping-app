import Home from '../pages/Home/Home';
import Cart from '../pages/Cart/Cart';
import Favourites from '../pages/Favourites/Favourites';
import Products from '../pages/Products/Products';
import ProductDetail from '../pages/ProductDetail/ProductDetail';


export const routes = [
    {
        path: '/',
        exact: true,
        component: <Home />,
        isHeader: true,
        title: 'Home',
        class: "navbar__item"
    },
    {
        path: '/products',
        exact: true,
        component: <Products />,
        isHeader: true,
        title: 'Products',
        class: "navbar__item"
    },
    {
        path: '/favourites',
        exact: false,
        component: <Favourites />,
        isHeader: true,
        title: 'Favourites',
        class: "navbar__item"
    },
    {
        path: '/cart',
        exact: false,
        component: <Cart />,
        isHeader: true,
        title: 'Cart',
        class: "navbar__item navbar__item--cart"
    },
    {
        path: '/products-detail/:id',
        exact: true,
        component: <ProductDetail />,
        isHeader: false,
        title: 'Products',
        class: "navbar__item"
    }
]