
import Navbar from '../components/Shared/Navbar'
import { Outlet } from 'react-router';
import Footer from '../components/Shared/Footer';

const Layout = () => {
    return (
        <div>

            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;