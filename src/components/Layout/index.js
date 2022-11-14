import { Outlet } from 'react-router-dom';
import Nav from '../Nav';

const Layout = () => {
    return (
        <div className='App'>
            <Nav />
            <div className='background'>

                <Outlet />

            </div>
        </div>
    )
}

export default Layout;