import {
    RouterProvider as RouterProviderRRD,
    createBrowserRouter,
    Navigate,
} from 'react-router-dom';

import { AppLayout, AuthLayout } from '../layouts';

import { LoginPage, RegisterPage } from '../pages/auth';

const router = createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                element: <LoginPage />,
                path: '/login',
            },
            {
                element: <RegisterPage />,
                path: '/register',
            },
        ],
    },
    {
        element: <AppLayout />,
        children: [],
    },
    { path: '*', element: <Navigate to="/login" replace /> },
]);

const RouterProvider = () => {
    return (
        <RouterProviderRRD
            router={router}
            fallbackElement={<p>Initial Load...</p>}
        />
    );
};

export default RouterProvider;
