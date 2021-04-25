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
        title: 'Home'
    },
    {
        path: '/cart',
        exact: false,
        component: <Cart />,
        title: 'Cart'
    },
    {
        path: '/favourites',
        exact: false,
        component: <Favourites />,
        title: 'Favourites'
    },
    {
        path: '/products',
        exact: true,
        component: <Products />,
        title: 'Products'
    },
    {
        path: '/products-detail/:id',
        exact: true,
        component: <ProductDetail />,
        title: ''
    }
]