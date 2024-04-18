import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <>
            <p>AUTH</p>
            <Outlet />
        </>
    );
};

export default AuthLayout;
