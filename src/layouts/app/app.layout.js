import { Outlet } from 'react-router-dom';

const AppLayout = () => {
    return (
        <>
            <p>APP</p>
            <Outlet />
        </>
    );
};

export default AppLayout;
