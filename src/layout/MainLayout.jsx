import {Outlet} from 'react-router-dom';
const MainLayout = () => {
    return (
        <div>
            <h1 className='font-inter text-primaryCol'>Hello From Root</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;