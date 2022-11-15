import { Outlet } from 'react-router-dom';
import Nav from '../Nav';
import Footer from '../../assets/mountain-footer.png';

const Layout = () => {
    return (
        <div className='App'>
            <Nav />
            <div className='background'>

                <Outlet />

            </div>
            <img src={Footer} alt='tree and mountain' className='footer-pic' />
        </div>
    )
}

export default Layout;