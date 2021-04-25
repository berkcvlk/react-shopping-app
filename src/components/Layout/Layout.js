import Navbar from '../Navbar/Navbar';

const Layout = (props) => {
    return (
        <>
            <Navbar />
            <div className='container'>
                {props.children}
            </div>

        </>
    );
};

export default Layout;