
import Navbar from '../components/Shared/Navbar'
import { Outlet } from 'react-router';
import Footer from '../components/Shared/Footer';

const Layout = () => {
    return (
        <>

            <Navbar></Navbar>
            <div className='bg-gray-100'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Layout;